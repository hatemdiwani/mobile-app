import React from 'react'
import { Image, Pressable, StyleSheet, Text, Touchable, View } from 'react-native'
import { theme } from '../../core/theme'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/features/cartSlice'
const ProductCartItem = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.productTitle} > {product.title} </Text>
                <Text style={styles.productPrice} > {product.title} $</Text>
            </View>
            <Touchable onPress={() => dispatch(removeFromCart({ product: product }))} >

                <FontAwesomeIcon icon={faTrash} size={20} style={styles.icon} />
            </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    productTitle: {
        color: 'black',
        fontSize: 12
    },
    productPrice: {
        color: theme.colors.primary,
        fontSize: 10
    },
    icon: {
        color: 'red'
    }
})

export default ProductCartItem