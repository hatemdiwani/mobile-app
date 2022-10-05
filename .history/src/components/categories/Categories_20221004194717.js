import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CategoryItem from './CategoryItem'

const Categories = () => {

    const [categories, setcategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => { return res.json() })
            .then(data => {
                setcategories(data)
            })
            .then(console.log);
    }, [third])


    return (
        <View>
            <ScrollView>
                <View style={styles.categoriesContainer} >
                    {
                        categories.map((category, i) => {
                            return (
                                <CategoryItem item={} />
                            )
                        })
                    }
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1
    }
})

export default Categories