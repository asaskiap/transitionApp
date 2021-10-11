import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../assets/colors';

const ArticleSubHeader = (props) => {
  return (
    <View style={style.articleHeader}>
      <Text style={style.articleHeaderText}>{props.children}</Text>
    </View>
  );
};

export default ArticleSubHeader;

const style = StyleSheet.create({
  articleHeader: {paddingVertical: 10},
  articleHeaderText: {fontSize: 22, color: Colors.primary}
});
