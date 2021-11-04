import React from 'react';

import {Modal, Dimensions} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import {List, ListItem} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const windowHeight = Dimensions.get('window').height;
const Bewerbungsprozess = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader
          textStyle={{
            fontSize: windowHeight > 600 ? 32 : 28,
            letterSpacing: windowHeight > 600 ? 2 : 1
          }}
        >
          Bewerbungsprozess
        </ArticleHeader>
        <ArticleIllustration
          imageContainerStyle={{marginVertical: 30}}
          image={require('../../assets/illustrations/umsetzungIllustrations/settings_umsetzung.png')}
        />
        <Article>
          <Paragraph>
            Für das Schreiben einer Bewerbung gibt es kein allgemeingültiges
            Rezept; hängt es doch stark von dem beruflichen Feld und der
            spezifischen Stellenbeschreibung, sowie der Person des Bewerbers ab.
            Im Internet gibt es eine Vielzahl an verschiedensten Vorlagen wie
            eine Bewerbung auszusehen hat. Die genaue Wahl der jeweiligen Form
            hängt dann meist vom Bewerber ab und ist individuell gestaltbar.
          </Paragraph>
          <Paragraph>
            Was jedoch essentiell ist, ist ein übersichtlicher, tabellarischer
            Lebenslauf, in dem die für den Arbeitgeber und die ausgeschriebene
            Stelle wichtigen Informationen übersichtlich zusammengefasst sind.
            Dies beinhaltet den Bildungsweg, die Berufserfahrung und ggf.
            persönliche Erfahrungen oder Kenntnisse (beispielsweise Sprachen
            oder ehrenamtliche Tätigkeiten), die für den Arbeitgeber interessant
            sein könnten und einen selbst von den anderen Mitbewerbern abhebt
            und unterscheiden kann. In dem Bewerbungsschreiben sollten folgende
            Informationen erhalten sein:
          </Paragraph>
          <List>
            <ListItem>worauf bewerbe ich mich?</ListItem>
            <ListItem>
              Warum bewerbe ich mich auf diese Stelle? (Interesse, Leidenschaft,
              Hobbies, Vorerfahrungen, etc.)
            </ListItem>
            <ListItem>
              Welche (Arbeits-)Erfahrungen bringe ich mit, die mich für die
              Stelle qualifizieren? (eine Art „Arbeitsbiographie“ mit allen
              relevanten Stationen im eigenen Leben die mit der ausgeschriebenen
              Stelle zu tun haben)
            </ListItem>
            <ListItem>Wie stelle ich mir die Arbeit / Tätigkeit vor?</ListItem>
            <ListItem>
              Warum bin gerade ich besonders gut geeignet für die Stelle? Was
              unterscheidet mich vielleicht von möglichen Mitbewerbern?
            </ListItem>
            <ListItem>
              Was macht mich persönlich aus? Wie würde ich mich mit wenigen
              Worten selbst beschreiben?
            </ListItem>
          </List>
          <Paragraph>
            Alle diese Informationen müssen natürlich selektiv ausgewählt und an
            die ausgeschriebene Stelle angepasst werden. Dabei ist meist ein
            kurzer, prägnanter Text eingängiger als lange Ausführungen über
            vorangegangene Tätigkeiten. Eine persönliche Note kann dabei
            manchmal dazu führen, dass man unter den Mitbewerbern auffällt und
            das Interesse der Personalabteilung weckt.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Bewerbungsprozess;
