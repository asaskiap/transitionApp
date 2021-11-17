import React from 'react';

import {View, Image, StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ArticleIllustration = (props) => {
  return (
    <View style={[style.articleImageContainer, props.imageContainerStyle]}>
      <Image
        source={props.image}
        style={[style.articleImage, props.imageStyle]}
      ></Image>
    </View>
  );
};

const style = StyleSheet.create({
  articleImageContainer: {
    flex: 1,
    minHeight: windowHeight * 0.5,
    maxHeight: windowHeight * 0.6,
    maxWidth: windowWidth,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  articleImage: {
    maxHeight: windowHeight * 0.6,
    maxWidth: windowWidth,
    resizeMode: 'contain'
  }
});

export default ArticleIllustration;
