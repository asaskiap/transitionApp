import React from 'react';

import {Modal, Linking} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import {List, ListItem} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import CloseButton from '../../components/buttons/closeButton';

const Visum_DE = (props) => {
  return (
    <Article>
      <ArticleSubHeader>
        Aufenthalts- und Arbeitsgenehmigung in Deutschland
      </ArticleSubHeader>
      <Paragraph>
        In der Regel gilt für Bürger aus EU-Staaten und dem Europäischen
        Wirtschaftsraum (aus Belgien, Dänemark, Estland, Finnland, Frankreich,
        Griechenland, Irland, Italien, Lettland, Litauen, Luxemburg, Malta, den
        Niederlanden, Österreich, Polen, Portugal, Schweden, Slowakei,
        Slowenien, Spanien, Tschechien, Ungarn, dem Vereinigten Königreich und
        Zypern) genießen die uneingeschränkte Arbeitnehmerfreizügigkeit und
        benötigen daher zur Arbeitsaufnahme keine Arbeitserlaubnis. Aufgrund von
        vereinbarten Übergangsfristen unterliegen dagegen Staatsangehörige der
        EU-Mitgliedsstaaten Bulgarien und Rumänien der
        Arbeitsgenehmigungspflicht. Für Bürger dieser EU-Mitgliedstaaten ist
        eine Beschäftigung in Deutschland nur möglich, wenn die zuständige
        Agentur für Arbeit eine Arbeitsgenehmigung-EU erteilt. Nähere
        Informationen zu den aktuell geltenden Übergangsregelungen erhalten Sie
        unter
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://ec.europa.eu/eures')}>
        ec.europa.eu/eures
      </Link>
      <ArticleSubHeader>
        In der Regel gilt für Bürger aus Nicht-EU-Staaten und Staatenlose:
      </ArticleSubHeader>
      <Paragraph>
          Ausländer aus Nicht-EU-Staaten bedürfen für die Einreise ein Visum und
        für den längeren Aufenthalt in Deutschland eines Aufenthaltstitels. Das
        Visum zur Einreise in die Bundesrepublik muss bei der Deutschen
        Botschaft im Ursprungsland beantragt werden und gilt bis zu 3 Monaten.
        Die Aufenthaltstitel werden erteilt als Niederlassungserlaubnis
        (unbefristet, unabhängig von einem „Zweck“ des Aufenthalts) oder als
        Aufenthaltserlaubnis (befristet, stets in Abhängigkeit von einem
        Aufenthaltszweck erteilt).
      </Paragraph>
      <ArticleSubHeader>
        Aufenthaltserlaubnis (Siehe u.a. § 7 und § 8 des Aufenthaltsgesetzes)
      </ArticleSubHeader>
      <Paragraph>
        Die Aufenthaltserlaubnis ist ein Aufenthaltstitel, die grundsätzlich nur
        befristet (auf mindestens 6 Monate) und zweckgebunden erteilt wird. Die
        Aufenthaltserlaubnis ist nicht immer mit einer Arbeitserlaubnis
        verbunden; diese muss im Aufenthaltstitel ausdrücklich ausgesprochen
        werden. Unter welchen Bedingungen das möglich ist, hängt vom jeweiligen
        Aufenthaltszweck ab.
      </Paragraph>
      <Paragraph>Zwecke des Aufenthalts können z.B. folgende sein:</Paragraph>
      <List>
        <ListItem>Aufenthalt zum Zweck der Ausbildung (§§ 16 und 17)</ListItem>
        <ListItem>
          Aufenthalt zum Zweck der Erwerbstätigkeit (§§ 18 bis 21)
        </ListItem>
        <ListItem>
          Aufenthalt aus völkerrechtlichen, humanitären oder politischen Gründen
          (§§ 22 bis 26)
        </ListItem>
        <ListItem>Aufenthalt aus familiären Gründen (§§ 27 bis 36)</ListItem>
        <ListItem>
          Aufenthalt für ehemalige Deutsche und langfristig
          Aufenthaltsberechtigte in der EU (§§ 37 bis 38 a)
        </ListItem>
      </List>
      <ArticleSubHeader>
        Niederlassungserlaubnis (Siehe u.a. § 9 des Aufenthaltsgesetzes) 
      </ArticleSubHeader>
      <Paragraph>
        Die Niederlassungserlaubnis ist ein unbefristeter Aufenthaltstitel. Sie
        berechtigt sowohl zur Beschäftigung als Arbeitnehmer als auch zur
        Ausübung einer selbständigen Erwerbstätigkeit.
      </Paragraph>
      <Paragraph>
        Voraussetzungen zur Erteilung einer Niederlassungserlaubnis sind:
      </Paragraph>
      <List>
        <ListItem>
          5 Jahre Besitz einer Aufenthaltserlaubnis (3 Jahre als
          Familienangehöriger eines/r Deutschen),
        </ListItem>
        <ListItem>selbständige Sicherung des Lebensunterhalts</ListItem>
        <ListItem>
          Nachweis über mindestens 60 Monate Pflichtbeiträge oder freiwillige
          Beiträge zur gesetzlichen Rentenversicherung,
        </ListItem>
        <ListItem>grundsätzliche Straffreiheit,</ListItem>
        <ListItem>
          Erlaubnis zur Beschäftigung als Arbeitnehmer (von der Arbeitsagentur
          erteilt),
        </ListItem>
        <ListItem>
          Besitz der Kenntnis zur Ausübung der Erwerbstätigkeit,
        </ListItem>
        <ListItem>Verfügen über einen ausreichenden Wohnraum,</ListItem>
        <ListItem>
          Nachweis über Kenntnisse der deutschen Sprache und Grundkenntnisse der
          Rechts- und Gesellschaftsordnung in Deutschland (oder erfolgreiche
          Teilnahme an einem Integrationskurs).
        </ListItem>
      </List>

      <Paragraph style={{fontWeight: 'bold', color: colors.accentDark}}>
        Die Erteilung einer Niederlassungserlaubnis oder einer
        Aufenthaltserlaubnis ist beim zuständigen Bürgeramt (Ausländerbehörde)
        zu beantragen (Musterformulare meistens online). Zum Antrag sind
        unterschiedlichen Unterlagen in Kopie und im Original vorzulegen. Siehe
        auch: 
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL(
            'http://bundesrecht.juris.de/aufenthg_2004/index.html'
          )
        }
      >
        bundesrecht.juris.de/aufenthg_2004/index.html
      </Link>
    </Article>
  );
};

const Visum_EN = (props) => {
  return (
    <Article>
      <ArticleSubHeader>Residence and work permit in Germany</ArticleSubHeader>
      <Paragraph>
        As a rule, citizens of EU countries and the European Economic Area
        (Austria, Belgium, Cyprus, Czech Republic, Denmark, Estonia, Finland,
        France, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg,
        Malta, the Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain and
        Sweden) enjoy unrestricted freedom of movement for workers and therefore
        do not need a work permit to take up employment. Due to agreed
        transitional periods, however, citizens of the EU member states Bulgaria
        and Romania are subject to the work permit requirement. For citizens of
        these EU member states, employment in Germany is only possible if the
        responsible employment agency issues an EU work permit. Further
        information on the current transitional regulations can be found at
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://ec.europa.eu/eures')}>
        ec.europa.eu/eures
      </Link>
      <ArticleSubHeader>
        As a rule, the following applies to citizens from non-EU states and
        stateless persons:
      </ArticleSubHeader>
      <Paragraph>
        Foreigners from non-EU countries require a visa for entry and a
        residence permit for a longer stay in Germany. The visa for entry into
        the Federal Republic must be applied for at the German Embassy in the
        country of origin and is valid for up to 3 months. The residence permit
        is issued as a Nie-derlassungserlaubnis (permanent, independent of a
        "purpose" of stay) or as a Aufenthaltserlaubnis (temporary, always
        issued depending on a purpose of stay).
      </Paragraph>
      <ArticleSubHeader>
        Residence permit (see, among others, § 7 and § 8 of the Residence Act)
      </ArticleSubHeader>
      <Paragraph>
        The residence permit is a residence title that is generally only issued
        for a limited period (at least 6 months) and for a specific purpose. The
        residence permit is not always linked to a work permit; this must be
        expressly stated in the residence title. Under which conditions this is
        possible depends on the respective purpose of residence.
      </Paragraph>
      <Paragraph>
        Purposes of residence can be, for example, the following:
      </Paragraph>
      <List>
        <ListItem>
          Residence for the purpose of education (§§ 16 and 17){' '}
        </ListItem>
        <ListItem>
          Residence for the purpose of gainful employment (§§ 18 to 21){' '}
        </ListItem>
        <ListItem>
          Residence for reasons of international law, humanitarian or political
          reasons (§§ 22 to 26)
        </ListItem>
        <ListItem>Residence for family reasons (§§ 27 to 36)</ListItem>
        <ListItem>
          Residence for former Germans and long-term residents in the EU (§§ 37
          to 38 a)
        </ListItem>
      </List>
      <ArticleSubHeader>
        Settlement permit (see, among others, § 9 of the Residence Act)
      </ArticleSubHeader>
      <Paragraph>
        The settlement permit is an unlimited residence title. It entitles the
        holder both to work as an employee and to be self-employed.
      </Paragraph>
      <Paragraph>
        Prerequisites for the issuance of a settlement permit are:
      </Paragraph>
      <List>
        <ListItem>
          5 years of possession of a residence permit (3 years as a family
          member of a German),
        </ListItem>
        <ListItem> Self-employment to secure livelihood</ListItem>
        <ListItem>
          Proof of at least 60 months of compulsory or voluntary contributions
          to the statutory pension insurance,
        </ListItem>
        <ListItem> basic exemption from punishment,</ListItem>
        <ListItem>
          Permission to work as an employee (issued by the employment agency),
        </ListItem>
        <ListItem>
          Possession of knowledge to engage in gainful employment,
        </ListItem>
        <ListItem> Possession of sufficient living space,</ListItem>
        <ListItem>
          Proof of knowledge of the German language and basic knowledge of the
          legal and social order in Germany (or successful participation in an
          integration course).
        </ListItem>
      </List>

      <Paragraph style={{fontWeight: 'bold', color: colors.accentDark}}>
        The issuance of a settlement permit or a residence permit must be
        applied for at the responsible citizens' office (aliens' registration
        office) (sample forms usually online). Various documents must be
        submitted together with the application in the original. See also:
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL(
            'http://bundesrecht.juris.de/aufenthg_2004/index.html'
          )
        }
      >
        bundesrecht.juris.de/aufenthg_2004/index.html
      </Link>
    </Article>
  );
};
const Visum = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Visa / Residence Permit' : 'Visum'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/germanyIllustrations/world.png')}
        />
        {props.english ? <Visum_EN /> : <Visum_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Visum;
