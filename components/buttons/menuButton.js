import React from 'react';

import {StyleSheet, Dimensions, TouchableOpacity, View} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import Colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;

const MenuButton = (props) => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.setDisplayMenu(true)}
    >
      <Ionicons
        name="menu"
        size={windowHeight > 600 ? 34 : 32}
        color={Colors.textLight}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
