import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'
import ProductCartItem from '../../components/products/ProductCartItem'

const Cart = () => {

    const { products, total } = useSelector(state => state.cart)

    return (
        <View  >
            <AppBar />
            <View style={styles.container} >
                <Text style={styles.productsCount} > ({products.length}) products </Text>
                <ScrollView  >
                    {
                        products.map(product => {
                            return (
                                <ProductCartItem product={product} key={product.id} />
                            )
                        })
                    }
                </ScrollView>
                <View>
                    <Text>Total :{total} $ </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    productsCount: {
        color: 'black'
    }
})

export default Cart