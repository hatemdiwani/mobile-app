import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from '../../components/'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'
import Product from '../../components/products/Product'

const SearchProdcuts = () => {

    const { searchBar } = useSelector(state => state.app)

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${searchBar.keyword}`)
            .then(res => { return res.json() })
            .then(data => {
                setproducts(data.products)
            })
            .then(console.log);
    }, [])


    return (
        <View style={styles.container} >
            <AppBar />
            <SearchBar />
            <View style={styles.box} >

                <Text>Result for  {searchBar.keyword} : {products.length} found </Text>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <Product product={item} />
                        )
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        padding: 10
    }
})

export default SearchProdcuts