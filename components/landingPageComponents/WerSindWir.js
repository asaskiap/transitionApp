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
            Stiftung TANZ wurde auf im Januar 2010 auf private Initiative von
            Inka Atassi und Sabrina Sadowska gegründet und hat ihren Hauptsitz
            in Berlin. Die Stiftung dient ausschließlich dem gemeinnützigen
            Zweck, die materiellen und ideellen Bedürfnisse von professionellen
            TänzerInnen zu fördern, insbesondere die während ihrer Ausbildung,
            ihrer Karriere und ihres Übergangs in einen neuen Beruf nach dem
            Ende ihrer aktiven Tanzkarriere.
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
