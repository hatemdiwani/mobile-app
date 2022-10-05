import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryItem = ({ item }) => {
    return (
        <View style={styles.item} >
            <Text> {item} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 0.5
    },
    itemText : {
        
    }
})

export default CategoryItem