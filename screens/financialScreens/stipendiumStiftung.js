import React from 'react';

import {Linking, Modal, TouchableOpacity, Text} from 'react-native';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import colors from '../../assets/colors';
import {sendEmail} from '../../utilities/sendEmail';

import CloseButton from '../../components/buttons/closeButton';
import Link from '../../components/articleComponents/link';

const StipendiumStiftung_DE = (props) => {
  return (
    <Article>
      <ArticleSubHeader>Die Stiftung Tanz vergibt Stipendien</ArticleSubHeader>
      <Paragraph>
        an Tanzschaffende im Übergang in einen neuen Beruf nach der aktiven
        Tanzkarriere. Jedes Jahr zum 30.3., 30.6. und 30.10. kann ein Antrag auf
        eine einmalige Förderung für z.B: Kurs- oder Studiengebühren,
        Fahrtkosten oder Kinderbetreuung während einer Ausbildung gestellt
        werden. Wer einen Antrag stellen will, sollte sich zuvor von der
        Geschäftsstelle der Stiftung zu seiner individuellen Transition beraten
        lassen- telefonisch, persönlich oder per E-mail. Einen Antrag stellen
        können alle professionellen TänzerInnen, die eine mind. 7 jährige
        Berufstätigkeit als festangestellter/-e oder freischaffender/e
        TänzerInnen nachweisen können. Davon müssen mind. 5 Jahre
        Berufstätigkeit in Deutschland nachgewiesen werden. Nicht EU- oder
        Schengen- Bürger benötigen eine unbefristete Aufenthaltsgenehmigung.
        Bewerbungsvoraussetzung für eine individuelle Transition-Förderung ist
        eine persönliche Transition-Beratung durch die Stiftung TANZ oder die
        Teilnahme an einem Transition-Workshop.
      </Paragraph>
      <Paragraph
        style={{fontWeight: 'bold', color: colors.accentDark, fontSize: 16}}
      >
        Bewerbungen bitte ausschließlich (Ausnahmefälle nach persönlicher
        Absprache) per Email als eine zusammengefügte PDF-Datei an:
      </Paragraph>
      <TouchableOpacity
        onPress={() => {
          sendEmail('alannapfeiffer@gmail.com', 'Stipendien Anfrage', '').then(
            () => {
              console.log('Your message was successfully sent!');
            }
          );
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.primary,
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 10,
            padding: 5
          }}
        >
           info@stiftung-tanz.com 
        </Text>
      </TouchableOpacity>

      <ArticleSubHeader>Statuten zur Vergabe des Stipendiums:</ArticleSubHeader>
      <Link
        onPress={() =>
          Linking.openURL(
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Statuten-zur-Vergabe-von-Unterst%C3%BCtzung-und-Stipendien.pdf'
          )
        }
      >
        stiftung-tanz.com
      </Link>
      <ArticleSubHeader>Antragsformular für Stipendien:</ArticleSubHeader>
      <Link
        onPress={() =>
          Linking.openURL(
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2021/03/Antragsformular-fuer-Stipendien-Stiftung-TANZ-1.pdf'
          )
        }
      >
        {' '}
        stiftung-tanz.com/.../Antragsformular-fuer-Stipendien-Stiftung-TANZ-1.pdf
      </Link>
      <ArticleSubHeader>
        Einkommensnachweis für Stipendiumsantrag:
      </ArticleSubHeader>
      <Link
        onPress={() =>
          Linking.openURL(
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Einkommensnachweis-Antrag-Stiftung-TANZ.pdf'
          )
        }
      >
        stiftung-tanz.com/.../Einkommensnachweis-Antrag-Stiftung-TANZ.pdf
      </Link>
    </Article>
  );
};

const StipendiumStiftung_EN = (props) => {
  return (
    <Article>
      <ArticleSubHeader>The Stiftung TANZ awards scholarships</ArticleSubHeader>
      <Paragraph>
        to dance professionals in transition to a new career after an active
        dance career. Each year on 3/30, 6/30, and 10/30, an application can be
        made for a one-time grant for such things as: course or tuition fees,
        travel expenses, or childcare during training. Those who wish to apply
        should first seek advice from the Stiftung TANZ's office on their
        individual transition - by telephone, in person or by e-mail. All
        professional dancers who can prove that they have worked for at least 7
        years as a permanent or freelance dancer can apply for a grant. Of
        these, at least 5 years of professional activity in Germany must be
        proven. Non-EU or Schengen citizens need a permanent residence permit.
        The prerequisite for an application for an individual Transition grant
        is a personal Transition consultation with the Stiftung TANZ or
        participation in a Transition workshop.
      </Paragraph>
      <Paragraph
        style={{fontWeight: 'bold', color: colors.accentDark, fontSize: 16}}
      >
        Please send applications exclusively (exceptions by personal
        arrangement) by email as one merged PDF file to: info@stiftung-tanz.com.
      </Paragraph>
      <TouchableOpacity
        onPress={() => {
          sendEmail('alannapfeiffer@gmail.com', 'Stipendien Anfrage', '').then(
            () => {
              console.log('Your message was successfully sent!');
            }
          );
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: colors.primary,
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 10,
            padding: 5
          }}
        >
           info@stiftung-tanz.com 
        </Text>
      </TouchableOpacity>
      <ArticleSubHeader>
        Statutes for the awarding of the scholarship:
      </ArticleSubHeader>
      <Link
        onPress={() =>
          Linking.openURL(
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Statuten-zur-Vergabe-von-Unterst%C3%BCtzung-und-Stipendien.pdf'
          )
        }
      >
        stiftung-tanz.com
      </Link>
      <ArticleSubHeader>Application form for scholarships :</ArticleSubHeader>
      <Link
        onPress={() =>
          Linking.openURL(
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2021/03/Antragsformular-fuer-Stipendien-Stiftung-TANZ-1.pdf'
          )
        }
      >
        stiftung-tanz.com/.../Antragsformular-fuer-Stipendien-Stiftung-TANZ-1.pdf
      </Link>
      <ArticleSubHeader>
        Proof of income for scholarship application:
      </ArticleSubHeader>
      <Link
        onPress={() =>
          Linking.openURL(
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Einkommensnachweis-Antrag-Stiftung-TANZ.pdf'
          )
        }
      >
        stiftung-tanz.com/.../Einkommensnachweis-Antrag-Stiftung-TANZ.pdf
      </Link>
    </Article>
  );
};

const StipendiumStiftung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Stipendium der Stiftung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/Message.png')}
        ></ArticleIllustration>
        {props.english ? <StipendiumStiftung_EN /> : <StipendiumStiftung_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default StipendiumStiftung;
