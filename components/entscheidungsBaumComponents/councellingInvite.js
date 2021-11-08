import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import Colors from '../../assets/colors';

import ButtonPrimary from '../buttons/buttonPrimary';

export const CouncellingInvite1 = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/illustrations/entscheidungsbaumIllustrations/contact.png')}
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
        Unsere Psychologen helfen dir beim Herausfinden von deinen verborgenen
        Talenten, Interessen, Leidenschaften. Schau auch gerne unter:
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Ideas')}>
        <Text style={styles.highlight}>Ideen- und Berufsfindung</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Psychology')}>
        <Text style={styles.highlight}>Psychologische Aspekte</Text>
      </TouchableOpacity>

      <ButtonPrimary
        onPress={() => props.navigation.navigate('Home')}
        backgroundStyle={{paddingHorizontal: 30}}
      >
        Startseite
      </ButtonPrimary>
    </View>
  );
};

export const CouncellingInvite2 = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/illustrations/entscheidungsbaumIllustrations/contact.png')}
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
        Unsere Psychologen helfen dir beim Suchen einer geeigneten Ausbildung.
        Schau auch gerne unter:
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Umsetzung')}>
        <Text style={styles.highlight}>Wie setze ich meine Ideen um?</Text>
      </TouchableOpacity>

      <ButtonPrimary
        onPress={() => props.navigation.navigate('Home')}
        backgroundStyle={{paddingHorizontal: 30}}
      >
        Startseite
      </ButtonPrimary>
    </View>
  );
};

export const CouncellingInvite3 = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/illustrations/entscheidungsbaumIllustrations/contact.png')}
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
        dich in Frage. Schau auch gerne unter:
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Financial')}>
        <Text style={styles.highlight}>Finanzierungsmöglichkeiten</Text>
      </TouchableOpacity>

      <ButtonPrimary
        onPress={() => props.navigation.navigate('Home')}
        backgroundStyle={{paddingHorizontal: 30}}
      >
        Startseite
      </ButtonPrimary>
    </View>
  );
};

export const FinalCouncellingInvite = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/illustrations/entscheidungsbaumIllustrations/contact.png')}
        style={{
          height: 250,
          width: 250,
          resizeMode: 'contain',
          marginVertical: 20
        }}
      ></ImageBackground>

      <Text style={styles.text}>
        Hast du noch eine andere Frage bezüglich deiner Transition (z.B.
        Versicherung, Arbeitsamt, Visum, etc.)?
      </Text>
      <Text style={styles.header}>Sprich mit uns!</Text>
      <Text style={styles.text}>
        Vereinbare gerne einen Beratungstermin unter
      </Text>

      <Text style={styles.highlight}>info@stiftung-tanz.com</Text>
      <Text style={styles.text}>
        Unsere Psychologen helfen dir beim Beantworten deiner Fragen. Schau auch
        gerne unter:
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Insurance')}>
        <Text style={styles.highlight}>Versicherungen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Germany')}>
        <Text style={styles.highlight}>Leben und Arbeiten in Deutschland</Text>
      </TouchableOpacity>

      <ButtonPrimary
        onPress={() => props.navigation.navigate('Home')}
        backgroundStyle={{paddingHorizontal: 30}}
      >
        Startseite
      </ButtonPrimary>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
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
