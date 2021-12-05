import React from 'react';
import colors from '../../assets/colors';

import Article from '../articleComponents/article';
import ArticleSubHeader from '../articleComponents/articleSubHeader';
import Paragraph from '../articleComponents/paragraph';

export const Handwerklich = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      {props.eng ? (
        <>
          <ArticleSubHeader> Manual-technical </ArticleSubHeader>
          <Paragraph>
            People of this type like to work with their hands or with tools.
            Technical equipment is often used in the process. They like to work
            physically and with manual dexterity.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Occupational fields: Crafts, technology, agriculture
          </Paragraph>
        </>
      ) : (
        <>
          <ArticleSubHeader>
            Du bist ein handwerklicher- technischer Typ
          </ArticleSubHeader>
          <Paragraph>
            Menschen dieses Typs arbeiten gerne mit ihren Händen oder mit
            Werkzeugen. Häufig kommen dabei auch technische Geräte zum Einsatz.
            Sie mögen es, körperlich und mit handwerklichem Geschick zu
            arbeiten.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Berufsfelder: Handwerk, Technik, Landwirtschaft
          </Paragraph>
        </>
      )}
    </Article>
  );
};

export const Forschend = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      {props.eng ? (
        <>
          <ArticleSubHeader>Researching</ArticleSubHeader>
          <Paragraph>
            People of this type like to work in a task-oriented way and try to
            solve problems on an intellectual level. They use logical thinking
            and scientific methods. They are curious and willing to study
            individual topics intensive
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Occupational fields: Science, rese
          </Paragraph>
        </>
      ) : (
        <>
          <ArticleSubHeader>Du bist ein forschender Typ</ArticleSubHeader>
          <Paragraph>
            Menschen dieses Typs arbeiten gerne aufgabenorientiert und
            versuchen, Probleme auf intellektueller Eben zu lösen. Dabei setzen
            sie logisches Denken und wissenschaftliche Methoden ein. Sie sind
            neugierig und bereit, sich intensiv mit einzelnen Themen zu
            befassen.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Berufsfelder: Wissenschaft, Forschung
          </Paragraph>
        </>
      )}
    </Article>
  );
};

export const Künstlerisch = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      {props.eng ? (
        <>
          <ArticleSubHeader>Artistic-creative</ArticleSubHeader>
          <Paragraph>
            People of this type like to work with their own bodies, musical
            instruments or other materials. Artistic creation is in the
            foreground. They like to express themselves in it and enrich the
            cultural landscape.{' '}
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Occupational fields: Art, music, theater, writing
          </Paragraph>
        </>
      ) : (
        <>
          {' '}
          <ArticleSubHeader>
            Du bist ein künstlerisch- kreativer Typ
          </ArticleSubHeader>
          <Paragraph>
            Menschen dieses Typs arbeiten gerne mit dem eigenen Körper,
            Musikinstrumenten oder anderen Materialien. Künstlerische Gestaltung
            steht dabei im Vordergrund. Sie mögen es, sich selbst darin
            auszudrücken und die Kulturlandschaft zu bereichern.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Berufsfelder: Kunst, Musik, Theater, Schriftstellerei
          </Paragraph>
        </>
      )}
    </Article>
  );
};

export const Sozial = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      {props.eng ? (
        <>
          <ArticleSubHeader>Social</ArticleSubHeader>
          <Paragraph>
            People of this type like to work in areas where they can help
            people. They want to care for, counsel, educate or support others.
            They have good social skills and see the well-being of others at the
            center of their work.{' '}
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Career fields: Healthcare, counseling, education/school{' '}
          </Paragraph>
        </>
      ) : (
        <>
          <ArticleSubHeader>Du bist ein sozialer Typ</ArticleSubHeader>
          <Paragraph>
            Menschen dieses Typs arbeiten gerne in Bereichen, in denen sie
            Menschen helfen können. Sie wollen andere pflegen, beraten,
            ausbilden oder unterstützen. Sie haben gute soziale Fähigkeiten und
            sehen das Wohlbefinden anderer im Zentrum ihrer Arbeit.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Berufsfelder: Gesundheitswesen, Beratung, Bildung/Schule
          </Paragraph>
        </>
      )}
    </Article>
  );
};

export const Wirtschaftlich = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      {props.eng ? (
        <>
          <ArticleSubHeader>Business/Entrepreneurial</ArticleSubHeader>
          <Paragraph>
            People of this type enjoy working in areas characterized by sales,
            management, and organization. They can think economically and
            persuade people. They have good communication skills and are
            interested in taking on leadership responsibilities.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Occupational fields: Management, sales{' '}
          </Paragraph>
        </>
      ) : (
        <>
          <ArticleSubHeader>
            Du bist ein wirtschaftlich- unternehmerischer Typ
          </ArticleSubHeader>
          <Paragraph>
            Menschen dieses Typs arbeiten gerne in Bereichen, die von Verkauf,
            Leitung und Organisation geprägt sind. Sie können wirtschaftlich
            denken und Menschen überzeugen. Sie haben gute kommunikative
            Kompetenzen und haben Interesse daran, Führungsverantwortung zu
            übernehmen.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Berufsfelder: Management, Verkauf
          </Paragraph>
        </>
      )}
    </Article>
  );
};

export const Verwaltend = (props) => {
  return (
    <Article style={{marginHorizontal: 20}}>
      {props.eng ? (
        <>
          <ArticleSubHeader>Organizing-administrating</ArticleSubHeader>
          <Paragraph>
            People of this type like to work in areas that require a high degree
            of organization. They are good at handling figures, information and
            data, which they can easily keep track of. This often involves tasks
            in administration or accounting.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Occupational fields: Commercial professions, office and counter
            professions, service professions.{' '}
          </Paragraph>
        </>
      ) : (
        <>
          <ArticleSubHeader>
            Du bist ein organisierend-verwaltender Typ
          </ArticleSubHeader>
          <Paragraph>
            Menschen dieses Typs arbeiten gerne in Bereichen, die ein hohes
            Ausmaß an Organisation verlangen. Sie sind gut im Umgang mit Zahlen,
            Informationen und Daten, über die sie leicht den Überblick behalten.
            Dabei geht es häufig um Aufgaben in der Verwaltung oder Buchhaltung.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Berufsfelder: Kaufmännische Berufe, Büro- und Schalterberufe,
            Serviceberufe
          </Paragraph>
        </>
      )}
    </Article>
  );
};
