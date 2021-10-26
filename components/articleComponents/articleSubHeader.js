import React from 'react';

import {StyleSheet, View, Text, Dimensions} from 'react-native';

import Colors from '../../assets/colors';

const ArticleSubHeader = (props) => {
  return (
    <View style={[style.articleHeader, props.containerStyle]}>
      <Text style={[style.articleHeaderText, props.textStyle]}>
        {props.children}
      </Text>
    </View>
  );
};

export default ArticleSubHeader;

const style = StyleSheet.create({
  articleHeader: {paddingVertical: 10},
  articleHeaderText: {fontSize: 22, color: Colors.primary}
});
