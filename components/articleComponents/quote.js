import React from 'react';

import {View, Text} from 'react-native';
import colors from '../../assets/colors';

const Quote = (props) => {
  return (
    <View style={[{padding: 10, marginVertical: 5}, props.quoteStyle]}>
      <Text
        style={[
          {
            fontSize: 14,
            lineHeight: 22,
            fontStyle: 'italic',
            color: colors.primaryDark
          },
          props.textStyle
        ]}
      >
        {props.children}
      </Text>
    </View>
  );
};

export default Quote;
