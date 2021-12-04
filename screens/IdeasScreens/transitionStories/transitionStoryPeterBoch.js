import React from 'react';

import {Modal, Text} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';
import colors from '../../../assets/colors';

const Peter_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Peter Boch logiert hoch oben im Neuen Rathaus. Wenn er zwischendurch mal
        aus dem Fenster blickt, kann er hinunter aufs Theater schauen; es liegt
        nur einen Steinwurf entfernt. Wäre er nicht Oberbürgermeister der Stadt
        Pforzheim, könnte dort womöglich sein Arbeitsplatz sein. Denn das wollte
        er einmal werden: Tänzer. Am besten so einer wie Friedemann Vogel, der
        seinerzeit in John-Cranko-Schule eine Klasse über ihm bereits sein
        herausragendes Talent erkennen ließ.
      </Paragraph>
      <Paragraph>
        Boch stammt aus Waldshut, eine süddeutsche Kreisstadt unweit der
        Schweizer Grenze. Aufgewachsen in einer kleinen Nachbargemeinde, kommt
        er erstmals mit dem Tanz durch eine Kindergartenfreundin in Berührung,
        die er zum Ballettunterricht nach Tiengen begleitet. „Wir haben alles
        immer gemeinsam unternommen“, erinnert sich der inzwischen 40-Jährige.
        Als ihn die Lehrerin bittet, doch einfach mitzumachen, zögert er keine
        Sekunde - und wird „entdeckt“. Sein Talent muss auffallend gewesen sein.
        Jahre später akzeptiert ihn Alex Ursuliak als Eleve an der
        Cranko-Schule. Peter Boch lernt noch einmal Ballett von der Pike auf,
        erst bei Bernd Berg und Shida Mubarjakova, ab der vierten Klasse bei
        Konstantin Russu. Man findet ihn im Gefolge der Carabosse, die der
        damalige Starsolist Richard Cragun verkörpert. Und er ist bei der
        einmaligen „Apollo“-Vorstellung im Rahmen der Internationalen
        Gartenausstellung auf dem Killesberg dabei – einmal deshalb, weil sie
        tatsächlich nur einmal stattfindet und weil Vladimir Malakhov sie an Ort
        und Stelle gleich mehrfach wiederholen muss. „Ich krieg noch immer eine
        Gänsehaut“, so der OB, „wenn ich daran zurückdenke“.
      </Paragraph>
      <Paragraph>
        Dann der Wechsel nach München, an die Bosl-Stiftung. Boch überspringt
        eine Klasse, kommt direkt in die Akademie – und hat wie schon einmal
        zuvor in Stuttgart irgendwann Wasser in Hüftgelenken: ein Problem der
        Überreizung, ausgelöst durch die im Ballett geforderte Auswärtsdrehung,
        das ihn nachdenklich stimmt. Er fragt sich: „Wenn das die Grenzen sind,
        die mir mein Körper aufzeigt: Muss ich da nicht meine Konsequenzen
        ziehen?“ Er zieht sie, bricht kurz vor dem Examen die Ausbildung ab,
        kehrt zurück nach Hause. „Eine harte, eine ehrliche Entscheidung“, die
        er bis heute nicht bereut. „Ich habe sie alleine getroffen, niemand hat
        mich dazu gedrängt.“
      </Paragraph>
      <Paragraph>
        Boch bewirbt sich an die hundert Mal, aber alle Ausbildungsberufe waren
        bereits belegt. Doch er weiß, was ihm die Ballettschulung vermittelt hat
        - nämlich Disziplin und, wie er das nennt, „die Wertschätzung des
        Gegenüber und damit verbunden: der Dienst am Menschen“. Deshalb sieht er
        sich schließlich im Polizeiberuf gut aufgehoben. Boch macht alles mit,
        als Streifenbeamter, als verdeckter Ermittler, im Personenschutz.
        Nebenbei ist er noch in Stuttgart-West im Bezirksbeirat politisch aktiv
        – bis er begreift, das er das letztlich will: etwas gestalten. Was er
        denn auch tut, erst als Bürgermeister in Erpfendorf, seit 2017 als OB in
        Pforzheim.
      </Paragraph>
      <Paragraph>
        Ob er denn die Bühne nicht vermisst, so nahe am Theater? Peter Boch
        lacht. „Warum? Ich bin ja nicht zufällig beim Ballett gelandet. sondern
        weil ich vorgehabt hatte, ausdrucksstark eine Rolle zu verkörpern oder
        dadurch eine Geschichte zu erzählen. Das war in mir drin, und das ist
        immer noch in mir drin. Es macht mir Freude, auf einem Podium zu stehen.
        Als trainierter Tänzer macht man schließlich keine halben Sachen. Der
        Körper ist geformt. Auch der Geist. Es geht um Disziplin, um
        Durchhaltevermögen und immer um die Sache – um das, was man erreichen
        will.“
      </Paragraph>
      <ArticleBy>Hartmut Regitz</ArticleBy>
    </Article>
  );
};

const Peter_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        Peter Boch lives high up in the New City Hall. When he looks out of the
        window in between, he can look down on the theater; it's only a stone's
        throw away. If he were not Lord Mayor of the City of Pforzheim, his
        workplace could possibly be there. Because that's what he wanted to
        become one day: A dancer. Preferably one like Friedemann Vogel, who
        already showed his outstanding talent one class above him at the John
        Cranko School.
      </Paragraph>
      <Paragraph>
        Boch comes from Waldshut, a southern German district town not far from
        the Swiss border. Growing up in a small neighboring community, he first
        came into contact with dance through a kindergarten friend whom he
        accompanied to ballet classes in Tiengen. "We always did everything
        together," recalls the now 40-year-old. When the teacher asked him to
        just join in, he didn't hesitate for a second - and was "discovered."
        His talent must have been striking. Years later, Alex Ursuliak accepts
        him as an eleve at the Cranko School. Peter Boch once again learns
        ballet from scratch, first with Bernd Berg and Shida Mubarjakova, and
        from the fourth grade with Konstantin Russu. He can be found in the
        entourage of Carabosse, embodied by the star soloist of the time,
        Richard Cragun. And he is present at the unique "Apollo" performance as
        part of the International Garden Exhibition on Killesberg - once because
        it actually takes place only once and because Vladimir Malakhov has to
        repeat it several times on the spot. "I still get goose bumps," says the
        OB, "when I think back on it."
      </Paragraph>
      <Paragraph>
        Then the move to Munich, to the Bosl Foundation. Boch skips a class,
        gets straight into the academy - and, as once before in Stuttgart, at
        some point has water in his hips: a problem of overstimulation,
        triggered by the outward rotation required in ballet, that makes him
        wonder. He asks himself: "If these are the limits that my body is
        showing me: Don't I have to draw my consequences?" He draws them, drops
        out just before the exam, returns home. "A tough decision, an honest
        decision," which he still doesn't regret. "I made it on my own, no one
        pushed me to do it."
      </Paragraph>
      <Paragraph>
        Boch applies close to a hundred times, but all the apprenticeships were
        already taken. But he knows what the ballet training taught him - namely
        discipline and, as he puts it, "the appreciation of the other person,
        and connected to that: service to people." That's why he ultimately sees
        himself in good hands in the police profession. Boch does everything, as
        a patrol officer, as an undercover investigator, in personal protection.
        On the side, he is politically active in the district council in
        Stuttgart-West - until he realizes that this is what he ultimately
        wants: to shape something. Which he does, first as mayor in Erpfendorf
        and since 2017 as mayor of Pforzheim.{' '}
      </Paragraph>
      <Paragraph>
        Doesn't he miss the stage, so close to the theater? Peter Boch laughs.
        "Why? I didn't end up in ballet by chance, but because I had intended to
        embody a role expressively or to tell a story through it. That was
        inside me, and it's still inside me. I enjoy standing on a podium. After
        all, as a trained dancer, you don't do things by halves. The body is
        shaped. The mind, too. It's about discipline, about perseverance and
        always about the cause - about what you want to achieve."{' '}
      </Paragraph>
      <ArticleBy>Hartmut Regitz</ArticleBy>
    </Article>
  );
};
const TransitionStoryPeterBoch = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <TransitionStoryModalHeader
          image={require('../../../assets/images/peterBoch.jpg')}
          title={props.eng ? 'Lord Mayor' : 'Ober- Bürger- Meister'}
        >
          Peter Boch
        </TransitionStoryModalHeader>
        {props.eng ? <Peter_EN /> : <Peter_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default TransitionStoryPeterBoch;
