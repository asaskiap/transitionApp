import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import LandingPageButton from '../buttons/landingPageButton';
import colors from '../../assets/colors';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LandingPageDeutsch = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <LandingPageButton onPress={() => props.setDisplayWer()}>
        Wer sind wir?
      </LandingPageButton>
      <LandingPageButton onPress={() => props.setDisplayWas()}>
        Was machen wir?
      </LandingPageButton>
      <LandingPageButton onPress={() => props.setDisplayWomit()}>
        Wobei können wir helfen?
      </LandingPageButton>

      <LandingPageButton
        backgroundStyle={{
          backgroundColor: colors.primarySemiTransparent,
          paddingVertical: 3,
          paddingHorizontal: 20,
          minWidth: '20%',
          alignSelf: 'center'
        }}
        onPress={() => props.setDisplayMenu()}
      >
        <Ionicons
          name="menu"
          size={windowHeight > 600 ? 28 : 24}
          color={colors.textLight}
        />
      </LandingPageButton>
    </View>
  );
};

export default LandingPageDeutsch;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: windowHeight > 600 ? 400 : 290,
    marginBottom: windowHeight > 600 ? 20 : 10
  }
});
