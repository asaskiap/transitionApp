import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LandingPageButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonBackground, props.backgroundStyle]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, props.textStyle]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default LandingPageButton;

const styles = StyleSheet.create({
  buttonBackground: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: Colors.secondarySemiTransparent,
    borderRadius: 15,
    marginVertical: 8
  },
  buttonText: {
    fontSize: windowHeight < 600 ? 16 : 22,
    fontWeight: 'bold',
    color: Colors.textLight,
    textAlign: 'center'
  }
});
