import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../redux/features/cartSlice'
import { theme } from '../../core/theme'

const Product = ({ product }) => {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.cart)
    return (
        <View style={styles.card_template}>
            <Image
                style={styles.card_image}
                source={{ uri: product.thumbnail }}
            />
            <View style={styles.description} >
                <View>
                    <Text style={styles.card_title}>Some Text</Text>
                    <Text style={styles.price} > {product.price} $</Text>
                </View>
                <View>
                    <Pressable onPress={() => dispatch(addProductToCart({ product: product }))} >

                        <FontAwesomeIcon icon={faCartPlus} size={24} style={styles.icon} />
                    </Pressable>
                </View>

            </View>

        </View>
    )
}


export default Product