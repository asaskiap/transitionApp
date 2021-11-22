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

const Visum = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Visum</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/germanyIllustrations/world.png')}
        />
        <Article>
          <ArticleSubHeader>
            Aufenthalts- und Arbeitsgenehmigung in Deutschland
          </ArticleSubHeader>
          <Paragraph>
            In der Regel gilt für Bürger aus EU-Staaten und dem Europäischen
            Wirtschaftsraum (aus Belgien, Dänemark, Estland, Finnland,
            Frankreich, Griechenland, Irland, Italien, Lettland, Litauen,
            Luxemburg, Malta, den Niederlanden, Österreich, Polen, Portugal,
            Schweden, Slowakei, Slowenien, Spanien, Tschechien, Ungarn, dem
            Vereinigten Königreich und Zypern) genießen die uneingeschränkte
            Arbeitnehmerfreizügigkeit und benötigen daher zur Arbeitsaufnahme
            keine Arbeitserlaubnis. Aufgrund von vereinbarten Übergangsfristen
            unterliegen dagegen Staatsangehörige der EU-Mitgliedsstaaten
            Bulgarien und Rumänien der Arbeitsgenehmigungspflicht. Für Bürger
            dieser EU-Mitgliedstaaten ist eine Beschäftigung in Deutschland nur
            möglich, wenn die zuständige Agentur für Arbeit eine
            Arbeitsgenehmigung-EU erteilt. Nähere Informationen zu den aktuell
            geltenden Übergangsregelungen erhalten Sie unter
          </Paragraph>
          <Link onPress={() => Linking.openURL('http://ec.europa.eu/eures')}>
            http://ec.europa.eu/eures
          </Link>
          <ArticleSubHeader>
            In der Regel gilt für Bürger aus Nicht-EU-Staaten und Staatenlose:
          </ArticleSubHeader>
          <Paragraph>
              Ausländer aus Nicht-EU-Staaten bedürfen für die Einreise ein Visum
            und für den längeren Aufenthalt in Deutschland eines
            Aufenthaltstitels. Das Visum zur Einreise in die Bundesrepublik muss
            bei der Deutschen Botschaft im Ursprungsland beantragt werden und
            gilt bis zu 3 Monaten. Die Aufenthaltstitel werden erteilt als
            Niederlassungserlaubnis (unbefristet, unabhängig von einem „Zweck“
            des Aufenthalts) oder als Aufenthaltserlaubnis (befristet, stets in
            Abhängigkeit von einem Aufenthaltszweck erteilt).
          </Paragraph>
          <ArticleSubHeader>
            Aufenthaltserlaubnis (Siehe u.a. § 7 und § 8 des
            Aufenthaltsgesetzes)
          </ArticleSubHeader>
          <Paragraph>
            Die Aufenthaltserlaubnis ist ein Aufenthaltstitel, die grundsätzlich
            nur befristet (auf mindestens 6 Monate) und zweckgebunden erteilt
            wird. Die Aufenthaltserlaubnis ist nicht immer mit einer
            Arbeitserlaubnis verbunden; diese muss im Aufenthaltstitel
            ausdrücklich ausgesprochen werden. Unter welchen Bedingungen das
            möglich ist, hängt vom jeweiligen Aufenthaltszweck ab.
          </Paragraph>
          <Paragraph>
            Zwecke des Aufenthalts können z.B. folgende sein:
          </Paragraph>
          <List>
            <ListItem>
              Aufenthalt zum Zweck der Ausbildung (§§ 16 und 17)
            </ListItem>
            <ListItem>
              Aufenthalt zum Zweck der Erwerbstätigkeit (§§ 18 bis 21)
            </ListItem>
            <ListItem>
              Aufenthalt aus völkerrechtlichen, humanitären oder politischen
              Gründen (§§ 22 bis 26)
            </ListItem>
            <ListItem>
              Aufenthalt aus familiären Gründen (§§ 27 bis 36)
            </ListItem>
            <ListItem>
              Aufenthalt für ehemalige Deutsche und langfristig
              Aufenthaltsberechtigte in der EU (§§ 37 bis 38 a)
            </ListItem>
          </List>
          <ArticleSubHeader>
            Niederlassungserlaubnis (Siehe u.a. § 9 des Aufenthaltsgesetzes) 
          </ArticleSubHeader>
          <Paragraph>
            Die Niederlassungserlaubnis ist ein unbefristeter Aufenthaltstitel.
            Sie berechtigt sowohl zur Beschäftigung als Arbeitnehmer als auch
            zur Ausübung einer selbständigen Erwerbstätigkeit.
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
              Nachweis über mindestens 60 Monate Pflichtbeiträge oder
              freiwillige Beiträge zur gesetzlichen Rentenversicherung,
            </ListItem>
            <ListItem>grundsätzliche Straffreiheit,</ListItem>
            <ListItem>
              Erlaubnis zur Beschäftigung als Arbeitnehmer (von der
              Arbeitsagentur erteilt),
            </ListItem>
            <ListItem>
              Besitz der Kenntnis zur Ausübung der Erwerbstätigkeit,
            </ListItem>
            <ListItem>Verfügen über einen ausreichenden Wohnraum,</ListItem>
            <ListItem>
              Nachweis über Kenntnisse der deutschen Sprache und Grundkenntnisse
              der Rechts- und Gesellschaftsordnung in Deutschland (oder
              erfolgreiche Teilnahme an einem Integrationskurs).
            </ListItem>
          </List>

          <Paragraph style={{fontWeight: 'bold', color: colors.accentDark}}>
            Die Erteilung einer Niederlassungserlaubnis oder einer
            Aufenthaltserlaubnis ist beim zuständigen Bürgeramt
            (Ausländerbehörde) zu beantragen (Musterformulare meistens online).
            Zum Antrag sind unterschiedlichen Unterlagen in Kopie und im
            Original vorzulegen. Siehe auch: 
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'http://bundesrecht.juris.de/aufenthg_2004/index.html'
              )
            }
          >
            http://bundesrecht.juris.de/aufenthg_2004/index.html
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Visum;
