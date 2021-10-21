import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

const ArticleHeader = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
    </View>
  );
};

export default ArticleHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primaryDark,
    letterSpacing: 4
  }
});
