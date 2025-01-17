import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import Modal from 'react-native-modal';
import {OtpInput} from 'react-native-otp-entry'; // Assuming you have installed this library
import {showToast} from '../constants/Constant';
import {colors} from '../constants/colors';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (otp === '1234') {
        showToast('success', 'OTP Verified Successfully', 'top');
        navigation.navigate('Dashboard');
        setOtp(''); // Clear OTP after success
      } else {
        showToast('error', 'Invalid OTP! Please try again.', 'top');
      }
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the 4-digit code sent to you</Text>

        <View style={styles.otpContainer}>
          <OtpInput
            numberOfDigits={4}
            onTextChange={setOtp}
            style={styles.otpInput}
            otpContainerStyle={styles.otpBoxes}
            otpBoxStyle={styles.singleOtpBox}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.btn,
            !otp || otp.length < 4 ? styles.btnDisabled : null,
          ]}
          onPress={handleSubmit}
          disabled={!otp || otp.length < 4 || isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.btnText}>Submit</Text>
          )}
        </TouchableOpacity>

        <Modal
          isVisible={isLoading}
          style={{justifyContent: 'center', alignItems: 'center', margin: 0}}
          backdropOpacity={0.5}
          animationIn="fadeIn"
          animationOut="fadeOut"></Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  otpContainer: {
    marginBottom: 30,
  },
  otpBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  singleOtpBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f7f7f7',
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: colors.PrimaryColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDisabled: {
    backgroundColor: 'gray',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Otp;
