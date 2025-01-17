import {ActivityIndicator, StyleSheet, View} from 'react-native';
// import {styles} from './Style';
// import {colors} from '../../constants/colors';
import {Text} from 'react-native-elements';
import {colors} from '../../constants/colors';

export default function Loader({text}) {
  return (
    <View style={StyleSheet.container}>
      <ActivityIndicator size="large" color={colors.PrimaryColor} />
      {/* <Text>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(32 35 42 / 14%)', // ---->initial
    // backgroundColor: 'transparent',
  },
});
