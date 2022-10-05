import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const Login = () => {
    return (
        <View style={styles.loginScreen} >
            <Text style={styles.title} >Login</Text>
            <TextInput />
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        color: 'black',
        textAlign: 'center',
        fontSize : 
    }
})

export default Login