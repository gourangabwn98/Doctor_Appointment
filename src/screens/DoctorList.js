import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {doctors} from './doctordata';
import {TextInput} from 'react-native-paper';
import Header from '../components/Header';

const DoctorList = ({route, navigation}) => {
  const {categoryName} = route?.params;
  const [name, setName] = useState('');

  const handelclick = doctor => {
    navigation.navigate('DrProfile', {doctor: doctor});
    console.log('doctorlist', doctor);
  };

  return (
    <>
      <Header icon={require('../Images/back.png')} title={categoryName} />
      <TextInput
        placeholder="Search Doctor"
        value={name}
        onChangeText={t => setName(t)}
        style={styles.input}
      />

      <ScrollView>
        <View style={styles.container}>
          {doctors.map((doctor, index) => (
            <TouchableOpacity onPress={() => handelclick(doctor)}>
              <View style={styles.card} key={index}>
                <Image source={doctor.image} style={styles.image} />

                <View style={styles.details}>
                  <Text style={styles.profile}>{doctor.name}</Text>
                  {/* <Text style={styles.name}>{doctor.name}</Text> */}
                  <Text style={styles.degree}>{doctor.degree}</Text>
                  <Text style={styles.address}>{doctor.address}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'green',
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  profile: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  degree: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
  },
  address: {
    fontSize: 14,
    marginTop: 5,
  },
  input: {
    // backgroundColor: 'white',
    fontSize: 19,
  },
});

export default DoctorList;

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const DoctorList = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default DoctorList;
