import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../core/theme'

const ProductCartItem = ({ product }) => {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.productTitle} > {product.title} </Text>
                <Text style={styles.productPrice} > {product.title} $</Text>
            </View>
            <Image
                style={styles.card_image}
                source={{ uri: product.thumbnail }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderColor : 'lightgrey',
        borderWidth : 1,
        borderRadius : 10,
        padding : 10,
        display : 'flex' , 
        justifyContent : 'space-between',
        marginTop : 
    },
    productTitle : {
        color : 'black',
        fontSize : 12 
    },
    productPrice : {
        color : theme.colors.primary,
        fontSize : 10
    }
})

export default ProductCartItem