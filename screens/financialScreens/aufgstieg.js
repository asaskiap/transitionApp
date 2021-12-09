import React from 'react';

import {Modal, Dimensions, Linking} from 'react-native';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Article from '../../components/articleComponents/article';
import Paragraph from '../../components/articleComponents/paragraph';
import {List, ListItem} from '../../components/articleComponents/list';
import Link from '../../components/articleComponents/link';
import Quote from '../../components/articleComponents/quote';

import CloseButton from '../../components/buttons/closeButton';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';

const windowHeight = Dimensions.get('window').height;

const Aufstiegsstipendium_DE = (props) => {
  return (
    <Article>
      <ArticleSubHeader>
        Das Aufstiegsstipendium der Bundesregierung
      </ArticleSubHeader>
      <Paragraph>
        Das Aufstiegsstipendium unterstützt Berufserfahrene bei der Durchführung
        eines ersten akademischen Hochschulstudiums. Das Stipendium ist ein
        Programm der Begabtenförderung und unterstützt Menschen, die in
        Ausbildung und Beruf ihr besonderes Talent und Engagement bewiesen
        haben. Die SBB – Stiftung Begabtenförderung berufliche Bildung führt im
        Auftrag und mit Mitteln des Bundesministeriums für Bildung und Forschung
        die Auswahl der Stipendiatinnen und Stipendiaten durch und begleitet sie
        während ihres Studiums. Jährlich können über 1.000 Stipendiatinnen und
        Stipendiaten neu aufgenommen werden. Es gibt keine Altersgrenze. Nach
        erster Anfrage durch die Stiftung TANZ dürfte das Aufstiegsstipendium
        für TänzerInnen, die ihre Ausbildung an einer Berufsfachschule
        absolviert haben, zugänglich sein.
      </Paragraph>
      <Paragraph>Die Voraussetzungen für eine Bewerbung sind: </Paragraph>
      <List>
        <ListItem>
          eine abgeschlossene Berufsausbildung oder Aufstiegsfortbildung
        </ListItem>
        <ListItem>Noch kein Hochschulabschluss</ListItem>
        <ListItem>
          Berufserfahrung von mindestens zwei Jahren (nach Abschluss der
          Ausbildung und vor Beginn eines Studiums) zum Zeitpunkt der
          Online-Bewerbung
        </ListItem>

        <ListItem>
          ein Nachweis über die besondere Leistungsfähigkeit in Ausbildung und
          Beruf
        </ListItem>
      </List>
      <Paragraph>
        Die Bewerbung erfolgt in einem dreistufigen Auswahlverfahren. Mehr
        unter:
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.sbb-stipendien.de')}>
         www.sbb-stipendien.de
      </Link>
      <Paragraph>
        Weitere Möglichkeiten der Studienfinanzierung: Bildungskredit von der
        staatlich geförderten KfW-Bank  oder Stipendien von verschiedensten
        Stiftungen. Mehr unter:
      </Paragraph>
      <Link
        onPress={() => Linking.openURL('https://www.studienfinanzierung.de')}
      >
        www.studienfinanzierung.de
      </Link>

      <ArticleSubHeader>
        Ab 1.August 2016: Aufstiegs-Bafög (statt Meister-Bafög)
      </ArticleSubHeader>
      <Paragraph>Das AFBG soll in allen Berufsgruppen</Paragraph>
      <Quote>
        “Maßnahmen der beruflichen Aufstiegsfortbildung finanziell […]
        unterstützen und […] zu Existenzgründungen […] ermuntern [und ist somit]
        ein umfassendes Förderinstrument für die berufliche Fortbildung in
        grundsätzlich allen Berufsbereichen, und zwar unabhängig davon, in
        welcher Form sie durchgeführt wird (Vollzeit/ Teilzeit/ schulisch/
        außerschulisch/ mediengestützt/ Fernunterricht).”
      </Quote>
      <Paragraph>
        Es gibt einkommensunabhängige Unterstützung zu den Fortbildungskosten
        und bei Vollzeitmaßnahmen zusätzlich einkommensabhängige Unterstützung
        zum Lebensunterhalt. Die wesentlichen Änderungen ab August 2016 sind im
        Folgenden:
      </Paragraph>
      <List>
        <ListItem>
          Der Basisunterhaltsbeitrag steigt bei einer Vollzeitmaßnahme von
          bisher 645,00 € auf 708,00 €.
        </ListItem>
        <ListItem>
          Der Zuschussanteil für den Lebensunterhalt bei einer Vollzeitmaßnahme
          wird auf 50% erhöht; und nun werden nicht mehr maximal 10.000 €,
          sondern 15.000 € Lehrgangskosten mit 40% der Summe bezuschusst
        </ListItem>
        <ListItem>
          die Förderbeträge für zu versorgende Kinder sowie EhepartnerInnen
          steigen
        </ListItem>
        <ListItem>
          bis zu einem Vermögen von 45.000 € kann finanziell unterstützt werden
          + Die Förderung von beruflichen Aufstiegsfortbildungen gilt nun auch
          für AntragstellerInnen mit einem B.A. oder vergleichbarem
          Hochschulabschluss (z.B. Fachhochschuldiplom) als erster
          nachweislicher Berufsqualifikation*
        </ListItem>
        <ListItem>
          Die finanzielle Unterstützung ist weiterhin altersunabhängig.
        </ListItem>
        <ListItem>
          Die Förderung erfolgt weiterhin teils als Zuschuss, teils als
          zinsgünstiges Darlehen der Kreditanstalt für Wiederaufbau (KfW),
          dessen Rückzahlungsmodalitäten ab August verbessert wurden.
        </ListItem>
      </List>
      <Paragraph>
        Das Bundesministerium für Bildung und Forschung (BMBF) bietet auf der
        hier mehrmals zitierten Webseite alle wichtigen Informationen und auch
        eine kostenlose Info-Broschüre “Vom Meister- zum Aufstiegs-Bafög” an,
        die auf Nachfrage auch bei uns zu haben ist.
      </Paragraph>
      <Paragraph>Mehr Informationen:</Paragraph>

      <Link onPress={() => Linking.openURL('https://www.aufstiegs-bafoeg.de')}>
         www.aufstiegs-bafoeg.de
      </Link>
    </Article>
  );
};

const Aufstiegsstipendium_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        The “Aufstiegsstipendium” applies to all those who have not yet
        graduated from university and now want to start a course of study. In
        this case you can get a grant from the state. It is only valid for the
        first studies for people who have had a professional training with
        subsequent professional activity, and includes 800€ per month.
      </Paragraph>
      <ArticleSubHeader>
        Aufstiegsstipendium of the Federal Government
      </ArticleSubHeader>
      <Paragraph>
        The "Aufstiegsstipendium" supports people with professional experience
        in pursuing a first academic university degree. The scholarship is a
        program for the promotion of giftedness and supports people who have
        proven their special talent and commitment in their training and career.
        The SBB - Stiftung Begabtenförderung berufliche Bildung (Foundation for
        the Promotion of Gifted and Talented People in Vocational Education and
        Training) is commissioned by the Federal Ministry of Education and
        Research to select the scholarship holders and to support them during
        their studies. More than 1,000 scholarship holders can be accepted each
        year. There is no age limit. Based on initial inquiry by the Stiftung
        TANZ the advancement scholarship should be accessible to dancers who
        have completed their training at a vocational school.
      </Paragraph>
      <ArticleSubHeader>The requirements for application are:</ArticleSubHeader>
      <List>
        <ListItem>
          completed vocational training or upgrading training,
        </ListItem>
        <ListItem>
          professional experience of at least two years (after completion of
          training and before beginning a course of study) at the time of online
          application,
        </ListItem>
        <ListItem>not yet a university degree</ListItem>

        <ListItem>
          proof of special performance in education and profession.
        </ListItem>
      </List>
      <Paragraph>
        Applications are made in a three-stage selection process. More at:
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.sbb-stipendien.de')}>
         www.sbb-stipendien.de
      </Link>
      <Paragraph>
        Other options for financing your studies: educational loans from the
        state-subsidized KfW Bank or scholarships from a wide variety of
        foundations. More at:
      </Paragraph>
      <Link
        onPress={() => Linking.openURL('https://www.studienfinanzierung.de')}
      >
        www.studienfinanzierung.de
      </Link>

      <ArticleSubHeader>
        From August 1, 2016: Aufstiegs-Bafög (instead of Meister-Bafög)
      </ArticleSubHeader>
      <Paragraph>The AFBG is intended to </Paragraph>
      <Quote>
        "financially support [...] measures for professional advancement
        training in all occupational groups and [...] encourage [...] business
        start-ups [and is thus] a comprehensive funding instrument for
        professional advancement training in basically all occupational areas,
        regardless of the form in which it is carried out
        (full-time/part-time/school-based/ extracurricular/ media-based/distance
        learning).”
      </Quote>
      <Paragraph>
        There is income-independent support for training costs and, in the case
        of full-time measures, additional income-dependent support for living
        expenses. The main changes as of August 2016 are as follows:
      </Paragraph>
      <List>
        <ListItem>
          The basic subsistence allowance increases from the previous €645.00 to
          €708.00 in the case of a full-time measure.
        </ListItem>
        <ListItem>
          The subsidy share for living expenses in the case of a full-time
          measure will be increased to 50%; and now a maximum of €15,000 rather
          than €10,000 in training costs will be subsidized at 40% of the total
          amount.
        </ListItem>
        <ListItem>
          the subsidy amounts for children to be provided for as well as spouses
          increase
        </ListItem>
        <ListItem>
          Financial support is available for assets of up to €45,000.
        </ListItem>
        <ListItem>
          The funding of professional upgrading training now also applies to
          applicants with a B.A. or comparable university degree (e.g.
          Fachhochschule diploma) as their first verifiable professional
          qualification*.
        </ListItem>
        <ListItem>
          Financial support continues to be independent of age.
        </ListItem>
        <ListItem>
          Funding continues to be provided partly as a grant and partly as a
          low-interest loan from the Kreditanstalt für Wiederaufbau (KfW), the
          repayment terms of which have been improved as of August.
        </ListItem>
      </List>

      <Paragraph>
        The Federal Ministry of Education and Research (BMBF) offers all
        important information and also a free info brochure "From the master
        craftsman to the advancement Bafög" on the web page quoted here several
        times, which is to be had on request also with us.
      </Paragraph>
      <Paragraph>For more information, see:</Paragraph>

      <Link onPress={() => Linking.openURL('https://www.aufstiegs-bafoeg.de')}>
         www.aufstiegs-bafoeg.de
      </Link>
    </Article>
  );
};
const Aufstiegsstipendium = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Aufstiegsstipendium</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/window.png')}
        />
        {props.english ? (
          <Aufstiegsstipendium_EN />
        ) : (
          <Aufstiegsstipendium_DE />
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Aufstiegsstipendium;
