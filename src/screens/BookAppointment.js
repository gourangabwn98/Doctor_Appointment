import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';
import {doctorDetails, slots, getDays} from './demodata';
import {colors} from '../constants/colors';

const BookAppointment = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');

  useEffect(() => {
    const DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);

  const handleBookNow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Success');
    }, 2000);
  };

  const isFormValid = () => {
    return (
      selectedDay !== -1 &&
      selectedSlot !== -1 &&
      patientName.trim() !== '' &&
      patientAge !== -1 &&
      selectedGender !== -1
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header icon={require('../Images/back.png')} title={'Book Appointment'} />
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Image source={doctorDetails.image} style={styles.docImg} />
          <Text style={styles.name}>{doctorDetails.name}</Text>
          <Text style={styles.age}>{doctorDetails.age}</Text>
          <Text style={styles.spcl}>{doctorDetails.specialization}</Text>
          <Text style={styles.heading}>Select Date</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={days}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.dateBox,
                      {
                        backgroundColor:
                          selectedDay === index ? '#4A90E2' : 'white',
                        borderColor: selectedDay === index ? 'blue' : 'gray',
                      },
                    ]}
                    onPress={() => {
                      if (item.day >= new Date().getDate()) {
                        setSelectedDay(index);
                      }
                    }}>
                    <Text
                      style={{color: selectedDay === index ? 'white' : 'blue'}}>
                      {item.day}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Available Slots</Text>
          <FlatList
            numColumns={2}
            data={slots}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    {
                      backgroundColor:
                        selectedSlot === index ? '#4A90E2' : 'white',
                      borderColor: index === selectedSlot ? 'blue' : 'gray',
                    },
                  ]}
                  onPress={() => setSelectedSlot(index)}>
                  <Text
                    style={{color: index === selectedSlot ? 'white' : 'gray'}}>
                    {item.sloT}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={styles.heading}>Patient Name</Text>
          <TextInput
            style={styles.nameInput}
            placeholder={'Enter Name'}
            value={patientName}
            onChangeText={setPatientName}
          />
          <Text style={styles.heading}> Age</Text>
          <TextInput
            style={styles.ageInput}
            keyboardType="numeric"
            placeholder={'Enter Age'}
            value={patientAge}
            onChangeText={setPatientAge}
          />
          <Text style={styles.heading}>Select Gender</Text>
          <View style={styles.genderView}>
            <View>
              <TouchableOpacity
                style={[
                  styles.gender,
                  {borderColor: selectedGender === 0 ? 'blue' : 'gray'},
                ]}
                onPress={() => setSelectedGender(0)}>
                <Image
                  source={require('../Images/male.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
              <Text style={styles.genderText}>Male</Text>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.gender,
                  {
                    backgroundColor:
                      selectedGender === 1 || 0 ? '#4A90E2' : 'white',

                    borderColor: selectedGender === 1 ? 'blue' : 'gray',
                  },
                ]}
                onPress={() => setSelectedGender(1)}>
                <Image
                  source={require('../Images/female.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
              <Text style={styles.genderText}>Female</Text>
            </View>
          </View>

          <View style={styles.btnView}>
            <CommonBtn
              w={300}
              h={45}
              txt={'Book Now'}
              onClick={handleBookNow}
              status={isFormValid()}
            />
          </View>
        </View>

        {/* Activity Indicator Modal */}
        <Modal
          isVisible={isLoading}
          style={{justifyContent: 'center', alignItems: 'center'}}
          backdropOpacity={0.5}
          animationIn="fadeIn"
          animationOut="fadeOut">
          <ActivityIndicator size="large" color="blue" />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  docImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  age: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  spcl: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },

  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  ageInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  genderView: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
  },
  gender: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btnView: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  dateBox: {
    width: 60,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 10,
  },
  genderText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
});
