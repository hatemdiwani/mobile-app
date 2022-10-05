import React , {useState} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    return (
        <View style={styles.loginScreen} >
            <Text style={styles.title} >Login</Text>
  
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
        fontSize : 30
    }
})

export default Login