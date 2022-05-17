import React from 'react';
import Home from '../screens/home';
import AllGroupCard from '../screens/allgroupcard';

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeStack() {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title:'Meet up',
            headerStyle:{
              backgroundColor:'#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
          }}
          component={Home}
        />
        <Stack.Screen
          options={{
            title:'Your groups',
          }}
          name="AllGroupCard"
          component={AllGroupCard}
        />

      </Stack.Navigator>
    );
}

export default HomeStack;