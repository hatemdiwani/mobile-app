import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Product = ({ product }) => {
    return (
        <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{uri: 'https://i.picsum.photos/id/881/700/700.jpg?hmac=-JqTJ4_Ped2jYmjiaDgYZOAGzvC0CybCKbROT3GJgZc'}}
      />
        <Text style={styles.card_title}>Some Text</Text>
     </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {

    }
})

export default Product