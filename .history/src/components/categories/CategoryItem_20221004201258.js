import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const CategoryItem = ({ item , navigation }) => {

    const navigateToPage  = () => {
       
        navigation.navigate('Details', {
            category: item,
          });
    }

    return (
        <TouchableHighlight
        style={styles.item} onPress={() => navigateToPage()} >
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