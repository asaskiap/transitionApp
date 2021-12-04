import React from 'react';

import {Modal, Linking, Dimensions} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import CloseButton from '../../components/buttons/closeButton';
import Link from '../../components/articleComponents/link';

const windowWidth = Dimensions.get('window').width;
const Nachweise = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>{props.english ? 'Proofs' : 'Nachweise'}</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/germanyIllustrations/letterbox_deutschland.png')}
        />
        <Article>
          {props.english ? (
            <Paragraph>
              General information on the subject of "Living and Working in
              Germany" and related issues such as the recognition of degrees,
              employment opportunities and social security, etc. can be found on
              the Internet platform of the Foreign Placement Office of the
              Federal Employment Agency
              www.ba-auslandsvermittlung.de/deutschland and on the EURES portal
              (European Employment Services) .
            </Paragraph>
          ) : (
            <Paragraph>
              Allgemeine Informationen zum Thema „Leben und Arbeiten in
              Deutschland” und damit verbundene Fragen wie z.B. die Anerkennung
              von Abschlüssen, Beschäftigungschancen und Sozialversicherung etc.
              finden Sie auf der Internetplattform der Auslandsvermittlung der
              Bundesagentur für
              Arbeit www.ba-auslandsvermittlung.de/deutschland sowie auf dem
              EURES-Portal (European Employment Services)
            </Paragraph>
          )}

          <Link onPress={() => Linking.openURL('http://ec.europa.eu/eures')}>
             ec.europa.eu/eures
          </Link>
          {props.english ? (
            <Paragraph>
              Information for emigrants and people working abroad is provided by
              the Information Service of the Federal Office of Administration
              (BVA)
            </Paragraph>
          ) : (
            <Paragraph>
              Informationen für Auswanderer und Auslandstätige bietet der
              Informationsdienst des Bundesverwaltungsamtes (BVA)
            </Paragraph>
          )}

          <Link onPress={() => Linking.openURL('http://www.bva.bund.de')}>
            www.bva.bund.de
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Nachweise;
