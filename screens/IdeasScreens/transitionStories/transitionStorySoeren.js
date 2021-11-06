import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStorySoeren = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/portrait10.jpg')}
          title={'Lehrer'}
        >
          Sören Swart
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            „Ich kann nur jeden Tänzer und jede Tänzerin ermutigen, entspannt
            und erhobenen Hauptes in die nächste Berufswelt hineinzugehen“, sagt
            Sören Swart. „Denn ihre bisherige Tätigkeit ist oft mehr von
            Ernsthaftigkeit und Aufmerksamkeit geprägt, als es in anderen
            Arbeitsumfeldern zu beobachten ist.“ In seinem jetzigen, dem neuen
            Berufskontext aber ist diese Haltung ebenso essenziell. Er ist
            Lehrer, genauer: Waldorflehrer. Hat die entsprechende zweijährige
            Ausbildung absolviert samt Praktika, und nach einer mehrmonatigen
            Assistenz an einer Schule zwischen Berlin und Brandenburg führt er
            nun eine dort zunächst ersatzweise übernommene 4. Klasse nach dem
            Klassenlehrerprinzip bis zur 8. Stufe, dann folgt eine erste. Zum
            erstenmal in seinem Leben hat er einen unbefristeten Arbeitsvertrag.
            Das empfinde er schon auch als Wertschätzung, sagt er.
          </Paragraph>
          <Paragraph>
            Wären er und seine Lebensgefährtin Mitte zwanzig, würde ihnen eine
            solche Zusage nicht so viel bedeuten, fügt er hinzu. Aber jetzt
            möchten sie mehr Zeit miteinander haben, mehr Regelmäßigkeit, mehr
            Alltag, mehr Familienleben, da nun auch das fünfte Kind auf der Welt
            ist und die Zweitjüngste in die Schule kommt. Sein ältester Sohn ist
            23, so alt wie er damals, als er Vater wurde. Einen Monat vorher
            hatte er sein erstes Engagement angetreten, 1991, am Brandenburger
            Theater. Vor dem Diplom-Bühnentanzstudium an der Palucca-Schule in
            Dresden wiederum hatte sich der Jugendliche zum
            Werkzeugmaschinenmechaniker ausbilden lassen. Deshalb gibt er nun
            auch Werkunterricht in den oberen Klassen, „Tischlern,
            Kupfertreiben, Schnitzen, solche Sachen“.
          </Paragraph>
          <Paragraph>
            Bis die Tanzsparte in Brandenburg aufgelöst wurde, tanzte Swart dort
            acht Jahre lang, hängte eines als Bühnentechniker dran und gründete
            dann mit ehemaligen Kollegen eine Kompanie. „Wir waren unsere
            eigenen Herren; das war viel Arbeit, schöne Arbeit“. Die inzwischen
            zwei kleinen Kinder tummelten sich im und hinterm Ballettsaal. Ab
            2003 gastierte Swart als freischaffender Tänzer und Choreograph an
            mehreren Theatern und bekam 2009 noch einmal ein Festengagement -
            „ein Segen, damit hatte ich nicht gerechnet, eine schöne Zeit“ -,
            das allerdings nach drei Jahren nicht verlängert wurde. „Eigentlich
            war die Kündigung eine Entlastung für mich“, denn gegen Ende hatte
            er nur noch mit Schmerzpillen getanzt. Auch den Schwung, sich
            vorbehaltlos in den Betrieb, die Inszenierungen und die Kreuzpolkas
            und Schuhplattler hineinzubegeben, kriegte er nicht mehr so hin wie
            die viel jüngeren Kollegen, sagt er. „Mir wurde die Entscheidung ein
            stückweit abgenommen“: aufzuhören, mit 43 Jahren.
          </Paragraph>
          <Paragraph>
            Er war schon in der Umschulung, da tanzte er doch noch bei einem
            Schauspielstück, setzte sich aber mit dem 28.12.2012 den Termin für
            die allerletzte Bühnenvorstellung. Die Zeitplanung, der Kopf, die
            Kräfte, das haute nicht mehr hin. Mit dem neuen Input und Impuls
            konnte er sich nun sagen: „der Tanz, in seiner aktiven Form, ist
            jetzt zuende. Er hatte seine Zeit“. Für ihn war es rund so. Und ihm
            halfen dabei, sagt er, die Überlegungen Rudolf Steiners, des
            Begründers der Waldorf-Pädagogik, in die er gerade einstieg, über
            Entwicklungsphasen im menschlichen Leben. „Wenn ein größeres Fragen
            kommt und sich Werte verändern“. Für ihn war es das Beenden der
            aktiven, eher kämpferischen Strecke, und „aus dem Aufnehmenden,
            Einatmenden, in ein Gebendes, Weitergebendes hineinzukommen“, also
            das Unterrichten.
          </Paragraph>
          <Paragraph>
            Ein ausformuliertes Ziel war das vorher nicht gewesen. Der Gedanke
            an ein Danach begleitete ihn zwar sein ganzes Tänzerleben entlang,
            „eine Neugier“, doch ganz unkonkret, bis er sich ab Mitte Dreißig
            immer drängender nach dem Preis für diese Lebensweise fragte und die
            Vereinbarkeit mit den sich verändernden eigenen Bedürfnissen und
            Wünschen. Er suchte nach der Kündigung die Beratung der Stiftung
            Tanz auf und wusste genau, was er nicht wollte: rückwärts zu gehen.
            „Ich kann mir nicht vorstellen, in ein Berufsfeld zu gehen, wo ich
            nicht mindestens so gefordert, so ganzheitlich gefordert bin, wie
            ich es bis jetzt gewesen bin. Ich will mich entwickeln, will
            dazulernen“, fasst er zusammen. Daraus entsprang die Idee, Lehrer zu
            werden. Zumal ihn damals eine Sängerkollegin anstupste: „Du bist der
            geborene Waldorflehrer!“ Swart waren die Schulen auch nicht ganz
            fremd, er schaute sich das näher an und sagte sich, „ich probier's
            mal“. Dafür sprach auch die „vorwärts“-Perspektive, die Aussicht,
            mehr zu verdienen und die gute Konjunktur dieser Privatschulen. Das
            Ausbildungs-Seminar in Berlin nahm ihn auf; seine beiden früheren
            Abschlüsse wurden vom zuständigen Amt geprüft und akzeptiert.
          </Paragraph>
          <Paragraph>
            Allerdings wollte ihm die Arbeitsagentur den Bildungsgutschein nicht
            genehmigen, er solle eben Erzieher werden, hieß es. Da sagte er
            Nein. Immer wieder. Die Stiftung Tanz bestärkte ihn im Hintergrund,
            und eines Tages bekam er den Schein. Die Kraft fürs Durchfechten
            seiner Sache hat ihn selber ein wenig gewundert. Denn Persönlichkeit
            werde einem ja in den Ballettsälen klein gemacht, ständig verletzt,
            provoziert. Die Stärke, die dennoch oder darunter überlebt, die sei
            umso größer. „Harte Schule“. Leicht waren die zwei Jahre Studium,
            Probeunterrichten und Abschlussarbeit dann auch nicht. Das Schreiben
            war erst ungewohnt. Das Stunden-Vorbereiten ist aufwendig, da
            weniger nach vorgegebenen Schemata gelehrt wird als auf Basis
            orientierender Empfehlungen. Aber mit Herausforderungen diverser Art
            umzugehen, „mit Mut und Gelassenheit“, darauf hat ihn auch das
            Studium vorbereitet. „Man wird da sehr mit sich selbst
            konfrontiert“, baue eine innere Stärke auf, mache eine große
            persönliche Entwicklung durch. Eine wichtige Voraussetzung, um dann
            auf die Persönlichkeiten der Kinder eingehen zu können und sie zu
            befähigen, „weit und quer und hinaus zu denken“.
          </Paragraph>
          <Paragraph>
            Dazu gehört von Lehrerseite eben jene hohe Aufmerksamkeit oder
            Wachheit fürs Gegenüber – und für sich. Der ehemalige Tänzer bemerkt
            bei Schülern Details an Körperhaltung und -bewegungen, an Spannungen
            und Kraftlosigkeit, die Lehrerkollegen nicht sehen können und die
            für solche Hinweise dankbar sind. Zu einer weiteren Fähigkeit von
            früher, der erwähnten „Ernsthaftigkeit“ fügt Swart auch die
            Aufrichtigkeit hinzu: „Wer sich auf die Bühne begibt, ist in
            gewissem Sinne nackt“. Sich zu zeigen, wie man ist, ohne Fassade und
            damit einen selbstverständlichen Umgang zu entwickeln, „davon etwas
            abgeben zu können“, das helfe anderen, wo diese „Klarheit“, wie er
            sie nennt, noch fehlt.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};
export default TransitionStorySoeren;
