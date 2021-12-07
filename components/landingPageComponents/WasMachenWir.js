import React from 'react';

import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {Octicons} from '@expo/vector-icons';

import textStyles from '../../styles/generalTextStyles';

import CloseButton from '../buttons/closeButton';
import colors from '../../assets/colors';

const WasMachenWir = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'} transparent>
      <ScrollView
        style={{backgroundColor: 'rgba(247, 252, 252, 0.95)', paddingTop: 40}}
      >
        <View style={textStyles.fullScreenContainer}>
          <Octicons name="question" size={28} color={colors.primaryDark} />

          {!props.english && (
            <>
              <Text style={textStyles.headerSecondary}>Was Machen Wir? </Text>
              <Text style={textStyles.paragraph}>
                Im Unterschied zu anderen Berufsgruppen müssen sich TänzerInnen
                nach einer relativ kurzen aktiven Bühnenlaufbahn beruflich neu
                orientieren (Transition). Oft in einem Alter, in dem in anderen
                Berufen erst richtig durchgestartet wird. So bestimmen während
                und zum Ende der Karriere oft Zweifel, Unsicherheit, große Leere
                und viele Fragen das Tänzerleben. Was kommt danach? Wer hilft
                durch den Dschungel aus Institutionen, Paragraphen und
                Richtlinien? Wo gibt es Beratung, Unterstützung, Begleitung,
                Bewusstseinsbildung und Sensibilisierung für einen erfolgreichen
                Transitionprozess?
              </Text>
              <Text style={textStyles.paragraph}>
                Wir sind Wegbegleiter und Unterstützer vom Ausbildungsbeginn
                über jedes Stadium der Karriere bis zum Abschluss des
                Transitionprozesses. Wir sind für alle BerufstänzerInnen offen,
                ob festangestellt oder freiberuflich tätig, ob an städtischen
                Bühnen, an Staatstheatern, beim Musical, Film oder Fernsehen.
              </Text>
            </>
          )}
          {props.english && (
            <>
              <Text style={textStyles.headerSecondary}>What we do </Text>
              <Text style={textStyles.paragraph}>
                Unlike other professionals, dancers need to reorient themselves
                professionally (transition) after a relatively short active
                stage career. Often at an age when other professions are just
                starting out.
              </Text>
              <Text style={textStyles.paragraph}>
                Thus, during and at the end of the career, doubts, insecurity,
                great emptiness and many questions often determine the dancer's
                life. What comes after? Who helps through the jungle of
                institutions, paragraphs and guidelines? Where can we find
                advice, support, guidance and awareness for a successful
                transition process?
              </Text>
              <Text style={textStyles.paragraph}>
                We are companions and supporters from the beginning of training
                through every stage of the career to the end of the transition
                process. We are open to all professional dancers, whether
                employed or freelance, working in municipal theaters, state
                theaters, musicals, film or television.
              </Text>
            </>
          )}
        </View>
      </ScrollView>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default WasMachenWir;

const styles = StyleSheet.create({
  header: {
    color: 'darkslategrey',
    fontSize: 26,
    padding: 20
  }
});
