import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({ item }) => {
    const navigation = useNavigation();
    const navigateToPage = () => {

        navigation.navigate('productsByCategory', {
            category: item,
        });
    }

    return (
        <TouchableOpacity
            style={styles.item} onPress={() => navigateToPage()} >
            <View  >
                <Text style={styles.itemText} > {item} </Text>
            </View>

        </TouchableOpacity>
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