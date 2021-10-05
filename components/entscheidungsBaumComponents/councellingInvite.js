import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import Colors from '../../assets/colors';

import ButtonPrimary from '../buttons/buttonPrimary';

export const CouncellingInvite1 = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/illustrations/contact.png')}
        style={{
          height: 250,
          width: 250,
          resizeMode: 'contain',
          marginVertical: 20
        }}
      ></ImageBackground>
      <Text style={styles.header}>Sprich mit uns!</Text>
      <Text style={styles.text}>
        Vereinbare gerne einen Beratungstermin unter
      </Text>

      <Text style={styles.highlight}>info@stiftung-tanz.com</Text>
      <Text style={styles.text}>
        Unsere Psychologen helfen dir beim Suchen einer
        Finanzierungsmöglichkeit. Evtl. kommt auch eines unserer Stipendien für
        dich in Frage. Schau auch gerne unter :
      </Text>
      <Text style={styles.highlight}>Versicherungen</Text>
      <Text style={styles.highlight}>Leben und Arbeiten in Deutschland</Text>
      <ButtonPrimary onPress={() => props.navigation.navigate('Home')}>
        Startseite
      </ButtonPrimary>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryDark,
    backgroundColor: Colors.secondaryLight,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.text,
    lineHeight: 26,
    marginVertical: 10
  },
  highlight: {
    color: Colors.primaryDark,
    fontWeight: 'bold',
    paddingHorizontal: 3,
    paddingVertical: 7
  }
});
