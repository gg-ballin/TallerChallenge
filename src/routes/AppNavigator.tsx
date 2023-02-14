import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import {NavigationContainer} from '@react-navigation/native';
import Start from '../screens/Start';
import Screen2 from '../screens/Home/Screen2';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Screen_2" component={Screen2} />
    </Tab.Navigator>
  );
}
function ContactStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Contacts" component={Contact} />
    </Stack.Navigator>
  );
}

export default function AppNavigator(props) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Home" component={HomeStack} />
          <Stack.Screen name="Contacts" component={ContactStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
