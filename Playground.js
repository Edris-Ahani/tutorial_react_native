import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function Playground() {
    return (
        <View style={styles.container}>

            <View style={styles.part1}>
                <ScrollView horizontal={true}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque dignissimos dolores doloribus ducimus facilis incidunt molestias quae quibusdam suscipit. Corporis laboriosam odit placeat quo sit, tenetur? Aut optio, suscipit.</Text>
                    <Text>Part 1</Text>
                    <Text>Part 1</Text>
                    <Text>Part 1</Text>
                    <Text>Part 1</Text>
                    <Text>Part 1</Text>
                </ScrollView>
            </View>
            <View style={styles.part2}>
                <ScrollView>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque dignissimos dolores doloribus ducimus facilis incidunt molestias quae quibusdam suscipit. Corporis laboriosam odit placeat quo sit, tenetur? Aut optio, suscipit.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque dignissimos dolores doloribus ducimus facilis incidunt molestias quae quibusdam suscipit. Corporis laboriosam odit placeat quo sit, tenetur? Aut optio, suscipit.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque dignissimos dolores doloribus ducimus facilis incidunt molestias quae quibusdam suscipit. Corporis laboriosam odit placeat quo sit, tenetur? Aut optio, suscipit.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque dignissimos dolores doloribus ducimus facilis incidunt molestias quae quibusdam suscipit. Corporis laboriosam odit placeat quo sit, tenetur? Aut optio, suscipit.</Text>
                </ScrollView>

            </View>
            <View style={styles.part3}>

                <ScrollView>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                    <Text>Part 3</Text>
                </ScrollView>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    part1:{
        width: '120%',
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    part2:{
        width: '100%',
        flex: 2,
        backgroundColor: "green",
        justifyContent: 'center',

    },
    part3:{
        width: '100%',
        flex: 3,
        backgroundColor: "blue",
        justifyContent: 'center',

    },
    container:{
        flex: 1,
        margin: 10,
        flexDirection: 'column', //enum('row', 'row-reverse', 'column', 'column-reverse')
        justifyContent: 'center', //enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
        alignItems: 'flex-start', //enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline')
    },
    text:{
        color: 'white',
        textAlign: 'justify', //enum('auto', 'left', 'right', 'center', 'justify')
    }
})
