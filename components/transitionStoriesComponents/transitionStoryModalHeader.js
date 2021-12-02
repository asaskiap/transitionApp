import React from 'react';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/colors';

const windowWidth = Dimensions.get('window').width;

const TransitionStoryModalHeader = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Text style={styles.name}>{props.children}</Text>
      </View>
    </View>
  );
};

export default TransitionStoryModalHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 60,
    maxWidth: windowWidth
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    margin: 16,
    marginLeft: 20
  },
  header: {marginRight: 20, maxWidth: windowWidth * 0.4},
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: colors.accentDark,
    borderBottomColor: colors.accentDark,
    borderBottomWidth: 2,
    marginLeft: -20
  },
  name: {
    color: colors.text,
    alignSelf: 'flex-end',
    padding: 20,
    fontSize: 16,
    backgroundColor: colors.secondaryLight
  }
});
