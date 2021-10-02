import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

const ideasMenuScreen = (props) => {
  return (
    <View style={textStyles.fullScreenContainer}>
      <View style={textStyles.screenHeader}>
        <Text style={textStyles.screenHeaderText}>
          Wie setze ich meine Ideen um?
        </Text>
      </View>
    </View>
  );
};

export default ideasMenuScreen;

const styles = StyleSheet.create({});
