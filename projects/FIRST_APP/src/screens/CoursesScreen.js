import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function Courses() {
    const message = 'Hello World';
    const courses = [
      {name: 'React Native', id:1},
      {name: 'React Js', id:2},
      {name: 'Node Js', id:3},
      {name: 'Express Js', id:4},
    ];
  return (
<FlatList 
    data={courses} 
    // horizontal
    // showsHorizontalScrollIndicator = {false}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
      return <Text style ={styles.content}>{item.name}</Text>;}}/>
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: 'lightblue',
    marginVertical: 10,
    padding: 20,
  }
})