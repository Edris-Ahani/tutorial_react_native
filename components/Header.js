import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>مدیریت کننده اشخاص</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 90,
        backgroundColor: 'aquamarine',
        margin: 20,
    },
    title:{
        textAlign: "center",
        color: "black",
        fontSize: 25,
        fontWeight: "bold"
    }
})
