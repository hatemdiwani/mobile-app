import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Button from '../../components/general/Button'
import Input from '../../components/general/Input'
import { setToken } from '../../redux/features/authSlice'
const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const dispatch = useDispatch()
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
                
                return res.json()
                
            })
            .then(data => {
                // Work with JSON data here
                console.log(data);
                dispatch(setToken)
              })
            .then(console.log);
    }

    return (
        <View style={styles.loginScreen} >
            <Text style={styles.title} >Login</Text>
            <Input value={username} handleChange={text => setusername(text)} />
            <Input value={password} handleChange={text => setpassword(text)} />
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