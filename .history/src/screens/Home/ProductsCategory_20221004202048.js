import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SearchBar } from 'react-native-screens'
import AppBar from '../../components/general/AppBar'

const ProductsCategory = ({route}) => {

  const {category } = route.params;

  const [products, setproducts] = useState([])
  return (
    <View>
      <AppBar />
      <SearchBar />
      <Text style={{ color: 'red' }} >by categories page</Text>
    </View>
  )
}

export default ProductsCategory