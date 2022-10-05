import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryItem = ({ item }) => {
    return (
        <View style={styles.item} >
            <Text style={styles.itemText} > {item} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width : '50%',
        display : 'flex'
    },
    itemText: {
        color: 'black'
    }
})

export default CategoryItem