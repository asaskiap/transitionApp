import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

const insuranceMenuScreen = (props) => {
  return (
    <View style={textStyles.fullScreenContainer}>
      <View style={textStyles.screenHeader}>
        <Text style={textStyles.screenHeaderText}>Versicherung</Text>
      </View>
    </View>
  );
};

export default insuranceMenuScreen;

const styles = StyleSheet.create({});
