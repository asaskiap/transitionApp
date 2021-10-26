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
          size={windowHeight > 600 ? 48 : 40}
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
    bottom: 20,
    right: 25
  },
  menuButtonIcon: {
    backgroundColor: Colors.primary,
    padding: windowHeight > 600 ? 5 : 3,
    borderRadius: 40
  }
});
