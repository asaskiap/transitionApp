import React from 'react';

import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import textStyles from '../../styles/generalTextStyles';

import CloseButton from '../buttons/closeButton';
const WerSindWir = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollView>
        <View style={textStyles.fullScreenContainer}>
          <Text style={textStyles.headerSecondary}>Wer sind Wir? </Text>
          <Text style={textStyles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </Text>
          <Text style={textStyles.paragraph}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </Text>

          <CloseButton close={props.close}></CloseButton>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default WerSindWir;

const styles = StyleSheet.create({
  header: {
    color: 'darkslategrey',
    fontSize: 26,
    padding: 20
  }
});
