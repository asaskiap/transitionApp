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

const Bildungsgutschein_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Wenn man sich beim Arbeitsamt als arbeitslos gemeldet hat und eine
        Weiterbildung zu einem anderen Beruf machen möchte, gibt es in manchen
        Fällen die Möglichkeit eines Bildungsgutscheins. Das bedeutet, dass das
        Arbeitsamt die Kosten für die Weiterbildung übernimmt. Darauf hat man
        allerdings keinen Anspruch und wird im individuellen Fall überprüft und
        beurteilt.
      </Paragraph>
      <ArticleSubHeader>Was versteht man unter Weiterbildung?</ArticleSubHeader>
      <Paragraph>
        Berufliche Weiterbildung soll berufliche Kenntnisse, Fertigkeiten und
        Fähigkeiten erhalten oder erweitern, einen beruflichen Aufstieg
        ermöglichen oder einen beruflichen Abschluss vermitteln. Die berufliche
        Weiterbildung kann entweder berufsbegleitend bzw. in Teilzeit oder in
        Vollzeit absolviert werden.
      </Paragraph>
      <Paragraph>
        Während die Fortbildung in der Regel auf einen vorhandenen Beruf oder
        einschlägiger Berufserfahrung aufbaut, soll eine Umschulung zu einer
        anderen beruflichen Tätigkeit befähigen z.B. in einem anerkannten
        Ausbildungsberuf. Eine Umschulung kann betrieblich als
        „Einzelumschulung“, bei einem Bildungsträger oder schulisch z.B. an
        Berufsfachschulen durchgeführt werden. Umschulungen in dreijährigen
        Ausbildungsberufen werden in der Regel auf 2 Jahre verkürzt.
      </Paragraph>
      <ArticleSubHeader>
        Wie finde ich die richtige Weiterbildung für mich?
      </ArticleSubHeader>
      <Paragraph>
        Um Orientierung im Dschungel der beruflichen Möglichkeiten zu finden,
        bedarf es der Einschätzung eigener Wünsche und Potentiale sowie einer
        gründlichen Recherche über das Weiterbildungs-Angebot. Über die eigenen
        Wünsche wird man sich am besten durch Gespräche mit nahestehenden
        Personen oder durch professionelle Beratung klar. Zum Bewusstmachen der
        eigenen Potentiale können Tests eine Hilfestellung geben, wie z.B. die
        kostenlose online-Potenzialanlayse bei Unicum (Stiftung Warentest:
        GUT): 
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('http://www.unicum.de/beruf/jobtest/test_info.php')
        }
      >
        www.unicum.de/beruf/jobtest/test_info.php
      </Link>
      <Paragraph>
        Für die Recherche über das Angebot beruflicher Weiterbildungen gibt es
        zahlreiche sehr informative Internetseiten: Checkliste Weiterbildungen
        beim Bundesinstitut für Berufsbildung: www.bibb.de Angebote zur Aus- und
        Weiterbildung bei der Bundesagentur für
        Arbeit: www.kursnet.arbeitsagentur.de Info web Weiterbildung: 
      </Paragraph>
      <Link onPress={() => Linking.openURL('https://www.iwwb.de')}>
        www.iwwb.de
      </Link>
      <ArticleSubHeader>
        Habe ich Anspruch auf eine Weiterbildung/ Umschulung?
      </ArticleSubHeader>
      <Paragraph>
        Eine Weiterbildungsmaßnahme kann durch die Agentur für Arbeit gefördert
        werden, wenn sie notwendig ist, um Arbeitnehmerinnen und Arbeitnehmer
        bei Arbeitslosigkeit beruflich einzugliedern oder eine konkret drohende
        Arbeitslosigkeit abzuwenden. Die Notwendigkeit der Weiterbildung kann
        auch wegen eines fehlenden Berufsabschlusses gegeben sein. Die
        Ausbildung zur Tänzerin/zum Tänzer gehört – wie auch bei den anderen
        darstellenden Künsten (Schauspiel, Musik, Gesang) – nicht zu den nach
        dem Berufsbildungsgesetz anerkannten Ausbildungsberufen. Inwieweit eine
        berufliche Weiterbildung für Sie der geeignete Weg zur beruflichen
        Eingliederung ist, sollten Sie mit der für Ihren Wohnsitz zuständigen
        Agentur für Arbeit klären. Die Förderung von Weiterbildungsmaßnahmen
        durch die Arbeitsagentur ist eine Ermessensleistung der aktiven
        Arbeitsförderung, auf die kein Rechtsanspruch besteht.
      </Paragraph>
      <List>
        <ListItem>
          Leistungen können nur dann bewilligt werden, wenn Sie sich vor Beginn
          der Teilnahme an der Maßnahme durch die Agentur für Arbeit haben
          beraten lassen und die Agentur für Arbeit das Vorliegen der
          Voraussetzungen für eine Förderung durch Aushändigung eines
        </ListItem>
        <ListItem>
          Bildungsgutscheines bestätigt hat. Mit dem Bildungsgutschein wird die
          Übernahme der Weiterbildungskosten und ggf. die Wei- terzahlung des
          Arbeitslosengeldes zugesichert. Während der Gültigkeitsdauer des
          Bildungsgutscheins können Sie eine dem Bildungsgutschein entsprechende
          Maßnahme auswählen.
        </ListItem>
      </List>
      <ArticleSubHeader
        textStyle={{color: colors.accentDark, fontSize: 16, lineHeight: 22}}
      >
        Wenn der schriftliche Antrag auf Weiterbildung abgelehnt wird, kann der
        Arbeitslose innhalb von 4 Wochen Widerspruch einlegen.
      </ArticleSubHeader>
      <ArticleSubHeader>Welche Ausbildungen werden anerkannt?</ArticleSubHeader>
      <Paragraph>
        Grundsätzlich werden staatlich anerkannte Ausbildungsberufe gefördert.
        Das sind alle Berufe, für die eine Ausbildungsverordnung erlassen wurde,
        die eine geordnete und einheitliche betriebliche Berufsausbildung im
        gesamten Bundesgebiet gewährleistet. Gesetzlich Grundlagen für die
        Berufsausbildung sind das Berufsbildungsgesetz (BbiG) und die
        Handwerksordnung (HwO). Anerkannte Ausbildungsberufe können Sie
        beispielsweise in berufsbildenden Einrichtungen oder Berufsfachschulen
        erlernen. Ausbildungen, die mit dem Bildungsgutschein gefördert werden,
        sind beispielsweise: Altenpfleger/in, Anlage- und Vermögensberater/in,
        Betriebswirt/in, Buchhalter/in, Bürosachbearbeiter/in mit Bürosoftware,
        Ergotherapeut/in, Fachberater/in für Finanzdienstleistungen, Geprüfte/r
        Bilanzbuchhalter/in IHK, Geprüfte/r Immobilienfachwirt/in IHK,
        Geprüfte/r Personalreferent/in, Geprüfte/r Sekretär/in,
        Handelsfachwirt/in IHK, Hauswirtschafter/in, Heilpädagoge/in,
        Industriefachwirt/in, Marketing-Referent/in, Masseur/in,
        Medienbetriebswirt/in, Online-Redakteur/in,
        Raumgestaltung/Innenarchitektur, Steuerfachwirt/in, Web-Master,
        Web-Designer, Werbeberater/in, Werbegrafik und Design.
      </Paragraph>
      <Paragraph>
        Liste der staatlich anerkannten Ausbildungsberufe, Stand 01.08.2011: 
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('http://www2.bibb.de/tools/aab/aabberufeliste.php')
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
          Linking.openURL('https://www.kursnet-finden.arbeitsagentur.de/kurs')
        }
      >
        www.kursnet-finden.arbeitsagentur.de/kurs
      </Link>
      <ArticleSubHeader>
        Was tun, wenn das Arbeitsamt den Beruf, in den ich mich umschulen lassen
        will, nicht bezahlt?
      </ArticleSubHeader>
      <Paragraph>
        Dann melden Sie sich am besten bei uns zu einer Beratung. Wir geben
        Rückendeckung gegenüber der Arbeitsagentur und geben Tipps für andere
        Finanzierungsmöglichkeiten wie z.B. Ausbildungskredite bei der KfW oder
        die Abfindung von der VddB (Bayerische Versorgungskammer –
        Versorgungsanstalt der Deutschen Bühnen) bei Beendigung der aktiven
        TänzerInnenlaufbahn vor dem 40. Lebensjahr und vorheriger Einzahlung von
        mindestens 60 Monaten (von uns nur für den äußersten Notfall empfohlen,
        da nach der Zahlung der Abfindung ein Anspruch auf Altersruhegeld
        zusätzlich zur gesetzlichen Rentenversicherung im Alter entfällt).
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
        bildungsmaßnahmen mit Veranstaltungsgebühren bis maxi­ mal 1.000 Euro
        gefördert. Mit dem Gutschein übernimmt der Staat 50 Prozent der
        Veranstaltungsgebühr. Den Prämiengutschein können Erwerbstätige über 25
        Jahren erhalten, deren zu versteuerndes Jahreseinkommen 20.000 Euro
        (40.000 bei Verheirateten) nicht übersteigt. Der Prämiengutschein kann
        für Lehrgänge, Prüfungen oder Zertifikate und alle Maßnahmen, die der
        Fortbildung dienen, genutzt werden. Man erhält ihn direkt nach dem
        Beratungsgespräch in einer der rund 530 bundesweit verteilten
        Bildungsprämienberatungsstellen. Das ‚Weiterbildungssparen‘ ist als
        Hilfe zur Finanzierung des Eigenanteils der individuellen beruflichen
        Weiterbildung gedacht. Die Nutzung des Weiterbildungssparens setzt ein
        mit Arbeitnehmer-Sparzulage gefördertes Ansparguthaben voraus und ist
        unabhängig vom derzeitigen Einkommen.
      </Paragraph>
      <Paragraph>
        Mit dem „Weiterbildungssparen“ wird im Vermögensbildungsgesetz (VermBG)
        zur Finanzierung von Weiterbildung eine vorzeitige Entnahme aus dem
        angesparten Guthaben erlaubt, auch wenn die Sperrfrist noch nicht
        abgelaufen ist. Die Nutzung des Weiterbildungssparens setzt ein mit
        Arbeitnehmer-Sparzulage gefördertes Ansparguthaben voraus und ist
        unabhängig vom derzeitigen Einkommen. Das Weiterbildungssparen kann
        unabhängig vom Prämiengutschein genutzt werden. So kann der Eigenanteil
        für den Prämiengutschein durch eine Entnahme aus dem Guthaben erbracht
        werden.
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.bildungspraemie.info')}>
        www.bildungspraemie.info
      </Link>
    </Article>
  );
};
const Bildungsgutschein_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        If you have registered with the employment office as unemployed and
        would like to do further training in a different profession, there is
        sometimes the possibility of an education voucher. This means that the
        employment office will cover the costs of the training. However, one has
        no right to this and it is checked and assessed in the individual case.{' '}
      </Paragraph>
      <Paragraph>What is meant by continuing education?</Paragraph>
      <Paragraph>
        Continuing education is intended to maintain or expand professional
        knowledge, skills and abilities, to enable professional advancement or
        to provide a professional qualification. Continuing vocational education
        can be completed either on a part-time or full-time basis.
      </Paragraph>
      <Paragraph>
        While continuing education usually builds on an existing occupation or
        relevant work experience, retraining is intended to enable people to
        take on a different occupation, e.g. in a recognized training
        occupation. Retraining can be carried out in a company as "individual
        retraining", at an educational institution or in a school, e.g. at
        vocational schools. Retraining in three-year training occupations is
        usually shortened to 2 years.
      </Paragraph>
      <Paragraph>
        How do I find the right continuing education program for me?
      </Paragraph>
      <Paragraph>
        In order to find orientation in the jungle of professional
        possibilities, it is necessary to assess one's own wishes and potentials
        as well as to conduct thorough research into the further education on
        offer. The best way to find out what you want is to talk to people close
        to you or to get professional advice. In order to become aware of one's
        own potentials, tests can be of help, such as the
      </Paragraph>
      <Paragraph>
        free online potential analysis at Unicum (Stiftung Warentest: GUT):{' '}
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('http://www.unicum.de/beruf/jobtest/test_info.php')
        }
      >
        www.unicum.de/beruf/jobtest/test_info.php
      </Link>
      <Paragraph>Do I have a right to further training/retraining?</Paragraph>
      <Paragraph>
        A further training measure can be promoted by the agency for work, if it
        is necessary, in order to integrate woman employees and employees with
        unemployment vocationally or avert a concrete threatening unemployment.
        The necessity of further training can also be given because of a missing
        professional qualification.
      </Paragraph>
      <Paragraph>
        Training to become a dancer - as in the case of the other performing
        arts (acting, music, singing) - is not one of the training professions
        recognized under the Vocational Training Act. You should clarify with
        the employment agency responsible for your place of residence whether
        further vocational training is the most suitable way for you to
        integrate into the world of work. The promotion of further training
        measures by the employment agency is a discretionary benefit of active
        employment promotion, to which there is no legal entitlement.
      </Paragraph>
      <Paragraph>
        Benefits can only be granted if you have been advised by the employment
        agency before starting the measure and the employment agency has
        confirmed that the requirements for funding are met by issuing an
        education voucher. The education voucher guarantees that the costs of
        further education will be covered and, if applicable, that the
        unemployment benefit will continue to be paid. During the period of
        validity of the education voucher, you can select a measure that
        corresponds to the education voucher. If the written application for
        further training is rejected, the unemployed person can lodge an
        objection within 4 weeks.
      </Paragraph>

      <Paragraph>
        Education voucher. Which training programs are recognized?
      </Paragraph>
      <Paragraph>
        In principle, state-recognized training occupations are supported. These
        are all professions for which a training ordinance has been issued that
        guarantees orderly and uniform in-company vocational training throughout
        Germany. The legal basis for vocational training is the Vocational
        Training Act (BbiG) and the Crafts Code (HwO). Recognized training
        occupations can be learned, for example, in vocational training
        institutions or vocational schools. Apprenticeships that are supported
        with the education voucher are, for example: Geriatric nurse, investment
        and financial advisor, business economist, accountant, office clerk with
        office software, occupational therapist, consultant for financial
        services, certified accountant IHK, certified real estate specialist
        IHK, certified personnel officer, Certified secretary, Commercial
        specialist IHK, Home economist, Therapeutic teacher, Industrial
        specialist, Marketing specialist, Masseur, Media business administrator,
        Online editor, Interior design, Tax specialist, Web master, Web
        designer, Advertising consultant, Advertising graphics and design.
      </Paragraph>
      <Paragraph>
        What should I do if the employment office does not pay for the
        occupation I want to retrain for?
      </Paragraph>
      <Paragraph>
        The best thing to do is to contact us for advice. We can give you advice
        on other financing options, such as training loans from the KfW or
        severance pay from the VddB (Bayerische Versorgungskammer -
        Versorgungsanstalt der Deutschen Büh-nen) if you end your active career
        as a dancer before the age of 40 and have paid into the VddB for at
        least 60 months (we only recommend this for extreme emergencies, as once
        the severance pay has been paid, you will no longer be entitled to
        retirement benefits in addition to the statutory pension insurance in
        old age).
      </Paragraph>
      <Paragraph>
        Education premium for further education parallel to gainful employment?
      </Paragraph>
      <Paragraph>
        The "education premium" was introduced by the German Federal Ministry of
        Education and Research (BMBF) and serves as an offer to promote further
        vocational training for people in gainful employment. It consists of two
        components: a "premium voucher" and so-called "continuing education
        savings".
      </Paragraph>
      <Paragraph>
        The premium voucher subsidizes participation in continuing education
        measures with event fees up to a maximum of 1,000 euros. With the
        voucher, the state covers 50 percent of the event fees. The premium
        voucher is available to employed persons over the age of 25 whose annual
        taxable income does not exceed 20,000 euros (40,000 euros for married
        persons). The premium voucher can be used for courses, exams or
        certificates and all measures that serve further education. The voucher
        can be obtained directly after a counseling interview at one of the 530
        educational premium counseling centers located throughout Germany.
      </Paragraph>
      <Paragraph>
        The 'Weiterbildungssparen' is intended to help finance the individual's
        own share of continuing vocational training. The use of the
        'Weiterbildungsspa-rens' requires a savings balance subsidized by an
        employee savings allowance and is independent of current income.
      </Paragraph>
      <Paragraph>
        With the "Weiterbildungssparen" (further education savings), the
        Vermögensbildungsgesetz (VermBG) allows early withdrawal from the saved
        credit balance to finance further education, even if the blocking period
        has not yet expired. The use of further education savings requires an
        employee savings allowance and is independent of current income. The
        further education savings can be used independently of the premium
        voucher. Thus, the personal contribution for the premium voucher can be
        provided by a withdrawal from the credit balance.
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.bildungspraemie.info')}>
        www.bildungspraemie.info
      </Link>
      <Paragraph>
        List of state-recognized training occupations, as of 01.08.2011:
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('http://www2.bibb.de/tools/aab/aabberufeliste.php')
        }
      >
        www2.bibb.de/tools/aab/aabberufeliste.php
      </Link>
      <Paragraph>
        Information on approved measures can also be found on the portal for
        training and further education KURSNET:
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('https://www.kursnet-finden.arbeitsagentur.de/kurs')
        }
      >
        www.kursnet-finden.arbeitsagentur.de/kurs
      </Link>
    </Article>
  );
};
const Bildungsgutschein = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Education Voucher' : 'Bildungsgutschein'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/Bildungsgutschein.png')}
        />
        {props.english ? <Bildungsgutschein_EN /> : <Bildungsgutschein_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Bildungsgutschein;
