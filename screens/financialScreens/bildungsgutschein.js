import React from 'react';

import {Linking, Modal, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import {ListItem, List} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
const windowHeight = Dimensions.get('window').height;

const Bildungsgutschein = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader textStyle={{letterSpacing: 1}}>
          Bildungsgutschein
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 300}}
          image={require('../../assets/illustrations/financialIllustrations/Bildungsgutschein.png')}
        />
        <Article>
          <Paragraph style={{marginTop: -20}}>
            Wenn man sich beim Arbeitsamt als arbeitslos gemeldet hat und eine
            Weiterbildung zu einem anderen Beruf machen möchte, gibt es in
            manchen Fällen die Möglichkeit eines Bildungsgutscheins. Das
            bedeutet, dass das Arbeitsamt die Kosten für die Weiterbildung
            übernimmt. Darauf hat man allerdings keinen Anspruch und wird im
            individuellen Fall überprüft und beurteilt.
          </Paragraph>
          <ArticleSubHeader>
            Was versteht man unter Weiterbildung?
          </ArticleSubHeader>
          <Paragraph>
            Berufliche Weiterbildung soll berufliche Kenntnisse, Fertigkeiten
            und Fähigkeiten erhalten oder erweitern, einen beruflichen Aufstieg
            ermöglichen oder einen beruflichen Abschluss vermitteln. Die
            berufliche Weiterbildung kann entweder berufsbegleitend bzw. in
            Teilzeit oder in Vollzeit absolviert werden.
          </Paragraph>
          <Paragraph>
            Während die Fortbildung in der Regel auf einen vorhandenen Beruf
            oder einschlägiger Berufserfahrung aufbaut, soll eine Umschulung zu
            einer anderen beruflichen Tätigkeit befähigen z.B. in einem
            anerkannten Ausbildungsberuf. Eine Umschulung kann betrieblich als
            „Einzelumschulung“, bei einem Bildungsträger oder schulisch z.B. an
            Berufsfachschulen durchgeführt werden. Umschulungen in dreijährigen
            Ausbildungsberufen werden in der Regel auf 2 Jahre verkürzt.
          </Paragraph>
          <ArticleSubHeader>
            Wie finde ich die richtige Weiterbildung für mich?
          </ArticleSubHeader>
          <Paragraph>
            Um Orientierung im Dschungel der beruflichen Möglichkeiten zu
            finden, bedarf es der Einschätzung eigener Wünsche und Potentiale
            sowie einer gründlichen Recherche über das Weiterbildungs-Angebot.
            Über die eigenen Wünsche wird man sich am besten durch Gespräche mit
            nahestehenden Personen oder durch professionelle Beratung klar. Zum
            Bewusstmachen der eigenen Potentiale können Tests eine Hilfestellung
            geben, wie z.B. die kostenlose online-Potenzialanlayse bei Unicum
            (Stiftung Warentest: GUT): 
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'http://www.unicum.de/beruf/jobtest/test_info.php'
              )
            }
          >
            www.unicum.de/beruf/jobtest/test_info.php
          </Link>
          <Paragraph>
            Für die Recherche über das Angebot beruflicher Weiterbildungen gibt
            es zahlreiche sehr informative Internetseiten: Checkliste
            Weiterbildungen beim Bundesinstitut für Berufsbildung: www.bibb.de
            Angebote zur Aus- und Weiterbildung bei der Bundesagentur für
            Arbeit: www.kursnet.arbeitsagentur.de Info web Weiterbildung: 
          </Paragraph>
          <Link onPress={() => Linking.openURL('https://www.iwwb.de')}>
            www.iwwb.de
          </Link>
          <ArticleSubHeader>
            Habe ich Anspruch auf eine Weiterbildung/ Umschulung?
          </ArticleSubHeader>
          <Paragraph>
            Eine Weiterbildungsmaßnahme kann durch die Agentur für Arbeit
            gefördert werden, wenn sie notwendig ist, um Arbeitnehmerinnen und
            Arbeitnehmer bei Arbeitslosigkeit beruflich einzugliedern oder eine
            konkret drohende Arbeitslosigkeit abzuwenden. Die Notwendigkeit der
            Weiterbildung kann auch wegen eines fehlenden Berufsabschlusses
            gegeben sein. Die Ausbildung zur Tänzerin/zum Tänzer gehört – wie
            auch bei den anderen darstellenden Künsten (Schauspiel, Musik,
            Gesang) – nicht zu den nach dem Berufsbildungsgesetz anerkannten
            Ausbildungsberufen. Inwieweit eine berufliche Weiterbildung für Sie
            der geeignete Weg zur beruflichen Eingliederung ist, sollten Sie mit
            der für Ihren Wohnsitz zuständigen Agentur für Arbeit klären. Die
            Förderung von Weiterbildungsmaßnahmen durch die Arbeitsagentur ist
            eine Ermessensleistung der aktiven Arbeitsförderung, auf die kein
            Rechtsanspruch besteht.
          </Paragraph>
          <List>
            <ListItem>
              Leistungen können nur dann bewilligt werden, wenn Sie sich vor
              Beginn der Teilnahme an der Maßnahme durch die Agentur für Arbeit
              haben beraten lassen und die Agentur für Arbeit das Vorliegen der
              Voraussetzungen für eine Förderung durch Aushändigung eines
            </ListItem>
            <ListItem>
              Bildungsgutscheines bestätigt hat. Mit dem Bildungsgutschein wird
              die Übernahme der Weiterbildungskosten und ggf. die Wei-
              terzahlung des Arbeitslosengeldes zugesichert. Während der
              Gültigkeitsdauer des Bildungsgutscheins können Sie eine dem
              Bildungsgutschein entsprechende Maßnahme auswählen.
            </ListItem>
          </List>
          <ArticleSubHeader
            textStyle={{color: colors.accentDark, fontSize: 16, lineHeight: 22}}
          >
            Wenn der schriftliche Antrag auf Weiterbildung abgelehnt wird, kann
            der Arbeitslose innhalb von 4 Wochen Widerspruch einlegen.
          </ArticleSubHeader>
          <ArticleSubHeader>
            Welche Ausbildungen werden anerkannt?
          </ArticleSubHeader>
          <Paragraph>
            Grundsätzlich werden staatlich anerkannte Ausbildungsberufe
            gefördert. Das sind alle Berufe, für die eine Ausbildungsverordnung
            erlassen wurde, die eine geordnete und einheitliche betriebliche
            Berufsausbildung im gesamten Bundesgebiet gewährleistet. Gesetzlich
            Grundlagen für die Berufsausbildung sind das Berufsbildungsgesetz
            (BbiG) und die Handwerksordnung (HwO). Anerkannte Ausbildungsberufe
            können Sie beispielsweise in berufsbildenden Einrichtungen oder
            Berufsfachschulen erlernen. Ausbildungen, die mit dem
            Bildungsgutschein gefördert werden, sind beispielsweise:
            Altenpfleger/in, Anlage- und Vermögensberater/in, Betriebswirt/in,
            Buchhalter/in, Bürosachbearbeiter/in mit Bürosoftware,
            Ergotherapeut/in, Fachberater/in für Finanzdienstleistungen,
            Geprüfte/r Bilanzbuchhalter/in IHK, Geprüfte/r Immobilienfachwirt/in
            IHK, Geprüfte/r Personalreferent/in, Geprüfte/r Sekretär/in,
            Handelsfachwirt/in IHK, Hauswirtschafter/in, Heilpädagoge/in,
            Industriefachwirt/in, Marketing-Referent/in, Masseur/in,
            Medienbetriebswirt/in, Online-Redakteur/in,
            Raumgestaltung/Innenarchitektur, Steuerfachwirt/in, Web-Master,
            Web-Designer, Werbeberater/in, Werbegrafik und Design.
          </Paragraph>
          <Paragraph>
            Liste der staatlich anerkannten Ausbildungsberufe, Stand
            01.08.2011: 
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'http://www2.bibb.de/tools/aab/aabberufeliste.php'
              )
            }
          >
            www2.bibb.de/tools/aab/aabberufeliste.php
          </Link>
          <Paragraph>
            Informationen über zugelassene Maßnahmen enthält auch das Portal für
            Aus- und Weiterbildung KURSNET:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.kursnet-finden.arbeitsagentur.de/kurs'
              )
            }
          >
            www.kursnet-finden.arbeitsagentur.de/kurs
          </Link>
          <ArticleSubHeader>
            Was tun, wenn das Arbeitsamt den Beruf, in den ich mich umschulen
            lassen will, nicht bezahlt?
          </ArticleSubHeader>
          <Paragraph>
            Dann melden Sie sich am besten bei uns zu einer Beratung. Wir geben
            Rückendeckung gegenüber der Arbeitsagentur und geben Tipps für
            andere Finanzierungsmöglichkeiten wie z.B. Ausbildungskredite bei
            der KfW oder die Abfindung von der VddB (Bayerische
            Versorgungskammer – Versorgungsanstalt der Deutschen Bühnen) bei
            Beendigung der aktiven Tänzerlaufbahn vor dem 40. Lebensjahr und
            vorheriger Einzahlung von mindestens 60 Monaten (von uns nur für den
            äußersten Notfall empfohlen, da nach der Zahlung der Abfindung ein
            Anspruch auf Altersruhegeld zusätzlich zur gesetzlichen
            Rentenversicherung im Alter entfällt).
          </Paragraph>
          <ArticleSubHeader>
            Bildungsprämie für Weiterbildungen parallel zur Erwerbstätigkeit?
          </ArticleSubHeader>
          <Paragraph>
            Die „Bildungsprämie“ wurde vom Bundesministerium für Bildung und
            Forschung (BMBF) eingeführt und dient als Angebot zur Förderung von
            beruflicher Weiterbildung für Erwerbstätigen. Sie besteht aus zwei
            Komponenten: einen „Prämiengutschein” und das so genannte
            „Weiterbildungssparen”.
          </Paragraph>
          <Paragraph>
            Durch den Prämiengutschein wird die Beteiligung an Weiter­
            bildungsmaßnahmen mit Veranstaltungsgebühren bis maxi­ mal 1.000
            Euro gefördert. Mit dem Gutschein übernimmt der Staat 50 Prozent der
            Veranstaltungsgebühr. Den Prämiengutschein können Erwerbstätige über
            25 Jahren erhalten, deren zu versteuerndes Jahreseinkommen 20.000
            Euro (40.000 bei Verheirateten) nicht übersteigt. Der
            Prämiengutschein kann für Lehrgänge, Prüfungen oder Zertifikate und
            alle Maßnahmen, die der Fortbildung dienen, genutzt werden. Man
            erhält ihn direkt nach dem Beratungsgespräch in einer der rund 530
            bundesweit verteilten Bildungsprämienberatungsstellen. Das
            ‚Weiterbildungssparen‘ ist als Hilfe zur Finanzierung des
            Eigenanteils der individuellen beruflichen Weiterbildung gedacht.
            Die Nutzung des Weiterbildungssparens setzt ein mit
            Arbeitnehmer-Sparzulage gefördertes Ansparguthaben voraus und ist
            unabhängig vom derzeitigen Einkommen.
          </Paragraph>
          <Paragraph>
            Mit dem „Weiterbildungssparen“ wird im Vermögensbildungsgesetz
            (VermBG) zur Finanzierung von Weiterbildung eine vorzeitige Entnahme
            aus dem angesparten Guthaben erlaubt, auch wenn die Sperrfrist noch
            nicht abgelaufen ist. Die Nutzung des Weiterbildungssparens setzt
            ein mit Arbeitnehmer-Sparzulage gefördertes Ansparguthaben voraus
            und ist unabhängig vom derzeitigen Einkommen. Das
            Weiterbildungssparen kann unabhängig vom Prämiengutschein genutzt
            werden. So kann der Eigenanteil für den Prämiengutschein durch eine
            Entnahme aus dem Guthaben erbracht werden.
          </Paragraph>
          <Link
            onPress={() => Linking.openURL('http://www.bildungspraemie.info')}
          >
            www.bildungspraemie.info
          </Link>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Bildungsgutschein;
