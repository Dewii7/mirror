import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/Login/Login';
import BottomTab from '../Component/BottomTab';
import {navigationRef} from '../Function/Navigate';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'LoginScreen'}>
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
