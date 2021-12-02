import React from 'react';

import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {Entypo} from '@expo/vector-icons';

import textStyles from '../../styles/generalTextStyles';

import CloseButton from '../buttons/closeButton';
import {color} from 'react-native-reanimated';
import colors from '../../assets/colors';
const WerSindWir = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'} transparent>
      <ScrollView style={{backgroundColor: 'rgba(247, 252, 252, 0.95)'}}>
        <View style={textStyles.fullScreenContainer}>
          <Entypo name="users" size={28} color={colors.primaryDark} />

          {!props.english && (
            <>
              <Text style={textStyles.headerSecondary}>Wer sind Wir? </Text>
              <Text style={textStyles.paragraph}>
                Stiftung TANZ wurde auf im Januar 2010 auf private Initiative
                von Inka Atassi und Sabrina Sadowska gegründet und hat ihren
                Hauptsitz in Berlin. Die Stiftung dient ausschließlich dem
                gemeinnützigen Zweck, die materiellen und ideellen Bedürfnisse
                von professionellen TänzerInnen zu fördern, insbesondere die
                während ihrer Ausbildung, ihrer Karriere und ihres Übergangs in
                einen neuen Beruf nach dem Ende ihrer aktiven Tanzkarriere.
              </Text>
            </>
          )}
          {props.english && (
            <>
              <Text style={textStyles.headerSecondary}>Who we are </Text>
              <Text style={textStyles.paragraph}>
                Stiftung TANZ was founded in January 2010 on the private
                initiative of Inka Atassi and Sabrina Sadowska and has its
                headquarters in Berlin. The foundation's sole purpose is to
                support the material and non-material needs of professional
                dancers, especially during their training, career and transition
                to a new profession after the end of their active dance career.
              </Text>
            </>
          )}
        </View>
      </ScrollView>
      <CloseButton close={props.close}></CloseButton>
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
