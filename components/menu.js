import React from 'react';

import {Modal, ScrollView, StyleSheet, View, Dimensions} from 'react-native';

import ContactButton from '../components/buttons/contactButton';
import CloseButton from './buttons/closeButton';
import colors from '../assets/colors';
import {MenuContentsDe, MenuContentsEng} from './menuContents';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const menu = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'} transparent>
      <ScrollView style={styles.menuScreen}>
        {!props.english && <MenuContentsDe {...props}></MenuContentsDe>}
        {props.english && <MenuContentsEng {...props}></MenuContentsEng>}

        <ContactButton
          style={{
            padding: 30,
            marginBottom: 30,
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
