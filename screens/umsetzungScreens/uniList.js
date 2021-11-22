import React from 'react';

import {Linking, Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Link from '../../components/articleComponents/link';

const UniversitaetenListe = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Liste mit Universitäten</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/spyglass.png')}
        />
        <Article>
          <Paragraph style={{marginTop: -40}}>
            Es gibt ein paar gute Seiten im Netz, auf denen eine Auflistung
            aller Universitäten und deren Studiengänge zu finden sind. Dort sind
            meist auch gleich nützliche Informationen mit angegeben, ob
            beispielsweise mit einem NC zu rechnen ist, ob der Studiengang im
            Winter- und Sommersemester angeboten wird, wie viele Studenten pro
            Jahr zugelassen werden oder was die möglichen Berufsfelder wären in
            denen man mit einem Abschluß in einem bestimmten Studienfach
            arbeiten kann. Die folgenden Seiten bieten dazu eine nützliche
            Übersicht, welche bei der ersten Orientierung oder
            ideen-generierender Suche helfen kann:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.hochschulkompass.de/hochschulen.html'
              )
            }
          >
            www.hochschulkompass.de/hochschulen.html
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://studiengaenge.zeit.de/hochschulen/land/deutschland?wt_ref=https:%2F%2Fwww.google.com%2F&wt_time=1625245417754'
              )
            }
          >
            studiengaenge.zeit.de/hochschulen/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www2.daad.de/deutschland/studienangebote/studiengang/de/'
              )
            }
          >
            www2.daad.de/deutschland/studienangebote/studiengang/de/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://studieren.de/landkarte-unis-deutschland.0.html'
              )
            }
          >
            studieren.de/landkarte-unis-deutschland.0.html
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default UniversitaetenListe;
