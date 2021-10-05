import React from 'react';

import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ArticleImage = (props) => {
  return (
    <View style={[style.articleImageContainer, props.imageContainerStyle]}>
      <ImageBackground
        source={props.image}
        style={[style.articleImage, props.imageStyle]}
      ></ImageBackground>
    </View>
  );
};

export default ArticleImage;

const style = StyleSheet.create({
  articleImageContainer: {
    height: windowHeight * 0.4,
    width: windowWidth,
    marginVertical: 20
  },
  articleImage: {
    flex: 1,
    resizeMode: 'center'
  }
});
