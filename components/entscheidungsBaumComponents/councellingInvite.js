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

import {sendEmail} from '../../utilities/sendEmail';

const SpeakToUs = (props) => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/illustrations/entscheidungsbaumIllustrations/contact.png')}
        style={{
          height: 250,
          width: 250,
          resizeMode: 'contain',
          marginVertical: 20
        }}
      ></ImageBackground>
      <Text style={styles.header}>
        {props.eng ? 'Speak to us!' : 'Sprich mit uns!'}
      </Text>
      <Text style={styles.text}>
        {props.eng
          ? 'Book a councelling session under '
          : 'Vereinbare gerne einen Beratungstermin unter'}
      </Text>
      <TouchableOpacity
        onPress={() => {
          sendEmail('alannapfeiffer@gmail.com', 'Coaching Anfrage', '').then(
            () => {
              console.log('Your message was successfully sent!');
            }
          );
        }}
      >
        <Text style={styles.highlight}>info@stiftung-tanz.com</Text>
      </TouchableOpacity>
    </>
  );
};

const HomeButton = (props) => {
  const eng = props.navigation.state.params.eng;
  return (
    <ButtonPrimary
      onPress={() => props.navigation.navigate('Home', {eng: eng})}
      backgroundStyle={{paddingHorizontal: 30}}
    >
      {eng ? 'Home' : 'Startseite'}
    </ButtonPrimary>
  );
};

export const CouncellingInvite1 = (props) => {
  const eng = props.navigation.state.params.eng;
  return (
    <View style={styles.container}>
      <SpeakToUs eng={eng}></SpeakToUs>
      <Text style={styles.text}>
        {eng
          ? 'Our psychologists will help you discover your hidden talents, interests and passions. Feel free to read more under:'
          : 'Unsere Psychologen helfen dir beim Herausfinden von deinen verborgenen Talenten, Interessen, Leidenschaften. Schau auch gerne unter:'}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Ideas', {eng: eng})}
      >
        <Text style={styles.highlight}>
          {eng
            ? 'Ideas - Finding the right carreer for you'
            : 'Ideen- und Berufsfindung'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Psychology', {eng: eng})}
      >
        <Text style={styles.highlight}>
          {eng ? 'Psychological aspects' : 'Psychologische Aspekte'}
        </Text>
      </TouchableOpacity>
      <HomeButton {...props}></HomeButton>
    </View>
  );
};

export const CouncellingInvite2 = (props) => {
  const eng = props.navigation.state.params.eng;

  return (
    <View style={styles.container}>
      <SpeakToUs eng={eng}></SpeakToUs>
      <Text style={styles.text}>
        {eng
          ? 'Our psychologists will help you find a suitable education. For more information please consult:'
          : 'Unsere Psychologen helfen dir beim Suchen einer geeigneten Ausbildung. Schau auch gerne unter:'}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Umsetzung', {eng: eng})}
      >
        <Text style={styles.highlight}>
          {eng
            ? 'How do I implement my ideas?'
            : 'Wie setze ich meine Ideen um?'}
        </Text>
      </TouchableOpacity>
      <HomeButton {...props}></HomeButton>
    </View>
  );
};

export const CouncellingInvite3 = (props) => {
  const eng = props.navigation.state.params.eng;

  return (
    <View style={styles.container}>
      <SpeakToUs eng={eng}></SpeakToUs>
      <Text style={styles.text}>
        {eng
          ? 'Our psychologists will help you find financing options. You might even be eligable for one of our scholarships. Read more at: '
          : 'Unsere Psychologen helfen dir beim Suchen einer Finanzierungsmöglichkeit. Evtl. kommt auch eines unserer Stipendien für dich in Frage. Schau auch gerne unter:'}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Financial', {eng: eng})}
      >
        <Text style={styles.highlight}>
          {eng ? 'Financing Options' : 'Finanzierungsmöglichkeiten'}
        </Text>
      </TouchableOpacity>

      <HomeButton {...props}></HomeButton>
    </View>
  );
};

export const FinalCouncellingInvite = (props) => {
  const eng = props.navigation.state.params.eng;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {eng
          ? 'Do you still have questions concerning your transition process (for example concerning insurances, unemployment benifits, visa etc.)?'
          : 'Hast du noch eine andere Frage bezüglich deiner Transition (z.B.Versicherung, Arbeitsamt, Visum, etc.)?'}
      </Text>
      <SpeakToUs eng={eng}></SpeakToUs>
      <Text style={styles.text}>
        {eng
          ? 'Our psychologists will help you find answers for your questions. Please read more at: '
          : 'Unsere Psychologen helfen dir beim Beantworten deiner Fragen. Schau auch gerne unter:'}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Insurance', {eng: eng})}
      >
        <Text style={styles.highlight}>
          {eng ? 'Insurances' : 'Versicherungen'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Germany', {eng: eng})}
      >
        <Text style={styles.highlight}>
          {eng
            ? 'Life and Work in Germany'
            : 'Leben und Arbeiten in Deutschland'}
        </Text>
      </TouchableOpacity>

      <HomeButton {...props}></HomeButton>
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
