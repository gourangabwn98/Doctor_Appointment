import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import Splash from './screens/Splash';
// import Home from './screens/Home';
import RootNavigation from './navigation/RootNavigation';
// import Dashboard from './screens/Dashboard';
import BookAppointment from './screens/BookAppointment';
import Success from './screens/Success';
import Dashboard from './screens/Dashboard';
import Help from './screens/Help';
import DoctorList from './screens/DoctorList';
import DrProfile from './screens/DrProfile';
const Stack = createStackNavigator();
const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RootNavigation"
          component={RootNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorList"
          component={DoctorList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrProfile"
          component={DrProfile}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;
