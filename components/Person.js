import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Person({person, deletePressHandler}) {
    return (
        <TouchableOpacity onPress={() => deletePressHandler(person.key)}>
            <Text style={styles.person}>{person.fullname}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    person:{
        margin:10,
        padding: 10,
        borderColor: "#0000ff",
        borderWidth: 2,
        borderStyle: 'dotted', //enum('solid', 'dotted', 'dashed')
        textAlign: 'center',
        borderRadius: 8,
        fontSize: 20,
        fontWeight: '800' //enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')

    }
})
