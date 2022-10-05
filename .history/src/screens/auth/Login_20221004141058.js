import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from '../../components/general/Input'
const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    return (
        <View style={styles.loginScreen} >
            <Text style={styles.title} >Login</Text>
            <Input />
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 20
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 30
    }
})

export default Login