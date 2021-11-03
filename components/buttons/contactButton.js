import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;

export const contactButton = (props) => {
  return (
    <TouchableOpacity
      style={[{padding: 2}, props.style]}
      onPress={props.onPress}
    >
      <Entypo
        name="mail"
        size={windowHeight > 600 ? 40 : 32}
        color={colors.textLight}
      />
    </TouchableOpacity>
  );
};

export default contactButton;