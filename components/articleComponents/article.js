import React from 'react';

import {StyleSheet, View, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Article = (props) => {
  return <View style={[style.article, props.style]}>{props.children}</View>;
};

export default Article;

const style = StyleSheet.create({
  article: {
    padding: 15,
    borderRadius: 15
  }
});
