import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Product = ({ product }) => {
    return (
        <View style={styles.productContainer} >
            <Text style={{ color: 'black' }} > {product.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {

    }
})

export default Product