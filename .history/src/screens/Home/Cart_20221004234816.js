import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import ProductCartItem from '../../components/products/ProductCartItem'

const Cart = () => {

    const { products, total } = useSelector(state => state.cart)

    return (
        <View style={styles.container} >
            <Text style={styles.productsCount} > ({products.length}) produt </Text>
            <ScrollView  >
                {
                    products.map(product => {
                        return (
                            <ProductCartItem product={product} key={product.id} />
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