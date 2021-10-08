import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../assets/colors';

const ArticleHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
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
  text: {fontSize: 32, fontWeight: 'bold', color: Colors.primaryDark}
});
