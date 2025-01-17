// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';

// const Splash = ({navigation}) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('RootNavigation');
//     }, 2000);
//   }, []);
//   return (
//     <View>
//       <Text>Splash</Text>
//     </View>
//   );
// };

// export default Splash;

import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  let login = true;
  useEffect(() => {
    setTimeout(() => {
      login
        ? navigation.navigate('RootNavigation')
        : navigation.navigate('Login');

      //
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../Images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>DoctorApp</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff',
  },
  title: {color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 20},
});
