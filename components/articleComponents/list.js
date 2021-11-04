import React from 'react';
import {Entypo} from '@expo/vector-icons';

import {Text, View} from 'react-native';
import colors from '../../assets/colors';

export const ListItem = (props) => {
  return (
    <Text
      style={{
        fontSize: 14,
        lineHeight: 22,
        color: colors.text,
        padding: 8
      }}
    >
      <Entypo name="dot-single" size={24} color="black" /> {props.children}
    </Text>
  );
};

export const List = (props) => {
  return <View style={{padding: 20}}>{props.children}</View>;
};
