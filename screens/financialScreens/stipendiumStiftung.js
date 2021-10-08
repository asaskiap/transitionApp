import React from 'react';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import colors from '../../assets/colors';

const StipendiumStiftung = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Stipendium der Stiftung</ArticleHeader>
      <ArticleIllustration
        image={require('../../assets/illustrations/Rain.png')}
        imageContainerStyle={{marginVertical: 50, paddingBottom: 70}}
      ></ArticleIllustration>
      <Article>
        <ArticleSubHeader>
          Die Stiftung Tanz vergibt Stipendien
        </ArticleSubHeader>
        <Paragraph>
          an Tanzschaffende im Übergang in einen neuen Beruf nach der aktiven
          Tanzkarriere. Jedes Jahr zum 30.3., 30.6. und 30.10. kann ein Antrag
          auf eine einmalige Förderung für z.B: Kurs- oder Studiengebühren,
          Fahrtkosten oder Kinderbetreuung während einer Ausbildung gestellt
          werden. Wer einen Antrag stellen will, sollte sich zuvor von der
          Geschäftsstelle der Stiftung zu seiner individuellen Transition
          beraten lassen- telefonisch, persönlich oder per E-mail. Einen Antrag
          stellen können alle professionellen Tänzer/-innen, die eine mind. 7
          jährige Berufstätigkeit als festangestellter/-e oder freischaffender/e
          Tänzer/-innen nachweisen können. Davon müssen mind. 5 Jahre
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
        <Paragraph
          style={{
            fontWeight: 'bold',
            color: colors.primary,
            fontSize: 16,
            alignSelf: 'center',
            backgroundColor: colors.secondaryLight,
            padding: 5
          }}
        >
           info@stiftung-tanz.com 
        </Paragraph>
      </Article>

      <Article>
        <ArticleSubHeader>
          Statuten zur Vergabe des Stipendiums:
        </ArticleSubHeader>
        <Paragraph>
          https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Statuten-zur-Vergabe-von-Unterst%C3%BCtzung-und-Stipendien.pdf
        </Paragraph>
        <ArticleSubHeader>Antragsformular für Stipendien:</ArticleSubHeader>
        <Paragraph>
          https://stiftung-tanz.com/wordpress/wp-content/uploads/2021/03/Antragsformular-fuer-Stipendien-Stiftung-TANZ-1.pdf
        </Paragraph>
        <ArticleSubHeader>
          Einkommensnachweis für Stipendiumsantrag:
        </ArticleSubHeader>
        <Paragraph>
          https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Einkommensnachweis-Antrag-Stiftung-TANZ.pdf
        </Paragraph>
      </Article>
    </ScrollableScreenContainer>
  );
};

export default StipendiumStiftung;
