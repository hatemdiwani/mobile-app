import React from 'react'
import { Text, TextInput, View  , StyleSheet} from 'react-native'

const Login = () => {
  return (
    <View>
        <Text style={styles.title} >Login</Text>
        <TextInput  />
        <TextInput  />
    </View>
  )
}

const styles = StyleSheet.create({
    loginContainer : {
        display : 'flex',
        
    }
    title : {
        color : 'black',

    }
})

export default Login