import React from 'react';
import Paragraph from '../articleComponents/paragraph';
import Link from '../articleComponents/link';
import {Linking, Touchable, TouchableOpacity} from 'react-native';
import {List, ListItem} from '../articleComponents/list';
import ArticleSubHeader from '../articleComponents/articleSubHeader';
import Quote from '../../components/articleComponents/quote';

import {sendEmail} from '../../utilities/sendEmail';

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

export const Bekleidungstechniker = (props) => {
  return (
    <>
      <Paragraph>
        Das Bachelor-Studium Bekleidungstechnik/Konfektion gehört als sehr
        interdisziplinär ausgerichtetes Fach zu den Ingenieurwissenschaften. Der
        starke Praxisbezug ist dabei unübersehbar, denn Verarbeitungstechnik,
        textile Werkstofftechnik oder maschinentechnische Grundlagen sind
        wesentliche Bestandteile des Lehrplans, die bei laufender Produktion
        erprobt werden müssen.
      </Paragraph>
      <Paragraph>
        Vermittelt werden neben den mathematisch- technischen Grundlagen der
        Textil- und Bekleidungsproduktion ebenso chemisch-physikalische
        Wissensbausteine, indem zum Beispiel – meist in Kooperation mit
        entsprechenden Unternehmen – die große Vielfalt unterschiedlicher
        Materialien und Textilien analysiert und einsetzbar gemacht werden. Der
        sich stark entwickelnde Markt der „Smart Textiles“ spielt dabei eine
        große Rolle: Gewebe mit beispielsweise wasserdichten und/oder
        feuerfesten Eigenschaften, die bei der Berufsbekleidung bestimmter
        Berufsgruppen oder der Innenausstattung verschiedenster Transportmittel
        zum Einsatz kommt.
      </Paragraph>
      <Paragraph>
        Neben diesen vor allem technisch-naturwissenschaftlichen Kompetenzen
        geht es in der Bekleidungstechnik fachlich auch um die textile
        Produktion an sich sowie betriebswirtschaftliches Knowhow, zum Beispiel
        im Bereich Unternehmensführung, denn der weltweite Bekleidungsmarkt ist
        hart umkämpft. Ein wichtiges Schlagwort an dieser Stelle, das den Bogen
        zu den bereits erwähnten immer wichtiger werdenden „Smart Textiles“
        schlägt, ist Innovation bzw. Innovationsmanagment. Ebenso wichtig sind
        in diesem Zusammenhang die Fächer Marketing und Logistik.
      </Paragraph>
      <Paragraph>
        Neben all dem werden selbstverständlich die Grundlagen des Designs, wie
        Farbenlehre bzw. der Umgang mit Farben vermittelt. Wahlfächer erlauben
        die Spezialisierung in beispielsweise Design und Material, Marketing und
        Wirtschaftswissenschaften oder der bereits erwähnten textilen
        Materialwissenschaft.
      </Paragraph>
      <Paragraph>
        TextilingenieurInnen sind nach ihrem vielseitigen Studium meistens in
        der Textil- und Bekleidungsindustrie tätig. Sie organisieren und
        überwachen dort die industrielle Fertigung von Textilien. Außerdem sind
        sie gemeinsam mit DesignerInnen für die Gestaltung neuer Textilprodukte
        verantwortlich und forschen an neuen Fertigungstechniken. Da sich die
        Herstellung von Textilien mit Hilfe neuer Technologien immer wieder
        verändert, handelt es sich hierbei um einen sehr spannenden und
        abwechslungsreichen Tätigkeitsbereich, der auch internationale
        Perspektiven eröffnet. Oft sind Textilingenieure nämlich auch in der
        Automobil-, Luftfahrt- oder Raumfahrtindustrie tätig. Dort arbeiten sie
        an der Herstellung von Raumanzügen, Autositzen oder Airbags.
      </Paragraph>
      <Paragraph>
        Viele AbsolventInnen der Bekleidungstechnik übernehmen im Laufe ihrer
        beruflichen Karriere auch erfolgreich Managementaufgaben, etwa im
        Vertrieb.
      </Paragraph>
      <Paragraph>Weitere Infos zum Studiengang hier:</Paragraph>
      <List>
        <ListItem>
          HTW Berlin: BA Bekleidungstechnik, Zugang auch ohne Abitur möglich
        </ListItem>
        <ListItem>Hochschule Niederrhein Mönchengladbach</ListItem>
        <ListItem>Carl von Ossietzky Universität Oldenburg</ListItem>
        <ListItem>Hochschule Albstadt-Sigmaringen</ListItem>
      </List>
    </>
  );
};

export const Gesundheitsmanager = (props) => {
  return (
    <>
      <Paragraph>
        Der Bedarf an Fachkräften für Gesundheitsmanagement und Prävention
        steigt. So verwundert auch nicht, dass es bundesweit immer mehr
        Weiterbildungsangebote im Bereich Gesundheitsmanagement gibt. Allerdings
        variieren sie enorm in Qualität, Preis und der Art des
        Qualifikationsnachweises.
      </Paragraph>
      <Paragraph>
        Beschäftigungsmöglichkeiten im betrieblichen Gesundheitsmanagement
      </Paragraph>
      <Paragraph>
        „Im Durchschnitt sitzt jeder Erwachsene 11,5 Stunden täglich, bei
        Grundschulkindern sind es rund neun Stunden am Tag.“ (Zitat:
        Wirtschaftswoche online vom 09.07.2014). Die stundenlange einseitige
        Belastung des Stütz- und Bewegungsapparates ist vor allem deshalb rapide
        gestiegen, weil heutzutage bei der Arbeit und Ausbildung überwiegend nur
        noch gesessen wird. Langfristig schädigt das den Körper und kann auch
        die seelische Balance bzw. allgemeine Zufriedenheit von
        ArbeitnehmerInnen und damit ihren Erfolg und den des Unternehmens
        negativ beeinflussen. Das ist von Nachteil für jede/n Betroffene/n,
        eröffnet ehemaligen TänzerInnen gleichzeitig aber berufliche Optionen,
        bei entsprechender Transition als Trainerin, Beraterin, Coach im
        betrieblichen Gesundheitsmanagement tätig sein zu können. Weitere
        Auskünfte für sinnvolle Transitionmaßnahmen über:
      </Paragraph>
      <TouchableOpacity
        onPress={() =>
          sendEmail('alannapfeiffer@gmail.com', 'Transition Anfrage', '').then(
            () => {
              console.log('Your message was successfully sent!');
            }
          )
        }
      >
        <ArticleSubHeader textStyle={{fontWeight: 'bold', fontSize: 14}}>
          info@stiftung-tanz.com.
        </ArticleSubHeader>
      </TouchableOpacity>
      <Paragraph>
        Die Gesundheit ihrer MitarbeiterInnen zu erhalten und vielfältig zu
        fördern, ist bei vielen vor allem größeren Firmen mittlerweile wichtiger
        Bestandteil der Personalarbeit. BASF, Nike, SIEMENS oder auch Nokia
        haben beispielsweise verschiedenste Programme bzw. Kursangebote in den
        Firmen selbst oder bei KooperationspartnerInnen, wie Pilates-Studios,
        Fitness-Studios usw. Angebote sind unter anderem: Stressbewältigung,
        diverse Bewegungsprogramme, Vorsorge oder auch Ernährung. Die
        MitarbeiterInnen haben während der Arbeitszeit oder auch danach die
        Möglichkeit, sich bei Yoga zu entspannen, spezielles Rückentraining zu
        absolvieren oder wichtige Ernährungstipps zu bekommen. Die gesetzlichen
        Krankenkassen bzw. Betriebskrankenkassen fördern dieses spezielle
        betriebliche Gesundheitsmanagement unter anderem durch entsprechende
        Boni-Systeme und auch das Finanzamt erkennt entsprechende Ausgaben für
        die individuelle Gesundheitsförderung an. Zertifizierte TrainerInnen
        haben gute freiberufliche bzw. auch festangestellte Perspektiven in den
        Firmen direkt oder bei deren KooperationspartnerInnen.
      </Paragraph>
      <Paragraph>
        Orientierung hinsichtlich verlässlicher Standards für die Ausbildung,
        insbesondere für Weiterbildungsangebote im Betrieblichen
        Gesundheitsmanagement (BGM), bieten die „Empfehlungen zur Ausbildung im
        Bereich Gesundheitsmanagement“ vom unabhängigen Bundesverband für
        Betriebliches Gesundheitsmanagement (BBGM), die Anfang 2016 auf der
        Webseite des Verbandes publiziert wurden:
      </Paragraph>
      <Paragraph>
        Zu den Mitgliedern des BBGM, die den o.g. Ausbildungsempfehlungen
        folgen, gehören neben Wirtschaftsunternehmen auch verschiedene
        Weiterbildungsanbieter, wie beispielsweise die staatlich anerkannte
        Hochschule für Prävention und Gesundheitsmanagement, an der man sowohl
        den gleichnamigen BA als auch den MA erwerben kann (mtl. Studiengebühr
        BA = 330,00 € / MA= 390,00 €)
      </Paragraph>
      <Paragraph>
        Soll kein zeitaufwändiges Studium an einer Hochschule oder Universität
        Transition-Ziel sein, sondern eine kompakte und zertifizierte
        Weiterbildung absolviert werden, ist diese z.B. an der BSA Akademie für
        Prävention, Fitness und Gesundheit möglich. Dort werden folgende
        Lehrgänge im BGM angeboten:
      </Paragraph>
      <Paragraph>
        Fachkraft für BGM (IHK, 1.290,00 €) / Berater/in für Firmenfitness
        (249,00 €) / Betriebliche/r Gesundheitsmanager/in (1.298,00 €)/
        Gesundheitsmanager im Betrieb (998,00 €) / Gesundheitsexperte für KMU*
        (2.598,00 €)
      </Paragraph>
      <Paragraph>
        Infos zum Bundesverband für Betriebliches Gesundheitsmanagement:
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.bgm-bv.de/')}>
        www.bgm-bv.de
      </Link>
      <Paragraph style={{fontSize: 11}}>
        * kleine und mittelständische Unternehmen
      </Paragraph>
    </>
  );
};

export const Biologie = (props) => {
  return (
    <>
      <Paragraph style={{fontWeight: 'bold'}}>Berufsbild:</Paragraph>
      <Paragraph>
        Den klassischen Biologen gibt es so eigentlich gar nicht. Viel mehr
        arbeiten die meisten Biologen/innen in verschiedenen Bereichen: in
        Forschung, Lehre oder Umweltschutz. Dabei befasst man sich mit der
        Erforschung von Strukturen und Vorgängen bei Menschen (z.B. Erforschung
        von Krankheiten), Tieren (z.B. Entstehung von verschiedenen Arten),
        Pflanzen (z.B. Entwicklung von ertragsreicheren Pflanzen) und
        Mikroorganismen (z.B. Entwicklung von Biotreibstoffen). Anwendung finden
        die erzielten Forschungsergebnisse unter anderem in den Bereichen
        Umweltschutz, Pharma und Medizin.
      </Paragraph>
      <Paragraph style={{fontWeight: 'bold'}}>
        Voraussetzungen um als Biologe arbeiten zu können:
      </Paragraph>
      <Paragraph>
        Voraussetzung, um als Biologe/in arbeiten zu können, ist mindestens ein
        abgeschlossenes Bachelor-Studium der Biologie. In der Regel kann man
        Biologie an einer Universität studieren, es gibt aber auch spezielle
        Studiengänge, zum Beispiel Biotechnologie, welche man an einer
        Fachhochschule studieren kann. In den meisten Bereichen werden
        allerdings ein Masterabschluss und häufig auch eine Promotion
        vorausgesetzt. Das ergibt eine Regelstudienzeit von 10 Semestern
        (Bachelor + Master) mit anschließender Promotion, welche auch noch
        einmal drei bis fünf Jahre in Anspruch nimmt, das Gute dabei ist
        allerdings, dass man angestellt ist und ein geregeltes Einkommen
        bezieht.
      </Paragraph>
      <Paragraph style={{fontWeight: 'bold'}}>
        Wie ist das Studium aufgebaut?
      </Paragraph>
      <Paragraph>
        Im Bachelor-Studium lernt man die verschiedenen Bereiche der Biologie
        kennen und verschafft sich einen groben Überblick über diese, dazu
        gehören: Botanik, Zoologie, Mikrobiologie, Genetik, Zellbiologie,
        Bioinformatik und Anthropologie. Das Bachelorstudium besteht etwa zur
        Hälfte aus Vorlesungen und zur anderen Hälfte aus verschiedenen
        Praktika, in denen man lernt, wie man ein Experiment plant, durchführt
        und am Ende auswertet. Im anschließenden Master-Studium vertieft und
        spezialisiert man sich auf ein Teilgebiet der Biologie. Die Verteilung
        ist auch hier ungefähr 50:50 zwischen Praxis und Theorie. Wer sich
        danach entscheidet eine Promotion anzuschließen beschäftigt sich über
        einen längeren Zeitraum mit einer ganz bestimmten Fragestellung.
      </Paragraph>
      <Paragraph style={{fontWeight: 'bold'}}>
        Nach dem Studium/der Promotion:
      </Paragraph>
      <Paragraph>
        Nach dem erfolgreichen Studium oder der Promotion stehen einem
        verschiedene Karrieremöglichkeiten in der Industrie und der Wissenschaft
        offen, aber auch im öffentlichen Dienst sind Biologen/innen beschäftigt.
      </Paragraph>
      <Paragraph style={{fontWeight: 'bold'}}>
        Gibt es auch einen anderen Weg, um in der Forschung arbeiten zu können?
      </Paragraph>
      <Paragraph>
        Wer nicht unbedingt Biologie studieren möchte kann als
        Biologielaborant/in oder als technische/r Assistent/in im Labor
        arbeiten. Die Ausbildung hierfür dauert drei Jahre.
      </Paragraph>
      <Paragraph style={{fontSize: 11, fontStyle: 'italic'}}>
        geschrieben von Jonas Schwickert, Biologe M.Sc.
      </Paragraph>
    </>
  );
};

export const Blindenpädagoge = (props) => {
  return (
    <>
      <Paragraph>
        Blindenpädagog*innen sind spezialisiert auf das Einschränkungsbild
        sehbehinderter und blinder Menschen aller Altersgruppen. Ihr Einsatzfeld
        ist vielfältig. Sie können bei Alltagsaufgaben aller Art assistieren, in
        allen Institutionen und Einrichtungen für Sehschwache und Blinde
        arbeiten, im öffentlichen Dienst tätig sein (z.B. als
        Sozialoberionspektor*in) oder sich auch als Fachberater*in für die
        spezielle Gruppe der Sehschwachen und Blinden selbständig machen.
      </Paragraph>
      <Paragraph>
        “Neben philosophischen Fragestellungen über das Thema der Wahrnehmung
        und Wirklichkeitskonstruktion von Blinden beinhaltet der
        [Ausbildungs-]plan Aspekte wie Orientierung und Mobilität,
        Frühförderung, alltagspraktische Fertigkeiten, moderne
        Kommunikationstechnologien, die Brailleschrift und Augenheilkunde.”
        Blindenpädagogik kann in Deutschland an der Universität entweder als BA
        oder MA studiert werden, z.B.: Universität Marburg, Humboldt-Universität
        Berlin, Pädagogische Hochschule Heidelberg, Universität Dortmund und
        Universität Hamburg. An allen genannten Universitäten gilt für das Fach
        der Blindenpädagogik ein N.C., was den Mangel an Blindenpädagog*innen
        verstärkt. Selbstverständlich kann man sich aber auch als
        Sonderpädagog*in, Heilpädagog*in, Behindertenpädagog*in,
        Rehabilitationspädagog*in oder an Berufsfachschulen als
        Heilerziehungspfleger*in ausbilden lassen und sich dann
        blindenpädagogisch weiterbilden.
      </Paragraph>
      <Paragraph>
        Auch für Tanzpädagog*innen ist die blindenpädagogische Weiterbildung
        durch Zertifikatskurse bzw. Aufbaustudium möglich!
      </Paragraph>
      <Paragraph>
        Schon vor über zehn Jahren prognostizierte der Vorsitzende des Blinden-
        und Sehschwachenverbandes Deutschland e.V., Eberhard Fuchs den Mangel an
        Blindenpädagog*innen. Und bereits damals war “[d]er Arbeitsmarkt [für
        Blindenpädagog*innen] hervorragend.” Bestätigt wurde dies für 2017 und
        Zukunft von Mitarbeiter*innen des Deutschen Blinden-Museums e.V., mit
        denen wir im Rahmen der Recherche für diesen Text am 22.6.2017
        persönlich sprachen.
      </Paragraph>
      <Paragraph style={{fontWeight: 'bold'}}>
        Master Blinden- und Sehbehindertenpädagogik:
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.uni-marburg.de/fb21/studium/studiengaenge/wb-bsp'
          )
        }
      >
        www.uni-marburg.de/fb21/studium/studiengaenge/wb-bsp
      </Link>
      <Paragraph style={{fontWeight: 'bold'}}>
        Zertifikatskurs „Grundlagen inklusiver Bildung bei Blindheit und
        Sehbehinderung“:
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.uni-marburg.de/fb21/studium/studiengaenge/grip-bs'
          )
        }
      >
        www.uni-marburg.de/fb21/studium/studiengaenge/grip-bs
      </Link>

      <Paragraph style={{fontWeight: 'bold'}}>
        Integrative Lerntherapie an der Universität Hamburg:
      </Paragraph>

      <Paragraph>
        Blindenpädagogik innerhalb der Sonderpädagogik an der HU Berlin
      </Paragraph>

      <Paragraph style={{fontWeight: 'bold'}}>
        Infos zum Deutschen Blinden-Museum e.V. in Berlin unter:
      </Paragraph>
      <Link
        onPress={() => Linking.openURL('http:// www.blindenmuseum-berlin.de/')}
      >
        www.blindenmuseum-berlin.de/
      </Link>

      <Paragraph>
        Wir danken dem Deutschen Blinden-Museum für alle Auskünfte!
      </Paragraph>
      <Paragraph style={{fontStyle: 'italic', fontSize: 11}}>
        Indirekt zitierte Quelle: Herr Hentschel vom Blinden-Museum e.V. Berlin
        am 22.6.2017
      </Paragraph>
    </>
  );
};

export const Buchbinder = (props) => {
  return (
    <>
      <Paragraph>
        Dieser Handwerksberuf reicht zurück bis in die Antike, konnte aber trotz
        Digitalisierung überleben. Buchbinder*innen fertigen Einzel- sowie
        Sonderstücke in Handarbeit und produzieren je nach Auftragslage bzw.
        Ausstattung auch maschinell, z.B. Blankoprodukte, Bucheinbände,
        Buchveredelungen- und Reparaturen, besondere Verpackungen
        Bilderrahmungen (u.a. hochwertige Passepartouts).
      </Paragraph>
      <Paragraph>
        „Für ein Buch muss man mindestens drei Tage rechnen. Eine Woche bis zehn
        Werktage sind Standard.“, meint Paul Ebsen von der Arbeitsagentur.
        Vielleicht ist das der Grund, warum bundesweit pro Jahr gerade mal rund
        50 Azubis die Lehre zum*r Buchbinder*in beginnen, wie die Behörde
        informiert.
      </Paragraph>
      <Paragraph>
        Die dreijährige Ausbildung ist dual, besteht also aus Theorie und Praxis
        im jeweiligen Ausbildungsbetrieb. Das sind meistens kleine
        Handwerksbetriebe. Welcher Betrieb ausbildet, ist bei den lokalen
        Buchbinder-Innungen zu erfahren. Formelle Zugangsvoraussetzung für eine
        Ausbildung als Buchbinder*in ist die mittlere Reife.
      </Paragraph>
      <Paragraph>
        Um in diesem traditionsreichen Handwerksberuf Zufriedenheit finden zu
        können, braucht es u.a.:
      </Paragraph>
      <List>
        <ListItem>Interesse an Büchern</ListItem>
        <ListItem>
          Geschick, Freude und Kreativität im Umgang mit verschiedensten
          Materialien
        </ListItem>
        <ListItem>
          räumliches Vorstellungsvermögen und Liebe zum Detail
        </ListItem>
        <ListItem>
          solide mathematische Kenntnisse, vor allem für Materialkunde
        </ListItem>
        <ListItem>
          gute Haltung und robuste Gesundheit, da überwiegend im Stehen
          gearbeitet wird
        </ListItem>
        <ListItem>keine Allergien</ListItem>
      </List>
      <Quote>
        „Die Restaurierung historischer Bucheinbände hat an Bedeutung gewonnen.
        Es wird wieder mehr Wert auf die Wiederherstellung der Originale gelegt.
        Daher ist die handwerkliche Ausbildung zum Buchbinder nicht selten die
        Grundlage für eine [Weiterqualifizierung] zum Restaurator.“
      </Quote>
      <Paragraph>Weitere INFOS zum Beruf:</Paragraph>
      <Link onPress={() => Linking.openURL('http://www.zfamedien.de/berufe/')}>
        www.zfamedien.de/berufe/
      </Link>
      <Link
        onPress={() => Linking.openURL('http://www.bdbi.org/startseite.html')}
      >
        www.bdbi.org/startseite.html
      </Link>
    </>
  );
};
