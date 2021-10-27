import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList  } from 'react-native'
import Header from "./components/Header"
import Person from "./components/Person"

export default function App() {
  const [persons, setPersons] = useState([
    {key: '1', fullname: "Edris Ahani"},
    {key: '2', fullname: "Arash Karimian"},
    {key: '3', fullname: "Hasan Alitalan"},
    {key: '4', fullname: "Faraz Jalili"}
  ]);

  const deletePressHandler = (key) => {
      setPersons((prevPersons) => prevPersons.filter(persons => persons.key != key))
  }

  return (
      <View style={styles.container}>
        {/*Header*/}
        <Header/>
        <View style={styles.body}>
          {/*Add person*/}
          <View style={styles.item}>
            <FlatList data={persons} renderItem={({item})=>(<Person person={item} deletePressHandler={deletePressHandler}/>)}/>
          </View>
        </View>
        {/*Footer*/}
      </View>
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
