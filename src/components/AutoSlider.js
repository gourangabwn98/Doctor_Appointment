import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const AutoSlider = () => {
  const images = [
    require('../Images/banner.jpg'),
    require('../Images/banner.jpg'),
    require('../Images/banner.jpg'),
  ];

  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        autoplay
        circleLoop
        dotStyle={styles.dotStyle}
        dotColor="#009FFD"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={styles.image}
      />
    </View>
  );
};

export default AutoSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 10,
    width: '95%',
    marginTop: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
