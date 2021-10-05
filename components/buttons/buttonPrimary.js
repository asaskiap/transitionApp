import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const ButtonPrimary = (props) => {
  return (
    <TouchableOpacity style={styles.buttonBackground} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: colors.primaryDark,
    padding: 10,
    width: '70%',
    marginVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: 'bold'
  }
});
