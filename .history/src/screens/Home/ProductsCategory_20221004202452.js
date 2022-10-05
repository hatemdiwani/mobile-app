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
      .then(res => { return res.json() })
      .then(data => {
        setproducts(data.products)
      })
      .then(console.log);
  }, [])


  return (
    <View  >
      <AppBar />
      <SearchBar />
      <View style={styles.container} >
        <Text style={styles.title} >{category}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default ProductsCategory