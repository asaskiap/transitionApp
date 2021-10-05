import React from 'react';

import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const ScrollableScreenContainer = (props) => {
  return (
    <ScrollView>
      <View style={styles.fullScreenContainer}>{props.children}</View>
    </ScrollView>
  );
};

export default ScrollableScreenContainer;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    minHeight: windowHeight,
    paddingBottom: 70,
    backgroundColor: 'white'
  }
});
