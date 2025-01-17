import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants/colors';

const CommonBtn = ({w, h, txt, onClick, status}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{alignSelf: 'center', marginTop: 10, marginBottom: 10}}>
      {status ? (
        <LinearGradient
          colors={['#4A90E2', '#4A90E2']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#8e8e8e', '#8e8e8e']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            opacity: 0.5,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
