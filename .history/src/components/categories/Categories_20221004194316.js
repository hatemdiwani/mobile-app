import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

const Categories = () => {

    const [categories, setcategories] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
        .then(res =>{ return res.json()})
        .then(data => {
            setcategories(data)
        })
        .then(console.log);
    }, [third])
    

  return (
    <View>
<Scrol
    </View>
  )
}

export default Categories