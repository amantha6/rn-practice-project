import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[name, setName]=useState('Aditi'); //name variable here will be given the value of Aditi
  const[age,setAge]=useState('23');
  const[person,setPerson]=useState({name:'Aarushi', age:23});
  //in future if we want to update the value then we can use this function to do that
  //create a function here externally
  const clickHandler=()=>{
    setName('Adhira');
    setPerson({name: 'Tripti', age:26});
  }
  return (
    // div component to wrap other elements can style diff components
    <View style={styles.container}> 
      {/* can nest views within views */}
      <View style={styles.header}>
        <Text> Enter Name: </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='e.g. JohnDoe'
          onChangeText={(val)=>setName(val)}/>
        <Text> Enter age: </Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 99'
          onChangeText={(val)=>setAge(val)}/>
        <Text style={styles.boldText}> My name is {name} and my age is {age}</Text>
        <Text> Her name is {person.name} and her age is {person.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update State' onPress={clickHandler}/>
      </View>
      <View style={styles.body}>
        <Text> Hi this is a sample body text</Text>
        <Text> Hi this is a sample body text</Text>
        <Text style={styles.boldText}> Hi this is a sample body text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    fontWeight:'bold',
  },
  buttonContainer:{
    marginTop:20,
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200
  }
});
