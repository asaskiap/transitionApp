import React from 'react';

import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ArticleIllustration = (props) => {
  return (
    <View style={[style.articleImageContainer, props.imageContainerStyle]}>
      <ImageBackground
        source={props.image}
        style={[style.articleImage, props.imageStyle]}
      ></ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  articleImageContainer: {
    flex: 1,

    height: windowHeight * 0.5,
    width: windowWidth * 0.9,
    marginVertical: 20
  },
  articleImage: {
    flex: 1,
    resizeMode: 'contain'
  }
});

export default ArticleIllustration;
