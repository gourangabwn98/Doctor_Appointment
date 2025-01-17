import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import CommonBtn from '../components/CommonBtn';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {ImageSlider} from '@pembajak/react-native-image-slider-banner';
import SearchBar from '../components/SearchBar';

const Dashboard = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Header title={'DoctorApp'} icon={require('../Images/logo.png')} />
          <SearchBar
            placeholder="Search by doctor name"
            value={searchText}
            onChangeText={setSearchText}
          />

          <View style={{flex: 1}}>
            <ImageSlider
              data={[
                {
                  img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/health-care-medical-center-promo-banner-design-template-c2de622d5dde1754e02ee81f16afc9b0_screen.jpg?ts=1709488933',
                },
                {
                  img: 'https://media.bizj.us/view/img/10072241/banner-health-center-rendering*900xx1168-656-0-0.jpg',
                },
                {
                  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAO1moyvjYmpF31EJKixnNgXlCumbpV8V9Fw&s',
                },
              ]}
              autoPlay={true}
              timer={3000}
              // onItemChanged={item => console.log('item', item)}
              closeIconColor="#fff"
            />
          </View>

          <Text style={styles.heading}>Select Category</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1]} // Sample data
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DoctorList', {
                        categoryName: 'category' + index,
                      });
                    }}>
                    <LinearGradient
                      colors={['#4A90E2', '#4A90E2']}
                      style={styles.linearGradient}>
                      <Text style={styles.catName}>{'Category ' + index}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.docItem}>
                    <Image
                      source={require('../Images/doctor.png')}
                      style={styles.docImg}
                    />
                    <Text style={styles.docName}>Doctor {index + 1}</Text>
                    <Text style={styles.docSpl}>Skin Specialist</Text>
                    <Text
                      style={[
                        styles.status,
                        {
                          color: index % 2 == 0 ? 'green' : 'red',
                          opacity: index % 2 == 0 ? 1 : 0.5,
                        },
                      ]}>
                      {index % 2 == 0 ? 'Available' : 'Busy'}
                    </Text>
                    <CommonBtn
                      w={150}
                      h={40}
                      status={index % 2 == 0 ? true : false}
                      txt={'Book Appointment'}
                      onClick={() => {
                        if (index % 2 == 0) {
                          navigation.navigate('BookAppointment');
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
