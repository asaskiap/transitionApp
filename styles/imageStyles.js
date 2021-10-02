import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/colors';

import Colors from '../assets/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const imageStyles = StyleSheet.create({
  headerBackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: windowHeight * 0.4,
    width: windowWidth,
    marginBottom: 20
  },
  articleImageContainer: {
    height: windowHeight * 0.4,
    width: windowWidth,
    marginVertical: 20
  },
  articleImage: {
    flex: 1,
    resizeMode: 'center'
  },
  fullScreenBackgroundImage: {}
});

export default imageStyles;
