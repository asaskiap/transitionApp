import React from 'react';

import {Modal, Text} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';
import colors from '../../../assets/colors';

const TransitionStoryPeterBoch = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/portrait6.jpg')}
          title={'Ober- Bürgermeiser'}
        >
          Peter Boch
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Peter Boch logiert hoch oben im Neuen Rathaus. Wenn er zwischendurch
            mal aus dem Fenster blickt, kann er hinunter aufs Theater schauen;
            es liegt nur einen Steinwurf entfernt. Wäre er nicht
            Oberbürgermeister der Stadt Pforzheim, könnte dort womöglich sein
            Arbeitsplatz sein. Denn das wollte er einmal werden: Tänzer. Am
            besten so einer wie Friedemann Vogel, der seinerzeit in
            John-Cranko-Schule eine Klasse über ihm bereits sein herausragendes
            Talent erkennen ließ.
          </Paragraph>
          <Paragraph>
            Boch stammt aus Waldshut, eine süddeutsche Kreisstadt unweit der
            Schweizer Grenze. Aufgewachsen in einer kleinen Nachbargemeinde,
            kommt er erstmals mit dem Tanz durch eine Kindergartenfreundin in
            Berührung, die er zum Ballettunterricht nach Tiengen begleitet. „Wir
            haben alles immer gemeinsam unternommen“, erinnert sich der
            inzwischen 40-Jährige. Als ihn die Lehrerin bittet, doch einfach
            mitzumachen, zögert er keine Sekunde - und wird „entdeckt“. Sein
            Talent muss auffallend gewesen sein. Jahre später akzeptiert ihn
            Alex Ursuliak als Eleve an der Cranko-Schule. Peter Boch lernt noch
            einmal Ballett von der Pike auf, erst bei Bernd Berg und Shida
            Mubarjakova, ab der vierten Klasse bei Konstantin Russu. Man findet
            ihn im Gefolge der Carabosse, die der damalige Starsolist Richard
            Cragun verkörpert. Und er ist bei der einmaligen
            „Apollo“-Vorstellung im Rahmen der Internationalen Gartenausstellung
            auf dem Killesberg dabei – einmal deshalb, weil sie tatsächlich nur
            einmal stattfindet und weil Vladimir Malakhov sie an Ort und Stelle
            gleich mehrfach wiederholen muss. „Ich krieg noch immer eine
            Gänsehaut“, so der OB, „wenn ich daran zurückdenke“.
          </Paragraph>
          <Paragraph>
            Dann der Wechsel nach München, an die Bosl-Stiftung. Boch
            überspringt eine Klasse, kommt direkt in die Akademie – und hat wie
            schon einmal zuvor in Stuttgart irgendwann Wasser in Hüftgelenken:
            ein Problem der Überreizung, ausgelöst durch die im Ballett
            geforderte Auswärtsdrehung, das ihn nachdenklich stimmt. Er fragt
            sich: „Wenn das die Grenzen sind, die mir mein Körper aufzeigt: Muss
            ich da nicht meine Konsequenzen ziehen?“ Er zieht sie, bricht kurz
            vor dem Examen die Ausbildung ab, kehrt zurück nach Hause. „Eine
            harte, eine ehrliche Entscheidung“, die er bis heute nicht bereut.
            „Ich habe sie alleine getroffen, niemand hat mich dazu gedrängt.“
          </Paragraph>
          <Paragraph>
            Boch bewirbt sich an die hundert Mal, aber alle Ausbildungsberufe
            waren bereits belegt. Doch er weiß, was ihm die Ballettschulung
            vermittelt hat - nämlich Disziplin und, wie er das nennt, „die
            Wertschätzung des Gegenüber und damit verbunden: der Dienst am
            Menschen“. Deshalb sieht er sich schließlich im Polizeiberuf gut
            aufgehoben. Boch macht alles mit, als Streifenbeamter, als
            verdeckter Ermittler, im Personenschutz. Nebenbei ist er noch in
            Stuttgart-West im Bezirksbeirat politisch aktiv – bis er begreift,
            das er das letztlich will: etwas gestalten. Was er denn auch tut,
            erst als Bürgermeister in Erpfendorf, seit 2017 als OB in Pforzheim.
          </Paragraph>
          <Paragraph>
            Ob er denn die Bühne nicht vermisst, so nahe am Theater? Peter Boch
            lacht. „Warum? Ich bin ja nicht zufällig beim Ballett gelandet.
            sondern weil ich vorgehabt hatte, ausdrucksstark eine Rolle zu
            verkörpern oder dadurch eine Geschichte zu erzählen. Das war in mir
            drin, und das ist immer noch in mir drin. Es macht mir Freude, auf
            einem Podium zu stehen. Als trainierter Tänzer macht man schließlich
            keine halben Sachen. Der Körper ist geformt. Auch der Geist. Es geht
            um Disziplin, um Durchhaltevermögen und immer um die Sache – um das,
            was man erreichen will.“
          </Paragraph>
          <ArticleBy>Hartmut Regitz</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryPeterBoch;
