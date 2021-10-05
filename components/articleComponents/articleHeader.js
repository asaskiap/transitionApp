import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../assets/colors';

const ArticleHeader = (props) => {
  return (
    <View style={style.articleHeader}>
      <Text style={style.articleHeaderText}>{props.children}</Text>
    </View>
  );
};

export default ArticleHeader;

const style = StyleSheet.create({
  articleHeader: {paddingVertical: 10},
  articleHeaderText: {fontSize: 20, color: Colors.primary}
});
