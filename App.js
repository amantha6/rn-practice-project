import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('Aditi');
  const [age, setAge] = useState('23');
  const [person, setPerson] = useState({name:'Aarushi', age:23});
  
  const clickHandler = () => {
    setName('Adhira');
    setPerson({name: 'Tripti', age:26});
  }
  
  const [people, setPeople] = useState([
    {name: 'Aditi', id:'1'},
    {name: 'Rimjhim', id:'2'},
    {name: 'Tripti', id:'3'},
    {name: 'Adhira', id:'4'},
    {name: 'Aditya', id:'5'},
    {name: 'Meredith', id:'6'},
    {name: 'Derek', id:'7'},
  ]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Enter Name:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='e.g. JohnDoe'
          onChangeText={(val) => setName(val)}
        />
        
        <Text>Enter age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 99'
          onChangeText={(val) => setAge(val)}
        />
        
        <Text style={styles.boldText}>My name is {name} and my age is {age}</Text>
        <Text>Her name is {person.name} and her age is {person.age}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title='update State' onPress={clickHandler} />
      </View>
      
      <View style={styles.body}>
        <Text>Hi this is a sample body text</Text>
        <Text>Hi this is a sample body text</Text>
        <Text style={styles.boldText}>Hi this is a sample body text</Text>
      </View>
      
      {/* FlatList is more efficient than ScrollView for long lists */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});