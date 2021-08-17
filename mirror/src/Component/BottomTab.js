// react
import React from 'react';

// navigation
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// component
import Home from '../Screen/Home/Home';
import Profile from '../Screen/Profile/Profile';

// library
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="App"
        activeColor="#F24B5B"
        inactiveColor="grey"
        shifting={false}
        barStyle={{backgroundColor: '#ffffff'}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign
                name="appstore-o"
                size={23}
                color={color}
                style={{transform: [{rotateY: '180deg'}]}}
              />
            ),
          }}
          name="App"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="person-outline" size={21} color={color} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
