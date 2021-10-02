import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import Colors from '../../assets/colors';

const MenuButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={() => props.setDisplayMenu(true)}
    >
      <View style={styles.menuButtonIcon}>
        <Ionicons name="menu" size={48} color={Colors.textLight} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    bottom: 10,
    right: 25
  },
  menuButtonIcon: {
    fontSize: 70,
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 40
  }
});
