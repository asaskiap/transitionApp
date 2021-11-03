import React from 'react';

import {Linking, Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Link from '../../components/articleComponents/link';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Ausbildung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader textStyle={{letterSpacing: 2, fontSize: 32}}>
          Ausbildungsbetriebe
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/teamwork.png')}
        />
        <Article>
          <Paragraph>
            Die Suche nach einer Ausbildung und einem Ausbildungsbetrieb kann
            sehr individuell und facettenreich sein, denn es gibt eine Vielzahl
            an verschiedensten Berufen und Bereichen in denen eine
            Berufsausbildung absolviert werden kann. Es gibt verschiedene
            Möglichkeiten um an einen Ausbildungsplatz zu kommen. So kann man
            beispielsweise direkt mit dem Betrieb der Wahl Kontakt aufnehmen
            oder sich zuerst bei Ausbildungs- oder Jobmessen oder Institutionen
            wie der IHK beraten lassen. Ein wichtiger Ansprechpartner ist dabei
            die Arbeitsagentur. Gerade im Rahmen einer beruflichen Veränderung,
            kann hier auch noch zusätzlich bei einer eventuellen Finanzierung in
            Form einer Umschulung oder eines Bildungsgutscheins weiter geholfen
            werden. Unter den folgenden Webseiten kann man sich auch über die
            Möglichkeiten einer Berufsausbildung informieren:
          </Paragraph>

          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.arbeitsagentur.de/m/ausbildungklarmachen/?pk_campaign=AusbildungKlarmachen&pk_source=google_paid&pk_medium=textad&pk_content=Performance'
              )
            }
          >
            https://www.arbeitsagentur.de/m/ausbildungklarmachen/?pk_campaign=AusbildungKlarmachen&pk_source=google_paid&pk_medium=textad&pk_content=Performance
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.ihk-berlin.de/ausbildung/infos-fuer-ausbildungsbetriebe/ausbildungsbetrieb-werden/wegweiser-fuer-ausbildungsbetriebe-2277902'
              )
            }
          >
            https://www.ihk-berlin.de/ausbildung/infos-fuer-ausbildungsbetriebe/
          </Link>
          <Link
            onPress={() => Linking.openURL('https://www.bibb.de/de/65925.php')}
          >
            https://www.bibb.de/de/65925.php
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.bmwi.de/Navigation/DE/Service/Ausbildungsberufe/ausbildungsberufe.html'
              )
            }
          >
            https://www.bmwi.de/Navigation/DE/Service/Ausbildungsberufe/ausbildungsberufe.html
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/'
              )
            }
          >
            https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/
          </Link>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Ausbildung;