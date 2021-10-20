import React from 'react';

import {Entypo} from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';

const Link = (props) => {
  return (
    <View
      style={[
        {padding: 10, alignSelf: 'center', maxWidth: '85%'},
        props.backgroundStyle
      ]}
    >
      <TouchableOpacity onPress={props.onPress} style={{flexDirection: 'row'}}>
        <Entypo name="link" size={20} color={colors.primaryDark} />
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
