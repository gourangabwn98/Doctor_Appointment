import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';

const Help = () => {
  return (
    <View style={styles.container}>
      <Header icon={require('../Images/back.png')} title={'Call Ambulance'} />

      <TextInput placeholder="Address" style={styles.address} />
      <CommonBtn w={200} h={50} txt={'Call Now'} status={true} />
    </View>
  );
};

export default Help;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    paddingLeft: 20,
  },
});
