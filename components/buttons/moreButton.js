import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

const MoreButton = (props) => {
  return (
    <TouchableOpacity style={styles.moreBtn} onPress={props.onPress}>
      <Text style={styles.moreTxt}>[ mehr...]</Text>
    </TouchableOpacity>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  moreTxt: {fontSize: 16, lineHeight: 22, color: Colors.accentDark},
  moreBtn: {
    padding: 5
  }
});
