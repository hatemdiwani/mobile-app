import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

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
                {
                    categories.map((category, i) => {
return(
    <Categor
)
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Categories