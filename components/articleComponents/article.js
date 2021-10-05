import React from 'react';

import {StyleSheet, View} from 'react-native';

const Article = (props) => {
  return <View style={style.article}>{props.children}</View>;
};

export default Article;

const style = StyleSheet.create({
  article: {padding: 15, borderRadius: 15}
});
