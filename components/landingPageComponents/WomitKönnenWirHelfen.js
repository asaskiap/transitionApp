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

import {Entypo} from '@expo/vector-icons';

import textStyles from '../../styles/generalTextStyles';
import {List, ListItem} from '../articleComponents/list';
import Paragraph from '../articleComponents/paragraph';

import CloseButton from '../buttons/closeButton';
import ScrollableScreenContainer from '../scrollableScreen';

const WomitHelfen = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer style={{justifyContent: 'center'}}>
        <Entypo name="light-bulb" size={28} color={colors.primaryDark} />
        <Text style={textStyles.headerSecondary}>Wobei Können Wir helfen?</Text>
        <Paragraph>
          Die Stiftung TANZ bietet professionellen Tänzern:{' '}
        </Paragraph>
        <List>
          <ListItem>
            Informationen (alle wichtigen Informationen rund um den
            Transitionprozess)
          </ListItem>
          <ListItem style={styles.listItem}>
            Bürokratische und praktische Unterstützung (beispielsweise in der
            Form von Anschreiben an Institutionen wie dem Arbeitsamt)
          </ListItem>
          <ListItem style={styles.listItem}>
            Beratung (Coaching und psychologische Betreuung des
            Transitionprozess)
          </ListItem>
          <ListItem style={styles.listItem}>Workshops </ListItem>
          <ListItem style={styles.listItem}>
            Stipendium für die Weiterbildung
          </ListItem>
        </List>
      </ScrollableScreenContainer>
      <CloseButton close={props.close}></CloseButton>
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
