import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/colors'; // Assuming you have a colors file for consistent design
import {ScrollView} from 'react-native-gesture-handler';

const notifications = [
  {
    id: '1',
    title: 'Appointment Reminder',
    description: 'You have an appointment with Dr. Smith tomorrow at 10:00 AM.',
    time: '2h ago',
    icon: require('../Images/reminder.png'), // Replace with your actual image path
  },
  {
    id: '2',
    title: 'Lab Results Available',
    description: 'Your recent lab test results are now available for review.',
    time: '1d ago',
    icon: require('../Images/labResult.png'),
  },
  {
    id: '3',
    title: 'New Message',
    description: 'You have a new message from Dr. Johnson.',
    time: '3d ago',
    icon: require('../Images/message.png'),
  },
  {
    id: '4',
    title: 'Appointment Reminder',
    description: 'You have an appointment with Dr. Smith tomorrow at 10:00 AM.',
    time: '2h ago',
    icon: require('../Images/reminder.png'), // Replace with your actual image path
  },
  {
    id: '5',
    title: 'Lab Results Available',
    description: 'Your recent lab test results are now available for review.',
    time: '1d ago',
    icon: require('../Images/labResult.png'),
  },
  {
    id: '6',
    title: 'New Message',
    description: 'You have a new message from Dr. Johnson.',
    time: '3d ago',
    icon: require('../Images/message.png'),
  },
  {
    id: '7',
    title: 'Appointment Reminder',
    description: 'You have an appointment with Dr. Smith tomorrow at 10:00 AM.',
    time: '2h ago',
    icon: require('../Images/reminder.png'), // Replace with your actual image path
  },
  {
    id: '8',
    title: 'Lab Results Available',
    description: 'Your recent lab test results are now available for review.',
    time: '1d ago',
    icon: require('../Images/labResult.png'),
  },
  {
    id: '9',
    title: 'New Message',
    description: 'You have a new message from Dr. Johnson.',
    time: '3d ago',
    icon: require('../Images/message.png'),
  },
  // Add more notifications as needed
];

const Notification = () => {
  const renderItem = ({item}) => (
    <View style={styles.notificationCard}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.PrimaryColor,
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  },
});

export default Notification;
