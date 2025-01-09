import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Visited from '../screens/Visited';
import Help from '../screens/Help';
const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../Images/home.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  tinColor: tabInfo.focuesd ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Visited"
        component={Visited}
        options={{
          headerShown: true,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../Images/visited.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  tinColor: tabInfo.focuesd ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Help"
        component={Help}
        options={{
          headerShown: true,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../Images/ambulance.png')}
                style={{
                  width: 40,
                  height: 40,
                  tinColor: tabInfo.focuesd ? 'purple' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
