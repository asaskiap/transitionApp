import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

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
    padding: windowHeight > 600 ? 20 : 10,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: windowHeight > 600 ? 36 : 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primaryDark
  }
});
