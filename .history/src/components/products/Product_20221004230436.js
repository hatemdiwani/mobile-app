import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

const Product = ({ product }) => {
    return (
        <View style={styles.card_template}>
            <Image
                style={styles.card_image}
                source={{ uri: product.thumbnail }}
            />
            <View>

            </View>
            <Text style={styles.card_title}>Some Text</Text>
            <Text style={styles.price} > {product.price} $</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card_template: {
        flex: 1,
        width: 250,
        height: 250,
        padding : 10
    },
    card_image: {
        width: '100%',
        height: '80%',
        resizeMode : 'contain',
        borderRadius: 10
    },
    card_title: {
      color : 'black',
      fontSize : 12
    },
    price : {
        color : 'pink'
    }
})

export default Product