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
          <Text style={textStyles.headerSecondary}>Was Machen Wir? </Text>
          <Text style={textStyles.paragraph}>
            Im Unterschied zu anderen Berufsgruppen müssen sich Tänzer nach
            einer relativ kurzen aktiven Bühnenlaufbahn beruflich neu
            orientieren (Transition). Oft in einem Alter, in dem in anderen
            Berufen erst richtig durchgestartet wird. So bestimmen während und
            zum Ende der Karriere oft Zweifel, Unsicherheit, große Leere und
            viele Fragen das Tänzerleben. Was kommt danach? Wer hilft durch den
            Dschungel aus Institutionen, Paragraphen und Richtlinien? Wo gibt es
            Beratung, Unterstützung, Begleitung, Bewusstseinsbildung und
            Sensibilisierung für einen erfolgreichen Transitionprozess?
          </Text>
          <Text style={textStyles.paragraph}>
            Wir sind Wegbegleiter und Unterstützer vom Ausbildungsbeginn über
            jedes Stadium der Karriere bis zum Abschluss des
            Transitionprozesses. Wir sind für alle Berufstänzer offen, ob
            festangestellt oder freiberuflich tätig, ob an städtischen Bühnen,
            an Staatstheatern, beim Musical, Film oder Fernsehen.
          </Text>
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
