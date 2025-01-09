import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';
const Drawer = createDrawerNavigator();
const DraweNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DraweNavigator;
