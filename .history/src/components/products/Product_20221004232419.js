import React from 'react'
import { Image, StyleSheet, Text, View ,Pressable } from 'react-native'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch } from 'react-redux'

const Product = ({ product }) => {

    const dispatch = useDispatch()

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
<Pressable>

                <FontAwesomeIcon icon={faCartPlus} size={24} style={styles.icon} />
</Pressable>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card_template: {
        flex: 1,
        width: 250,
        height: 250,
        padding: 10
    },
    card_image: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    card_title: {
        color: 'black',
        fontSize: 12
    },
    price: {
        color: 'pink'
    },
    icon: {
        color: 'gray',
        marginTop : 4
    },
    description : {
        display : 'flex',
        padding: 4,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})

export default Product