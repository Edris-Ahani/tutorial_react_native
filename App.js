import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Keyboard, Alert, TouchableWithoutFeedback  } from 'react-native'
import Header from "./components/Header"
import Person from "./components/Person"
import AddPerson from "./components/AddPerson"

export default function App() {
  const [persons, setPersons] = useState([
    {key: '1', fullname: "Edris Ahani"},
    {key: '2', fullname: "Arash Karimian"},
    {key: '3', fullname: "Hasan Alitalan"},
    {key: '4', fullname: "Faraz Jalili"}
  ]);

  const [person, setPerson] = useState("");

  const deletePressHandler = (key) => {
      setPersons((prevPersons) => prevPersons.filter(persons => persons.key != key))
  }

  const submitHandler = () => {
    if(person.length <= 3){
      Alert.alert("هشدار", "اسم نباید کمتر از 3 کاراکتر باشد.", [
        {
          text: "متوجه شدم",
          onPress: () => {console.log("متوجه شدم")}
        },
        {
          text: "متوجه نشدم",
          onPress: () => {console.log("متوجه نشدم")}
        },
        {
          text: "تست",
          onPress: () => {console.log("تست")}
        }
      ])
    }
    else {
      setPersons((prevPersons) => [
        ...prevPersons,
        {
          key: (Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 1000)).toString(),
          fullname: person
        }
      ])
      setPerson("")
      Keyboard.dismiss()
    }
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/*Header*/}
          <Header/>
          <View style={styles.body}>
            {/*Add person*/}
            <AddPerson submitHandler={submitHandler} person={person} setPerson={setPerson} />
            <View style={styles.item}>
              <FlatList data={persons} renderItem={({item})=>(<Person person={item} deletePressHandler={deletePressHandler}/>)}/>
            </View>
          </View>
          {/*Footer*/}
        </View>
      </TouchableWithoutFeedback>
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
