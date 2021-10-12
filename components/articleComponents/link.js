import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';

const Link = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[{padding: 20}, props.backgroundStyle]}
    >
      <Text
        style={[
          {fontSize: 16, fontWeight: 'bold', color: colors.primaryDark},
          props.textStyle
        ]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
