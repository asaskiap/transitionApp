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
              F??r das Schreiben einer Bewerbung gibt es kein allgemeing??ltiges
              Rezept; h??ngt es doch stark von dem beruflichen Feld und der
              spezifischen Stellenbeschreibung, sowie der Person des Bewerbers
              ab. Im Internet gibt es eine Vielzahl an verschiedensten Vorlagen
              wie eine Bewerbung auszusehen hat. Die genaue Wahl der jeweiligen
              Form h??ngt dann meist vom Bewerber ab und ist individuell
              gestaltbar.
            </Paragraph>
            <Paragraph>
              Was jedoch essentiell ist, ist ein ??bersichtlicher, tabellarischer
              Lebenslauf, in dem die f??r den Arbeitgeber und die ausgeschriebene
              Stelle wichtigen Informationen ??bersichtlich zusammengefasst sind.
              Dies beinhaltet den Bildungsweg, die Berufserfahrung und ggf.
              pers??nliche Erfahrungen oder Kenntnisse (beispielsweise Sprachen
              oder ehrenamtliche T??tigkeiten), die f??r den Arbeitgeber
              interessant sein k??nnten und einen selbst von den anderen
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
                Welche (Arbeits-)Erfahrungen bringe ich mit, die mich f??r die
                Stelle qualifizieren? (eine Art ???Arbeitsbiographie??? mit allen
                relevanten Stationen im eigenen Leben die mit der
                ausgeschriebenen Stelle zu tun haben)
              </ListItem>
              <ListItem>
                Wie stelle ich mir die Arbeit / T??tigkeit vor?
              </ListItem>
              <ListItem>
                Warum bin gerade ich besonders gut geeignet f??r die Stelle? Was
                unterscheidet mich vielleicht von m??glichen Mitbewerbern?
              </ListItem>
              <ListItem>
                Was macht mich pers??nlich aus? Wie w??rde ich mich mit wenigen
                Worten selbst beschreiben?
              </ListItem>
            </List>
            <Paragraph>
              Alle diese Informationen m??ssen nat??rlich selektiv ausgew??hlt und
              an die ausgeschriebene Stelle angepasst werden. Dabei ist meist
              ein kurzer, pr??gnanter Text eing??ngiger als lange Ausf??hrungen
              ??ber vorangegangene T??tigkeiten. Eine pers??nliche Note kann dabei
              manchmal dazu f??hren, dass man unter den Mitbewerbern auff??llt und
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
