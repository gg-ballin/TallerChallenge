import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import {NavigationContainer} from '@react-navigation/native';
import Start from '../screens/Start';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
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
