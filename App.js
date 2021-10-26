import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'

export default function App() {

  const [masters, setMasters] = useState([
    {id: 1, fullname: "ادریس آهنی"},
    {id: 2, fullname: "آرش کریمیان"},
    {id: 3, fullname: "حمید عسگری"},
    {id: 4, fullname: "سینا پیله چی ها"},
    {id: 5, fullname: "فراز جلیلی"},
    {id: 6, fullname: "حسن علی طلب"},
    {id: 7, fullname: "شهاب حسینی"},
    {id: 8, fullname: "الهه حسینی"},
    {id: 9, fullname: "سحر افشار"},
    {id: 10, fullname: "سیمین دانشور"},
    {id: 11, fullname: "Edris Ahani"}
  ]);

  const deleteMaster = (id) => {
    /*console.log(id);
    const filtered = masters.filter(master => master.id != id);
    setMasters(filtered);*/

    /*setMasters((prevState) =>{
      return prevState.filter(m => m.id != id);
    });*/

    setMasters((prevState) => prevState.filter(m => m.id != id));
  }

  return (
      <View style={styles.container}>

        {/*<FlatList
            keyExtractor={item => item.id.toString()}
            data={masters}
            renderItem={({item: master})=>(
            <TouchableOpacity onPress={() => { deleteMaster(master.id) }}>
              <Text style={styles.text}>{master.id}: {master.fullname}</Text>
            </TouchableOpacity>
        )}/>*/}

        <FlatList
            keyExtractor={item => item.id.toString()}
            data={masters}
            renderItem={({item: master})=>(
            <TouchableHighlight onPress={() => { deleteMaster(master.id) }}>
              <Text style={styles.text}>{master.id}: {master.fullname}</Text>
            </TouchableHighlight>
        )}/>

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
  },
  text:{
    margin: 10,
    padding: 20,
    backgroundColor: "#81d4fa",
    color: "#f44336",
    textAlign: 'center',
    fontSize: 20
  },
  scrollView:{
    backgroundColor: "#ffa3ba"
  }
})
