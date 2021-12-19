import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import colors from '../../assets/colors';

import {sendEmail} from '../../utilities/sendEmail';

const windowHeight = Dimensions.get('window').height;

export const contactButton = (props) => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() =>
        sendEmail('info@stiftung-tanz.com', 'Anfrage', '').then(() => {
          console.log('Your message was successfully sent!');
        })
      }
    >
      <Entypo
        name="mail"
        size={windowHeight > 600 ? 30 : 28}
        color={colors.textLight}
      />
    </TouchableOpacity>
  );
};

export default contactButton;
