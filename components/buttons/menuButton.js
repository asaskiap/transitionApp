import React from 'react';

import {StyleSheet, Dimensions, TouchableOpacity, View} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import Colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;

const MenuButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={() => props.setDisplayMenu(true)}
    >
      <View style={styles.menuButtonIcon}>
        <Ionicons
          name="menu"
          size={windowHeight > 600 ? 40 : 30}
          color={Colors.textLight}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    padding: 2,
    bottom: 0,
    right: 5
  },
  menuButtonIcon: {}
});
