import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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

const styles = StyleSheet

export default ProductCartItem