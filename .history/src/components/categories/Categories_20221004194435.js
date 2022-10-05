import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
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
                <View>

                </View>
                {
                    categories.map((category, i) => {
                        return (
                            <CategoryItem />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles= StyleSheet

export default Categories