import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '../../assets/colors';

const cardBtn = (props) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      style={[styles.cardBtn, props.style]}
    >
      <Text style={styles.btnText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default cardBtn;

const styles = StyleSheet.create({
  cardBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    //borderRadius: 10
  },
  btnText: {
    color: Colors.text,
    fontSize: 20
  }
});
