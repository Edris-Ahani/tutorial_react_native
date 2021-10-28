import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function AddPerson({submitHandler, person, setPerson}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="اسم جدید ..."
                placeholderTextColor="darkgray"
                onChangeText={setPerson}
                value={person}
            />
            <Button
                onPress={submitHandler}
                title="اضافه کردن شخص جدید"
                color="#0000ff"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#0000ff',
        fontSize: 15,
    }
})
