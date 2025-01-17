import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../constants/colors';

const Header = ({title, icon, onLoginPress, onRegisterPress}) => {
  const navigation = useNavigation();

  const [isSliderVisible, setSliderVisible] = useState(false);

  const toggleSlider = () => {
    setSliderVisible(!isSliderVisible);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setSliderVisible(false);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn} underlayColor="#ffffff00">
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 10}]}>{title}</Text>

      {/* Right Section */}
      <TouchableOpacity
        style={styles.notification}
        onPress={() => navigation.navigate('Notofication')}>
        {' '}
        {/* Use navigation here */}
        <Image
          source={require('../Images/notification.png')}
          style={styles.noti}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightSection} onPress={toggleSlider}>
        <Image
          source={require('../Images/userProfile.png')}
          style={styles.profile}
        />
      </TouchableOpacity>

      {/* Slider Menu */}
      {isSliderVisible && (
        <Modal
          transparent={true}
          visible={isSliderVisible}
          animationIn="fadeIn"
          animationOut="fadeOut">
          <View style={styles.sliderContainer}>
            <View style={styles.slider}>
              <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
                <Image
                  source={require('../Images/logout.png')}
                  style={styles.logout}
                />
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
              {/* You can add more options like Profile, Settings, etc. */}
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F8F8FF',
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  back: {
    width: 24,
    height: 24,
  },
  logout: {
    width: 28,
    height: 24,
  },
  profile: {
    width: 29,
    height: 29,
    backgroundColor: colors.PrimaryColor,
    borderRadius: 20,
  },
  noti: {
    width: 29,
    height: 29,
    borderRadius: 20,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    color: colors.PrimaryColor,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    color: colors.PrimaryColor,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  slider: {
    width: 150,
    height: '7%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default Header;
