import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../core/theme'

const ProductCartItem = ({ product }) => {
    return (
        <View>
            <View>
                <Text> {product.title} </Text>
                <Text> {product.title} </Text>
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
        display : 'flex'
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