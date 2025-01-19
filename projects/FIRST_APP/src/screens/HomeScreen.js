import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';


export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Courses')}>
        Go to Courses
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({})  