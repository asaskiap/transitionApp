import React from 'react';

import {Text, StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

const Paragraph = (props) => {
  return <Text style={style.paragraph}>{props.children}</Text>;
};

export default Paragraph;

const style = StyleSheet.create({
  paragraph: {
    paddingHorizontal: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontSize: 14,
    color: Colors.text
  }
});
