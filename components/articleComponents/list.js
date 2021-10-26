import React from 'react';

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
      ◼ {props.children}
    </Text>
  );
};

export const List = (props) => {
  return <View style={{padding: 20}}>{props.children}</View>;
};
