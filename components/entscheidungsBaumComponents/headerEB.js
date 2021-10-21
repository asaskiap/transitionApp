import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/colors';

export const HeaderEB = (props) => {
  return (
    <View style={[styles.headerContainer, props.containerStyle]}>
      <Text style={[styles.headerText, props.textStyle]}>{props.children}</Text>
    </View>
  );
};

export const SubheaderEB = (props) => {
  return (
    <View style={styles.subHeaderContainer}>
      <Text style={styles.subHeaderText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primaryDark
  },
  subHeaderContainer: {marginTop: 26, marginBottom: 20},
  subHeaderText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 26,
    color: Colors.primaryDark
  }
});
