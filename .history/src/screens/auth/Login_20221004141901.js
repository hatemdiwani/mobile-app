import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../../components/general/Button'
import Input from '../../components/general/Input'
const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const login = () => {
        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: username /* 'kminchelle' */,
    password: password /* '0lelplR' */,
    // expiresInMins: 60, // optional
  })
})
.then(res => {
    const data = res.json()
} )
.then(console.log);
    }

    return (
        <View style={styles.loginScreen} >
            <Text style={styles.title} >Login</Text>
            <Input value={username} handleChange={text => setusername(text)} />
            <Input value={password} handleChange={text => password(text)} />
            <Button mode="contained" onPress={login}>
                Login
            </Button>
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