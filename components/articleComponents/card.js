import React from 'react';

import {View, StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 3,
    marginVertical: 14,
    minWidth: '80%',
    maxWidth: '80%',
    backgroundColor: 'white',
    shadowColor: Colors.text,
    borderColor: 'rgba(1, 1, 1, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: Colors.text,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {height: 2, width: 0},
    elevation: 5
  }
});
