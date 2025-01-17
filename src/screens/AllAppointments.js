import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import doctors from './doctorData2';

const AllAppointments = ({navigation}) => {
  const [filter, setFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredAppointments = doctors.filter(
    item =>
      (filter === 'All' || item.status === filter) &&
      item.doctorName.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handelClick = item => {
    item.status !== 'Pending'
      ? navigation.navigate('ViewAppointment', {appointment: item})
      : navigation.navigate('PendingBookings', {appointment: item});
  };
  return (
    <View style={styles.container}>
      <Header icon={require('../Images/back.png')} title="All Appointments" />
      <SearchBar
        placeholder="Search by doctor name"
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.toggleRow}>
        {['All', 'Pending', 'Completed'].map(status => (
          <TouchableOpacity
            key={status}
            style={[
              styles.toggleButton,
              filter === status && styles.activeButton,
            ]}
            onPress={() => setFilter(status)}>
            <Text
              style={[
                styles.toggleText,
                filter === status && styles.activeText,
              ]}>
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredAppointments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={
              () => handelClick(item)
              // navigation.navigate('ViewAppointment', {appointment: item})
            }>
            {/* Doctor's Image */}
            <Image
              source={require('../Images/doctor.png')}
              style={styles.docImage}
            />

            {/* Information Section */}
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.doctorName}</Text>
              <Text style={styles.specialization}>{item.specialization}</Text>
              <Text style={styles.timing}>
                {item.date} | {item.timing}
              </Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>

            {/* Status */}
            <View style={styles.statusContainer}>
              <Text
                style={[
                  styles.status,
                  item.status === 'Pending' ? styles.pending : styles.completed,
                ]}>
                {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AllAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  activeButton: {
    backgroundColor: 'orange',
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  activeText: {
    color: '#fff',
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#fff',
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  infoView: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  specialization: {
    fontSize: 14,
    color: '#555',
  },
  timing: {
    fontSize: 14,
    color: '#777',
  },
  address: {
    fontSize: 14,
    color: '#333',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: 'orange',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  specialization: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  timing: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#777',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  pending: {
    backgroundColor: '#fdd835',
    color: '#fff',
  },
  completed: {
    backgroundColor: '#66bb6a',
    color: '#fff',
  },
});
