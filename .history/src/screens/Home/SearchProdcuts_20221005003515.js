import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SearchBar } from 'react-native-screens'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'
import Product from '../../components/products/Product'

const SearchProdcuts = () => {

    const { searchBar } = useSelector(state => state.app)

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone')
            .then(res => { return res.json()})
            .then(data => {
                setproducts(data.products)
            })
            .then(console.log);
    }, [])


    return (
        <View>
            <AppBar />
            <SearchBar />
            <Text>Result for  {searchBar.keyword} : {products.length} found </Text>
            <ScrollView>
                {
                    products.map(p => {
                        return(
                            <Product />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default SearchProdcuts