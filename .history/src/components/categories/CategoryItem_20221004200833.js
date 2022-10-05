import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CategoryItem = ({ item }) => {
    return (
        <TouchableOpacity
        style={styles.item} onPress={() => console.log(item)} >
            <View  >
                <Text style={styles.itemText} > {item} </Text>
            </View>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '46%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 4,
        margin: '1%'
    },
    itemText: {
        color: 'black'
    }
})

export default CategoryItem