import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home'; // Đường dẫn tới HomeScreen
import ToDoList from './screens/todolist'; // Đường dẫn tới ToDoList
import ToDo from './screens/todo'; // Đường dẫn tới ToDo


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="ToDo" component={ToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
