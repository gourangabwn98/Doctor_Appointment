import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';

// Import your logo images here
import LoginImage from '../Images/logo.png';
import GoogleLogo from '../Images/google.png';
import FacebookLogo from '../Images/fb.png';
import TwitterLogo from '../Images/Twitter.png';
import {colors} from '../constants/colors';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState(''); // Added Name State

  const handleGetOtp = () => {
    if (!name.trim() || !mobile.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Otp');
    }, 2000); // Simulate 2-second loading delay
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* App Title */}
          <Text style={styles.appTitle}>Doctor App</Text>

          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image source={LoginImage} style={styles.logo} />
          </View>

          {/* Name Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Name"
              onChangeText={text => setName(text)} // Updating Name
              value={name}
              style={styles.input}
            />
          </View>

          {/* Mobile Number Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Mobile Number"
              onChangeText={text => setMobile(text)}
              value={mobile}
              maxLength={10}
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          {/* Get OTP Button */}
          <TouchableOpacity style={styles.btn} onPress={handleGetOtp}>
            <Text style={styles.btnText}>Get OTP</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <Text style={styles.orText}>OR</Text>

          {/* Social Login Buttons */}
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={GoogleLogo} style={styles.socialLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={FacebookLogo} style={styles.socialLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={TwitterLogo} style={styles.socialLogo} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Activity Indicator Modal */}
      <Modal
        isVisible={isLoading}
        style={{justifyContent: 'center', alignItems: 'center', margin: 0}}
        backdropOpacity={0.5}
        animationIn="fadeIn"
        animationOut="fadeOut">
        <ActivityIndicator size="large" color="blue" />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
    backgroundColor: '#E6F0FA',
    marginBottom: 30,
    borderRadius: 60,
  },
  logo: {
    width: 80,
    height: 80,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8FF',
    fontSize: 16,
    color: 'black',
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: colors.PrimaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  socialBtn: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  socialLogo: {
    width: 30,
    height: 30,
  },
});

export default Login;
