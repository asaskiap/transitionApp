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
        <ArticleHeader>
          {props.english ? 'Application Process' : 'Bewerbungsprozess'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/settings_umsetzung.png')}
        />
        {props.english ? (
          <Article>
            <Paragraph>
              There is no universal recipe for writing an application; it
              depends on the professional field and the specific job
              description, as well as the applicant. On the Internet, there are
              many different templates on how an application should look. The
              exact choice of form depends mostly on the applicant and can be
              designed individually:
            </Paragraph>
            <Paragraph>
              What is essential, however, is a clear, tabular CV in which the
              important information for the employer and the advertised position
              are clearly summarized. This includes educational background, work
              experience and, if applicable, personal experience or knowledge
              (for example, languages or volunteer work) that may be of interest
              to the employer and can set you apart from the other competitors.
              The letter of application should include the following
              information:
            </Paragraph>
            <List>
              <ListItem>What am I applying for?</ListItem>
              <ListItem>
                Why am I applying for this position? (Interest, passion,
                hobbies, previous experience, etc.).
              </ListItem>
              <ListItem>
                What (work) experience do I bring that qualifies me for the
                position? (a kind of "work biography" with all relevant stations
                in my own life that have to do with the advertised position)
              </ListItem>
              <ListItem>How do I imagine the work / activity?</ListItem>
              <ListItem>
                Why am I particularly well suited for the position? What might
                distinguish me from possible competitors?
              </ListItem>
              <ListItem>
                What makes me personally special? How would I describe myself in
                a few words?
              </ListItem>
            </List>
            <Paragraph>
              All this information must of course be well selected and adapted
              to the advertised position. A short, concise text is usually more
              catchy than long explanations about previous activities. A
              personal touch can sometimes make you stand out among the
              competitors and arouse the interest of the HR (Human Ressources)
              department.
            </Paragraph>
          </Article>
        ) : (
          <Article>
            <Paragraph>
              Für das Schreiben einer Bewerbung gibt es kein allgemeingültiges
              Rezept; hängt es doch stark von dem beruflichen Feld und der
              spezifischen Stellenbeschreibung, sowie der Person des Bewerbers
              ab. Im Internet gibt es eine Vielzahl an verschiedensten Vorlagen
              wie eine Bewerbung auszusehen hat. Die genaue Wahl der jeweiligen
              Form hängt dann meist vom Bewerber ab und ist individuell
              gestaltbar.
            </Paragraph>
            <Paragraph>
              Was jedoch essentiell ist, ist ein übersichtlicher, tabellarischer
              Lebenslauf, in dem die für den Arbeitgeber und die ausgeschriebene
              Stelle wichtigen Informationen übersichtlich zusammengefasst sind.
              Dies beinhaltet den Bildungsweg, die Berufserfahrung und ggf.
              persönliche Erfahrungen oder Kenntnisse (beispielsweise Sprachen
              oder ehrenamtliche Tätigkeiten), die für den Arbeitgeber
              interessant sein könnten und einen selbst von den anderen
              Mitbewerbern abhebt und unterscheiden kann. In dem
              Bewerbungsschreiben sollten folgende Informationen erhalten sein:
            </Paragraph>
            <List>
              <ListItem>worauf bewerbe ich mich?</ListItem>
              <ListItem>
                Warum bewerbe ich mich auf diese Stelle? (Interesse,
                Leidenschaft, Hobbies, Vorerfahrungen, etc.)
              </ListItem>
              <ListItem>
                Welche (Arbeits-)Erfahrungen bringe ich mit, die mich für die
                Stelle qualifizieren? (eine Art „Arbeitsbiographie“ mit allen
                relevanten Stationen im eigenen Leben die mit der
                ausgeschriebenen Stelle zu tun haben)
              </ListItem>
              <ListItem>
                Wie stelle ich mir die Arbeit / Tätigkeit vor?
              </ListItem>
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
              Alle diese Informationen müssen natürlich selektiv ausgewählt und
              an die ausgeschriebene Stelle angepasst werden. Dabei ist meist
              ein kurzer, prägnanter Text eingängiger als lange Ausführungen
              über vorangegangene Tätigkeiten. Eine persönliche Note kann dabei
              manchmal dazu führen, dass man unter den Mitbewerbern auffällt und
              das Interesse der Personalabteilung weckt.
            </Paragraph>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Bewerbungsprozess;
