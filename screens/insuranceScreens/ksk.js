import React from 'react';

import {Modal, Linking, TouchableOpacity, Text} from 'react-native';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import Article from '../../components/articleComponents/article';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import {List, ListItem} from '../../components/articleComponents/list';
import Link from '../../components/articleComponents/link';
import colors from '../../assets/colors';
import {sendEmail} from '../../utilities/sendEmail';

const KünstlerSozialVersicherung_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Mit der Künstlersozialversicherung sind seit 1983 die selbständigen
        Künstler und Publizisten in den Schutz der gesetzlichen
        Sozialversicherung einbezogen. Besonderheit: Die Künstler und
        Publizisten brauchen nur die Hälfte ihrer Beiträge zu tragen und sind
        damit ähnlich günstig gestellt wie Arbeitnehmer. Die andere
        Beitragshälfte wird durch eine Abgabe der Kunst- und
        Publizistikverwerter (z. B. Galerien, Musikschulen, Theater,
        Rundfunkanstalten, Werbeagenturen, Verlage) und durch einen
        Bundeszuschuss finanziert.
      </Paragraph>
      <ArticleSubHeader>Voraussetzungen</ArticleSubHeader>
      <Paragraph>
        Es muss eine selbständige künstlerische/publizistische Tätigkeit als
        Beruf (also zum Zweck des Broterwerbs) ausgeübt werden. Der Kunstbegriff
        orientiert sich an typischen Berufsbildern. Ein Grafik-Designer
        beispielsweise ist in diesem Sinne Künstler, während etwa ein
        Möbeltischler als Handwerker und nicht als Künstler gilt. Ein
        Musiklehrer fällt schon nach dem Gesetzeswortlaut unter den begünstigten
        Personenkreis. In “Grenzfällen” hängt die Künstlereigenschaft davon ab,
        ob der/die Betreffende in den maßgeblichen Fachkreisen als Künstler
        anerkannt ist (erkennbar z.B. an der Mitgliedschaft in künstlerischen
        Berufsverbänden oder an der Erwähnung in der Presse). Bei nur
        nebenberuflicher Betätigung im künstlerischen/publizistischen Bereich
        kann die Künstlersozialversicherung nur eingeschränkt oder gar nicht
        genutzt werden. Das Arbeitseinkommen (Einnahmen abzüglich Ausgaben) muss
        über der Geringfügigkeitsgrenze von monatlich 325 € / jährlich
        3.900 € liegen.
      </Paragraph>
      <Paragraph>
        Es wird maximal ein Arbeitnehmer beschäftigt. Sonst bestünde eine zu
        starke Arbeitgeberstellung, der Künstler/Publizist wäre nicht mehr
        schutzbedürftig.
      </Paragraph>
      <ArticleSubHeader>Ausnahmeregelungen</ArticleSubHeader>
      <Paragraph>
        In den ersten drei Jahren der Berufsausübung darf das Einkommen geringer
        sein. Auch bei gelegentlichen Unterschreitungen (zweimal innerhalb eines
        6-Jahreszeitraumes) bleibt die Versicherung erhalten.
      </Paragraph>
      <ArticleSubHeader>Versicherungsschutz durch die KSK</ArticleSubHeader>
      <Paragraph>
        Die KSK ist ein Teil der gesetzlichen Sozialversicherung und umfasst die
        Versicherungszweige Rentenversicherung, Krankenversicherung und
        Pﬂegeversicherung. Es gilt jeweils der gesamte gesetzliche
        Leistungskatalog. Was viele Künstler/Publizisten nicht wissen: Auch als
        Selbständiger kann man bei Arbeitsunfähigkeit Krankengeld beantragen,
        und zwar entweder nach sechs “Karenzwochen” (Normalfall) oder bereits
        nach zwei “Karenzwochen” (sog. vorgezogenes Krankengeld auf Antrag gegen
        Aufpreis).
      </Paragraph>
      <ArticleSubHeader>Höhe der Beiträge</ArticleSubHeader>
      <Paragraph>
        Die Versicherungsbeiträge errechnen sich aus dem Arbeitseinkommen und
        aus den halben Beitragssätzen der verschiedenen Versicherungszweige
        sowie gesetzlichen Zusatzbeiträgen. Zurzeit ergibt sich daraus eine
        Beitragsbelastung von 18-19 % des Nettoeinkommens. Die Beiträge sind
        monatlich zu zahlen.
      </Paragraph>
      <Paragraph>
        Beispiel: Bei einem Jahresarbeitseinkommen (netto) von
        12.000,- € (entsprechend mtl. 1.000,- €) müssten monatlich etwa
        180,- € bis 190,- € als Beitragsbelastung einkalkuliert werden.
      </Paragraph>
      <ArticleSubHeader>Eintritt in die KSK: </ArticleSubHeader>
      <List>
        <ListItem>
          Anmeldeformulare bei der Künstlersozialkasse (KSK) anfordern.
        </ListItem>
        <ListItem>
          Bei Absendung der Formulare an die KSK nicht vergessen,
          Tätigkeitsbelege (z.B. Verträge, Unterlagen über ausgeführte Arbeiten,
          Kritiken, Presse) beizufügen.
        </ListItem>
      </List>
      <Paragraph>
        Die KSK prüft nach Antragstellung, ob die Voraussetzungen zur
        Künstlersozialversicherung erfüllt sind. Sie muss hierbei sorgfältig und
        auch kritisch vorgehen, da für die Finanzierung des Gesamtsystems auch
        Dritte (nämlich der Steuerzahler und die abgabepflichtigen Unternehmen)
        zur Kasse gebeten werden. Sind alle Voraussetzungen erfüllt, stellt die
        KSK rechtsverbindlich die Versicherungspflicht fest, denn die
        Künstlersozialversicherung ist eine Pflichtversicherung! Sie nimmt die
        Anmeldung bei einer gesetzlichen Krankenkasse (z.B. AOK, Ersatzkasse,
        Innungskrankenkasse, Betriebskrankenkasse – man kann also in seiner
        bisherigen Krankenkasse bleiben) und bei der Datenstelle der Träger der
        Rentenversicherung vor und führt die Gesamtbeiträge dorthin ab. Dem
        Künstler/Publizist teilt die KSK mit, in welcher Höhe Beiträge zu zahlen
        sind. Zur Ermittlung der Beitragshöhe fragt die KSK anlässlich der
        Erstanmeldung und dann jährlich wiederkehrend nach dem
        “voraussichtlichen Jahresarbeitseinkommen”.
      </Paragraph>
      <ArticleSubHeader>
        Was geschieht, wenn die Anmeldung bei der KSK versäumt wird?
      </ArticleSubHeader>
      <Paragraph>
        Solange der Künstler/Publizist nicht von sich aus Kontakt mit der KSK
        aufnimmt,“ruht” gewissermaßen die Versicherung und die
        beitragsrechtlichen Vergünstigungen können nicht in Anspruch genommen
        werden. Wer sich also nicht bei der KSK meldet, verschenkt Vorteile, die
        ihm rechtlich zustehen. In jedem Fall beginnt die Versicherung
        frühestens mit der erstmaligen Meldung bei der KSK. Für den Zeitraum vor
        der erstmaligen Meldung bei der KSK gibt es weder nachträglichen
        Versicherungsschutz, noch werden von der KSK für solche Zeiträume
        Beiträge erhoben.
      </Paragraph>
      <ArticleSubHeader>
        Kann man die Mitgliedschaft in der KSK während eines Engagements für
        einige Monate ruhen lassen?
      </ArticleSubHeader>
      <Paragraph>
        Das ist leider bei der KSK nicht vorgesehen. Bei jeder -egal wie kurzen
        – Festanstellung, muss man aus der KSK austreten und danach wieder
        eintreten, das geht bei Zeiträumen unter 6 Monaten formlos, bei längerer
        Festanstellung, muss man danach erneut sie kompletten Eintrittsformulare
        ausfüllen.
      </Paragraph>
      <ArticleSubHeader>Kann man sich auch privat versichern?</ArticleSubHeader>
      <Paragraph>
        Berufsanfänger und Höherverdienende haben die Möglichkeit, sich
        zugunsten einer privaten Kranken-/Pflegeversicherung von der
        gesetzlichen Krankenversicherung befreien zu lassen. Die KSK gewährt
        dann einen Zuschuss. In der Rentenversicherung gibt es dagegen keine
        Befreiungsmöglichkeit, die Pflichtversicherung ist hier zwingend.
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Kontakt
      </ArticleSubHeader>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          color: colors.primary,
          marginVertical: 10
        }}
      >
        04421/ 973 405 1500
      </Text>
      <TouchableOpacity
        onPress={() => {
          sendEmail(
            'auskunft@kuenstlersozialkasse.de',
            'Auskunft Anfrage',
            ''
          ).then(() => {
            console.log('Your message was successfully sent!');
          });
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            alignSelf: 'center',
            color: colors.primary,
            marginVertical: 10
          }}
        >
          auskunft@kuenstlersozialkasse.de
        </Text>
      </TouchableOpacity>

      <Link
        onPress={() => Linking.openURL('http://www.kuenstlersozialkasse.de')}
      >
        www.kuenstlersozialkasse.de
      </Link>
    </Article>
  );
};

const KünstlerSozialVersicherung_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        Since 1983, self-employed artists and publicists have been included in
        the protection of statutory social insurance through the
        Künstlersozialversicherung (KSK). A special feature is that artists and
        publicists only have to pay half of their contributions and are thus in
        a similarly favorable position as employees. The other half of the
        contribution is financed by a levy on those who use the arts and
        journalism (e.g., gale-ries, music schools, theaters, broadcasters,
        advertising agencies, publishers) and by a federal subsidy.
      </Paragraph>
      <ArticleSubHeader>Requirements: </ArticleSubHeader>
      <Paragraph>
        An independent artistic/publicistic activity must be pursued as a
        profession (i.e., for the purpose of earning a living). The concept of
        art is based on typical occupational profiles. A graphic designer, for
        example, is an artist in this sense, while a cabinetmaker, for example,
        is considered a craftsman and not an artist. According to the wording of
        the law, a music teacher already falls under the group of beneficiaries.
        In "borderline cases", the status of an artist depends on whether the
        person concerned is recognized as an artist in the relevant professional
        circles (recognizable, for example, by membership in professional
        artistic associations or by mention in the press). In the case of only
        part-time activity in the artistic/publicistic field, the artists'
        social insurance can only be used to a limited extent or not at all. The
        earned income (income minus expenses) must be above the marginal income
        limit of € 325 per month / € 3,900 per year.
      </Paragraph>
      <Paragraph>
        A maximum of one employee is employed. Otherwise, there would be too
        much employment, the artist/publicist would no longer be in need of
        protection.
      </Paragraph>

      <Paragraph>
        Exemptions: In the first three years of practicing the profession, the
        income may be lower. Even in the case of occasional shortfalls (twice
        within a 6-year period), the insurance remains in force.
      </Paragraph>
      <ArticleSubHeader>Insurance coverage by the KSK: </ArticleSubHeader>
      <Paragraph>
        The KSK is part of the statutory social insurance and includes the
        insurance branches pension insurance, health insurance and pension
        insurance. The entire statutory benefits catalog applies in each case.
        What many artists/publicists do not know: Even as a self-employed
        person, you can apply for sick pay in the event of incapacity to work,
        either after six "waiting weeks" (normal case) or already after two
        "waiting weeks" (so-called early sick pay on application for an
        additional charge).
      </Paragraph>
      <ArticleSubHeader>Amount of contributions: </ArticleSubHeader>
      <Paragraph>
        The insurance contributions are calculated on the basis of the income
        from work and half the contribution rates of the various insurance
        branches as well as statutory additional contributions. Currently, this
        results in a contribution burden of 18-19% of net income. The
        contributions are to be paid monthly.
      </Paragraph>
      <Paragraph>
        Example: With an annual net income of 12.000,- € (corresponding to
        1.000,- € per month) you would have to calculate about 180,- € to 190,-
        € per month as contribution burden.
      </Paragraph>
      <ArticleSubHeader>Entry into the KSK:  </ArticleSubHeader>
      <List>
        <ListItem>
          Request registration forms from the Künstlersozialkasse (KSK).
        </ListItem>
        <ListItem>
          When sending the forms to the KSK, do not forget to include proof of
          activity (e.g. contracts, documents about work performed, reviews,
          press).
        </ListItem>
      </List>
      <Paragraph>
        After the application has been submitted, the KSK will check whether the
        requirements for artists' social insurance have been met. It must
        proceed carefully and critically, since third parties (namely the
        taxpayer and the companies subject to the levy) are also asked to pay
        for the financing of the overall system. If all requirements are
        fulfilled, the KSK establishes the obligation to be insured in a legally
        binding manner, because the artists' social insurance is a compulsory
        insurance! The KSK registers the artist with a statutory health
        insurance fund (e.g. AOK, Ersatzkasse, Innungs-krankenkasse,
        Betriebskrankenkasse - so you can stay with your previous health
        insurance fund) and with the data office of the pension insurance fund
        and pays the total contributions to it. The KSK informs the
        artist/publicist of the amount of contributions to be paid. In order to
        determine the amount of contributions, the KSK asks for the "expected
        annual income" on the occasion of the initial registration and then
        annually.
      </Paragraph>
      <ArticleSubHeader>
        What happens if the registration with the KSK is missed?
      </ArticleSubHeader>
      <Paragraph>
        As long as the artist/publicist does not contact the KSK on his/her own
        initiative, the insurance is "dormant", so to speak, and the benefits
        under contribution law cannot be claimed. Anyone who does not contact
        the KSK is therefore giving away benefits to which they are legally
        entitled. In any case, the insurance begins at the earliest with the
        first registration with the KSK. For the period prior to the initial
        registration with the KSK, there is no subsequent insurance coverage,
        nor are contributions levied by the KSK for such periods.
      </Paragraph>
      <ArticleSubHeader>
        Can I suspend my KSK membership for a few months during an engagement?
      </ArticleSubHeader>
      <Paragraph>
        Unfortunately, the KSK does not provide for this. For every permanent
        position, no matter how short, you have to leave the KSK and then
        rejoin. For periods of less than 6 months, you can do this informally;
        for longer permanent positions, you have to fill out the complete entry
        forms again.
      </Paragraph>
      <ArticleSubHeader>
        Can I also take out private insurance?
      </ArticleSubHeader>
      <Paragraph>
        Career starters and higher earners have the possibility to be exempted
        from the statutory health insurance in favor of a private health/care
        insurance. The KSK then grants a subsidy. In pension insurance, on the
        other hand, there is no exemption option; compulsory insurance is
        mandatory here.
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Contact
      </ArticleSubHeader>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          color: colors.primary,
          marginVertical: 10
        }}
      >
        04421/ 973 405 1500
      </Text>
      <TouchableOpacity
        onPress={() => {
          sendEmail(
            'alannapfeiffer@gmail.com',
            'Request for information',
            ''
          ).then(() => {
            console.log('Your message was successfully sent!');
          });
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            alignSelf: 'center',
            color: colors.primary,
            marginVertical: 10
          }}
        >
          auskunft@kuenstlersozialkasse.de
        </Text>
      </TouchableOpacity>

      <Link
        onPress={() => Linking.openURL('http://www.kuenstlersozialkasse.de')}
      >
        www.kuenstlersozialkasse.de
      </Link>
    </Article>
  );
};
const KünstlerSozialVersicherung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english
            ? "KSK (Artists' Social Insurance)"
            : 'Die Künstlersozial- Versicherung}'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/Sax.png')}
        />
        {props.english ? (
          <KünstlerSozialVersicherung_EN />
        ) : (
          <KünstlerSozialVersicherung_DE />
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default KünstlerSozialVersicherung;
