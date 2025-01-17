import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Help from '../screens/Help';
import Profile from '../screens/Profile';
import AllAppointments from '../screens/AllAppointments';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused}) => {
          let iconSource;

          switch (route.name) {
            case 'Dashboard':
              iconSource = require('../Images/home.jpg');
              break;
            case 'All Appointments':
              iconSource = require('../Images/calander.png');
              break;
            case 'Profile':
              iconSource = require('../Images/userProfile.png');
              break;
            case 'Help':
              iconSource = require('../Images/ambulance.png');
              break;
            default:
              iconSource = null;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
                // {tintColor: focused ? '#6A0DAD' : '#7F8C8D'},
              ]}
              resizeMode="contain"
            />
          );
        },
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: '#6A0DAD', // Purple for active label
        tabBarInactiveTintColor: '#7F8C8D', // Gray for inactive label
      })}>
      <Bottom.Screen name="Dashboard" component={Dashboard} />
      <Bottom.Screen name="All Appointments" component={AllAppointments} />
      <Bottom.Screen name="Profile" component={Profile} />
      <Bottom.Screen name="Help" component={Help} />
    </Bottom.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 10,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default BottomNavigator;
