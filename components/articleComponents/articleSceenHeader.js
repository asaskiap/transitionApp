import React from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

import Colors from './../../assets/colors';

const ArticleScreenHeader = (props) => {
  return (
    <ImageBackground source={props.image} style={style.headerBackgroundImage}>
      <View style={style.articleScreenHeader}>
        <Text style={style.screenHeaderText}>{props.children}</Text>
      </View>
    </ImageBackground>
  );
};

export default ArticleScreenHeader;

style = StyleSheet.create({
  headerBackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: windowHeight * 0.4,
    width: windowWidth,
    marginBottom: 20
  },
  articleScreenHeader: {
    marginTop: '20%',
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10
  },
  screenHeaderText: {
    fontSize: windowHeight < 600 ? 28 : 36,
    color: Colors.textLight
  }
});
