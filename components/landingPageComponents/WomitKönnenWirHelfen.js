import React from 'react';

import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';

import textStyles from '../../styles/generalTextStyles';

import CloseButton from '../buttons/closeButton';

const WomitHelfen = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <View style={textStyles.fullScreenContainer}>
        <ScrollView>
          <Text style={[textStyles.headerSecondary, {marginTop: 20}]}>
            Womit Können Wir helfen?{' '}
          </Text>
          <Text style={textStyles.paragraph}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </Text>
          <Text style={textStyles.paragraph}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </Text>
          <Text style={textStyles.paragraph}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </Text>
        </ScrollView>
        <CloseButton close={props.close}></CloseButton>
      </View>
    </Modal>
  );
};

export default WomitHelfen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  }
});
