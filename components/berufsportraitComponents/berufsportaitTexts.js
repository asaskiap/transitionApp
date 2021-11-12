import React from 'react';
import Paragraph from '../articleComponents/paragraph';
import Link from '../articleComponents/link';
import {Linking} from 'react-native';
import {List, ListItem} from '../articleComponents/list';

export const Augenoptiker = (props) => {
  return (
    <>
      <Paragraph>
        Moderne Brillen sind schon lange nicht mehr nur Sehhilfen, sie sind
        Accessoires, die den Typ ihrer Träger unterstreichen und gut zu deren
        Stil und Lebensweise passen sollen. Entscheidend hierbei ist nicht nur
        das Gestell, sondern auch die Art der Gläser. Diese werden z.B.
        entspiegelt, damit keine Lichtreflexe beim Sehen stören und das
        Gegenüber dem Brillenträger ohne Spiegelungen in die Augen blicken kann.
        Brillengläser können außerdem getönt oder beschichtet sein.
        Gleitsichtgläser weisen sogar unterschiedliche Stärken innerhalb des
        Glases auf: Durch den oberen Bereich der Gläser kann man in die Ferne
        blicken, mithilfe des unteren Teils lesen.
      </Paragraph>
      <Paragraph>
        AugenoptikerInnen kennen die geeignete Sehhilfe für jeden Anlass, ob für
        den Sport, als Sonnenschutz oder für den Computer-Arbeitsplatz. Im
        Optikfachgeschäft stehen sie den Kunden beratend zur Seite und helfen,
        die geeigneten Gläser und Brillengestelle auszuwählen. Fachwissen allein
        genügt hier nicht: AugenoptikerInnen benötigen auch ein Gespür für Stil
        und aktuelle Modetrends. Auch bei großem Kundenandrang behalten sie
        stets den Überblick. Ein Kunde braucht z.B. eine Lesebrille, ein anderer
        möchte sich über die Vor- und Nachteile von Kunststoffgläsern
        informieren. Eine dritte Kundin benötigt eine Brille mit einer anderen
        Glasstärke als ihre bisherige. Falls noch keine Untersuchungsergebnisse
        eines Augenarztes/einer Augenärztin vorliegen, wird der Korrekturbedarf
        im Optikfachgeschäft ermittelt. Auf Wunsch führen AugenoptikerInnen auch
        Führerschein-Sehtests durch. Mehr und mehr Fachgeschäfte für Optik
        bieten mittlerweile auch Dienstleistungen im Bereich Hörgeräteakustik
        an. Hierbei sind die AugenoptikerInnen insbesondere beratend tätig und
        müssen sich daher auch mit Hörgeräten auskennen.
      </Paragraph>
      <Paragraph>
        Der Beruf der AugenoptikerIn ist also sehr vielfältig und hat viel mit
        Stil und Präzisionsarbeit zu tun. Die Ausbildung ist dual, findet also
        in einem Betrieb und der Berufsschule statt, sie dauert 3 Jahre. Nach
        einigen Jahren Berufserfahrung kann man die Meisterprüfung anstreben und
        dann einen eigenen Optikerladen eröffnen.
      </Paragraph>
      <Paragraph>
        In der Jobbörse der Arbeitsagentur finden sich aktuell 200 offene
        Stellen für Augenoptiker bundesweit.
      </Paragraph>
    </>
  );
};

export const Automobilverkäufer = (props) => {
  return (
    <>
      <Paragraph>
        Berufliche Zukunft im Vertrieb (z.B. in der Automobilindustrie)
      </Paragraph>
      <Paragraph>
        Die Produktvielfalt in unserer modernen Gesellschaft ist enorm groß, so
        dass Käufer und Hersteller nicht mehr ohne weiteres zielsicher
        zusammenfinden. Ausgefeilte Marketingstrategien, die Produkte und
        potenzielle Käufer/iInnen erfolgreich zusammenbringen, sind heute ein
        wichtiger globaler Absatzgarant und zudem Imagefaktor für Unternehmen.
      </Paragraph>
      <Paragraph>
        Normalerweise ist die Ausbildung zur/m Automobilverkäufer/in dreijährig.
        Bei einigen Unternehmen, wie z.B. Mercedes Benz kann man sich aber
        innerhalb eines Jahres zur/m zertifizierten Automobilverkäufer/in
        qualifizieren. Voraussetzung für diese fundierte unternehmensorientierte
        Kompaktausbildung in den unter anderen Bereichen Kaufmännisches,
        Marketing, Psychologie ist, dass man dann auch tatsächlich im Vertrieb
        des Unternehmens tätig wird. Das bedeutet, dass bei
        Qualifizierungsbeginn ein Vertrag mit Einstellungsoption eingegangen
        wird, der nicht nur eine aussichtsreiche berufliche Perspektive in den
        einzelnen Vertriebssparten eröffnet, sondern auch finanzielle Sicherheit
        bietet. Bereits während der Ausbildung ist man angestellt und kann sich
        so für Vertriebsaufgaben innerhalb des Unternehmens gut empfehlen.
        Bewerbungen mit dem Verweis “Einjährige Kompaktausbildung
        Automobilverkäufer/in” sind jederzeit möglich. Gern beraten wir bei
        Interesse und Fragen zur Bewerbung.
      </Paragraph>
      <Paragraph>
        Tänzer*innen bringen für den Vertrieb vieles mit, das in diesem
        vielseitigen und anspruchsvollen Berufsfeld wichtig, aber trotzdem nicht
        selbstverständlich ist: Ausstrahlung und Stil, ästhetisches Empfinden,
        Feingefühl, Flexibilität, Mehrsprachigkeit, interkulturelle Kompetenz,
        Flexibilität. Die weltweit sehr erfolgreiche deutsche Automobilindustrie
        sucht stetig Talente für den Vertrieb und bietet sehr gute
        Entwicklungsmöglichkeiten. Dies auch unter dem Gesichtspunkt, dass sich
        die Branche aufgrund moderner Technologien wie Elektromobilität und
        Navigationstechnik sehr stark bewegt und sehr innovativ ist. Infos mit
        dem Stichwort Automobilverkäufer*in sind bei der IHK des jeweiligen
        Wohnortes bzw. den Unternehmen zu finden, wie beispielsweise bei:
      </Paragraph>
      <Link onPress={() => Linking.openURL('https://www.volkswagen.de')}>
        www.volkswagen.de
      </Link>
      <Link onPress={() => Linking.openURL('https://www.mercedes-benz.de')}>
        www.mercedes-benz.de
      </Link>
      <Link onPress={() => Linking.openURL('https://www.bmw.de')}>
        www.bmw.de
      </Link>
      <Link onPress={() => Linking.openURL('https://www.porsche.de')}>
        www.porsche.de
      </Link>
      <Paragraph>
        Normalerweise dauert die Ausbildung zur*m Automobilverkäufer*in drei
        Jahre.
      </Paragraph>
      <Paragraph>
        Bei einigen Unternehmen, wie z.B. Mercedes Benz, kann man sich aber
        innerhalb eines Jahres zum*r zertifizierten Automobilverkäufer*in
        qualifizieren. Voraussetzung für diese fundierte unternehmensorientierte
        Kompaktausbildung in den exemplarisch genannten Bereichen:
        Kaufmännisches, Marketing und Psychologie ist, dass man dann auch
        tatsächlich im Vertrieb des Unternehmens tätig wird.
      </Paragraph>
      <Paragraph>
        Das bedeutet, dass bei Qualifizierungsbeginn ein Vertrag mit
        Einstellungsoption eingegangen wird, der nicht nur eine aussichtsreiche
        berufliche Perspektive in den einzelnen Vertriebssparten eröffnet,
        sondern auch finanzielle Sicherheit bietet. Bereits während der
        Ausbildung ist man angestellt und kann sich so sehr fokussiert für
        Vertriebsaufgaben innerhalb des Unternehmens empfehlen. Bewerbungen mit
        dem Verweis „Einjährige Kompaktausbildung Automobilverkäufer*in“ sind
        jederzeit möglich. Gern beraten die bundesweiten Niederlassungen bei
        Interesse und Fragen zur Bewerbung.
      </Paragraph>
      <Paragraph>
        Ausführliche Infos zur einjährigen Kompaktausbildung z.B. bei Mercedes
        Benz Berlin unter:
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.mercedes-benz-berlin.de/de/desktop/passenger-cars/about-us/career/vacancies/nachwuchsverkauf-pkw.html'
          )
        }
      >
        www.mercedes-benz-berlin.de/de/desktop/passenger-cars/about-us/career/vacancies/nachwuchsverkauf-pkw.html
      </Link>
    </>
  );
};

export const AuswertigesAmt = (props) => {
  return (
    <>
      <Paragraph>
        Für alle Tänzer*innen in Transition eine Option, die:
      </Paragraph>
      <List>
        <ListItem>es abwechslungsreich und auch herausfordernd mögen</ListItem>
        <ListItem>kosmopolitisch denken</ListItem>
        <ListItem>sich mit Deutschland/EUropa identifizieren</ListItem>
        <ListItem>offen für fremde Sprachen und Kulturen sind</ListItem>
        <ListItem>
          mit oder ohne Familie im Ausland leben möchten/können
        </ListItem>
        <ListItem>und kein Problem damit haben, verbeamtet zu sein.</ListItem>
      </List>
      <Paragraph>
        (deutsche Staatsbürgerschaft und fließende Deutschkenntnisse
        Voraussetzung, wobei eine zweite Muttersprache wie z.B. Russisch,
        Türkisch, Arabisch von Vorteil ist)
      </Paragraph>
      <Paragraph>
        Der diplomatische Dienst des Auswärtigen Amtes sucht
        Beamt*innenanwärter*innen für den Mittleren Dienst! Vereinfacht gesagt,
        sind das die Menschen, die nach intensiver Ausbildung in den
        verschiedenen Abteilungen der deutschen Auslandsvertretungen, also in
        den Botschaften, arbeiten, z.B. als Kulturattaché. Wichtig zu wissen,
        dass man stets alle Abteilungen einer Auslandsvertretung durchläuft,
        also beispielsweise auch die Visa-Abteilung. Interesse an Verwaltung,
        Recht und Projektmanagement wird deshalb vorausgesetzt.
      </Paragraph>
      <Paragraph>
        Die Auslandseinsätze nach erfolgreicher Ausbildung erfolgen im
        sogenannten weltweiten Rotationsprinzip, d.h. man wechselt nach ca. vier
        bis sechs Jahren den Einsatzort. Das Auswärtige Amt bemüht sich bei der
        Einsatzplanung private Belange zu berücksichtigen. Mitreisende Kinder
        und Jugendliche besuchen in der Regel die internationalen Deutschen
        Schulen im Gastland. Dort werden überwiegend nach dem thüringischen
        Lehrplan deutsche Schulabschlüsse erworben, die selbstverständlich in
        Deutschland und der EU anerkannt sind.
      </Paragraph>
      <Paragraph>
        Die 24-monatige, bezahlte, praxisorientierte Vollzeit-Ausbildung mit
        intensiven Fremdsprachenmodulen an der Akademie des Auswärtigen Dienstes
        in Berlin (Tegel) hat einen exzellenten Ruf. Praktika in der Zentrale
        des Auswärtigen Amtes sowie an einer der weltweiten Auslandsvertretungen
        sind selbstverständlicher Bestandteil dieser Ausbildung.
      </Paragraph>
    </>
  );
};
