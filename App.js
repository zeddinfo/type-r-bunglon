import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './src/AppNavigator'



const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <AppNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
