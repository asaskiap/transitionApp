import React from 'react';
import colors from '../../assets/colors';

import Article from '../articleComponents/article';
import ArticleSubHeader from '../articleComponents/articleSubHeader';
import Paragraph from '../articleComponents/paragraph';

export const Handwerklich = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      <ArticleSubHeader>
        Du bist ein handwerklicher- technischer Typ
      </ArticleSubHeader>
      <Paragraph>
        Menschen dieses Typs arbeiten gerne mit ihren Händen oder mit
        Werkzeugen. Häufig kommen dabei auch technische Geräte zum Einsatz. Sie
        mögen es, körperlich und mit handwerklichem Geschick zu arbeiten.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Berufsfelder: Handwerk, Technik, Landwirtschaft
      </Paragraph>
    </Article>
  );
};

export const Forschend = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      <ArticleSubHeader>Du bist ein forschender Typ</ArticleSubHeader>
      <Paragraph>
        Menschen dieses Typs arbeiten gerne aufgabenorientiert und versuchen,
        Probleme auf intellektueller Eben zu lösen. Dabei setzen sie logisches
        Denken und wissenschaftliche Methoden ein. Sie sind neugierig und
        bereit, sich intensiv mit einzelnen Themen zu befassen.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Berufsfelder: Wissenschaft, Forschung
      </Paragraph>
    </Article>
  );
};

export const Künstlerisch = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      <ArticleSubHeader>
        Du bist ein künstlerisch- kreativer Typ
      </ArticleSubHeader>
      <Paragraph>
        Menschen dieses Typs arbeiten gerne mit dem eigenen Körper,
        Musikinstrumenten oder anderen Materialien. Künstlerische Gestaltung
        steht dabei im Vordergrund. Sie mögen es, sich selbst darin auszudrücken
        und die Kulturlandschaft zu bereichern.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Berufsfelder: Kunst, Musik, Theater, Schriftstellerei
      </Paragraph>
    </Article>
  );
};

export const Sozial = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      <ArticleSubHeader>Du bist ein sozialer Typ</ArticleSubHeader>
      <Paragraph>
        Menschen dieses Typs arbeiten gerne in Bereichen, in denen sie Menschen
        helfen können. Sie wollen andere pflegen, beraten, ausbilden oder
        unterstützen. Sie haben gute soziale Fähigkeiten und sehen das
        Wohlbefinden anderer im Zentrum ihrer Arbeit.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Berufsfelder: Gesundheitswesen, Beratung, Bildung/Schule
      </Paragraph>
    </Article>
  );
};

export const Wirtschaftlich = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      <ArticleSubHeader>
        Du bist ein wirtschaftlich- unternehmerischer Typ
      </ArticleSubHeader>
      <Paragraph>
        Menschen dieses Typs arbeiten gerne in Bereichen, die von Verkauf,
        Leitung und Organisation geprägt sind. Sie können wirtschaftlich denken
        und Menschen überzeugen. Sie haben gute kommunikative Kompetenzen und
        haben Interesse daran, Führungsverantwortung zu übernehmen.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Berufsfelder: Management, Verkauf
      </Paragraph>
    </Article>
  );
};

export const Verwaltend = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      <ArticleSubHeader>
        Du bist ein organisierend-verwaltender Typ
      </ArticleSubHeader>
      <Paragraph>
        Menschen dieses Typs arbeiten gerne in Bereichen, die ein hohes Ausmaß
        an Organisation verlangen. Sie sind gut im Umgang mit Zahlen,
        Informationen und Daten, über die sie leicht den Überblick behalten.
        Dabei geht es häufig um Aufgaben in der Verwaltung oder Buchhaltung.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Berufsfelder: Kaufmännische Berufe, Büro- und Schalterberufe,
        Serviceberufe
      </Paragraph>
    </Article>
  );
};
