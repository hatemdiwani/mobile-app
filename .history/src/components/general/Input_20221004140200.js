import React from 'react'

const Input = () => {
  return (
    <div>Input</div>
  )
}

export default InputSkip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@hatemdiwani 
venits
/
react-native-login-template
Public
Code
Issues
2
Pull requests
Actions
Projects
Security
Insights
react-native-login-template/src/components/TextInput.js /
@venits
venits Update
Latest commit f47a89b on 17 Mar 2021
 History
 1 contributor
42 lines (40 sloc)  1018 Bytes

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
react-native-login-template/TextInput.js at master · venits/react-native-login-template