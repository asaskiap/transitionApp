import React from 'react';

import {Linking, Modal, Dimensions} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Link from '../../components/articleComponents/link';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const windowHeight = Dimensions.get('window').height;

const Ausbildung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Vocational Training' : 'Ausbildungsbetriebe'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/welcome_umsetzung.png')}
        />
        {props.english && (
          <Article>
            <Paragraph>
              The search for an apprenticeship and a training company can be
              very individual and multifaceted, because there are a variety of
              different professions and areas in which vocational training can
              be completed. There are various ways to get an apprenticeship. For
              example, you can contact the company of your choice directly or
              seek advice first at training or job fairs or institutions such as
              the Chamber of Industry and Commerce. An important contact is the
              employment agency. Particularly in the context of a career change,
              this agency can also provide additional help with possible
              financing in the form of retraining or an education voucher. The
              following websites also provide information about the
              possibilities of vocational training:
            </Paragraph>
          </Article>
        )}
        {!props.english && (
          <Article>
            <Paragraph>
              Die Suche nach einer Ausbildung und einem Ausbildungsbetrieb kann
              sehr individuell und facettenreich sein, denn es gibt eine
              Vielzahl an verschiedensten Berufen und Bereichen in denen eine
              Berufsausbildung absolviert werden kann. Es gibt verschiedene
              M??glichkeiten um an einen Ausbildungsplatz zu kommen. So kann man
              beispielsweise direkt mit dem Betrieb der Wahl Kontakt aufnehmen
              oder sich zuerst bei Ausbildungs- oder Jobmessen oder
              Institutionen wie der IHK beraten lassen. Ein wichtiger
              Ansprechpartner ist dabei die Arbeitsagentur. Gerade im Rahmen
              einer beruflichen Ver??nderung, kann hier auch noch zus??tzlich bei
              einer eventuellen Finanzierung in Form einer Umschulung oder eines
              Bildungsgutscheins weiter geholfen werden. Unter den folgenden
              Webseiten kann man sich auch ??ber die M??glichkeiten einer
              Berufsausbildung informieren:
            </Paragraph>
          </Article>
        )}
        <Article>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.arbeitsagentur.de/m/ausbildungklarmachen/?pk_campaign=AusbildungKlarmachen&pk_source=google_paid&pk_medium=textad&pk_content=Performance'
              )
            }
          >
            www.arbeitsagentur.de/m/ausbildungklarmachen/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.ihk-berlin.de/ausbildung/infos-fuer-ausbildungsbetriebe/ausbildungsbetrieb-werden/wegweiser-fuer-ausbildungsbetriebe-2277902'
              )
            }
          >
            www.ihk-berlin.de/ausbildung/infos-fuer-ausbildungsbetriebe/
          </Link>
          <Link
            onPress={() => Linking.openURL('https://www.bibb.de/de/65925.php')}
          >
            www.bibb.de/de/65925.php
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.bmwi.de/Navigation/DE/Service/Ausbildungsberufe/ausbildungsberufe.html'
              )
            }
          >
            www.bmwi.de/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/'
              )
            }
          >
            planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Ausbildung;
