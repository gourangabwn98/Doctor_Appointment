import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  Button,
} from 'react-native';

const PendingBookingDetails = ({navigation}) => {
  const [doctors, setDoctors] = useState([
    {
      id: '1',
      doctorName: 'Dr. John Doe',
      specialization: 'Cardiologist',
      address: '123 Heart Clinic, New York',
      timing: '08:10 PM',
      date: '2025-01-17',
      status: 'Completed',
      image: require('../Images/doctor.png'),
      details: {
        illness: 'Chest Pain',
        medicine: 'Aspirin',
        prescription: 'Take one tablet daily for 10 days.',
        prescriptionPDF: require('../pdf/demo.pdf'),
      },
    },
    {
      id: '2',
      doctorName: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      address: '456 Skin Care Center, Los Angeles',
      timing: '09:15 AM',
      date: '2025-01-18',
      status: 'Completed',
      image: require('../Images/doctor.png'),
      details: {
        illness: 'Eczema',
        medicine: 'Hydrocortisone',
        prescription: 'Apply twice daily for 2 weeks.',
        prescriptionPDF: require('../pdf/demo.pdf'),
      },
    },
    {
      id: '3',
      doctorName: 'Dr. Emily White',
      specialization: 'Orthopedic',
      address: '789 Bone Clinic, Chicago',
      timing: '02:30 PM',
      date: '2025-01-19',
      status: 'Pending',
      image: require('../Images/doctor.png'),
      details: {
        illness: 'Knee Pain',
        medicine: 'Ibuprofen',
        prescription: 'Take one tablet twice daily for 7 days.',
        prescriptionPDF: require('../pdf/demo.pdf'),
      },
    },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleCancelBooking = id => {
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this booking?',
      [
        {text: 'No', style: 'cancel'},
        {
          text: 'Yes',
          onPress: () => {
            setDoctors(prevDoctors =>
              prevDoctors.filter(doctor => doctor.id !== id),
            );
          },
        },
      ],
    );
  };

  const handleChangeDateTime = () => {
    setDoctors(prevDoctors =>
      prevDoctors.map(doctor =>
        doctor.id === selectedDoctor.id
          ? {...doctor, date: newDate, timing: newTime}
          : doctor,
      ),
    );
    setModalVisible(false);
    setNewDate('');
    setNewTime('');
  };

  const renderDoctorItem = ({item}) => {
    if (item.status === 'Pending') {
      return (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.doctorName}>{item.doctorName}</Text>
            <Text style={styles.specialization}>{item.specialization}</Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>Date:</Text> {item.date}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>Time:</Text> {item.timing}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>Address:</Text> {item.address}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancelBooking(item.id)}>
            <Text style={styles.cancelButtonText}>Cancel Booking</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.changeButton}
            onPress={() => {
              navigation.navigate('BookAppointment', {doctor: item});
            }}>
            <Text style={styles.changeButtonText}>Change Appointment</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Booking Details</Text>
      <FlatList
        data={doctors}
        keyExtractor={item => item.id}
        renderItem={renderDoctorItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default PendingBookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  detailsContainer: {
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  specialization: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  cancelButton: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  changeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  changeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
