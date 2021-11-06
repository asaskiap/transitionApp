import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStoryAlexandra = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/portrait11.jpg')}
          title={'Kosmetikerin'}
        >
          Alexandra Post
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Aufhören, solange es noch nicht zu spät dafür ist. Nach siebzehn
            Jahren als Tänzerin und Choreografin beschloss Alexandra Post, ihr
            Engagement und ihren Beruf zu beenden. Für sie ein doppelt neuer
            Schritt in die nächste Karriere, denn sie hatte nie den Arbeitgeber
            gewechselt. Er aber hatte sich in den Jahren verändert: die
            Arbeitsbedingungen.
          </Paragraph>
          <Paragraph>
            Eigentlich war ihr Berufsziel nach dem Tanzstudium in Leipzig
            gewesen, klassisches Ballett an einem Theater zu tanzen, am liebsten
            nicht zu weit weg von ihrer Heimatstadt Zwickau. Also Vortanzen in
            Gera und Halle; ohne Erfolg. Dann fuhr sie nach Berlin, auf den Tipp
            ihrer Jazztanzlehrerin hin, die früher beim Deutschen Fernsehballett
            gearbeitet hatte, „sie meinte, ich würde da gut reinpassen“. Es
            stimmte. Das war 1997, sie war 21 Jahre alt. „Showtanz hat mir
            gelegen, und es ging von meiner Größe und Figur her besser auf. Ich
            konnte die Arbeit auch länger machen, als wenn ich an ein
            klassisches Haus gegangen wäre.“ Zumal einige der Häuser bald keine
            Tanzkompanie mehr hatten.
          </Paragraph>
          <Paragraph>
            Das Fernsehballett trat in Sendungen auf, bei Galas, reiste auf
            Kreuzfahrtschiffen um die Welt und per Bus durch Deutschland.
            Unterhaltung, die ein breites Publikum anspricht, fasst Alexandra
            Post zusammen. Sie lernte die Mechanismen des Fernsehens kennen,
            „dass alles Schein ist und vorgespielt wird. Wir, die Tänzer, sind
            fast die einzigen, die alles live machen mussten.“ Keine leichte
            Arbeit, „man muss schnell auf den Punkt kommen“. Einen
            3-Minuten-Titel tanzen, dann warten. Nächster Tanz. „Muss man
            erstmal hinkriegen, dies Hoch und Runter“, einen Abend lang. Sich
            permanent warm zu halten, während sich die Zeit zieht.{' '}
          </Paragraph>
          <Paragraph>
            Spitze wurde höchstens zur Weihnachtszeit getanzt, „wir waren eher
            die Fraktion Pumps“, erzählt Alexandra Post. Die Kompanie zu
            wechseln, war kaum möglich, es gibt ja kaum Showtanz-Ensembles, und
            sie wollte auch nicht ein Jahr lang immer dieselbe Show tanzen. Sie
            stieg auf, da wo sie war, von Gruppe mit Solo zur Solistin. Die
            letzten eineinhalb Jahre choreografierte sie fast nur noch, nachdem
            ihr ein neuer künstlerischer Leiter einmal die Chance gegeben hatte,
            das auszuprobieren. Die ganze Nacht baute sie zuhause zu dem
            vorgegebenen Musiktitel etwas zusammen, Paare, Gruppe, Einzeltänzer,
            vorne, hinten, Gänge, Formationen. „Es ging gut aus“, sagt sie. Das
            gefiel ihr. Sie konnte das also und blühte damit beruflich nochmal
            neu auf. Den Neid von Kollegen steckte sie weg. „Sich im eigenen
            Feld zu behaupten, ist immer schwieriger, Außenstehende haben es
            leichter“.
          </Paragraph>
          <Paragraph>
            2012 verkaufte der MDR das Ballett, das inzwischen nur noch mit
            Freiberuflern agiert. Es bekam weniger Aufträge als früher, anders
            als es sich nicht nur Alexandra Post erhofft hatte. Immer mal einige
            Nummern zu choreografieren, davon würde sie nicht leben können,
            merkte sie bald. Tanzen wollte sie nicht mehr. Sie war 37, „und ich
            hatte alles erreicht, was ich wollte, und hätte eigentlich nur
            schlechter werden können“. Die jungen neuen Kollegen sollten sie gut
            in Erinnerung behalten, sagt sie. Die wunderten sich denn auch, dass
            sie "schon aufhören" wollte. Das Ende weiter herauszuschieben, ahnte
            sie, hätte ihr auch den Neustart in etwas anderes noch mehr
            erschwert.{' '}
          </Paragraph>
          <Paragraph>
            Also suchte sie nach dem Anderen, Neuen. Sie kann gut mit Tieren,
            fand aber in dem Bereich keinen adäquaten Beruf. Die Idee Erzieherin
            verwarf sie, Altenpflege auch, da eine Freundin sie warnte vor dem
            Knochenjob. Schwere Verletzungen hatte sie als Tänzerin zwar nie,
            wollte aber den Körper nicht mehr so belasten. Kosmetik hat sie
            schon immer gemocht, knetete auch gern an Freunden und Kollegen
            herum, sagt sie. Das also schlug sie, als Ausbildung, der
            Arbeitsagentur vor. Die lehnte ab. Auf den Tipp einer Kollegin ließ
            sie sich von Heike Scharpff bei der Stiftung TANZ beraten. Entgegen
            ihrer Erwartung brachten die Monate des Übergangs kein erholendes
            Durchatmen, sondern: "ein tiefes Loch." Die Unsicherheit darüber,
            wie es weitergeht. "Ich hätte nie gedacht, dass es so schlimm sein
            kann."
          </Paragraph>
          <Paragraph>
            Ihre Methode bei schwierigen Behördengängen: nachfragen, um Hilfe
            bitten, sich bedanken, klar machen, was man will, Unterlagen
            beibringen und Argumente. Eines war: "Wenn niemand sich einsetzt für
            Künstlerberufe, wird es irgendwann kein Theater mehr geben, kein
            Kino, kein Fernsehen." Die Schule hatte sie per Internetrecherche
            gefunden, eine zweijährige Ausbildung, nicht zu lang. Ihre Bewerbung
            dort war erfolgreich. Endlich gab ihr die Arbeitsagentur den
            erforderlichen "Bildungsschein". Nur stimmte er in einem kleinen
            terminlichen Detail nicht mit der Ausbildungszeit überein. Kein
            Problem, dachte Alexandra Post, das lässt sich korrigieren. Doch
            weder die Schule noch die Agentur konnten und wollten. Ihr
            Optimismus fiel in sich zusammen. Sie gab nicht auf, argumentierte
            um ihrer Zukunft willen, zeigte Gefühle, nicht ihre Wut, aber ihre
            Verzweiflung: "ein Häufchen Elend".
          </Paragraph>
          <Paragraph>
            Sie schaffte es. Die Schulkosten werden nun von der Arbeitsagentur
            übernommen, und sie erhält 60 Prozent ihres letzten Gehalts. Mit
            "Tänzerin" konnte sie bei der Kosmetikschule sogar punkten, das
            passe gut zur Art, wie dort auf Akkuratesse geachtet werde, bis hin
            zur einheitlich weißen Kleidung, erklärt sie. Das Reglementierte, an
            das sich junge Schüler gewöhnen müssen, kennt die ehemalige Tänzerin
            nur zu gut. Doch nochmal die Schulbank zu drücken, sitzen, zuhören,
            melden, "das war eine Überwindung". Immerhin ist sie nicht die
            einzige Quereinsteigerin.{' '}
          </Paragraph>
          <Paragraph>
            Ihre Fähigkeiten als Tänzerin kann sie gut einbringen, "besonders
            bei den Massagegriffen", sagt sie. Sie beherrscht sie auch schneller
            als andere. "Ich wende sie an wie eine Choreografie, kann sie
            fließend verbinden", eben ohne die Hände zwischendurch vom Körper
            oder Gesicht zu lösen und wieder anzusetzen, das helfe der
            Entspannung. Im Umgang mit fordernden Kunden immer freundlich zu
            bleiben, hat sie sich auf den Kreuzfahrtschiffen angewöhnt.,"guten
            Morgen, auf Wiedersehn, vielen Dank nochmal". Wenn sie im Herbst
            2016 den Abschluss hat, möchte sie eine Anstellung finden und
            nebenbei ein wenig freiberuflich dazuverdienen. Sich komplett
            selbstständig zu machen hält sie für unrentabel wegen der
            Konkurrenz. In der Branche kann man sich spezialisieren und in viele
            Richtungen fortbilden, von Lymphdrainage über Wimpernverlängerung,
            von Phytotherapie bis Ernährungscoach. Abwechslung bietet der Beruf
            allemal.
          </Paragraph>
          <ArticleBy>Melanie Suchy</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryAlexandra;
