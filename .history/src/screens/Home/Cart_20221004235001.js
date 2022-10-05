import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'
import ProductCartItem from '../../components/products/ProductCartItem'

const Cart = () => {

    const { products, total } = useSelector(state => state.cart)

    return (
        <View
        <View style={styles.container} >
            <AppBar />
            <Text style={styles.productsCount} > ({products.length}) produt </Text>
            <ScrollView  >
                {
                    products.map(product => {
                        return (
                            <ProductCartItem product={product} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productsCount: {
        color: 'black'
    }
})

export default Cart