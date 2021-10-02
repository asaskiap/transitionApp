import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

const selfEmploymentMenuScreen = (props) => {
  return (
    <View style={textStyles.fullScreenContainer}>
      <View style={textStyles.screenHeader}>
        <Text style={textStyles.screenHeaderText}>Selbstständigkeit</Text>
      </View>
    </View>
  );
};

export default selfEmploymentMenuScreen;

const styles = StyleSheet.create({});
