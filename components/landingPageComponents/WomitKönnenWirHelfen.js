import React from 'react';

import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import colors from '../../assets/colors';

import textStyles from '../../styles/generalTextStyles';
import Paragraph from '../articleComponents/paragraph';

import CloseButton from '../buttons/closeButton';

const WomitHelfen = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <View style={textStyles.fullScreenContainer}>
        <ScrollView>
          <Text style={[textStyles.headerSecondary, {marginTop: '30%'}]}>
            Wobei Können Wir helfen?
          </Text>
          <Paragraph>
            Die Stiftung TANZ bietet professionellen Tänzern:{' '}
          </Paragraph>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              ⦁ Informationen (alle wichtigen Informationen rund um den
              Transitionprozess)
            </Text>
            <Text style={styles.listItem}>
              ⦁ Bürokratische und praktische Unterstützung (beispielsweise in
              der Form von Anschreiben an Institutionen wie dem Arbeitsamt)
            </Text>
            <Text style={styles.listItem}>
              ⦁ Beratung (Coaching und psychologische Betreuung des
              Transitionprozess)
            </Text>
            <Text style={styles.listItem}>⦁ Workshops </Text>
            <Text style={styles.listItem}>
              ⦁ Stipendium für die Weiterbildung
            </Text>
          </View>
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
  },
  list: {
    padding: 20,
    alignItems: 'center'
  },

  listItem: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.text,
    padding: 8
  }
});
