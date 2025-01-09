import React from 'react';
import {Text, View} from 'react-native';
import DraweNavigator from './DraweNavigator';

const RootNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <DraweNavigator />
    </View>
  );
};

export default RootNavigation;
