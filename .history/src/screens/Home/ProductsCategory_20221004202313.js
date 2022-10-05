import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-screens'
import AppBar from '../../components/general/AppBar'
import { theme } from '../../core/theme'

const ProductsCategory = ({ route }) => {

  const { category } = route.params;

  const [products, setproducts] = useState([])

  useEffect(() => {

    fetch('https://dummyjson.com/products/category/smartphones')
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
      <Text style={{ color: 'red' }} >{category}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    
  }
  title : {
    color : theme.colors.primary,
    fontSize : 40
  }
})

export default ProductsCategory