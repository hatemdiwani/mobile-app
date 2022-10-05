import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const Cart = () => {

    const {products} = useSelector()

    return (
        <View style={styles.container} >
            <Text> ({}) </Text>
            <ScrollView  >

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Cart