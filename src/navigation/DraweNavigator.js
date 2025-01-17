import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AllAppointments from '../screens/AllAppointments';
import Notification from '../screens/Notofication';
import Help from '../screens/Help';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  return (
    <View style={styles.drawerContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../Images/userProfile.png')} // Replace with your profile image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../Images/home.jpg')} // Replace with your home icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../Images/userProfile.png')} // Replace with your profile icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Notofication')}>
          <Image
            source={require('../Images/notification.png')} // Replace with your notification icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('AllAppointments')}>
          <Image
            source={require('../Images/calander.png')} // Replace with your calendar icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Help')}>
          <Image
            source={require('../Images/support.png')} // Replace with your help icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require('../Images/setting.png')} // Replace with your settings icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require('../Images/logout.png')} // Replace with your logout icon
            style={styles.drawerIcon}
          />
          <Text style={styles.drawerItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DraweNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 280,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Notofication" component={Notification} />
      <Drawer.Screen name="AllAppointments" component={AllAppointments} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  drawerItems: {
    flex: 1,
    marginTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default DraweNavigator;
