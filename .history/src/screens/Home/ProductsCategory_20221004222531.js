import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-screens'
import AppBar from '../../components/general/AppBar'
import Product from '../../components/products/Product'
import { theme } from '../../core/theme'

const ProductsCategory = ({ route }) => {

  const { category } = route.params;

  const [products, setproducts] = useState([])

  useEffect(() => {
console.log(category , 'hhhhh');
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => { return res.json() })
      .then(data => {
        setproducts(data.products)
      })
      .then(console.log);
  }, [])


  return (
    <View style={{flex: 1 , paddingBottom : 1000}}  >
      <AppBar />

      <View style={styles.container} >
        <Text style={styles.title} >{category}</Text>
        <FlatList
          numColumns={2}
          data={products}
          ItemSeparatorComponent={
            () => <View style={{  backgroundColor: 'pink' }}/>
        }
          renderItem={({item}) => {
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
    padding: 15
  },
  title: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default ProductsCategory