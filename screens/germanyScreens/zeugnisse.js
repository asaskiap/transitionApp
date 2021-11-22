import React from 'react';

import {Modal, Text, Dimensions, Linking} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import {List, ListItem} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import CloseButton from '../../components/buttons/closeButton';

const windowHeight = Dimensions.get('window').height;

const Zeugnisse = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Anerkennung von ausländischen Zeugnissen</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/germanyIllustrations/relax.png')}
        />
        <Article>
          <ArticleSubHeader>Zeugnisanerkennung</ArticleSubHeader>
          <Paragraph>
            In Deutschland verfügt jedes Bundesland über eine
            „Zeugnisanerkennungsstelle“, die für die Bewertung von Zeugnissen
            als Nachweis der Hochschulreife, der Fachhochschulreife, eines
            mittleren Schulabschlusses oder des erfolgreichen
            Hauptschulabschlusses zuständig ist.
          </Paragraph>
          <Paragraph>
            Aufgaben einer Zeugnisanerkennungsstelle sind folgende:
          </Paragraph>
          <List>
            <ListItem>
              Bewertung von in- und ausländischen Bildungsnachweisen für den
              Zugang zu den Universitäten und Fachhochschulen.
            </ListItem>
            <ListItem>
              Bewertung von in- und ausländischen Bildungsnachweisen als
              Nachweis eines dem Hauptschulabschluss oder dem mittleren
              Schulabschluss gleichwertigen Schulabschlusses.
            </ListItem>
            <ListItem>
              Gleichstellung mit im schulischen Bereich erworbenen beruflichen
              Abschlüssen (Berufsfachschulen, Fachschulen).
            </ListItem>
          </List>
          <Paragraph>
            Ferner kann die Bewertung von ausländischen Bildungsnachweisen für
            den Zugang zu den Universitäten und Fachhochschulen im Rahmen einer
            Bewerbung um einen Studienplatz auch direkt bei den jeweiligen
            Hochschulen oder von uni-assist vorgenommen werden.
          </Paragraph>
          <Paragraph>
            Die Zentrale für ausländisches Bildungswesen (ZAB), die im
            Sekretariat der Kultusministerkonferenz (KMK) angesiedelt ist,
            bietet seit Januar 2010 auch für Privatpersonen mit einem
            ausländischen Hochschulabschluss Zeugnisbewertungen gegen Gebühr an.
          </Paragraph>
          <Paragraph>Wer hilft weiter in Anerkennungsfragen?</Paragraph>
          <Paragraph>
            Die Berater der ZAV Auslandsvermittlung informieren und beraten Sie
            in allen Fragen zur Anerkennung Ihrer ausländischen Qualifikationen
            und zum deutschen Arbeitsmarkt.
          </Paragraph>
          <Paragraph>Info-Center der ZAV: </Paragraph>
          <Paragraph>Telefon: 0228 713-1313 </Paragraph>
          <Paragraph>E-Mail:</Paragraph>
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.primaryDark,
              fontSize: 14,
              alignSelf: 'center'
            }}
          >
            zav-auslandsvermittlung@arbeitsagentur.de
          </Text>

          <Paragraph>
            Eine zusammenfassende Beschreibung der Dienstleistung sowie
            Ansprechpartner finden Sie auch folgendem Flyer zur
            Anerkennungsberatung:
          </Paragraph>

          <Link
            onPress={() =>
              Linking.openURL(
                'http://www.ba-auslandsvermittlung.de/lang_de/nn_7688/SharedDocs/Publikationen/ZAV/ZAV-Anerkennungsberatung-Flyer,templateId=raw,property=publicationFile.pdf'
              )
            }
          >
            http://www.ba-auslandsvermittlung.de/
          </Link>

          <Paragraph>
            Informationssystem zur Anerkennung ausländischer Bildungsabschlüssen
            (Datenbank der Kultusminister-Konferenz): 
          </Paragraph>

          <Link onPress={() => Linking.openURL('http://www.anabin.de/')}>
            http://www.anabin.de/
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Zeugnisse;
