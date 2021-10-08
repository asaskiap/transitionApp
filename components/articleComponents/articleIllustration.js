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
    height: windowHeight * 0.4,
    width: windowWidth * 0.9,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  articleImage: {
    resizeMode: 'contain'
  }
});

export default ArticleIllustration;
