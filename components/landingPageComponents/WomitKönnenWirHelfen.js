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
    <Modal visible={props.isVisible} animationType={'slide'} transparent>
      <ScrollableScreenContainer
        style={{
          justifyContent: 'center',
          backgroundColor: 'rgba(247, 252, 252, 0.95)',
          paddingTop: 40
        }}
      >
        <Entypo name="light-bulb" size={28} color={colors.primaryDark} />

        {!props.english && (
          <>
            <Text style={textStyles.headerSecondary}>
              Wobei Können Wir helfen?
            </Text>
            <Paragraph
              style={{textAlign: 'center', fontSize: 20, marginBottom: -10}}
            >
              Die Stiftung TANZ bietet professionellen TänzernInnen:
            </Paragraph>
            <List>
              <ListItem>
                Informationen (alle wichtigen Informationen rund um den
                Transitionprozess)
              </ListItem>
              <ListItem>
                Bürokratische und praktische Unterstützung (beispielsweise in
                der Form von Anschreiben an Institutionen wie dem Arbeitsamt)
              </ListItem>
              <ListItem>
                Beratung (Coaching und psychologische Betreuung des
                Transitionprozess)
              </ListItem>
              <ListItem>Workshops </ListItem>
              <ListItem>Stipendium für die Weiterbildung</ListItem>
            </List>
          </>
        )}
        {props.english && (
          <>
            <Text style={textStyles.headerSecondary}>How we can help </Text>
            <Paragraph
              style={{textAlign: 'center', fontSize: 20, marginBottom: -10}}
            >
              The Stiftung TANZ offers professional dancers:
            </Paragraph>
            <List>
              <ListItem>
                Information (all important information about the transition
                process)
              </ListItem>
              <ListItem>
                Bureaucratic and practical support (for example in the form of
                letters to institutions such as the employment office)
              </ListItem>
              <ListItem>
                Counseling (coaching and psychological support for the
                transition process)
              </ListItem>
              <ListItem>workshops</ListItem>
              <ListItem>Scholarship for further education</ListItem>
            </List>
          </>
        )}
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
