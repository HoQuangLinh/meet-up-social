import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/Entypo';
import FontAwesome1 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/home';
import Explore from '../screens/explore/explore';
const Tab = createBottomTabNavigator();


const MyTab = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitle: 'Meet Up' ,
              tabBarIcon: ({color}) => <FontAwesome1 name='home' size={25} color={color} />,
            }}
          />
          <Tab.Screen 
            name='Explore' 
            component={Explore}
            options={{
              
              tabBarIcon: ({color}) => <FontAwesome name='magnifying-glass' size={25} color={color} />,
            }}
          />
          <Tab.Screen 
            name='Notification' 
            component={View}
            options={{
              tabBarIcon: ({color}) => <FontAwesome1 name='bell' size={25} color={color} />,
            }}
          />
          <Tab.Screen 
            name='Messages' 
            component={View}
            options={{
              tabBarIcon: ({color}) => <FontAwesome name='message' size={25} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
};
export default MyTab