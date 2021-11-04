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
        <ArticleHeader>Nachweise</ArticleHeader>
        <ArticleIllustration
          imageContainerStyle={{marginBottom: -10}}
          imageStyle={{maxWidth: windowWidth * 0.9}}
          image={require('../../assets/illustrations/germanyIllustrations/letterbox_deutschland.png')}
        />
        <Article>
          <Paragraph>
            Allgemeine Informationen zum Thema „Leben und Arbeiten in
            Deutschland” und damit verbundene Fragen wie z.B. die Anerkennung
            von Abschlüssen, Beschäftigungschancen und Sozialversicherung etc.
            finden Sie auf der Internetplattform der Auslandsvermittlung der
            Bundesagentur für
            Arbeit www.ba-auslandsvermittlung.de/deutschland sowie auf dem
            EURES-Portal (European Employment Services)
          </Paragraph>
          <Link onPress={() => Linking.openURL('http://ec.europa.eu/eures')}>
             http://ec.europa.eu/eures
          </Link>
          <Paragraph>
            Informationen für Auswanderer und Auslandstätige bietet der
            Informationsdienst des Bundesverwaltungsamtes (BVA)
          </Paragraph>
          <Link onPress={() => Linking.openURL('http://www.bva.bund.de')}>
            http://www.bva.bund.de
          </Link>
        </Article>
        <CloseButton close={props.close} />
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Nachweise;
