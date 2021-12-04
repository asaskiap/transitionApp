import React from 'react';

import {Modal, Text, Dimensions, Linking, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import {List, ListItem} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import {sendEmail} from '../../utilities/sendEmail';

import CloseButton from '../../components/buttons/closeButton';

const windowHeight = Dimensions.get('window').height;

const Zeugnisse_DE = (props) => {
  return (
    <Article>
      <ArticleSubHeader>Zeugnisanerkennung</ArticleSubHeader>
      <Paragraph>
        In Deutschland verfügt jedes Bundesland über eine
        „Zeugnisanerkennungsstelle“, die für die Bewertung von Zeugnissen als
        Nachweis der Hochschulreife, der Fachhochschulreife, eines mittleren
        Schulabschlusses oder des erfolgreichen Hauptschulabschlusses zuständig
        ist.
      </Paragraph>
      <Paragraph>
        Aufgaben einer Zeugnisanerkennungsstelle sind folgende:
      </Paragraph>
      <List>
        <ListItem>
          Bewertung von in- und ausländischen Bildungsnachweisen für den Zugang
          zu den Universitäten und Fachhochschulen.
        </ListItem>
        <ListItem>
          Bewertung von in- und ausländischen Bildungsnachweisen als Nachweis
          eines dem Hauptschulabschluss oder dem mittleren Schulabschluss
          gleichwertigen Schulabschlusses.
        </ListItem>
        <ListItem>
          Gleichstellung mit im schulischen Bereich erworbenen beruflichen
          Abschlüssen (Berufsfachschulen, Fachschulen).
        </ListItem>
      </List>
      <Paragraph>
        Ferner kann die Bewertung von ausländischen Bildungsnachweisen für den
        Zugang zu den Universitäten und Fachhochschulen im Rahmen einer
        Bewerbung um einen Studienplatz auch direkt bei den jeweiligen
        Hochschulen oder von uni-assist vorgenommen werden.
      </Paragraph>
      <Paragraph>
        Die Zentrale für ausländisches Bildungswesen (ZAB), die im Sekretariat
        der Kultusministerkonferenz (KMK) angesiedelt ist, bietet seit Januar
        2010 auch für Privatpersonen mit einem ausländischen Hochschulabschluss
        Zeugnisbewertungen gegen Gebühr an.
      </Paragraph>
      <Paragraph>Wer hilft weiter in Anerkennungsfragen?</Paragraph>
      <Paragraph>
        Die Berater der ZAV Auslandsvermittlung informieren und beraten Sie in
        allen Fragen zur Anerkennung Ihrer ausländischen Qualifikationen und zum
        deutschen Arbeitsmarkt.
      </Paragraph>
      <Paragraph>Info-Center der ZAV: </Paragraph>
      <Paragraph>Telefon: 0228 713-1313 </Paragraph>
      <Paragraph>E-Mail:</Paragraph>
      <TouchableOpacity
        onPress={() => {
          sendEmail('alannapfeiffer@gmail.com', 'Vermittlungsanfrage', '').then(
            () => {
              console.log('Your message was successfully sent!');
            }
          );
        }}
      >
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
      </TouchableOpacity>

      <Paragraph>
        Eine zusammenfassende Beschreibung der Dienstleistung sowie
        Ansprechpartner finden Sie auch folgendem Flyer zur
        Anerkennungsberatung:
      </Paragraph>

      <Link
        onPress={() =>
          Linking.openURL(
            'https://www.arbeitsagentur.de/vor-ort/zav/startseite'
          )
        }
      >
        www.ba-auslandsvermittlung.de/
      </Link>

      <Paragraph>
        Informationssystem zur Anerkennung ausländischer Bildungsabschlüssen
        (Datenbank der Kultusminister-Konferenz): 
      </Paragraph>

      <Link onPress={() => Linking.openURL('http://www.anabin.de/')}>
        www.anabin.de/
      </Link>
    </Article>
  );
};

const Zeugnisse_EN = (props) => {
  return (
    <Article>
      <ArticleSubHeader>Certificate recognition</ArticleSubHeader>
      <Paragraph>
        In Germany, each federal state has a "Zeugnisanerkennungsstelle"
        (certificate recognition office), which is responsible for evaluating
        certificates as proof of university entrance qualification, a technical
        college entrance qualification, an intermediate school leaving
        certificate or a successful secondary general school leaving
        certificate.
      </Paragraph>
      <Paragraph>
        Tasks of a Zeugnisanerkennungsstelle are the following:
      </Paragraph>
      <List>
        <ListItem>
          Evaluation of domestic and foreign educational certificates for
          admission to universities and universities of applied sciences.
        </ListItem>
        <ListItem>
          Evaluation of domestic and foreign educational certificates as proof
          of a school-leaving qualification equivalent to the
          Hauptschulabschluss or the mittlere Schulabschluss.
        </ListItem>
        <ListItem>
          Equalization with vocational qualifications acquired in the school
          sector (vocational schools, technical schools).
        </ListItem>
      </List>
      <Paragraph>
        * Furthermore, the evaluation of foreign educational certificates for
        admission to universities and universities of applied sciences in the
        context of an application for a study place can also be carried out
        directly at the respective universities or by uni-assist.
      </Paragraph>
      <Paragraph>
        The Central Office for Foreign Education (ZAB), which is located in the
        Secretariat of the Standing Conference of the Ministers of Education and
        Cultural Affairs of the Länder in the Federal Republic of Germany (KMK),
        has also been offering certificate evaluations for private individuals
        with a foreign university degree for a fee since January 2010.
      </Paragraph>
      <Paragraph> Who can help with recognition issues?</Paragraph>
      <Paragraph>
        The advisors at the ZAV International Placement Service will inform and
        advise you on all questions regarding the recognition of your foreign
        qualifications and the German labor market.
      </Paragraph>
      <Paragraph>Info-Center:</Paragraph>
      <Paragraph>Telefon: 0228 713-1313 </Paragraph>
      <Paragraph>E-Mail:</Paragraph>
      <TouchableOpacity
        onPress={() => {
          sendEmail('alannapfeiffer@gmail.com', 'Vermittlungsanfrage', '').then(
            () => {
              console.log('Your message was successfully sent!');
            }
          );
        }}
      >
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
      </TouchableOpacity>

      <Paragraph>
        A summary description of the service and contact persons can also be
        found in the following flyer on recognition consulting:
      </Paragraph>

      <Link
        onPress={() =>
          Linking.openURL(
            'https://www.arbeitsagentur.de/vor-ort/zav/startseite'
          )
        }
      >
        www.ba-auslandsvermittlung.de/
      </Link>

      <Paragraph>
        Information system for the recognition of foreign educational
        qualifications (Daten-bank der Kultusminister-Konferenz):
      </Paragraph>

      <Link onPress={() => Linking.openURL('http://www.anabin.de/')}>
        www.anabin.de/
      </Link>
    </Article>
  );
};

const Zeugnisse = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english
            ? 'Foreign certificate recognition'
            : 'Anerkennung von ausländischen Zeugnissen'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/germanyIllustrations/relax.png')}
        />
        {props.english ? <Zeugnisse_EN /> : <Zeugnisse_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Zeugnisse;
