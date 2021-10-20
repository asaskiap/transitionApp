import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const MoreButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.moreBtn, props.btnContainerStyle]}
      onPress={props.onPress}
    >
      <Text style={styles.moreTxt}>Mehr lesen</Text>
    </TouchableOpacity>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  moreTxt: {
    // fontSize: 16, lineHeight: 22, color: Colors.accentDark
    fontSize: 16,
    //fontWeight: 'bold',
    lineHeight: 22,
    color: colors.text
  },
  moreBtn: {
    // padding: 5,
    backgroundColor: colors.accentPale,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 13,
    width: 100,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'flex-end'
  }
});
