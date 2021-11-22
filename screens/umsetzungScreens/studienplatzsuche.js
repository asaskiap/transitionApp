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
        <ArticleHeader>Studienplatzsuche</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/search.png')}
        />
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
            Hat man diese Fragen beantwortet, gibt es einige Webseiten, die bei
            der Suche nach einem Studienplatz hilfreich sein können. Die Seite
            www.hochschulkompass.de ist eine gute Möglichkeit, um die Suche zu
            starten. Dort findet man nicht nur zahlreiche Informationen zu
            Studiengängen und Hochschulen, sondern auch rund ums Studium,
            inklusive Voraussetzungen, Bewerbung und Finanzierung.
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
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Studienplatzsuche;
