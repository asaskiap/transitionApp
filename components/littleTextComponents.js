import React from 'react';
import {Text} from 'react-native';
import colors from '../assets/colors';

export const ArticleBy = (props) => {
  return (
    <Text
      style={{
        alignSelf: 'flex-end',
        fontStyle: 'italic',
        color: colors.pieGreen,
        marginVertical: 20,
        fontSize: 16
      }}
    >
      von {props.children}
    </Text>
  );
};
