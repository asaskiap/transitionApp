import React from 'react';

import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import CloseButton from '../components/buttons/closeButton';
import ScrollableScreenContainer from './scrollableScreen';
import ArticleHeader from './articleComponents/articleHeader';
import ArticleIllustration from './articleComponents/articleIllustration';
import Article from './articleComponents/article';
import Paragraph from './articleComponents/paragraph';
const ArticleModal = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Aufstiegsstipendium</ArticleHeader>
        <ArticleIllustration
          image={require('../assets/illustrations/financialIllustrations/window.png')}
        />
        <Article>
          <ArticleHeader>Aufstiegsstipendium der Bundesregierung</ArticleHeader>
          <Paragraph>
            Das Aufstiegsstipendium unterstützt Berufserfahrene bei der
            Durchführung eines ersten akademischen Hochschulstudiums. Das
            Stipendium ist ein Programm der Begabtenförderung und unterstützt
            Menschen, die in Ausbildung und Beruf ihr besonderes Talent und
            Engagement bewiesen haben. Die SBB – Stiftung Begabtenförderung
            berufliche Bildung führt im Auftrag und mit Mitteln des
            Bundesministeriums für Bildung und Forschung die Auswahl der
            Stipendiatinnen und Stipendiaten durch und begleitet sie während
            ihres Studiums. Jährlich können über 1.000 Stipendiatinnen und
            Stipendiaten neu aufgenommen werden. Es gibt keine Altersgrenze.
            Nach erster Anfrage durch die Stiftung TANZ dürfte das
            Aufstiegsstipendium für TänzerInnen, die ihre Ausbildung an einer
            Berufsfachschule absolviert haben, zugänglich sein.
          </Paragraph>
          <Paragraph>
            Die Voraussetzungen für eine Bewerbung sind: * eine abgeschlossene
            Berufsausbildung oder Aufstiegsfortbildung, * Berufserfahrung von
            mindestens zwei Jahren (nach Abschluss der Ausbildung und vor Beginn
            eines Studiums) zum Zeitpunkt der Online-Bewerbung, * noch kein
            Hochschulabschluss * ein Nachweis über die besondere
            Leistungsfähigkeit in Ausbildung und Beruf
          </Paragraph>
          <Paragraph>
            Die Bewerbung erfolgt in einem dreistufigen Auswahlverfahren. Mehr
            unter: www.sbb-stipendien.de
          </Paragraph>
          <Paragraph>
            Weitere Möglichkeiten der Studienfinanzierung: Bildungskredit von
            der staatlich geförderten KfW-Bank  oder Stipendien von
            verschiedensten Stiftungen. Mehr unter: www.studienfinanzierung.de
          </Paragraph>
        </Article>
        <Article>
          <ArticleHeader>
            Ab 1. August 2016: Aufstiegs-Bafög (statt Meister-Bafög)
          </ArticleHeader>
          <Paragraph>
            Das AFBG soll in allen Berufsgruppen “Maßnahmen der beruflichen
            Aufstiegsfortbildung finanziell […] unterstützen und […] zu
            Existenzgründungen […] ermuntern [und ist somit] ein umfassendes
            Förderinstrument für die berufliche Fortbildung in grundsätzlich
            allen Berufsbereichen, und zwar unabhängig davon, in welcher Form
            sie durchgeführt wird (Vollzeit/ Teilzeit/ schulisch/
            außerschulisch/ mediengestützt/ Fernunterricht).” Es gibt
            einkommensunabhängige Unterstützung zu den Fortbildungskosten und
            bei Vollzeitmaßnahmen zusätzlich einkommensabhängige Unterstützung
            zum Lebensunterhalt. Die wesentlichen Änderungen ab August 2016 sind
            im Folgenden:
          </Paragraph>
          <Paragraph>
            + Der Basisunterhaltsbeitrag steigt bei einer Vollzeitmaßnahme von
            bisher 645,00 € auf 708,00 €. + Der Zuschussanteil für den
            Lebensunterhalt bei einer Vollzeitmaßnahme wird auf 50% erhöht; und
            nun werden nicht mehr maximal 10.000 €, sondern 15.000 €
            Lehrgangskosten mit 40% der Summe bezuschusst + die Förderbeträge
            für zu versorgende Kinder sowie EhepartnerInnen steigen + bis zu
            einem Vermögen von 45.000 € kann finanziell unterstützt werden + Die
            Förderung von beruflichen Aufstiegsfortbildungen gilt nun auch für
            AntragstellerInnen mit einem B.A. oder vergleichbarem
            Hochschulabschluss (z.B. Fachhochschuldiplom) als erster
            nachweislicher Berufsqualifikation* + Die finanzielle Unterstützung
            ist weiterhin altersunabhängig. + Die Förderung erfolgt weiterhin
            teils als Zuschuss, teils als zinsgünstiges Darlehen der
            Kreditanstalt für Wiederaufbau (KfW), dessen Rückzahlungsmodalitäten
            ab August verbessert wurden.
          </Paragraph>
          <Paragraph>
            Das Bundesministerium für Bildung und Forschung (BMBF) bietet auf
            der hier mehrmals zitierten Webseite alle wichtigen Informationen
            und auch eine kostenlose Info-Broschüre “Vom Meister- zum
            Aufstiegs-Bafög” an, die auf Nachfrage auch bei uns zu haben ist.
          </Paragraph>
          <Paragraph>
            Mehr Informationen: https://www.aufstiegs-bafoeg.de
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default ArticleModal;
