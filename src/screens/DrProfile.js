import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, Card, Divider} from 'react-native-paper';
import {doctors} from './doctordata';

const DrProfile = ({route, navigation}) => {
  const {doctor} = route?.params;

  // Filter similar category doctors
  const similarDoctors = doctors.filter(
    item => item.category === doctor.category && item.id !== doctor.id,
  );

  const handleBookAppointment = () => {
    // Navigate to appointment booking page
    navigation.navigate('BookAppointment', {doctor});
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Cover source={doctor.image} style={styles.profileImage} />
        <Card.Content>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.degree}>{doctor.degree}</Text>
          <Text style={styles.address}>{doctor.address}</Text>
          <Text style={styles.category}>Category: {doctor.category}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={handleBookAppointment}
            style={styles.bookButton}>
            Book Appointment
          </Button>
        </Card.Actions>
      </Card>

      <Divider style={styles.divider} />

      <Text style={styles.heading}>Similar Doctors</Text>
      {similarDoctors.map((item, index) => (
        <Card key={index} style={styles.similarCard}>
          <View style={styles.similarContent}>
            <Image source={item.image} style={styles.similarImage} />
            <View style={styles.similarDetails}>
              <Text style={styles.similarName}>{item.name}</Text>
              <Text style={styles.similarDegree}>{item.degree}</Text>
              <Text style={styles.similarAddress}>{item.address}</Text>
            </View>
          </View>
          <Card.Actions>
            <Button
              mode="text"
              onPress={() => navigation.navigate('DrProfile', {doctor: item})}>
              View Profile
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  profileCard: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  profileImage: {
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  degree: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  address: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
    fontStyle: 'italic',
  },
  bookButton: {
    marginVertical: 10,
    backgroundColor: '#009FFD',
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#ddd',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  similarCard: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  similarContent: {
    flexDirection: 'row',
    padding: 10,
  },
  similarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  similarDetails: {
    flex: 1,
  },
  similarName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  similarDegree: {
    fontSize: 14,
    color: '#555',
  },
  similarAddress: {
    fontSize: 12,
    color: '#777',
  },
});

export default DrProfile;
