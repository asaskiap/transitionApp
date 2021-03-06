import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../../assets/colors';

const CustomHeaderButton = (props) => {
  const color = props.color || Colors.textLight;
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      color={color}
    />
  );
};

export default CustomHeaderButton;
