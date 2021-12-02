import React from 'react';

import {Linking, Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import {List, ListItem} from '../../components/articleComponents/list';
import Link from '../../components/articleComponents/link';

const Studienplatzsuche = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english
            ? 'Searching for a place to study'
            : 'Studienplatzsuche'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/search.png')}
        />
        {props.english ? (
          <Article>
            <ArticleSubHeader>
              How do I go about looking for a place to study?
            </ArticleSubHeader>
            <Paragraph>
              First, it is important to ask yourself a few questions:
            </Paragraph>
            <List>
              <ListItem>What do I want to study?</ListItem>
              <ListItem>
                Do I meet the requirements? (Abitur - Fachgebundene
                Hochschulreife - Fachhochschulreife - studying without Abitur)
              </ListItem>
              <ListItem>
                How do I want to study (full-time - part-time, face-to-face
                studies - distance learning - dual studies)?
              </ListItem>
              <ListItem>
                At which universities can or would I like to study (university -
                FH, state - private, etc.)?
              </ListItem>
              <ListItem>
                Would a move to another city be conceivable, if necessary?
              </ListItem>
            </List>
            <Paragraph>
              Once you have answered these questions, there are a number of
              websites that can be helpful in your search for a place to study.
              The site www.hochschulkompass.de is a good way to start the
              search. There, one can find not only a lot of information about
              courses and universities, but also all about studying, including
              requirements, application and financing.
            </Paragraph>
            <Paragraph>The site</Paragraph>
            <Link onPress={() => Linking.openURL('https://www.studienwahl.de')}>
              www.studienwahl.de
            </Link>
            <Paragraph>
              can be just as helpful. There is also an annual print edition with
              an overview of the various courses of study and universities.{' '}
            </Paragraph>
            <Paragraph>
              Once you have found a suitable place, you can start the
              application process.
            </Paragraph>
          </Article>
        ) : (
          <Article>
            <ArticleSubHeader>
              Wie gehe ich vor, wenn ich einen Studienplatz suche?
            </ArticleSubHeader>
            <Paragraph>
              Zunächst ist es wichtig, sich einige Fragen zu stellen:
            </Paragraph>
            <List>
              <ListItem>Was möchte ich studieren?</ListItem>
              <ListItem>
                Erfülle ich die Voraussetzungen? (Abitur – Fachgebundene
                Hochschulreife – Fachhochschulreife – Studieren ohne Abitur)
              </ListItem>
              <ListItem>
                Wie möchte ich studieren (Vollzeit – Teilzeit, Präsenzstudium –
                Fernstudium – Duales Studium)
              </ListItem>
              <ListItem>
                An welchen Hochschulen kann oder möchte ich das studieren
                (Universität – FH, staatlich – privat, etc.)?
              </ListItem>
              <ListItem>
                Wäre ein Umzug in eine andere Stadt denkbar, falls nötig?
              </ListItem>
            </List>
            <Paragraph>
              Hat man diese Fragen beantwortet, gibt es einige Webseiten, die
              bei der Suche nach einem Studienplatz hilfreich sein können. Die
              Seite www.hochschulkompass.de ist eine gute Möglichkeit, um die
              Suche zu starten. Dort findet man nicht nur zahlreiche
              Informationen zu Studiengängen und Hochschulen, sondern auch rund
              ums Studium, inklusive Voraussetzungen, Bewerbung und
              Finanzierung.
            </Paragraph>
            <Paragraph>Die Seite </Paragraph>
            <Link onPress={() => Linking.openURL('https://www.studienwahl.de')}>
              www.studienwahl.de
            </Link>
            <Paragraph>
              kann dabei ebenso hilfreich sein. Hiervon gibt es auch eine
              jährliche Printausgabe mit einer Übersicht über die verschiedenen
              Studiengänge und Hochschulen.
            </Paragraph>
            <Paragraph>
              Hat man dann einen passenden Studienplatz gefunden, geht es an den
              Bewerbungsprozess.
            </Paragraph>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Studienplatzsuche;
