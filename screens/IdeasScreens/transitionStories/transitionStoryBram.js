import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStoryBram = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/bramKoch.jpg')}
          title={'Heil- Erziehungs- Pfleger'}
        >
          Bram Koch
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Vor sechseinhalb Jahren kam der klassische Tänzer Bram Koch zum
            ersten Mal an den Punkt, dass er dachte: „What if....?“ Was wäre,
            wenn seine Ballettdirektorin Birgit Keil am Staatstheater Karlsruhe
            nicht verlängert würde? Es hätte bedeuten können, dass eventuelle
            Nachfolger nicht mit ihm weiterarbeiten würden – oder dass er sich
            das nicht würde vorstellen können. Birgit Keil würde nicht mehr an
            ein anderes Haus wechseln, wohin sie ihn mitnehmen könnte. Sie würde
            aufhören.{' '}
          </Paragraph>
          <Paragraph>
            Da dachte auch Bram Koch zum ersten Mal konkret daran, seinen
            geliebten Beruf an den sprichwörtlichen Nagel zu hängen.{' '}
          </Paragraph>
          <Paragraph>
            Stattdessen verlängerte Staatstheatergeneralintendant Peter Spuhler
            Birgit Keil und Birgit Keil sagte gerne zu und Bram Koch tanzte
            weiter. Allerdings traf er bald darauf bereits eine erste
            Entscheidung über seine Zukunft. Er entschied, nicht so lange
            weiterzutanzen, bis Keils Ära an ihr Ende käme.
          </Paragraph>
          <Paragraph>
            Aus den Flyern der Stiftung Tanz, die im Staatstheater Karlsruhe
            auslagen, erfuhr er von einem Workshop für Tänzer, der Fragen des
            Übergangs in eine zweite, eine neue Karriere nach der
            Tänzerlaufbahn, diskutieren sollte. Mit drei seiner Kollegen beriet
            er sich darüber und sie meldeten sich an. So interessant der
            Workshop war, sie blieben nicht bis zum Schluß. Für den dritten und
            letzten Workshoptag hätten sie Urlaub nehmen müssen, und das wollten
            sie nicht. Es sollte nicht wirken, als seien sie innerlich schon auf
            dem Absprung. Sie wollten niemanden kränken und das gute
            Arbeitsverhältnis trüben. Oft ist davon die Rede, wie schwer es ist
            für Tänzer, Abschied zu nehmen von der Bühne, von der Arbeit im
            Ballettsaal, dem Leben in der Theaterfamilie. Für die
            Ballettdirektoren ist es oft genauso schwer, ihre Tänzer gehen zu
            lassen. Sie haben sie ausgewählt, aufgebaut, gecoacht, angefeuert,
            getröstet, aufgemuntert. Sie haben sie gelobt, sie zur Geduld
            ermahnt, wenn eine Verletzung auszuheilen war und sie jeden neuen
            Arbeitstag dazu motiviert, an ihre Grenzen zu gehen und sich zu
            verbessern, zu wachsen. Sie haben ihnen geraten, wo sie wohnen, was
            sie essen, was sie lesen sollen, wie sie sich für die Bühne
            schminken und wie sie sich im Ballettsaal benehmen sollen. Die
            Tänzer sind es, von denen Ballettdirektoren am besten verstanden
            werden und nur die Tänzer wollen jedes Detail ihrer Karriere wissen
            und jeden Trick lernen und alle Geheimnisse einer Rolle wieder und
            wieder hören.
          </Paragraph>
          <Paragraph>
            Bram Koch war so ein Tänzer, den man nicht gehen lassen möchte.
          </Paragraph>
          <Paragraph>
            In Karlsruhe hatte er die Compagnie gefunden, nach der er gesucht
            hatte. Er fühlte, er war angekommen. Der Stil des Ensembles und das
            Repertoire gefielen dem hochmotivierten Tänzer. Dass die Bedeutung
            der Disziplin immer wieder betont wurde, leuchtete dem
            energiegeladenen Bram Koch eh ein. Niemand mußte mit ihm streng
            sein. Es kam ihm natürlich vor, eine Compagnie so zu führen.
          </Paragraph>
          <Paragraph>
            Ihr Abschied verlief bewegend, aber ohne Streit. Abgerissen ist der
            Kontakt zwischen Keil und Koch nicht.
          </Paragraph>
          <Paragraph>
            Zwei Jahre nach dem ersten Workshop bei der Stiftung Tanz hörte Bram
            Koch auf zu tanzen. Keinen von den vielen Berufen, an die man zuerst
            denken könnte, wählte er. Er fühlte sich nicht berufen, ein
            Choreograph zu werden. Als Ballettmeister oder Pädagoge zu arbeiten,
            kam für ihn nicht in Frage. Er wollte weder Yogalehrer noch
            Pilatestrainer, weder Physiotherapeut noch Osteopath werden.
            „Manchmal fühlte sich diese Tanzwelt an, als würde man in einer
            Blase leben. Ich wußte immer, ich möchte auch einmal in der
            'richtigen Welt' arbeiten. Es fühlte sich dann auch wie ein zweites
            'Erwachsenwerden' an. Das Tänzerleben in einer Compagnie hat etwas
            von einer verlängerten Jugend, wunderbar. Die Tänzerfamilie
            unternimmt alles zusammen, man arbeitet, aber man feiert auch
            Parties. Ich habe nie etwas bereut daran.“
          </Paragraph>
          <Paragraph>
            Erst als er den Workshop besucht hatte und damit den ersten Schritt
            in die Zukunft getan hatte, da ließ seine Motivation als Tänzer
            unmerklich nach. Mit zweiunddreißig Jahren war Bram Koch zum
            Aufhören eigentlich noch jung. In Karlsruhe hatte er aber schon seit
            einigen Jahren das Gefühl, zu den Älteren zu zählen. Es stellten
            sich manchmal leichtere, vorübergehende Überbelastungserscheinungen
            köperlicher Art ein. Und als Ballette von Youri Vamos in das
            Karlsruher Repertoire übernommen wurden, schloß sich für ihn ein
            Kreis, und ihm wurde bewußt, wie lange er diesen Beruf inszwischen
            ausübte. In Düsseldorf hatte er zu Beginn seiner Laufbahn bei Youri
            Vamos getanzt, zehn Jahre zuvor.
          </Paragraph>
          <Paragraph>
            Bram erhielt in der Stiftung Tanz gleich bei den ersten Gesprächen
            einen Rat, von dem er heute sagt, es sei mit der wichtigste
            überhaupt gewesen. Das war kein juristischer oder
            verwaltungstechnischer oder finanzieller Hinweis. Er lautete ganz
            einfach: Nimm Dir Zeit. Nimm Dir ein Jahr. Sei entspannt bei der
            Suche nach der Zukunft.
          </Paragraph>
          <Paragraph>
            Es ist nicht so leicht, einen neuen Beruf zu entdecken, der einen
            wirklich erfüllt, das wurde Bram damals klar. Tänzer zu sein, findet
            er, ist eben kein Beruf, sondern wirklich eine Berufung. Es ist
            nicht das Gehalt, um dessentwillen Tänzer zur Arbeit gehen, sondern
            aufgrund einer sehr starken intrinsischen Motivation. Bram hatte nur
            zwölf Jahre als Tänzer gearbeitet und konnte sich ausrechnen, dass
            er mit seinem zweiten Beruf den viel längeren Teil seines
            Arbeitslebens zubringen würde. Darum dachte er, es würde sich
            absolut lohnen, noch ein Studium zu absolvieren. Viele andere
            Überlegungen flossen in die Entscheidung mit ein. Konnte er sich
            vorstellen, Vollzeit zu arbeiten oder lieber Teilzeit? Wäre
            Schichtarbeit etwas, das er annehmen würde? Wie sollte seine
            zukünftige Work/Life-Balance aussehen?
          </Paragraph>
          <Paragraph>
            Durch die Beratung in der Stiftung hatte Bram das Gefühl, viele
            Optionen zu haben, was seine Zukunft anging. Das Jahr nach dem
            Abschied von der Bühne nutzte er für Praktika, auch das ein Tip
            seiner Beraterinnen in der Stiftung. Bram, der aus den Niederlanden
            stammt und seine Tanzausbildung am Konservatorium in Den Haag
            absolviert hatte, überlegte zunächst, in Deutschland den Beruf des
            Heilerziehungspflegers zu erlernen. In seiner ersten
            Praktikumsstelle arbeitete er darum mit mehrfach behinderten
            Menschen in einer Tageseinrichtung zur Förderung. Auch in einer
            Flüchtlingsunterkunft machte er ein Praktikum. Er schaute sich
            verschiedene Schulen an. Das Problem mit der
            Heilerziehungspflegerausbildung war, dass ihm niemand sagen konnte,
            ob er mit seinem niederländischen Schulzeugnis zugelassen werden
            könnte. Man werde ihm das erst mitteilen können, wenn er sich
            verbindlich um die Aufnahme an die Schule bewerbe. Zuvor aber sollte
            er ein einjähriges Praktikum absolvieren.
          </Paragraph>
          <Paragraph>
            In Deutschland zu studieren schien unmöglich, da sein Schulabschluß
            nur dem Realschulabschluß gleichgestellt wurde, und der unbenotete
            „Bachelor of Dance“ zählte nicht als Abitur-Äquivalent.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryBram;

// TEMPLATE
// import React from "react";

// import { Modal } from "react-native";
// import Article from "../../../components/articleComponents/article";
// import Paragraph from "../../../components/articleComponents/paragraph";
// import CloseButton from "../../../components/buttons/closeButton";
// import { ArticleBy } from "../../../components/littleTextComponents";
// import ScrollableScreenContainer from "../../../components/scrollableScreen";
// import TransitionStoryModalHeader from "../../../components/transitionStoriesComponents/transitionStoryModalHeader";

// const TransitionStoryBram = (props) => {
//     return(
//         <Modal visible={props.isVisible} animationType = {'slide'}>
//             <ScrollableScreenContainer>
//                 <CloseButton close={props.close} />
//                 <TransitionStoryModalHeader image={require('')} title={''}></TransitionStoryModalHeader>
//                 <Article>
//                     <Paragraph></Paragraph>
//                     <ArticleBy></ArticleBy>
//                 </Article>
//             </ScrollableScreenContainer>
//         </Modal>
//     )
// }
