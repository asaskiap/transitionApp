import React from 'react';

import {Linking, Modal} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import {List, ListItem} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Arbeitslosengeld = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Arbeitslosengeld</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/skate.png')}
        />
        <Article>
          <Paragraph>
            In manchen Fällen kann für eine Weile das Arbeitslosengeld genutzt
            werden um die erste Zeit der Weiterbildung zu überbrücken. Im besten
            Fall hat man Anspruch auf 12 Monate Arbeitslosengeld (60% des
            vorherigen Nettogehalts) und kann diese Zeit nutzen um sich ggf. um
            weitere Finanzierungsmöglichkeiten zu kümmern. Das Arbeitslosengeld
            wird allerdings nicht gezahlt, wenn man in Vollzeit einer Ausbildung
            nachgeht. Daher wäre diese Option nur für spezielle Fälle wie
            beispielsweise für eine kürzere Spezialisierung / Training in einem
            bestimmten Bereich oder ein Studium in part-time möglich.
          </Paragraph>
          <ArticleSubHeader>
            Allgemeine Informationen zum Arbeitslosengeld:
          </ArticleSubHeader>
          <Paragraph>
            Alle KünstlerInnen müssen sich spätestens 3 Monate vor Ablauf des
            Vertrags bei der zuständigen Arbeitsagentur vor Ort persönlich
            arbeitsuchend melden und das Vertragsende anzeigen. Zur Wahrung der
            Frist und zur Erleichterung der Arbeitsuchendmeldung kann diese z.
            B. online in der JOBBÖRSE unter www.arbeitsagentur.de oder
            telefonisch über die gebührenfreie Servicerufnummer 08004555500
            vorgenommen werden, um einen Termin zur persönlichen Beratung zu
            vereinbaren. Die Arbeitsuchendmeldung wird jedoch erst wirksam, wenn
            der vereinbarte Termin mit der Agentur für Arbeit wahrgenommen wird.
          </Paragraph>
          <Paragraph>
            Um einen Anspruch auf Arbeitslosengeld zu erhalten, ist die
            Arbeitslosmeldung zwingend erforderlich. Sie dient der Sicherung der
            finanziellen Ansprüche und der Suche nach einer neuen Stelle. Sie
            ist eine unverzichtbare Voraussetzung für den Bezug von
            Arbeitslosengeld und muss spätestens am ersten Tag der
            Beschäftigungslosigkeit (frühestens drei Monate vorher) persönlich
            bei der für den Wohnort zuständigen Agentur für Arbeit erfolgen. Um
            Arbeitslosengeld beziehen zu können, müssen folgende Voraussetzungen
            gemeinsam erfüllt sein:
          </Paragraph>
          <List>
            <ListItem>Sie müssen arbeitslos sein.</ListItem>
            <ListItem>Sie müssen die Anwartschaftszeit erfüllt haben.</ListItem>
            <ListItem>
              Sie müssen sich persönlich arbeitslos gemeldet haben.
            </ListItem>
          </List>
          <Paragraph>
            Die Regelanwartschaftszeit ist erfüllt, wenn in den letzten 2 Jahren
            vor der Arbeitslosmeldung und dem Beginn der Arbeitslosigkeit
            (Rahmenfrist) mindestens 12 Monate
            arbeitslosenversicherungspflichtige Zeiten (z.B. Beschäftigung)
            liegen. Die Anwartschaftszeit für einen Anspruch auf
            Arbeitslosengeld hat auch erfüllt, wer die sogenannte „kurze“
            Anwartschaftszeit erfüllt hat. Voraussetzung hierfür ist, dass
          </Paragraph>
          <ArticleSubHeader>
            Anwartschaftszeit/ Kurze Anwartschaft
          </ArticleSubHeader>
          <Paragraph>
            Die Regelanwartschaftszeit ist erfüllt, wenn in den letzten 2 Jahren
            vor der Arbeitslosmeldung und dem Beginn der Arbeitslosigkeit
            (Rahmenfrist) mindestens 12 Monate
            arbeitslosenversicherungspflichtige Zeiten (z.B. Beschäftigung)
            liegen. Die Anwartschaftszeit für einen Anspruch auf
            Arbeitslosengeld hat auch erfüllt, wer die sogenannte „kurze“
            Anwartschaftszeit erfüllt hat. Voraussetzung hierfür ist, dass
          </Paragraph>
          <List>
            <ListItem>
              die Antragstellerin/der Antragstellerin den letzten zwei Jahren
              vor der Arbeitslosmeldung und dem Beginn der Arbeits- losigkeit
              (Rahmenfrist) mindestens 6 Monate in
              Versicherungspflichtverhältnissen gestanden hat und
            </ListItem>
            <ListItem>
              es sich überwiegend um Beschäftigungsverhältnisse gehandelt hat,
              die von Vornherein auf nicht mehr als 10 Wochen befristet waren,
              und
            </ListItem>
            <ListItem>
              das Bruttoarbeitsentgelt in den letzten 12 Monaten, gerechnet vom
              letzten Tag der letzten Beschäftigung an rückwärts, die
              Bezugsgröße nach § 18 Abs. 1 SGB IV (2014: 33180 Euro) nicht
              überstiegen hat.Diese Voraussetzungen sind der Agentur für Arbeit
              darzulegen und nachzuweisen. Die Regelung für die Erfüllung der
              „kurzen“ Anwartschaftszeit ist auf die Zeit bis 31.12.2015
              befristet. Die Zeit, für die Arbeitslosengeld beansprucht werden
              kann, ist abhängig vom Lebensalter und den
              Versicherungspflichtzeiten, die in den letzten 5 Jahren vor der
              Entstehung des Anspruchs auf Arbeitslosengeld zurückgelegt wurden.
            </ListItem>
            <ListItem>
              Wenn man z. B. mindestens 24 Monate
              arbeitslosenversicherungspflichtig gearbeitet hat, beträgt die
              Dauer des Anspruchs auf Arbeitslosengeld 12 Monate (=ALG ), bei 12
              Monaten Ar- beit – 6 Monate ALG, bei 16 Monaten Arbeit – 8 Monate
              ALG, bei 20 Monaten Arbeit – 10 Monate ALG, welches 60% des
              pauschalierten Nettoentgelts beträgt (67% mit einem Kind).Bei
              einer „kurzen“ Anwartschaftszeit richtet sich die Anspruchsdauer
              nur nach der Dauer der Versicherungspflichtzeiten, die in den
              letzten 2 Jahren vor der Entstehung des Anspruchs zurückgelegt
              wurden (bei 6 Monaten Versicherungspflichtzeiten ergeben sich 3
              Monate Anspruchsdauer, bei 8 Monaten – 4 Monate, bei 10 Monaten –
              5 Monate).
            </ListItem>
          </List>
          <ArticleSubHeader>
            Eigene Nichtverlängerungsmitteilung
          </ArticleSubHeader>
        </Article>
        <Paragraph>
          Eine eigene Nichtverlängerungsmitteilung des/der TänzerIn an den
          Arbeitgeber ist de facto eine Mitteilung, dass das vorgesehene
          Befristungsende des Arbeitsverhältnisses eingehalten wird. Es handelt
          sich nicht um eine Kündigung, das Kündigungsschutzgesetz gilt nicht.
          Es endet ein befristetes Arbeitsverhältnis. (Dies kann zu einer Sperre
          führen.)
        </Paragraph>
        <Paragraph>
          Anders verhält es sich bei einem Auflösungsvertrag in beiderseitigem
          Einverständnis. Diese Auflösung führt auf jeden Fall zu einer Sperre.
          Es sei denn, es liegen wichtige Gründe vor – wie z.B. längere schwere
          Krankheit ohne Aussicht auf Besserung.
        </Paragraph>
        <ArticleSubHeader textStyle={{color: colors.accentDark}}>
          Wichtig
        </ArticleSubHeader>
        <Paragraph>
          Sich ausserdem bei der ZAV (Zentrale Auslands- und Fachvermittlung)
          melden.
        </Paragraph>
        <ArticleSubHeader textStyle={{color: colors.accentDark}}>
          Kontakt
        </ArticleSubHeader>
        <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
          Tel. 01801 – 555 111
        </Paragraph>
        <Link onPress={() => Linking.openURL('https://www.arbeitsagentur.de')}>
          www.arbeitsagentur.de
        </Link>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Arbeitslosengeld;
