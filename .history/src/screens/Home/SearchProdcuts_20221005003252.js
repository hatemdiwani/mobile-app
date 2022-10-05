import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'

const SearchProdcuts = () => {

    const {searchBar} = useSelector(state => state.app)

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);
    }, [])
    

    return (
        <View>
            <AppBar />
            <Text>Result for  {searchBar.keyword} :  </Text>
        </View>
    )
}

export default SearchProdcuts