import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '../../assets/colors';

const closeButton = (props) => {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={props.close}>
      <Text style={[styles.closeButtonText, props.textStyle]}>⨉</Text>
    </TouchableOpacity>
  );
};

export default closeButton;

const styles = StyleSheet.create({
  closeButton: {
    padding: 20,
    position: 'absolute',
    right: 5,
    top: 10
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: Colors.accentDark
  }
});
