import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

const financialMenuScreen = (props) => {
  return (
    <View style={textStyles.fullScreenContainer}>
      <View style={textStyles.screenHeader}>
        <Text style={textStyles.screenHeaderText}>Finanzierung</Text>
      </View>
    </View>
  );
};

export default financialMenuScreen;

const styles = StyleSheet.create({});
