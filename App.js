import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // div component to wrap other elements can style diff components
    <View style={styles.container}> 
      {/* can nest views within views */}
      <View style={styles.header}>
        <Text style={styles.boldText}> Hello World!</Text>
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
  }
});
