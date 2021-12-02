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

const Arbeitslosengeld_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        In manchen Fällen kann für eine Weile das Arbeitslosengeld genutzt
        werden um die erste Zeit der Weiterbildung zu überbrücken. Im besten
        Fall hat man Anspruch auf 12 Monate Arbeitslosengeld (60% des vorherigen
        Nettogehalts) und kann diese Zeit nutzen um sich ggf. um weitere
        Finanzierungsmöglichkeiten zu kümmern. Das Arbeitslosengeld wird
        allerdings nicht gezahlt, wenn man in Vollzeit einer Ausbildung
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
        Frist und zur Erleichterung der Arbeitsuchendmeldung kann diese z. B.
        online in der JOBBÖRSE unter www.arbeitsagentur.de oder telefonisch über
        die gebührenfreie Servicerufnummer 08004555500 vorgenommen werden, um
        einen Termin zur persönlichen Beratung zu vereinbaren. Die
        Arbeitsuchendmeldung wird jedoch erst wirksam, wenn der vereinbarte
        Termin mit der Agentur für Arbeit wahrgenommen wird.
      </Paragraph>
      <Paragraph>
        Um einen Anspruch auf Arbeitslosengeld zu erhalten, ist die
        Arbeitslosmeldung zwingend erforderlich. Sie dient der Sicherung der
        finanziellen Ansprüche und der Suche nach einer neuen Stelle. Sie ist
        eine unverzichtbare Voraussetzung für den Bezug von Arbeitslosengeld und
        muss spätestens am ersten Tag der Beschäftigungslosigkeit (frühestens
        drei Monate vorher) persönlich bei der für den Wohnort zuständigen
        Agentur für Arbeit erfolgen. Um Arbeitslosengeld beziehen zu können,
        müssen folgende Voraussetzungen gemeinsam erfüllt sein:
      </Paragraph>
      <List>
        <ListItem>Sie müssen arbeitslos sein.</ListItem>
        <ListItem>Sie müssen die Anwartschaftszeit erfüllt haben.</ListItem>
        <ListItem>
          Sie müssen sich persönlich arbeitslos gemeldet haben.
        </ListItem>
      </List>
      <Paragraph>
        Die Regelanwartschaftszeit ist erfüllt, wenn in den letzten 2 Jahren vor
        der Arbeitslosmeldung und dem Beginn der Arbeitslosigkeit (Rahmenfrist)
        mindestens 12 Monate arbeitslosenversicherungspflichtige Zeiten (z.B.
        Beschäftigung) liegen. Die Anwartschaftszeit für einen Anspruch auf
        Arbeitslosengeld hat auch erfüllt, wer die sogenannte „kurze“
        Anwartschaftszeit erfüllt hat. Voraussetzung hierfür ist, dass
      </Paragraph>
      <ArticleSubHeader>Anwartschaftszeit/ Kurze Anwartschaft</ArticleSubHeader>
      <Paragraph>
        Die Regelanwartschaftszeit ist erfüllt, wenn in den letzten 2 Jahren vor
        der Arbeitslosmeldung und dem Beginn der Arbeitslosigkeit (Rahmenfrist)
        mindestens 12 Monate arbeitslosenversicherungspflichtige Zeiten (z.B.
        Beschäftigung) liegen. Die Anwartschaftszeit für einen Anspruch auf
        Arbeitslosengeld hat auch erfüllt, wer die sogenannte „kurze“
        Anwartschaftszeit erfüllt hat. Voraussetzung hierfür ist, dass
      </Paragraph>
      <List>
        <ListItem>
          die Antragstellerin/der Antragstellerin den letzten zwei Jahren vor
          der Arbeitslosmeldung und dem Beginn der Arbeits- losigkeit
          (Rahmenfrist) mindestens 6 Monate in Versicherungspflichtverhältnissen
          gestanden hat und
        </ListItem>
        <ListItem>
          es sich überwiegend um Beschäftigungsverhältnisse gehandelt hat, die
          von Vornherein auf nicht mehr als 10 Wochen befristet waren, und
        </ListItem>
        <ListItem>
          das Bruttoarbeitsentgelt in den letzten 12 Monaten, gerechnet vom
          letzten Tag der letzten Beschäftigung an rückwärts, die Bezugsgröße
          nach § 18 Abs. 1 SGB IV (2014: 33180 Euro) nicht überstiegen hat.Diese
          Voraussetzungen sind der Agentur für Arbeit darzulegen und
          nachzuweisen. Die Regelung für die Erfüllung der „kurzen“
          Anwartschaftszeit ist auf die Zeit bis 31.12.2015 befristet. Die Zeit,
          für die Arbeitslosengeld beansprucht werden kann, ist abhängig vom
          Lebensalter und den Versicherungspflichtzeiten, die in den letzten 5
          Jahren vor der Entstehung des Anspruchs auf Arbeitslosengeld
          zurückgelegt wurden.
        </ListItem>
        <ListItem>
          Wenn man z. B. mindestens 24 Monate arbeitslosenversicherungspflichtig
          gearbeitet hat, beträgt die Dauer des Anspruchs auf Arbeitslosengeld
          12 Monate (=ALG ), bei 12 Monaten Ar- beit – 6 Monate ALG, bei 16
          Monaten Arbeit – 8 Monate ALG, bei 20 Monaten Arbeit – 10 Monate ALG,
          welches 60% des pauschalierten Nettoentgelts beträgt (67% mit einem
          Kind).Bei einer „kurzen“ Anwartschaftszeit richtet sich die
          Anspruchsdauer nur nach der Dauer der Versicherungspflichtzeiten, die
          in den letzten 2 Jahren vor der Entstehung des Anspruchs zurückgelegt
          wurden (bei 6 Monaten Versicherungspflichtzeiten ergeben sich 3 Monate
          Anspruchsdauer, bei 8 Monaten – 4 Monate, bei 10 Monaten – 5 Monate).
        </ListItem>
      </List>
      <ArticleSubHeader>Eigene Nichtverlängerungsmitteilung</ArticleSubHeader>

      <Paragraph>
        Eine eigene Nichtverlängerungsmitteilung des/der TänzerIn an den
        Arbeitgeber ist de facto eine Mitteilung, dass das vorgesehene
        Befristungsende des Arbeitsverhältnisses eingehalten wird. Es handelt
        sich nicht um eine Kündigung, das Kündigungsschutzgesetz gilt nicht. Es
        endet ein befristetes Arbeitsverhältnis. (Dies kann zu einer Sperre
        führen.)
      </Paragraph>
      <Paragraph>
        Anders verhält es sich bei einem Auflösungsvertrag in beiderseitigem
        Einverständnis. Diese Auflösung führt auf jeden Fall zu einer Sperre. Es
        sei denn, es liegen wichtige Gründe vor – wie z.B. längere schwere
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
    </Article>
  );
};

const Arbeitslosengeld_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        In some cases, unemployment benefits can be used for a while to bridge
        the initial period of further education. In the best case, one is
        entitled to 12 months of unemployment benefits (60% of the previous net
        salary) and can use this time to look for further financing
        possibilities if necessary. However, unemployment benefits are not paid
        if you are in full-time education. Therefore, this option would only be
        possible for special cases such as for a shorter specialization /
        training in a certain field or studying part-time.{' '}
      </Paragraph>
      <ArticleSubHeader>
        General information about unemployment benefits:
      </ArticleSubHeader>
      <Paragraph>
        All artists must personally register as a jobseeker with the relevant
        local employment agency at least 3 months before the end of the contract
        and report the end of the contract. In order to meet the deadline and to
        make it easier to register as a job seeker, this can be done online in
        the JOBBÖRSE at www.arbeitsagentur.de, for example, or by calling the
        toll-free service number 08004555500 to make an appointment for a
        personal consultation. However, the job application only becomes
        effective when the agreed appointment with the Employment Agency is
        kept.
      </Paragraph>
      <Paragraph>
        In order to be entitled to unemployment benefits, it is mandatory to
        register for work. It serves to secure financial entitlements and to
        find a new job. It is an indispensable prerequisite for receiving
        unemployment benefits and must be made in person at the employment
        agency responsible for the place of residence no later than the first
        day of unemployment (at the earliest three months before). In order to
        be able to receive unemployment benefits, the following prerequisites
        must be fulfilled together:
      </Paragraph>
      <List>
        <ListItem>You must be unemployed.</ListItem>
        <ListItem>You must have completed the qualifying period.</ListItem>
        <ListItem>You must have registered as unemployed in person.</ListItem>
      </List>
      <Paragraph>
        The standard qualifying period is fulfilled if there have been at least
        12 months of periods subject to unemployment insurance (e.g. employment)
        in the last 2 years before the unemployment notification and the start
        of unemployment (framework period).
      </Paragraph>
      <Paragraph>
        The qualifying period for an entitlement to unemployment benefits is
        also fulfilled by those who have completed the so-called "short"
        qualifying period. The prerequisite for this is:
      </Paragraph>
      <List>
        <ListItem>
          the claimant has been in a compulsory insurance relationship for at
          least 6 months in the last two years before registering as unemployed
          and the start of unemployment (qualifying period), and
        </ListItem>
        <ListItem>
          the majority of the employment relationships were limited to no more
          than 10 weeks from the outset, and
        </ListItem>
        <ListItem>
          the gross pay in the last 12 months, calculated backwards from the
          last day of the last employment, has not exceeded the reference amount
          according to § 18 para. 1 SGB IV (2014: 33180 euros). These
          requirements must be presented and proven to the Employment Agency.
          The regulation for the fulfillment of the "short" qualifying period is
          limited to the period until 31.12.2015.
        </ListItem>
      </List>
      <Paragraph>
        The period for which unemployment benefits can be claimed depends on the
        age and the compulsory insurance periods completed in the last 5 years
        before the entitlement to unemployment benefits arises.
      </Paragraph>
      <Paragraph>
        For example, if you have worked for at least 24 months and are obliged
        to pay unemployment insurance, the period of entitlement to unemployment
        benefit is 12 months (=ALG ), if you have worked for 12 months - 6
        months ALG, if you have worked for 16 months - 8 months ALG, if you have
        worked for 20 months - 10 months ALG, which is 60% of the accumulated
        net salary (67% with one child). In the case of a "short" qualifying
        period, the duration of entitlement is determined only by the duration
        of compulsory insurance periods completed in the last 2 years before the
        entitlement arose (6 months of compulsory insurance periods result in 3
        months of entitlement, 8 months - 4 months, 10 months - 5 months).
      </Paragraph>
      <Paragraph>
        The dancer's own notice of non-renewal to the employer is de facto a
        notice that the intended end of the fixed-term employment relationship
        will be observed. It is not a termination, the law on protection against
        dismissal does not apply. A fixed-term employment relationship ends.
        (This can lead to a suspension of employment).
      </Paragraph>
      <Paragraph>
        The situation is different in the case of a termination agreement by
        mutual consent. This dissolution leads in any case to a block. Unless
        there are important reasons - such as a longer serious illness with no
        prospect of recovery.
      </Paragraph>
      <Paragraph style={{color: colors.accentDark}}>
        Important: In addition, register with the ZAV (Zentrale Auslands- und
        Fachvermittlung).
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Contact
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        Tel. 01801 – 555 111
      </Paragraph>
      <Link onPress={() => Linking.openURL('https://www.arbeitsagentur.de')}>
        www.arbeitsagentur.de
      </Link>
    </Article>
  );
};

const Arbeitslosengeld = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Unemployment benefit' : 'Arbeitslosengeld'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/skate.png')}
        />
        {props.english ? <Arbeitslosengeld_EN /> : <Arbeitslosengeld_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Arbeitslosengeld;
