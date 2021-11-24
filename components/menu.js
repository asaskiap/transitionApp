import React from 'react';

import {Modal, ScrollView, StyleSheet, View, Dimensions} from 'react-native';

import ContactButton from '../components/buttons/contactButton';
import MenuPageButton from './buttons/menuPageButton';
import CloseButton from './buttons/closeButton';
import colors from '../assets/colors';
import ScrollableScreenContainer from './scrollableScreen';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const menu = (props) => {
  const navigateTo = (screen) => {
    props.navigation.navigate(screen);
    props.close();
  };

  return (
    <Modal visible={props.isVisible} animationType={'slide'} transparent>
      <ScrollView style={styles.menuScreen}>
        <MenuPageButton onPress={() => navigateTo('Home')}>
          Startseite
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Transition')}>
          Die Transition
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Entscheidungsbaum')}>
          Was brauche ich in meiner Situation?
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Psychology')}>
          Psychologische Aspekte
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Ideas')}>
          Ideen - Berufsfindung
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Umsetzung')}>
          Wie setze ich meine Ideen um?
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Financial')}>
          Finanzierung
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Insurance')}>
          Versicherung
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Germany')}>
          Leben und Arbeiten in Deutschland
        </MenuPageButton>

        <MenuPageButton onPress={() => navigateTo('Selfemployment')}>
          Selbstständigkeit
        </MenuPageButton>

        <ContactButton
          style={{
            padding: 30,
            alignSelf: 'flex-end'
          }}
        />
      </ScrollView>
      <CloseButton close={props.close} textStyle={{color: colors.textLight}} />
    </Modal>
  );
};

export default menu;

const styles = StyleSheet.create({
  menuScreen: {
    flex: 1,
    paddingVertical: 40,
    paddingBottom: 60,
    backgroundColor: 'rgba(0, 90, 156, 0.9)',
    //minHeight: windowHeight,
    width: windowWidth
  }
});
