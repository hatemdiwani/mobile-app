import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const Login = () => {
    return (
        <View style={} >
            <Text style={styles.title} >Login</Text>
            <TextInput />
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor : 'red'
    },
    title: {
        color: 'black',
        textAlign: 'center'
    }
})

export default Login