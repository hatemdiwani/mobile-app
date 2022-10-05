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
        width : '45%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : 100,
        borderColor : 'lightgrey',
         borderWidth : 1,
         borderRadius : 4,
         margin : 10
    },
    itemText: {
        color: 'black'
    }
})

export default CategoryItem