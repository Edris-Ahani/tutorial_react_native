import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Keyboard, Alert, TouchableWithoutFeedback  } from 'react-native'
import Playground from "./Playground"


export default function App() {

  return (
      <Playground/>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  body:{
    padding: 40
  },
  item:{
    marginTop: 20
  }
})
