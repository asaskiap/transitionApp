import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/colors';

import Colors from '../assets/colors';

const windowHeight = Dimensions.get('window').height;

const textStyles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    minHeight: windowHeight,
    paddingBottom: 70,
    justifyContent: 'center',
    alignItems: 'center'
    //backgroundColor: 'white'
  },
  paragraph: {
    paddingHorizontal: 16,
    marginVertical: 5,
    lineHeight: 22,
    fontSize: 14,
    color: Colors.text
  },
  screenHeader: {
    marginTop: '40%',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10
  },
  articleScreenHeader: {
    marginTop: '20%',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10
  },
  screenHeaderText: {
    fontSize: windowHeight < 600 ? 28 : 36,
    color: Colors.textLight
  },
  headerSecondary: {
    color: Colors.primaryDark,
    fontSize: 26,
    fontWeight: 'bold',
    padding: 20,
    marginTop: 20
  },

  articleHeader: {paddingVertical: 10},
  articleHeaderText: {fontSize: 20, color: Colors.primary},
  article: {padding: 15, borderRadius: 15},

  highlight: {},
  highlightText: {},

  card: {
    padding: 10,
    marginVertical: 20,
    width: '90%',
    backgroundColor: 'white',
    shadowColor: Colors.text,
    borderColor: 'rgba(1, 1, 1, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: Colors.text,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {height: 2, width: 0},
    elevation: 5
  },
  moreTxt: {fontSize: 16, lineHeight: 22, color: colors.accentDark},
  moreBtn: {
    padding: 5
  }
});

export default textStyles;
