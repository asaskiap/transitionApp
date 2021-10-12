import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';

const Link = (props) => {
  return (
    <View
      style={[
        {padding: 10, alignSelf: 'center', maxWidth: '80%'},
        props.backgroundStyle
      ]}
    >
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={[
            {fontSize: 16, fontWeight: 'bold', color: colors.primaryDark},
            props.textStyle
          ]}
        >
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;
