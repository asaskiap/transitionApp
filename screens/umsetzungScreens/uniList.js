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
        <ArticleHeader>
          {props.english ? 'List of universities' : 'Liste mit Universitäten'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/spyglass.png')}
        />
        <Article>
          {props.english ? (
            <Paragraph>
              There are a few good sites on the web where you can find a list of
              all universities and their study programs. There you can find
              useful information, e.g. if there is an NC, if the course of
              studies is offered in winter and summer semester, how many
              students are admitted per year or what the possible occupational
              fields are in which you can work with a degree in a certain field
              of study. The following pages offer a useful overview, which can
              help with the first orientation or idea-generating search:
            </Paragraph>
          ) : (
            <Paragraph>
              Es gibt ein paar gute Seiten im Netz, auf denen eine Auflistung
              aller Universitäten und deren Studiengänge zu finden sind. Dort
              sind meist auch gleich nützliche Informationen mit angegeben, ob
              beispielsweise mit einem NC zu rechnen ist, ob der Studiengang im
              Winter- und Sommersemester angeboten wird, wie viele Studenten pro
              Jahr zugelassen werden oder was die möglichen Berufsfelder wären
              in denen man mit einem Abschluß in einem bestimmten Studienfach
              arbeiten kann. Die folgenden Seiten bieten dazu eine nützliche
              Übersicht, welche bei der ersten Orientierung oder
              ideen-generierender Suche helfen kann:
            </Paragraph>
          )}

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
