import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return  <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Courses" component={CoursesScreen} />
      </Stack.Navigator>
      </NavigationContainer>;
    // <View style={styles.container}>
    //   <Text style = {styles.title}>React Native</Text>
    //   <Text style ={styles.content}>React Js</Text>
    //   <Text style ={styles.content}>{message}</Text>
      // <StatusBar style="auto" />
    // </View>
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title:{
  //   fontSize: 50,
  //   fontWeight: 'bold',
  // },


});
