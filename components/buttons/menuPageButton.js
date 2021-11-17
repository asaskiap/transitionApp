import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const MenuPageButton = (props) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={props.onPress}>
      <Text style={styles.menuItemText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
export default MenuPageButton;

const styles = StyleSheet.create({
  menuItem: {
    padding: 16
  },
  menuItemText: {
    fontSize: windowHeight > 600 ? 20 : 14,
    color: 'whitesmoke'
  }
});
