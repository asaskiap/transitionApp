import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

const germanyMenuScreen = (props) => {
  return (
    <View style={textStyles.fullScreenContainer}>
      <View style={textStyles.screenHeader}>
        <Text style={textStyles.screenHeaderText}>
          Leben und Arbeiten in Deutschland
        </Text>
      </View>
    </View>
  );
};

export default germanyMenuScreen;

const styles = StyleSheet.create({});
