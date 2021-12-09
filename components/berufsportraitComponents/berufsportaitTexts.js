import React from 'react';
import Paragraph from '../articleComponents/paragraph';
import Link from '../articleComponents/link';
import {Linking, TouchableOpacity} from 'react-native';
import {List, ListItem} from '../articleComponents/list';
import ArticleSubHeader from '../articleComponents/articleSubHeader';
import Quote from '../../components/articleComponents/quote';

import {
  AirTransportEnglish,
  AnimalFarmerEnglish,
  AnimalPhysiotherapyEnglish,
  ArtGeragogueEnglish,
  AutomotiveEnglish,
  BiologistEnglish,
  BlindPedagogueEnglish,
  BookBinderEnglish,
  CircusEducatorEnglish,
  CivilServantEnglish,
  ClothingTechnicianEnglish,
  ClownEnglish,
  CorporateHealthManagerEnglish,
  CruiseManagerEnglish,
  CultureMediatorEnglish,
  EducatorEnglish,
  EurythmistEnglish,
  GoetheEnglish,
  HealtPromotionEnglish,
  HearingAidAccustitcianEnglish,
  HearingCareProfessionalEnglish,
  InsuranceBrokerEnglish,
  InteriorDecoratorEnglish,
  LeisureScientistEnglish,
  MakeUpArtistEnglish,
  MediaDesignerEnglish,
  NutritionalCouncellingEnglish,
  OpticianEnglish,
  OsteopathyEnglish,
  PharmaceuticalTechnicalAssistantEnglish,
  SocialInsuranceClerkEnglish,
  SocialWorkBAEnglish,
  SocialWorkStudiesEnglish,
  SpeechTherapistEnglish,
  SportsManagerEnglish,
  TeacherEnglish,
  TheaterEventTechnicianEnglish,
  TourGuideEnglish,
  TraineeEnglish
} from './berufsportraitsEnglishTexts';

import {sendEmail} from '../../utilities/sendEmail';
import Article from '../articleComponents/article';
import {SportsManager} from './berufsportraitsEnglishContent';

export const Augenoptiker = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Optician △' : 'AugenoptikerIn △'}
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <OpticianEnglish />
      ) : (
        <Article>
          <Paragraph>
            Moderne Brillen sind schon lange nicht mehr nur Sehhilfen, sie sind
            Accessoires, die den Typ ihrer Träger unterstreichen und gut zu
            deren Stil und Lebensweise passen sollen. Entscheidend hierbei ist
            nicht nur das Gestell, sondern auch die Art der Gläser. Diese werden
            z.B. entspiegelt, damit keine Lichtreflexe beim Sehen stören und das
            Gegenüber dem Brillenträger ohne Spiegelungen in die Augen blicken
            kann. Brillengläser können außerdem getönt oder beschichtet sein.
            Gleitsichtgläser weisen sogar unterschiedliche Stärken innerhalb des
            Glases auf: Durch den oberen Bereich der Gläser kann man in die
            Ferne blicken, mithilfe des unteren Teils lesen.
          </Paragraph>
          <Paragraph>
            AugenoptikerInnen kennen die geeignete Sehhilfe für jeden Anlass, ob
            für den Sport, als Sonnenschutz oder für den Computer-Arbeitsplatz.
            Im Optikfachgeschäft stehen sie den Kunden beratend zur Seite und
            helfen, die geeigneten Gläser und Brillengestelle auszuwählen.
            Fachwissen allein genügt hier nicht: AugenoptikerInnen benötigen
            auch ein Gespür für Stil und aktuelle Modetrends. Auch bei großem
            Kundenandrang behalten sie stets den Überblick. Ein Kunde braucht
            z.B. eine Lesebrille, ein anderer möchte sich über die Vor- und
            Nachteile von Kunststoffgläsern informieren. Eine dritte Kundin
            benötigt eine Brille mit einer anderen Glasstärke als ihre
            bisherige. Falls noch keine Untersuchungsergebnisse eines
            Augenarztes/einer Augenärztin vorliegen, wird der Korrekturbedarf im
            Optikfachgeschäft ermittelt. Auf Wunsch führen AugenoptikerInnen
            auch Führerschein-Sehtests durch. Mehr und mehr Fachgeschäfte für
            Optik bieten mittlerweile auch Dienstleistungen im Bereich
            Hörgeräteakustik an. Hierbei sind die AugenoptikerInnen insbesondere
            beratend tätig und müssen sich daher auch mit Hörgeräten auskennen.
          </Paragraph>
          <Paragraph>
            Der Beruf der AugenoptikerIn ist also sehr vielfältig und hat viel
            mit Stil und Präzisionsarbeit zu tun. Die Ausbildung ist dual,
            findet also in einem Betrieb und der Berufsschule statt, sie dauert
            3 Jahre. Nach einigen Jahren Berufserfahrung kann man die
            Meisterprüfung anstreben und dann einen eigenen Optikerladen
            eröffnen.
          </Paragraph>
          <Paragraph>
            In der Jobbörse der Arbeitsagentur finden sich aktuell 200 offene
            Stellen für Augenoptiker bundesweit.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Automobilverkäufer = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Automotive salesperson △' : 'Automobilverkäufer*In △'}
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <AutomotiveEnglish />
      ) : (
        <Article>
          <Paragraph>
            Berufliche Zukunft im Vertrieb (z.B. in der Automobilindustrie)
          </Paragraph>
          <Paragraph>
            Die Produktvielfalt in unserer modernen Gesellschaft ist enorm groß,
            so dass Käufer und Hersteller nicht mehr ohne weiteres zielsicher
            zusammenfinden. Ausgefeilte Marketingstrategien, die Produkte und
            potenzielle Käufer/iInnen erfolgreich zusammenbringen, sind heute
            ein wichtiger globaler Absatzgarant und zudem Imagefaktor für
            Unternehmen.
          </Paragraph>
          <Paragraph>
            Normalerweise ist die Ausbildung zur/m Automobilverkäufer/in
            dreijährig. Bei einigen Unternehmen, wie z.B. Mercedes Benz kann man
            sich aber innerhalb eines Jahres zur/m zertifizierten
            Automobilverkäufer/in qualifizieren. Voraussetzung für diese
            fundierte unternehmensorientierte Kompaktausbildung in den unter
            anderen Bereichen Kaufmännisches, Marketing, Psychologie ist, dass
            man dann auch tatsächlich im Vertrieb des Unternehmens tätig wird.
            Das bedeutet, dass bei Qualifizierungsbeginn ein Vertrag mit
            Einstellungsoption eingegangen wird, der nicht nur eine
            aussichtsreiche berufliche Perspektive in den einzelnen
            Vertriebssparten eröffnet, sondern auch finanzielle Sicherheit
            bietet. Bereits während der Ausbildung ist man angestellt und kann
            sich so für Vertriebsaufgaben innerhalb des Unternehmens gut
            empfehlen. Bewerbungen mit dem Verweis “Einjährige Kompaktausbildung
            Automobilverkäufer/in” sind jederzeit möglich. Gern beraten wir bei
            Interesse und Fragen zur Bewerbung.
          </Paragraph>
          <Paragraph>
            Tänzer*innen bringen für den Vertrieb vieles mit, das in diesem
            vielseitigen und anspruchsvollen Berufsfeld wichtig, aber trotzdem
            nicht selbstverständlich ist: Ausstrahlung und Stil, ästhetisches
            Empfinden, Feingefühl, Flexibilität, Mehrsprachigkeit,
            interkulturelle Kompetenz, Flexibilität. Die weltweit sehr
            erfolgreiche deutsche Automobilindustrie sucht stetig Talente für
            den Vertrieb und bietet sehr gute Entwicklungsmöglichkeiten. Dies
            auch unter dem Gesichtspunkt, dass sich die Branche aufgrund
            moderner Technologien wie Elektromobilität und Navigationstechnik
            sehr stark bewegt und sehr innovativ ist. Infos mit dem Stichwort
            Automobilverkäufer*in sind bei der IHK des jeweiligen Wohnortes bzw.
            den Unternehmen zu finden, wie beispielsweise bei:
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
            qualifizieren. Voraussetzung für diese fundierte
            unternehmensorientierte Kompaktausbildung in den exemplarisch
            genannten Bereichen: Kaufmännisches, Marketing und Psychologie ist,
            dass man dann auch tatsächlich im Vertrieb des Unternehmens tätig
            wird.
          </Paragraph>
          <Paragraph>
            Das bedeutet, dass bei Qualifizierungsbeginn ein Vertrag mit
            Einstellungsoption eingegangen wird, der nicht nur eine
            aussichtsreiche berufliche Perspektive in den einzelnen
            Vertriebssparten eröffnet, sondern auch finanzielle Sicherheit
            bietet. Bereits während der Ausbildung ist man angestellt und kann
            sich so sehr fokussiert für Vertriebsaufgaben innerhalb des
            Unternehmens empfehlen. Bewerbungen mit dem Verweis „Einjährige
            Kompaktausbildung Automobilverkäufer*in“ sind jederzeit möglich.
            Gern beraten die bundesweiten Niederlassungen bei Interesse und
            Fragen zur Bewerbung.
          </Paragraph>
          <Paragraph>
            Ausführliche Infos zur einjährigen Kompaktausbildung z.B. bei
            Mercedes Benz Berlin unter:
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
        </Article>
      )}
    </>
  );
};

export const AuswertigesAmt = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Civil servant in the intermediate service of the Federal Foreign Office'
            : 'Beamte*r im Mittleren Dienst des Auswärtigen Amtes '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <CivilServantEnglish />
      ) : (
        <Article>
          <Paragraph>
            Für alle Tänzer*innen in Transition eine Option, die:
          </Paragraph>
          <List>
            <ListItem>
              es abwechslungsreich und auch herausfordernd mögen
            </ListItem>
            <ListItem>kosmopolitisch denken</ListItem>
            <ListItem>sich mit Deutschland/EUropa identifizieren</ListItem>
            <ListItem>offen für fremde Sprachen und Kulturen sind</ListItem>
            <ListItem>
              mit oder ohne Familie im Ausland leben möchten/können
            </ListItem>
            <ListItem>
              und kein Problem damit haben, verbeamtet zu sein.
            </ListItem>
          </List>
          <Paragraph>
            (deutsche Staatsbürgerschaft und fließende Deutschkenntnisse
            Voraussetzung, wobei eine zweite Muttersprache wie z.B. Russisch,
            Türkisch, Arabisch von Vorteil ist)
          </Paragraph>
          <Paragraph>
            Der diplomatische Dienst des Auswärtigen Amtes sucht
            Beamt*innenanwärter*innen für den Mittleren Dienst! Vereinfacht
            gesagt, sind das die Menschen, die nach intensiver Ausbildung in den
            verschiedenen Abteilungen der deutschen Auslandsvertretungen, also
            in den Botschaften, arbeiten, z.B. als Kulturattaché. Wichtig zu
            wissen, dass man stets alle Abteilungen einer Auslandsvertretung
            durchläuft, also beispielsweise auch die Visa-Abteilung. Interesse
            an Verwaltung, Recht und Projektmanagement wird deshalb
            vorausgesetzt.
          </Paragraph>
          <Paragraph>
            Die Auslandseinsätze nach erfolgreicher Ausbildung erfolgen im
            sogenannten weltweiten Rotationsprinzip, d.h. man wechselt nach ca.
            vier bis sechs Jahren den Einsatzort. Das Auswärtige Amt bemüht sich
            bei der Einsatzplanung private Belange zu berücksichtigen.
            Mitreisende Kinder und Jugendliche besuchen in der Regel die
            internationalen Deutschen Schulen im Gastland. Dort werden
            überwiegend nach dem thüringischen Lehrplan deutsche Schulabschlüsse
            erworben, die selbstverständlich in Deutschland und der EU anerkannt
            sind.
          </Paragraph>
          <Paragraph>
            Die 24-monatige, bezahlte, praxisorientierte Vollzeit-Ausbildung mit
            intensiven Fremdsprachenmodulen an der Akademie des Auswärtigen
            Dienstes in Berlin (Tegel) hat einen exzellenten Ruf. Praktika in
            der Zentrale des Auswärtigen Amtes sowie an einer der weltweiten
            Auslandsvertretungen sind selbstverständlicher Bestandteil dieser
            Ausbildung.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Bekleidungstechniker = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Clothing technician (BA)'
            : 'BekleidungstechnikerIn (BA)'}
          △
        </ArticleSubHeader>
      </TouchableOpacity>

      {props.eng ? (
        <ClothingTechnicianEnglish />
      ) : (
        <Article>
          <Paragraph>
            Das Bachelor-Studium Bekleidungstechnik/Konfektion gehört als sehr
            interdisziplinär ausgerichtetes Fach zu den Ingenieurwissenschaften.
            Der starke Praxisbezug ist dabei unübersehbar, denn
            Verarbeitungstechnik, textile Werkstofftechnik oder
            maschinentechnische Grundlagen sind wesentliche Bestandteile des
            Lehrplans, die bei laufender Produktion erprobt werden müssen.
          </Paragraph>
          <Paragraph>
            Vermittelt werden neben den mathematisch- technischen Grundlagen der
            Textil- und Bekleidungsproduktion ebenso chemisch-physikalische
            Wissensbausteine, indem zum Beispiel – meist in Kooperation mit
            entsprechenden Unternehmen – die große Vielfalt unterschiedlicher
            Materialien und Textilien analysiert und einsetzbar gemacht werden.
            Der sich stark entwickelnde Markt der „Smart Textiles“ spielt dabei
            eine große Rolle: Gewebe mit beispielsweise wasserdichten und/oder
            feuerfesten Eigenschaften, die bei der Berufsbekleidung bestimmter
            Berufsgruppen oder der Innenausstattung verschiedenster
            Transportmittel zum Einsatz kommt.
          </Paragraph>
          <Paragraph>
            Neben diesen vor allem technisch-naturwissenschaftlichen Kompetenzen
            geht es in der Bekleidungstechnik fachlich auch um die textile
            Produktion an sich sowie betriebswirtschaftliches Knowhow, zum
            Beispiel im Bereich Unternehmensführung, denn der weltweite
            Bekleidungsmarkt ist hart umkämpft. Ein wichtiges Schlagwort an
            dieser Stelle, das den Bogen zu den bereits erwähnten immer
            wichtiger werdenden „Smart Textiles“ schlägt, ist Innovation bzw.
            Innovationsmanagment. Ebenso wichtig sind in diesem Zusammenhang die
            Fächer Marketing und Logistik.
          </Paragraph>
          <Paragraph>
            Neben all dem werden selbstverständlich die Grundlagen des Designs,
            wie Farbenlehre bzw. der Umgang mit Farben vermittelt. Wahlfächer
            erlauben die Spezialisierung in beispielsweise Design und Material,
            Marketing und Wirtschaftswissenschaften oder der bereits erwähnten
            textilen Materialwissenschaft.
          </Paragraph>
          <Paragraph>
            TextilingenieurInnen sind nach ihrem vielseitigen Studium meistens
            in der Textil- und Bekleidungsindustrie tätig. Sie organisieren und
            überwachen dort die industrielle Fertigung von Textilien. Außerdem
            sind sie gemeinsam mit DesignerInnen für die Gestaltung neuer
            Textilprodukte verantwortlich und forschen an neuen
            Fertigungstechniken. Da sich die Herstellung von Textilien mit Hilfe
            neuer Technologien immer wieder verändert, handelt es sich hierbei
            um einen sehr spannenden und abwechslungsreichen Tätigkeitsbereich,
            der auch internationale Perspektiven eröffnet. Oft sind
            Textilingenieure nämlich auch in der Automobil-, Luftfahrt- oder
            Raumfahrtindustrie tätig. Dort arbeiten sie an der Herstellung von
            Raumanzügen, Autositzen oder Airbags.
          </Paragraph>
          <Paragraph>
            Viele AbsolventInnen der Bekleidungstechnik übernehmen im Laufe
            ihrer beruflichen Karriere auch erfolgreich Managementaufgaben, etwa
            im Vertrieb.
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
        </Article>
      )}
    </>
  );
};

export const Gesundheitsmanager = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Corporate health manager'
            : 'Betriebliche/r Gesundheits- manager/in'}{' '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <CorporateHealthManagerEnglish />
      ) : (
        <Article>
          <Paragraph>
            Der Bedarf an Fachkräften für Gesundheitsmanagement und Prävention
            steigt. So verwundert auch nicht, dass es bundesweit immer mehr
            Weiterbildungsangebote im Bereich Gesundheitsmanagement gibt.
            Allerdings variieren sie enorm in Qualität, Preis und der Art des
            Qualifikationsnachweises.
          </Paragraph>
          <Paragraph>
            Beschäftigungsmöglichkeiten im betrieblichen Gesundheitsmanagement
          </Paragraph>
          <Paragraph>
            „Im Durchschnitt sitzt jeder Erwachsene 11,5 Stunden täglich, bei
            Grundschulkindern sind es rund neun Stunden am Tag.“ (Zitat:
            Wirtschaftswoche online vom 09.07.2014). Die stundenlange einseitige
            Belastung des Stütz- und Bewegungsapparates ist vor allem deshalb
            rapide gestiegen, weil heutzutage bei der Arbeit und Ausbildung
            überwiegend nur noch gesessen wird. Langfristig schädigt das den
            Körper und kann auch die seelische Balance bzw. allgemeine
            Zufriedenheit von ArbeitnehmerInnen und damit ihren Erfolg und den
            des Unternehmens negativ beeinflussen. Das ist von Nachteil für
            jede/n Betroffene/n, eröffnet ehemaligen TänzerInnen gleichzeitig
            aber berufliche Optionen, bei entsprechender Transition als
            Trainerin, Beraterin, Coach im betrieblichen Gesundheitsmanagement
            tätig sein zu können. Weitere Auskünfte für sinnvolle
            Transitionmaßnahmen über:
          </Paragraph>
          <TouchableOpacity
            onPress={() =>
              sendEmail(
                'alannapfeiffer@gmail.com',
                'Transition Anfrage',
                ''
              ).then(() => {
                console.log('Your message was successfully sent!');
              })
            }
          >
            <ArticleSubHeader textStyle={{fontWeight: 'bold', fontSize: 14}}>
              info@stiftung-tanz.com.
            </ArticleSubHeader>
          </TouchableOpacity>
          <Paragraph>
            Die Gesundheit ihrer MitarbeiterInnen zu erhalten und vielfältig zu
            fördern, ist bei vielen vor allem größeren Firmen mittlerweile
            wichtiger Bestandteil der Personalarbeit. BASF, Nike, SIEMENS oder
            auch Nokia haben beispielsweise verschiedenste Programme bzw.
            Kursangebote in den Firmen selbst oder bei KooperationspartnerInnen,
            wie Pilates-Studios, Fitness-Studios usw. Angebote sind unter
            anderem: Stressbewältigung, diverse Bewegungsprogramme, Vorsorge
            oder auch Ernährung. Die MitarbeiterInnen haben während der
            Arbeitszeit oder auch danach die Möglichkeit, sich bei Yoga zu
            entspannen, spezielles Rückentraining zu absolvieren oder wichtige
            Ernährungstipps zu bekommen. Die gesetzlichen Krankenkassen bzw.
            Betriebskrankenkassen fördern dieses spezielle betriebliche
            Gesundheitsmanagement unter anderem durch entsprechende Boni-Systeme
            und auch das Finanzamt erkennt entsprechende Ausgaben für die
            individuelle Gesundheitsförderung an. Zertifizierte TrainerInnen
            haben gute freiberufliche bzw. auch festangestellte Perspektiven in
            den Firmen direkt oder bei deren KooperationspartnerInnen.
          </Paragraph>
          <Paragraph>
            Orientierung hinsichtlich verlässlicher Standards für die
            Ausbildung, insbesondere für Weiterbildungsangebote im Betrieblichen
            Gesundheitsmanagement (BGM), bieten die „Empfehlungen zur Ausbildung
            im Bereich Gesundheitsmanagement“ vom unabhängigen Bundesverband für
            Betriebliches Gesundheitsmanagement (BBGM), die Anfang 2016 auf der
            Webseite des Verbandes publiziert wurden:
          </Paragraph>
          <Paragraph>
            Zu den Mitgliedern des BBGM, die den o.g. Ausbildungsempfehlungen
            folgen, gehören neben Wirtschaftsunternehmen auch verschiedene
            Weiterbildungsanbieter, wie beispielsweise die staatlich anerkannte
            Hochschule für Prävention und Gesundheitsmanagement, an der man
            sowohl den gleichnamigen BA als auch den MA erwerben kann (mtl.
            Studiengebühr BA = 330,00 € / MA= 390,00 €)
          </Paragraph>
          <Paragraph>
            Soll kein zeitaufwändiges Studium an einer Hochschule oder
            Universität Transition-Ziel sein, sondern eine kompakte und
            zertifizierte Weiterbildung absolviert werden, ist diese z.B. an der
            BSA Akademie für Prävention, Fitness und Gesundheit möglich. Dort
            werden folgende Lehrgänge im BGM angeboten:
          </Paragraph>
          <Paragraph>
            Fachkraft für BGM (IHK, 1.290,00 €) / Berater/in für Firmenfitness
            (249,00 €) / Betriebliche/r Gesundheitsmanager/in (1.298,00 €)/
            Gesundheitsmanager im Betrieb (998,00 €) / Gesundheitsexperte für
            KMU* (2.598,00 €)
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
        </Article>
      )}
    </>
  );
};

export const Biologie = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Biologist M.Sc.' : 'Biologe/in M.Sc.'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <BiologistEnglish />
      ) : (
        <Article>
          <Paragraph style={{fontWeight: 'bold'}}>Berufsbild:</Paragraph>
          <Paragraph>
            Den klassischen Biologen gibt es so eigentlich gar nicht. Viel mehr
            arbeiten die meisten Biologen/innen in verschiedenen Bereichen: in
            Forschung, Lehre oder Umweltschutz. Dabei befasst man sich mit der
            Erforschung von Strukturen und Vorgängen bei Menschen (z.B.
            Erforschung von Krankheiten), Tieren (z.B. Entstehung von
            verschiedenen Arten), Pflanzen (z.B. Entwicklung von
            ertragsreicheren Pflanzen) und Mikroorganismen (z.B. Entwicklung von
            Biotreibstoffen). Anwendung finden die erzielten
            Forschungsergebnisse unter anderem in den Bereichen Umweltschutz,
            Pharma und Medizin.
          </Paragraph>
          <Paragraph style={{fontWeight: 'bold'}}>
            Voraussetzungen um als Biologe arbeiten zu können:
          </Paragraph>
          <Paragraph>
            Voraussetzung, um als Biologe/in arbeiten zu können, ist mindestens
            ein abgeschlossenes Bachelor-Studium der Biologie. In der Regel kann
            man Biologie an einer Universität studieren, es gibt aber auch
            spezielle Studiengänge, zum Beispiel Biotechnologie, welche man an
            einer Fachhochschule studieren kann. In den meisten Bereichen werden
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
            Im Bachelor-Studium lernt man die verschiedenen Bereiche der
            Biologie kennen und verschafft sich einen groben Überblick über
            diese, dazu gehören: Botanik, Zoologie, Mikrobiologie, Genetik,
            Zellbiologie, Bioinformatik und Anthropologie. Das Bachelorstudium
            besteht etwa zur Hälfte aus Vorlesungen und zur anderen Hälfte aus
            verschiedenen Praktika, in denen man lernt, wie man ein Experiment
            plant, durchführt und am Ende auswertet. Im anschließenden
            Master-Studium vertieft und spezialisiert man sich auf ein
            Teilgebiet der Biologie. Die Verteilung ist auch hier ungefähr 50:50
            zwischen Praxis und Theorie. Wer sich danach entscheidet eine
            Promotion anzuschließen beschäftigt sich über einen längeren
            Zeitraum mit einer ganz bestimmten Fragestellung.
          </Paragraph>
          <Paragraph style={{fontWeight: 'bold'}}>
            Nach dem Studium/der Promotion:
          </Paragraph>
          <Paragraph>
            Nach dem erfolgreichen Studium oder der Promotion stehen einem
            verschiedene Karrieremöglichkeiten in der Industrie und der
            Wissenschaft offen, aber auch im öffentlichen Dienst sind
            Biologen/innen beschäftigt.
          </Paragraph>
          <Paragraph style={{fontWeight: 'bold'}}>
            Gibt es auch einen anderen Weg, um in der Forschung arbeiten zu
            können?
          </Paragraph>
          <Paragraph>
            Wer nicht unbedingt Biologie studieren möchte kann als
            Biologielaborant/in oder als technische/r Assistent/in im Labor
            arbeiten. Die Ausbildung hierfür dauert drei Jahre.
          </Paragraph>
          <Paragraph style={{fontSize: 11, fontStyle: 'italic'}}>
            geschrieben von Jonas Schwickert, Biologe M.Sc.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Blindenpädagoge = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Pedagogue for the blind' : 'Blindenpädagog*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <BlindPedagogueEnglish />
      ) : (
        <Article>
          <Paragraph>
            Blindenpädagog*innen sind spezialisiert auf das Einschränkungsbild
            sehbehinderter und blinder Menschen aller Altersgruppen. Ihr
            Einsatzfeld ist vielfältig. Sie können bei Alltagsaufgaben aller Art
            assistieren, in allen Institutionen und Einrichtungen für
            Sehschwache und Blinde arbeiten, im öffentlichen Dienst tätig sein
            (z.B. als Sozialoberionspektor*in) oder sich auch als Fachberater*in
            für die spezielle Gruppe der Sehschwachen und Blinden selbständig
            machen.
          </Paragraph>
          <Paragraph>
            “Neben philosophischen Fragestellungen über das Thema der
            Wahrnehmung und Wirklichkeitskonstruktion von Blinden beinhaltet der
            [Ausbildungs-]plan Aspekte wie Orientierung und Mobilität,
            Frühförderung, alltagspraktische Fertigkeiten, moderne
            Kommunikationstechnologien, die Brailleschrift und Augenheilkunde.”
            Blindenpädagogik kann in Deutschland an der Universität entweder als
            BA oder MA studiert werden, z.B.: Universität Marburg,
            Humboldt-Universität Berlin, Pädagogische Hochschule Heidelberg,
            Universität Dortmund und Universität Hamburg. An allen genannten
            Universitäten gilt für das Fach der Blindenpädagogik ein N.C., was
            den Mangel an Blindenpädagog*innen verstärkt. Selbstverständlich
            kann man sich aber auch als Sonderpädagog*in, Heilpädagog*in,
            Behindertenpädagog*in, Rehabilitationspädagog*in oder an
            Berufsfachschulen als Heilerziehungspfleger*in ausbilden lassen und
            sich dann blindenpädagogisch weiterbilden.
          </Paragraph>
          <Paragraph>
            Auch für Tanzpädagog*innen ist die blindenpädagogische Weiterbildung
            durch Zertifikatskurse bzw. Aufbaustudium möglich!
          </Paragraph>
          <Paragraph>
            Schon vor über zehn Jahren prognostizierte der Vorsitzende des
            Blinden- und Sehschwachenverbandes Deutschland e.V., Eberhard Fuchs
            den Mangel an Blindenpädagog*innen. Und bereits damals war “[d]er
            Arbeitsmarkt [für Blindenpädagog*innen] hervorragend.” Bestätigt
            wurde dies für 2017 und Zukunft von Mitarbeiter*innen des Deutschen
            Blinden-Museums e.V., mit denen wir im Rahmen der Recherche für
            diesen Text am 22.6.2017 persönlich sprachen.
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
            Infos zum Deutschen Blinden-Museum e.V. in Berlin unter:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('http:// www.blindenmuseum-berlin.de/')
            }
          >
            www.blindenmuseum-berlin.de/
          </Link>

          <Paragraph>
            Wir danken dem Deutschen Blinden-Museum für alle Auskünfte!
          </Paragraph>
          <Paragraph style={{fontStyle: 'italic', fontSize: 11}}>
            Indirekt zitierte Quelle: Herr Hentschel vom Blinden-Museum e.V.
            Berlin am 22.6.2017
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Buchbinder = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Book binder' : 'Buchbinder*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <BookBinderEnglish />
      ) : (
        <Article>
          <Paragraph>
            Dieser Handwerksberuf reicht zurück bis in die Antike, konnte aber
            trotz Digitalisierung überleben. Buchbinder*innen fertigen Einzel-
            sowie Sonderstücke in Handarbeit und produzieren je nach
            Auftragslage bzw. Ausstattung auch maschinell, z.B. Blankoprodukte,
            Bucheinbände, Buchveredelungen- und Reparaturen, besondere
            Verpackungen Bilderrahmungen (u.a. hochwertige Passepartouts).
          </Paragraph>
          <Paragraph>
            „Für ein Buch muss man mindestens drei Tage rechnen. Eine Woche bis
            zehn Werktage sind Standard.“, meint Paul Ebsen von der
            Arbeitsagentur. Vielleicht ist das der Grund, warum bundesweit pro
            Jahr gerade mal rund 50 Azubis die Lehre zum*r Buchbinder*in
            beginnen, wie die Behörde informiert.
          </Paragraph>
          <Paragraph>
            Die dreijährige Ausbildung ist dual, besteht also aus Theorie und
            Praxis im jeweiligen Ausbildungsbetrieb. Das sind meistens kleine
            Handwerksbetriebe. Welcher Betrieb ausbildet, ist bei den lokalen
            Buchbinder-Innungen zu erfahren. Formelle Zugangsvoraussetzung für
            eine Ausbildung als Buchbinder*in ist die mittlere Reife.
          </Paragraph>
          <Paragraph>
            Um in diesem traditionsreichen Handwerksberuf Zufriedenheit finden
            zu können, braucht es u.a.:
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
            „Die Restaurierung historischer Bucheinbände hat an Bedeutung
            gewonnen. Es wird wieder mehr Wert auf die Wiederherstellung der
            Originale gelegt. Daher ist die handwerkliche Ausbildung zum
            Buchbinder nicht selten die Grundlage für eine
            [Weiterqualifizierung] zum Restaurator.“
          </Quote>
          <Paragraph>Weitere INFOS zum Beruf:</Paragraph>
          <Link
            onPress={() => Linking.openURL('http://www.zfamedien.de/berufe/')}
          >
            www.zfamedien.de/berufe/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('http://www.bdbi.org/startseite.html')
            }
          >
            www.bdbi.org/startseite.html
          </Link>
        </Article>
      )}
    </>
  );
};

export const Clown = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>Clown △</ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <ClownEnglish />
      ) : (
        <Article>
          {' '}
          <Paragraph>
            Die Methoden der künstlerischen Darstellung eines Clowns eignen sich
            sehr gut für:
          </Paragraph>
          <List>
            <Paragraph>
              - Trainings im Personalbereich (Motivationstraining,
              Gruppenbildung, Problembewältigung, Entscheidungsfindung,
              Kreativitätsförderung usw.)
            </Paragraph>
            <Paragraph>
              - für die Arbeit mit Kindern und Jugendlichen
              (Anti-Aggressionstraining, szenisches Spiel in einer anderen
              Sprache, Trauma-Bearbeitung usw.)
            </Paragraph>
            <Paragraph>
              - für die Unterstützung bei therapeutischer Pflege von kranken und
              alten Menschen
            </Paragraph>
          </List>
          <Paragraph>
            So bietet die Internationale Schule für Clown, Humor und
            Kommunikation in Konstanz eine Spezialisierung zum
            Gesundheit!Clown®. Die Ausbildung dauert drei Jahre und kann
            berufsbegleitend absolviert werden. Sie ist europaweit die erste
            umfassende Ausbildung, um qualifiziert als Clown in Kliniken,
            Altenpflegeheimen sowie Einrichtungen für geistig und körperlich
            behinderte Menschen zu arbeiten. Das Regierungspräsidium Freiburg
            hat bereits 2007 den Gesundheit!Clown und die Bezeichnung
            Schauspieler für Clown und Comedy als neues Berufsbild anerkannt.
            Die Anerkennung als Fachschule durch das Ministerium in Stuttgart
            wurde beantragt und ermöglicht damit, Bafög oder Bildungsstipendien
            zu erhalten.
          </Paragraph>
          <Paragraph>
            Wer sich zum Gesundheit!Clown® ausbilden lassen möchte, kann sich im
            Rahmen der sogenannten Werkstatt-Aufführungen des Diplomstudiengangs
            Clown und Comedy informieren: Samstag, 5.3.2016, 20 Uhr, Tamara
            Center, 78467 Konstanz, Fritz-Arnold-Str. 23 (Industriegebiet)
          </Paragraph>
          <Paragraph>Weitere Infos unter: </Paragraph>
          <Link onPress={() => Linking.openURL('http://www.clownlabor.de')}>
            www.clownlabor.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Cruise = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          Cruise Tourism Manager{props.eng ? '' : '*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <CruiseManagerEnglish />
      ) : (
        <Article>
          <Paragraph>
            “Urlaubsreisen haben als Wirtschaftsfaktor weltweit eine
            herausragende Bedeutung erlangt. Über die letzten zwanzig Jahre hat
            sich dabei eine spezielle Art von Urlaubsreise als besonders
            wachstumsstark, krisenresistent und innovativ erwiesen: die
            Kreuzfahrt.” (6) Solch eine Schiffsreise soll nicht nur
            abwechslungsreich, erholsam und möglichst preiswert für die
            Passagiere sein, sondern auch profitabel für die Anbieter. Für diese
            Balance sind Cruise Tourism Manager*innen (CTM) da.
          </Paragraph>
          <Paragraph>
            An der Hochschule Bremerhaven ist CTM ein betriebswirtschaftlicher,
            überwiegend englischsprachiger 4-jähriger Bachelor-Studiengang (240
            ECTS). Abgeschlossen wird dieses Studium mit einem Bachelor of Arts
            (BA), der auch in den USA anerkannt ist. Zukünftige Arbeitgeber im
            Tourismus und in der Kreuzfahrtbranche könnten zum Beispiel
            Reiseanbieter und Reedereien sein. Die Aufgaben eines/r CTM sind
            vielfältig: Marketing und Sales, Produktmanagement und
            Veranstaltungsmanagement, Einkauf usw.
          </Paragraph>
          <Paragraph>
            Studiert werden daher “Fächer wie Betriebswirtschaftslehre,
            Volkswirtschaftslehre, Tourismus und Kreuzfahrt, Hotelmanagement
            sowie andere ergänzende Fächer. [Außerdem] sind Fremdsprachen,
            Mathematik, Recht und sogenannte Soft Skills ein wichtiger
            Bestandteil des Studiums. [Hinzu kommt] ein einjähriges
            Auslandspraktikum, das mit einem Auslandssemester kombiniert werden
            kann.” (7)
          </Paragraph>
          <Paragraph>Weitere Infos zum CTM-Studienangebot hier:</Paragraph>
          <Link
            onPress={() => Linking.openURL('http://www.hs-bremerhaven.de/')}
          >
            www.hs-bremerhaven.de
          </Link>
          <Paragraph style={{fontStyle: 'italic', fontSize: 11}}>
            Zitierte Info-Quelle (6 und 7): ebenda
          </Paragraph>
          <Paragraph>
            Wem 4 Jahre zu lang und zu teuer sind, der kann sich an der
            EBC-Hochschule Hamburg zum CTM weiterbilden: In 5
            Blockveranstaltungen für jeweils 300,00 € pro Block (ohne Anreise
            und Übernachtung) werden ab Herbst 2017 Kenntnisse in
            Produktmanagement, Personalmanagement, Innovationsmanagement und im
            Marketing für Kreuzfahrtschiffsunternehmen vermittelt. Innerhalb von
            vier Monaten erwirbt man das EBC-Zertifikat “Cruise Management” (8).
          </Paragraph>
          <Paragraph style={{fontStyle: 'italic', fontSize: 11}}>
            Adaptierte und zitierte Info-Quelle (8): ebenda
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Ernaehrungsberatung = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Nutritional counseling' : 'Ernährungsberatung'} △
        </ArticleSubHeader>
      </TouchableOpacity>

      {props.eng ? (
        <NutritionalCouncellingEnglish />
      ) : (
        <Article>
          <Paragraph>
            Der Beruf „Ernährungsberater/in“ ist in Deutschland keine gesetzlich
            geschützte Berufsbezeichnung. Theoretisch benötigen Sie daher keine
            Ausbildung, um sich Ernährungsberater zu nennen. Es empfiehlt sich
            allerdings sehr, eine entsprechende Ausbildung zu absolvieren, um
            die benötigten Kenntnisse zu erwerben und gegenüber Klienten eine
            fundierte Qualifikation vorweisen zu können. Zahlreiche private
            Bildungsinstitute bieten die Ernährungsberater Ausbildung an. Meist
            finden diese Kurse berufsbegleitend in Form eines Fernstudiums oder
            als Abend- und Wochenendlehrgang statt. Aber Vorsicht! Diese Kurse
            sind häufig viel zu kurz, um die Basis für einen neuen Beruf zu
            bilden. Um nach Abschluss der Weiterbildung eine Tätigkeit als
            Ernährungsberater/in im Auftrag der gesetzlichen Krankenkassen im
            Sinne der primärpräventiven Ernährungsberatung auszuüben, sind vor
            Beginn der Weiterbildung eine abgeschlossene Ausbildung als
            Diätassistent/in oder der Abschluss eines einschlägigen Studiums,
            z.B. der Ökotrophologie oder der Ernährungswissenschaften, und/oder
            einschlägige Berufspraxis nachzuweisen.
          </Paragraph>
          <Paragraph>
            Eine anerkannte Ausbildung, ist die Ausbildung zum/ zur
            Diätassistent/in. Diätassistenten und -assistentinnen erarbeiten
            Diät- und Ernährungspläne für Personen, die sich gesund ernähren
            wollen oder eine bestimmte Diät einhalten müssen. Sie setzen
            ärztliche Diätverordnungen um, konzipieren individuelle
            Diättherapien, bereiten spezielle Diätkostformen zu und beraten bzw.
            schulen in Ernährungsfragen. Diätassistenten und Diätassistentinnen
            finden Beschäftigung in Krankenhäusern, in Rehabilitationskliniken,
            in ambulanten Schwerpunktpraxen, als Selbstständige in einer eigenen
            Praxis. Diätassistent/in ist eine bundesweit einheitlich geregelte
            3-jährige schulische Ausbildung an Berufsfachschulen .
          </Paragraph>
          <Paragraph>
            Eine noch intensivere Ausbildung bietet ein Studium: Das
            grundständige Studienfach Ernährungswissenschaft (=Ökotrophologie)
            vermittelt wissenschaftliches Grundlagenwissen in
            Ernährungswissenschaft, Lebensmittellehre und
            Lebensmitteltechnologie. Das Studium hat einen hohen Anteil an
            chemischen und biologischen Lerninhalten. Fundierte Kenntnisse, z.B.
            aus einem Grund- oder Leistungskurs, sind daher eine gute
            Voraussetzung. Benötigt werden außerdem gute Kenntnisse in Physik
            und anwendungsbezogener Mathematik. Beherrschen muss man z.B. die
            Differenzial-, Integral-, Infinitesimal- und Vektorrechnung sowie
            die lineare Algebra. Ein sicherer Umgang mit statistischen Methoden
            ist ebenfalls nützlich.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Eurythmist = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          Eurythmist{props.eng ? '' : '*In'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <EurythmistEnglish />
      ) : (
        <Article>
          <Paragraph>
            Als EurythmistIn geht es vor allem darum, über den Körper als
            Darstellungsmedium Innerlichkeiten eines Menschen oder einer Gruppe
            nach außen zu befördern, Seelisch-Geistiges in Fluss zu bringen und
            Gemeinsamkeit bzw. die Einheit zum Ganzen zu ermöglichen. Eurythmie
            fördert die Körperwahrnehmung, innere Zufriedenheit und das
            Zusammengehörigkeitsgefühl mehrerer Menschen, die sich gemeinsam –
            vergleichsweise schonend – bewegen. Darüber hinaus kann mit Hilfe
            des eurythmischen Tanzens auch eine interpretatorische Brücke
            zwischen verschiedenen Künsten hergestellt werden, indem man zum
            Beispiel ganze Texte (unter anderem Lyrik) tanzt.
          </Paragraph>
          <Paragraph>
            Der Begriff dieser expressiven Tanzform ist vom altgr. εὖ (= gut,
            richtig, schön) abgeleitet. Eurythmie entstand in Deutschland und in
            der Schweiz zwischen 1908 und 1925 auf Anregung von Rudolf Steiner,
            dem Begründer der Anthroposophie. Sie wird seit dem als
            eigenständige Darstellende Kunst betrieben. (1) So eignet sie sich
            sehr gut für die Gesundheitsförderung bei im Grunde allen Menschen,
            die sich (schon bzw. noch) bewegen können. Aus unserer Sicht reichen
            die beruflichen Einsatzmöglichkeiten als Eurythmistin deshalb über
            die vor allem in Deutschland verbreitete Option an Waldorf-Schulen
            weit hinaus. Parkinson-Tanzen, Trauma-Bewältigung, Entspannungs-
            bzw. Deeskalationstechnik seien an dieser Stelle als beispielhafte
            Einsatzvarianten der Eurythmie genannt.
          </Paragraph>
          <Paragraph>
            Aus- bzw. Weiterbildungen in Eurythmie sind in ganz Europa möglich,
            wie die Übersicht des Berufsverbandes der Eurythmisten in
            Deutschland e.V. zeigt: siehe unten stehender Link.
          </Paragraph>
          <Paragraph>
            Eurythmie bzw. Eurythmie-Pädagogik kann man als BA und MA an
            privaten Hochschulen studieren (durchschnittliche Studiengebühren:
            1.900,00 € pro Semester). Fundierte Eurythmie-Kenntnisse sind
            allerdings ebenso in nebenberuflichen, weniger kostenintensiven und
            kompakteren Zertifikatsweiterbildungen möglich.
          </Paragraph>
          <Link
            onPress={() => Linking.openURL('http://www.eurythmie-info.de/')}
          >
            www.eurythmie-info.de/
          </Link>
        </Article>
      )}
    </>
  );
};

export const Erzieher = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Educator' : 'Erzieher*in sowie Facherzieher*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <EducatorEnglish />
      ) : (
        <Article>
          <Paragraph>
            Der hohe Bedarf an professioneller Betreuung und pädagogischer
            Begleitung hält an. An mittlerweile fast 600 Fachschulen für
            Sozialpädagogik bzw. Soziale Arbeit kann man sich deshalb als
            Facherzieher*in in Voll- oder berufsbegleitender Teilzeit ausbilden
            lassen für:
          </Paragraph>
          <List>
            <Paragraph>– Integration – Kita und Schule</Paragraph>
            <Paragraph>– Sprachbildung und Sprachförderung</Paragraph>
            <Paragraph>– Musik und Rhythmik</Paragraph>
            <Paragraph>– Psychomotorik</Paragraph>
            <Paragraph>– Mediation in Kita, Hort und Schule</Paragraph>
          </List>
          <Paragraph>
            “Wer den [Erzieher*innen-Beruf] ergreifen möchte, sollte sich
            grundsätzlich gerne mit Menschen beschäftigen. Erzieherinnen und
            Erzieher arbeiten zwar hauptsächlich mit Kindern oder Jugendlichen,
            müssen sich aber auch mit Eltern, Institutionen und Behörden
            auseinandersetzen. Die “Arbeit am Kind” ist ein wichtiger Aspekt,
            aber längst nicht der Einzige. […] Neben sozialer Kompetenz,
            Teamfähigkeit und Einfühlungsvermögen müssen Interessent*innen
            Reflexionsfähigkeit mitbringen. Das eigene Handeln reflektieren und
            hinterfragen zu können bzw. zu wollen ist nicht nur eine wichtige
            Kompetenz, die während der Ausbildung gefragt ist.” Sehr wichtig für
            eine erfüllende Berufsausübung als Erzieher*in sind neben Empathie
            und Freude an der Arbeit mit Kindern und Jugendlichen, die stetige
            Bereitschaft zur Weiterbildung sowie Belastbarkeit und Resilienz.
          </Paragraph>
          <Paragraph>
            Bildung ist Ländersache, so dass sich die Erzieher*innen-Ausbildung
            in den jeweiligen Bundesländern sehr unterscheiden können. Dies gilt
            auch für die Voraussetzungen zur Berufsausbildung (in der Regel
            Abitur, Fachabitur und/oder mindestens einjährige pädagogische
            Praxis). Sehr hilfreiche Informationen je Bundesland unter:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('http://www.erzieherin-ausbildung.de/')
            }
          >
            www.erzieherin-ausbildung.de/content/erzieherausbildung
          </Link>
          <Paragraph>
            Prinzipiell lässt sich sagen, dass die Erzieher*innen-Ausbildung
            mindestens drei Jahre an einer pädagogischen Fachschule in Teilzeit
            oder Vollzeit absolviert werden kann und sehr praxisorientiert
            abläuft. WICHTIG für Tänzer*innen in Transition: Die
            Erzieher*innen-Ausbildung wird unseres wissens mittlerweile
            bundesweit von den Arbeitsagenturen als berufliche Weiterbildungs-
            bzw. Umorientierungsmaßnahme finanziert, wenn sie in Vollzeit
            erfolgt.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Goethe = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Professional and managerial staff at the Goethe-Institut'
            : ' Fach- und Führungskraft beim Goethe-Institut '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>

      {props.eng ? (
        <GoetheEnglish />
      ) : (
        <Article>
          {' '}
          <Paragraph>
            Das Goethe-Institut ist eine weltweit arbeitende und ebenso
            anerkannte Institution der Auswärtigen Sprach- und Kulturpolitik
            Deutschlands. Es bringt nicht die deutsche Kultur und Sprache in
            anderen Regionen näher, sondern vermittelt vor allem auch mit
            verschiedensten Programmen und Projekten zwischen den Kulturen.
          </Paragraph>
          <Paragraph>
            Als festangestellte Fach- und Führungskraft mit dem Schwerpunkt
            Kultur kann man an den Auslandsinstituten, aber auch in der Münchner
            Zentrale eingesetzt werden. Das Besondere und Herausfordernde ist,
            dass man aller fünf bis sechs Jahre rotiert, also seinen Lebens- und
            Arbeitsort verändert. Dies gilt dann auch für die mitreisenden
            Familien, was aber vom Goethe-Institut auf verschiedenste Weise
            unterstützt wird.
          </Paragraph>
          <Paragraph>
            Voraussetzung, um als Fach- und Führungskraft mit Schwerpunkt Kultur
            tätig sein zu können, sind unter anderem ein abgeschlossenes
            Hochschulstudium, mehrjährige Erfahrung in der Kulturvermittlung –
            Tanz gehört definitiv dazu -, fundierte Kenntnis der deutschen und
            europäischen Kulturszene, (internationale) Projekterfahrung und
            interkulturelle Kompetenz sowie sehr gute deutsche Sprachkenntnisse.
            Nicht zu vergessen: Medienkompetenz und weitere Sprachkenntnisse.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Freizeit = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Leisure Scientist' : 'Freizeitwissenschaftler*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>

      {props.eng ? (
        <LeisureScientistEnglish />
      ) : (
        <Article>
          <Paragraph>Hochschule Bremen</Paragraph>
          <Paragraph>
            Freizeit bietet vielfältige Gelegenheiten zur Erholung und
            Unterhaltung, ohne zu etwas verpflichtet zu sein. Sie ist für jede*n
            von uns mit verschiedensten Aktivitäten verbunden, die uns Freude
            bereiten und uns entspannen (sollen). Welche das sind, hängt von den
            jeweiligen Bedürfnissen ab, die mit diversen - auch und zunehmenden
            kommerziellen - Freizeitangeboten und daran gekoppelter
            Erlebniskultur gestillt werden können. Weil der Bedarf an
            professionell gestalteter Freizeit wächst, braucht es entsprechende
            Fachleute, auch international. „Die Freizeitwirtschaft ist mit über
            sechs Millionen Beschäftigten einer der größten Arbeitgeber in
            Deutschland. Unsere Lebenszeit ist immer mehr von Freizeit geprägt –
            der Großteil unseres Lebens ist nicht Arbeit, sondern Freizeit, die
            auch geplant werden muss.“, meint Renate Freericks. Sie leitet den
            BA-Studiengang der Angewandten Freizeitwissenschaften an der
            Hochschule Bremen, der der bisher einzige seiner Art in Deutschland
            ist.
          </Paragraph>
          <Paragraph>
            Das 7-semestrige Studium der „Angewandten Freizeitwissenschaften“
            mit Abschluss BA ist, wie die Bezeichnung des Studienfaches sagt,
            praxisorientiert und zudem international ausgerichtet.
            Zulassungsvoraussetzung ist die allgemeine Hochschulreife (Abitur)
            oder die Fachhochschulreife oder eine
            Einstufungsprüfung/Sonderzulassung. Außerdem ein mindestens
            8-wöchiges betriebliches Praktika in der Freizeit-, Wellness- und
            Tourismusbranche vor Studienbeginn. WICHTIG für Tänzer*innen in
            Transition: Eine abgeschlossene Berufsausbildung oder eine
            mindestens einjährige Tätigkeit in einem einschlägigen Berufsfeld
            ersetzen das Praktikum. Da viele Lehrveranstaltungen in Englisch
            angeboten werden, sind zertifizierte Englischkenntnisse mit
            mindestens B1.2-Niveau (Europäischer Referenzrahmen) eine weitere
            zwingende Zulassungsvoraussetzung für das BA-Studium „Angewandte
            Freizeitwissenschaften“.
          </Paragraph>
          <Paragraph>Weitere DETAILS hier:</Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'http://www.hs-bremen.de/internet/de/studium/stg/isaf/'
              )
            }
          >
            www.hs-bremen.de/internet/de/studium/stg/isaf/
          </Link>
        </Article>
      )}
    </>
  );
};

export const Gesundheitsfoerderung = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Professions in health promotion'
            : 'Berufe in der Gesundheitsförderung'}
          △
        </ArticleSubHeader>
      </TouchableOpacity>

      {props.eng ? (
        <HealtPromotionEnglish />
      ) : (
        <Article>
          <Paragraph>
            Erhalt der Gesundheit zu verschieben, macht sich auch bei neu
            entstehenden Berufen bemerkbar. Es finden sich sowohl neue
            Ausbildungsberufe als auch Studiengänge in diesem Bereich. Von der
            pädagogischen Richtung nähert sich die Gesundheitspädagogik, von der
            wirtschaftlichen Seite das Gesundheitsmanagement, wissenschaftlich
            begleitet von der Gesundheitswissenschaft (alle drei Studiengänge
            gibt es jeweils als Bachelor grundständig, als Master
            weiterführend).
          </Paragraph>
          <Paragraph>
            Z.B: Das Masterstudium “Public Health: Psychosoziale Prävention und
            Gesundheits-förderung” ist ein gesundheitswissenschaftliches
            Studienangebot an der FU Berlin mit dem Schwerpunkt auf
            Fragestellungen der Prävention und Gesundheitsförderung.
            Beschäftigungsmöglichkeiten finden die Absolventen u.a. in Bereichen
            der Planung, Ges¬taltung und Evaluation von Versorgungsangeboten und
            -strukturen (u.a. Gesundheitspo¬litik), in der
            Gesundheitsberichterstattung (Epidemiologie), in Einrichtungen des
            öffentli¬chen Gesundheitsdienstes, in Non Governmental Organisations
            (NGOs), bei Kassen, Kammern und Verbänden, bei stationären und
            ambulanten Versorgungseinrichtungen sowie in der
            gesundheitswissenschaftlichen Forschung und Lehre. Es handelt sich
            um einen weiterbildenden Masterstudiengang, der relativ hohe
            Studiengebühren mit sich bringt.
          </Paragraph>
          <Paragraph>
            Als Ausbildungsberufe finden sich der Kaufmannmann bzw. die Kauffrau
            für Gesundheitswesen, die Fachkraft für Beauty und Wellness und die
            Fachkraft für Psychosoziale Gesundheits-förderung. Mit dieser
            Ausbildung sind Sie z.B. in der Lage geeignete
            Mitarbeiterbefragungen durchzuführen und Gefährdungsbeurteilungen
            auszuwerten. Als Fachkraft für Gesundheitsförderung lernen Sie eine
            Vielzahl an psychosozialer Gesundheitsfördermaßnahmen kennen und
            diese im betrieblichen Umfeld einzuführen oder individuell
            anzuwenden. Dazu gehören auch Kompetenzen in mentalem Coaching,
            Burnout-Prävention und Resilienztraining sowie geeignete
            Entspannungsverfahren, die man in Unternehmen anwenden kann.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Hoerakustiker = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Hearing Care Professional' : 'Hörakustiker*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <HearingCareProfessionalEnglish />
      ) : (
        <Article>
          <Paragraph>
            In unserer älter werdenden Gesellschaft kann man Berufe als
            zukunftssicher einstufen, die Dienstleistungen für Senioren
            beinhalten, z.B.HörakustikerInnen. Aktuell gibt es keine
            arbeitslosen HörakustikerInnen. Auch bei jüngeren Menschen nehmen
            die Hörschäden ständig zu; auch sie brauchen Hörgeräte. Der Beruf
            HörakustikerIn ist anspruchsvoll: Akustiker brauchen Kompetenzen in
            Sachen Elektronik, Anatomie, Audiometrie und Psychologie. Sein/Ihr
            handwerkliches Geschick und technisches Know-how machen
            HörakustikerInnen zu gefragten Spezialisten in der
            Gesundheitsbranche. Sie arbeiten außerdem sehr eng mit anderen
            Fachleuten, z.B. den HNO-Ärzten zusammen.
          </Paragraph>
          <Paragraph>
            HörakustikerIn ist nach der Handwerksordnung ein anerkannter Beruf
            mit 3-jähriger Ausbildung. Der praktische Teil erfolgt in einem
            Hörgeräte-Fachbetrieb unter der Verantwortung eines
            Hörakustik-Meisters. Nach der theoretischen und praktischen
            Basisausbildung im ersten Lehrjahr ist es Ziel der Ausbildung, alle
            komplexen Vorgänge und Fertigkeiten rund um die akustische
            Versorgung Hörgeschädigter zu vermitteln. Hierzu gehören z.B der
            qualifizierte Umgang mit Mess- und Prüfinstrumenten, um Art und
            Umfang eines Hörschadens präzise ermitteln zu können. Ohrabdrücke
            anzufertigen wird ebenso gelernt, wie die Herstellung der
            „Otoplastik”, des Ohrpassstückes, das für jeden Hörgeräteträger
            individuell gefertigt werden muss. Außerdem muss die Anpassung
            vorgenommen werden können und die genaue Einstellung des Hörgerätes
            an die Hörbedürfnisse der zukünftigen TrägerIn.
          </Paragraph>
          <Paragraph>
            Dieser theoretische Hintergrund wird in Blockkursen an der für ganz
            Deutschland zuständigen bundesoffenen Landesberufsschule für
            Hörgeräteakustik in Lübeck erteilt. Die Blockkurse finden dreimal im
            Jahr für durchgehend 4 bis 5 Wochen statt. Nach der Hälfte der
            Ausbildungszeit wird eine erste Prüfung abgelegt. Die Ausbildung
            schließt letztendlich mit der Gesellenprüfung ab.
          </Paragraph>
          <Paragraph>
            Voraussetzungen: Realschulabschluß (mittlerer Schulabschluß), Freude
            am Kontakt mit Menschen, handwerkliches Geschick, technisches
            Interesse.
          </Paragraph>
          <Paragraph>
            Von Heike Scharpff adaptierte Info-Quelle und weitere Informationen
            unter:{' '}
          </Paragraph>
          <Link
            onPress={() => Linking.openURL('http://www.der-hoerakustiker.de')}
          >
            www.der-hoerakustiker.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Hoergeraeteaktustiker = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Hearing aid acoustician' : 'Hörgeräteakustiker*in '}△
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <HearingAidAccustitcianEnglish />
      ) : (
        <Article>
          <Paragraph>
            Hörgeräteakustiker/innen beraten Kunden hinsichtlich
            unterschiedlicher Arten von Hörsystemen bzw. Gehörschutz. Dabei
            gehen sie auf die individuellen Bedürfnisse ihrer Kunden ein. Sei
            es, dass eine Altershörschwäche vorliegt oder erhöhte
            Geräuschbelastung im Beruf gegeben ist. Um ein Hörgerät optimal
            anpassen zu können, führen sie Tests zur Hörleistung durch, z.B.
            untersuchen sie, wie gut Kunden hohe und tiefe Töne oder Sprache
            wahrnehmen können. Dafür sind ein allgemeines intellektueller
            Leistungsvermögen, mathematisches und technisches Verständnis
            notwendig. Auch stellen sie Otoplastiken für Hörgeräte oder als
            Gehörschutz her. Dafür nehmen sie Abdrücke vom Gehörgang, passen die
            Ohrstücke individuell am Kunden an, bauen die Maßohrstücke in die
            Hörsysteme ein und nehmen die akustischen Feineinstellungen vor. Es
            geht also um wirklich feinmotorische handwerkliche Tätigkeiten.
            Zudem reparieren und warten sie Hörhilfen und weisen Kunden in die
            Bedienung ein. Darüber hinaus erledigen sie auch kaufmännische
            Arbeiten, etwa die Korrespondenz. Sie kalkulieren Angebote,
            erstellen Abrechnungen mit Krankenkassen oder Rechnungen an Kunden
            und führen die Kundenkartei.
          </Paragraph>
          <Paragraph>
            Hörgeräteakustiker/innen finden Beschäftigung in Betrieben des
            Hörgeräteakustiker-Handwerks oder bei industriellen Herstellern von
            Hörgeräten. Hörgeräteakustiker/in ist ein 3-jähriger anerkannter
            Ausbildungsberuf im Handwerk. Vorausgesetzt wird ein Mittlerer
            Schulabschluß, 10 Klasse (=Mittlere Reife).
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Kosmetik = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Cosmetics, make-up artist, tattoo artist'
            : ' Kosmetik, Maskenbild, Tätowierer*in'}{' '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <MakeUpArtistEnglish />
      ) : (
        <Article>
          <Paragraph>
            Die intensive Beschäftigung mit dem Körper macht Berufe rund um die
            Kosmetik und Maske für einige Tänzerinnen und Tänzer attraktiv.
            Kosmetikausbildungen haben unterschiedliche Ausrichtungen: neben der
            Schönheitsbehandlung können auch medizinische Aspekte eine wichtige
            Rolle spielen. Der Beruf der Kosmetiker/in kann in 2 Jahren als
            schulische oder duale Ausbildung erlernt werden. Für zertifizierte
            Schulen kann man dies von der Arbeitsagentur über den
            Bildungsgutschein finanziert bekommen. Kosmetiker/innen finden
            Beschäftigung in Kosmetikstudios, Wellnesshotels oder Clubanlagen,
            Saunas oder Bädern, Hautarztpraxen.
          </Paragraph>
          <Paragraph>
            Unter „kosmetische Spezialbehandlung“ fällt auch der Bereich des
            Tätowierens und Piercens. In Berlin gibt es eine Schule, deren
            Ausbildung sogar von der Arbeitsagentur zertifiziert ist, d.h. bei
            Kostenübernahme potentiell von ihr finanziert werden kann.
          </Paragraph>
          <Paragraph>
            Wer näher an der Kunst bzw. der Kultur bleiben will, wird sich für
            den Beruf der Maskenbildner/in entscheiden. Diesen kann man durch
            ein Studium oder eine 3-jährige duale Ausbildung (im Theater oder
            bei einem Fernsehsender). Erfahrungswerte zur Übernahme der Kosten
            durch die Arbeitsagentur haben wir noch nicht, dies sollte aber in
            jedem Fall versucht, d.h. beantragt werden.
          </Paragraph>
          <Paragraph>Mehr: </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('http://www.maskenbildner-werden.info')
            }
          >
            www.maskenbildner-werden.info
          </Link>
          <Paragraph>
            Der Beruf der Visagistin liegt zwischen den Berufen Kosmetiker/in
            und Maskenbildner/in, es geht hier eher um das Schminken des
            Gesichts zu verschiedenen Anlässen. Der Beruf der/s Visagisten/in
            ist in Deutschland nicht geschützt und kann deshalb auch in Kursen
            von wenigen Monaten erlernt werden.
          </Paragraph>
          <Paragraph>Mehr: </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('http://berufenet.arbeitsagentur.de')
            }
          >
            berufenet.arbeitsagentur.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Kulturvermittler = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Culture and art mediator'
            : 'Kultur- und Kunstvermittler*in '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <CultureMediatorEnglish />
      ) : (
        <Article>
          <Paragraph>
            Kultur- und Kunstvermittler*in ist (noch) keine geschützte
            Berufsbezeichnung, bietet aber eine große Vielfalt an beruflichen
            Einsatzmöglichkeiten. Auch wenn es keine gesicherten Zahlen gibt,
            dürften unserer Meinung nach freiberuflich tätige Kultur- und
            Kunstvermittler*innen überwiegen.
          </Paragraph>
          <Paragraph>
            Bei Tänzer*innen in Transition sollte keineswegs ausschließlich die
            Tanzpädagogik fokussiert werden, weil die Kultur- und
            Kunstvermittlung ein grundsätzlich sehr differenziertes,
            spartenübergreifendes sich mehr und mehr professionalisierendes
            Einsatzfeld bietet. „[…Dazu gehören …] neben den
            Vermittlungsangeboten kultureller Institutionen, wie zum Beispiel
            Führungen, Publikumsgespräche, Workshops oder Einführungen der
            Theater-, Opern- und Tanzbühnen, der Konzerthäuser oder des
            Literaturbetriebs, auch das Unterrichten der künstlerischen
            Schulfächer, theaterpädagogische Projekte oder Projekte mit
            Künstler*innen in Schulen [bzw. ebenso außerschulische Aktivitäten,
            wie z.B. die Vermittlung künstlerischer Techniken].“
          </Paragraph>
          <Paragraph>
            In den letzten Jahren lässt sich beobachten, dass es zwischen den
            o.g. kultur- und kunstvermittelnden Einsatzfeldern Synergien zur
            Öffentlichkeitsarbeit sowie zum Kultur-und Projektmanagement gibt.
            Das eröffnet weitere interessante Beschäftigungspotenziale!
          </Paragraph>
          <Paragraph>
            An der Universität Paderborn wird ein sechssemestriger
            BA-Studiengang „Kunst- und Kunstvermittlung“ angeboten.
            Studienvoraussetzung ist das Abitur, eine fachgebundene
            Hochschulreife bzw. seit Oktober 2016 (NEU):
          </Paragraph>
          <List>
            <Paragraph>
              – der Studienwunsch als eine berufliche Aufstiegsfortbildung oder
            </Paragraph>
            <Paragraph>
              – eine dem angestrebten Studium fachlich entsprechende
              Berufsausbildung berufliche Tätigkeit oder
            </Paragraph>
            <Paragraph>– eine bestandene Eignungsprüfung.</Paragraph>
            <Paragraph>
              WICHTIG: Das BA-Studium der „Kunst- und Kulturvermittlung“ an der
              Uni Paderborn wird entweder mit dem Studienfach
              Medienwissenschaften / Mode-Textil-Design(-Studien) oder
              Musikwissenschaft kombiniert, so dass ein Doppelabschluss erworben
              wird.
            </Paragraph>
          </List>
          <Paragraph>
            Ausreichende Deutschkenntnisse (in der Regel mindestens B2-Niveau)
            wichtig!
          </Paragraph>
          <Paragraph>
            Die o.g. erfreuliche Neuregelung der
            Berufsbildungshochschulzugangsverordnung (BBHZVO) ermöglicht
            Tänzer*innen in Transition, die kein Bafög mehr bekommen können, das
            attraktive Aufstiegs-Bafög. Siehe dazu unseren Newsletter-Artikel
            „Ab 1. August 2016 kein Meister-Bafög mehr, sondern
            Aufstiegs-Bafög!“{' '}
          </Paragraph>
          <Paragraph>
            UND zum Netzwerk professioneller Kunstvermittler hier:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('http://www.berufkunstvermittlung.de')
            }
          >
            www.berufkunstvermittlung.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Kunstgeragoge = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Art Geragogues' : 'Kunstgeragog*Innen'}△
        </ArticleSubHeader>
        {props.eng ? (
          <ArtGeragogueEnglish />
        ) : (
          <Article>
            <Paragraph>
              „In Zukunft werden Ältere und aus heutiger Sicht sehr alte
              Menschen die Bevölkerung erheblich stärker prägen als heute. […]
              Am stärksten besetzt werden [2060] die Jahrgänge der etwa
              70-Jährigen sein, die um 1990 geboren wurden.“ (1), meint Bettina
              Sommer vom Statistischen Bundesamt.
            </Paragraph>
            <Paragraph>
              Dieser Bevölkerungstrend hin zu mehr älteren, alten bzw.
              hochbetagten Menschen wird den Dienstleistungssektor und damit
              auch den Arbeitsmarkt fundamental beeinflussen. Es bieten sich
              schon heute viele berufliche Perspektiven, wenn man sich auf die
              Wünsche und Bedürfnisse älterer und alter Menschen einzustellen
              weiß. So zum Beispiel die KunstgeragogInnen, eine noch sehr junge
              Berufsgruppe qualifizierter Fachleute, die mit verschiedenen
              Gruppen Älterer künstlerisch-kreativ arbeiten und dadurch
              allgemeines Wohlbefinden fördern und gesundheitsunterstützend
              agieren. Einsatzorte von KunstgeragogInnen sind nicht nur
              Seniorenheime- bzw. Residenzen oder Mehrgenerationenhäuser,
              sondern auch Krankenhäuser, voll- oder teilstationäre Pflegeheime,
              Hospize, verschiedenste Bildungsträger und Kulturinstitutionen
              sowie diverse Anbieter für mehr Gesundheit, Wellness bzw.
              Prävention.
            </Paragraph>
            <Paragraph>
              Eine modulare nebenberufliche Kunstgeragogik-Weiterbildung mit
              Schwerpunkt TANZ bietet die Bundesakademie Wolfenbüttel an. So
              beginnt im Oktober der mittlerweile 6. Lehrgang „KUNSTgeragogik –
              Kulturelle Bildung mit Älteren“ mit insgesamt sieben Modulen
              (insgesamt 160 Stunden). Zusätzliche Zeit zum Selbststudium, für
              die Durchführung der Hospitation am Wohnort, der Nachbereitung und
              Vorbereitung der Module und für das Abschlusskolloquium muss
              hinzugerechnet werden. Kosten: 1.829 € (inkl. alle Gebühren
              Unterkunft, Verpflegung), zzgl. 70,00 € Material.
            </Paragraph>
            <Paragraph>
              Strebt man die staatlich geschützte Berufsbezeichnung
              „KunstgeragogIn“ an, muss Zeit in ein 8. Modul und zwei
              zusätzliche stationäre oder teilstationäre Pflegepraktika von 40h
              investiert werden. Aber der Aufwand lohnt, denn dadurch wird auch
              die Anerkennung nach § 87 b (47b) Abs. 3 und 47a des SGB XI
              erlangt, was vor allem für freiberuflich tätige
              KunstgeragonikerInnen besonders wichtig ist, die ihre
              Betreuungsleistungen so im Rahmen von Pflege und sogenannter
              Aktivierung über die Soziale Pflegeversicherung abrechnen können.
              Der 7. Lehrgang „KUNSTgeragogik – Kulturelle Bildung mit Älteren“
              beginnt voraussichtlich im 1. Halbjahr 2017.
            </Paragraph>
            <Paragraph>
              Adaptierte Quelle und Infos zum Tätigkeitsfeld Kunstgeragonik
              sowie zur Qualifizierung an der BA Wolfenbüttel hier:
            </Paragraph>
            <Link
              onPress={() => Linking.openURL('http://www.kunstgeragogik.net/')}
            >
              www.kunstgeragogik.net
            </Link>
          </Article>
        )}
      </TouchableOpacity>
    </>
  );
};

export const Lehrer = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Teacher at state schools'
            : 'Lehrer*in an staatlichen Schulen '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <TeacherEnglish />
      ) : (
        <Article>
          <Paragraph>
            Lehrer*innen sind mittelweile Mangelware. Das gilt für alle
            Schulformen, also
          </Paragraph>
          <List>
            <Paragraph>- Grundschulen,</Paragraph>
            <Paragraph>
              - Oberschulen, Gymnasien, berufsbildende Schulen und
            </Paragraph>
            <Paragraph>- Förderschulen</Paragraph>
          </List>
          <Paragraph>
            und für die meisten Fächer. Gesucht wird nicht mehr nur für die
            MINT-Fächer (wie noch vor wenigen Jahren ausschließlich), sondern
            Mangel besteht nun auch in Musik, Kunsterziehung und Sport, aber
            auch in Deutsch sowie Fremdsprachen (einschl. Deutsch als
            Fremdsprache/Zweitsprache) und an den berufsbildenden Schulen für
            Soziales z.B. im Bereich Pflege.
          </Paragraph>
          <Paragraph>
            Die Schulbildung unterliegt der Verantwortung der einzelnen
            Bundesländer. Deshalb variieren die Rahmenbedingungen, z.B. bei den
            Gehältern/Besoldungen, der jeweiligen Wochenstundenzahl an
            Unterricht, der Option einer Verbeamtung oder auch der Möglichkeit
            von Teilzeitbeschäftigung.
          </Paragraph>
          <Paragraph>
            Bei der Ausbildung lässt sich aber grundsätzlich sagen, dass die
            staatliche Lehrer*innenausbildung zweigliedrig ist. Sie besteht
            zuerst aus einer langjährigen akademischen Ausbildung an einer päd.
            Hochschule oder Universität mit dem Resultat des I. Staatsexamens.
            Danach folgt mehr oder weniger fließend die praktische zweijährige
            Ausbildungsphase, das Referendariat. Dieses wird mit dem II.
            Staatsexamen beendet. Dadurch erlangt man die Lehrbefähigung für die
            Primarstufe oder Sekundarstufe I bzw. II oder eben auch für die
            Berufsschule bzw. Förderschule. NUR Lehrkräfte mit einem II.
            Staatsexamen gelten als Studienräte und werden dann dementsprechend
            bezahlt (in der Regel TVÖD 13/A 12) automatisch oder auf Antrag
            verbeamtet. Das ist z.B. für die spätere Pensionsregelung nicht
            unerheblich.
          </Paragraph>
          <Paragraph>
            Fast alle Bundesländer werben aufgrund des großen
            Lehrer*innenmangels seit einiger Zeit auch um sog.
            Seiteneinsteiger*innen. Das heißt, Absolvent*innen mit einem MA in
            Education bzw. Erziehungswissenschaft oder einem MA in einem Fach,
            das zum Fächerkanon an staatlichen Schulen zählt (z.B. Mathematik,
            Geographie, Germanistik, Sportwissenschaft usw.), können sich für
            den Schuldienst bewerben. Bei Einstellung auf Probe wird das
            Referendariat dann nebenberuflich parallel zu einer
            Teilzeitlehrer*innenstelle innerhalb von einem oder zwei Jahren (je
            nach Bundesland) absolviert. Bis zur vollwertigen Lehrbefähigung,
            d.h. dem erfolgreichen II. Staatsexamen (!, denn es gibt auch “nur”
            Zertifikatskurse), sind die Bezüge deshalb gemindert (in der Regel
            TVÖD 11).
          </Paragraph>
          <Paragraph>
            Für Absolvent*innen mit BA-Abschluss ist eine Beschäftigung als
            Lehrer*in im staatlichen Schuldienst nach unserer Kenntnis bis auf
            weiteres ausgeschlossen.
          </Paragraph>
          <Paragraph>
            Auch EU-Bürger*innen mit den o.g. Qualifikationen UND ausreichenden
            Deutschkenntnissen (ab C1-Niveau) können sich für den Schuldienst
            bewerben!
          </Paragraph>
          <Paragraph>
            Detaillierte Infos für z.B. Sachsen, Berlin, MeckPom, Bayern, Hessen
            unter:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('https://www.lehrerbildung.sachsen.de/')
            }
          >
            www.lehrerbildung.sachsen.de/214…
          </Link>
          <Link onPress={() => Linking.openURL('https://www.berlin.de/')}>
            www.berlin.de
          </Link>
          <Link onPress={() => Linking.openURL('http://www.lehrer-in-mv.de/')}>
            www.lehrer-in-mv.de
          </Link>
          <Link onPress={() => Linking.openURL('http://www.km.bayern.de/')}>
            www.km.bayern.de
          </Link>
          <Paragraph>
            Ansonsten in der Suchmaschine „Lehrer in …“ eingeben und auf eine
            der offiziellen Seiten (Bildungsministerium, Kultusministerium)
            gehen.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Logopaede = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Speech therapist' : 'Logopäde*in '}△
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <SpeechTherapistEnglish />
      ) : (
        <Article>
          {' '}
          <Paragraph>
            “Wer seine Sprachfähigkeit nicht voll entwickeln kann oder verliert,
            ist gefährdet, ausgeschlossen zu werden: Aus dem Freundeskreis, aus
            der Gesellschaft, aus dem Beruf. Kinder, deren Sprachentwicklung zu
            wenig unterstützt wird, bekommen Probleme. Oder Menschen, die
            stottern. Menschen nach einem Schlaganfall. Menschen, deren Stimme
            den beruflichen Anforderungen nicht gewachsen ist.
          </Paragraph>
          <Paragraph>
            Die Einschränkung der Kommunikationsfähigkeit bei Kindern und
            Erwachsenen kann sich auf “Sprache”, “Sprechen”, “Stimme” und
            “Schlucken” beziehen. Wenn mehrere Bereiche betroffen sind, handelt
            es sich um komplexe (Kommunikations-) Störungen. Solche komplexen
            Störungen treten sowohl bei Kindern als auch bei Erwachsenen auf.
            Sie sind oft Folgen angeborener (z. B. Behinderungen) oder
            erworbener (z. B. Schlaganfall) Störungen.
          </Paragraph>
          <Paragraph>
            [Staatlich geprüfte Logopäd*innen sind nicht-ärztliches Fachpersonal
            und] repräsentieren den Gesundheitsfachberuf, der in den Bereichen
            Prävention, Früherkennung, Frühförderung, Rehabilitation arbeitet
            und dort für die Beratung, Diagnostik und Therapie zuständig ist.
            Logopädinnen sind ebenfalls in freier Praxis tätig. Die Verordnung
            von Sprach-, Sprech- und Stimmtherapie basiert auf den
            Heilmittelrichtlinien (HMR).”
          </Paragraph>
          <Paragraph>
            Die Logopädie-Ausbildung ist in Deutschland differenziert in:
          </Paragraph>
          <List>
            <Paragraph>– berufsfachschulische Ausbildung und</Paragraph>
            <Paragraph>
              – seit 2009 ebenfalls in BA- und MA-Studium mit der üblichen
              Studiendauer.
            </Paragraph>
          </List>
          <Paragraph>
            Bei der berufsfachschulischen logopädischen Ausbildung handelt es
            sich in der Regel um eine dreijährige Vollzeitausbildung mit Theorie
            und Praxis. Zugangsvoraussetzung für diese Ausbildung ist ein
            Realschulabschluss, eine andere gleichwertige Ausbildung oder eine
            nach Hauptschulabschluss abgeschlossene mindestens zweijähriger
            Berufsausbildung. Die Bewerbung erfolgt direkt bei den
            Berufsfachschulen, die je nach Schulordnung bei freier Trägerschaft
            Schulgeld erheben.
          </Paragraph>
          <Paragraph>
            Seit 2009 kann man Logopädie an Hochschulen studieren (BA und MA).
            Voraussetzung dafür ist die allgemeine Hochschulreife, das Abitur,
            oder die fachgebundene Hochschulreife bzw. die Fachhochschulreife.
            Wer ein berufsfachschulisches Logopädie-Examen hat, kann je nach
            Hochschule auch ohne Abitur ein Logopädie-Studium beginnen.
          </Paragraph>
          <Paragraph>
            Um eine Transition zum/zur Logopäden/in durch Stipendien gefördert
            zu bekommen, ist die Kombination aus berufsfachschulischer
            Ausbildung UND BA-bzw. MA-Studium ratsam.
          </Paragraph>
          <Paragraph>
            Dieses Doppelmodell ist zum Beispiel an der Akademie für
            Gesundheitsberufe Heidelberg möglich. Weitere Ausbildungs- und
            Studieneinrichtungen für Logopädie findet man unter:
          </Paragraph>
          <Link
            onPress={() => Linking.openURL('http://www.logo-ausbildung.de')}
          >
            www.logo-ausbildung.de
          </Link>
          <Paragraph>
            ist Der Berufs- und Fachverband der freiberuflichen und angestellten
            LogopädInnen sowie Angehöriger anderer sprachtherapeutischer
            Berufsgruppen ist der 1964 gegründete Deutsche Bundesverband für
            Logopädie e.V. (dbl) mit sehr informativer Webseite unter:
          </Paragraph>
          <Link onPress={() => Linking.openURL('http://www.dbl-ev.de/')}>
            www.dbl-ev.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Luftverkehr = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Air transport specialists' : 'Luftverkehrskaufleute'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <AirTransportEnglish />
      ) : (
        <Article>
          <Paragraph>
            Unsere Mobilität steigt. So wird das durchschnittliche globale
            Wachstum des Luftverkehrs auf Grundlage von Passagierkilometern
            (RPK) von der Bundesregierung für die nächsten ca. 20 Jahre „auf
            jährlich rund 4,7%“ geschätzt (Bundesministerium für Wirtschaft und
            Energie (Hrsg.): Die Luftfahrtstrategie der Bundesregierung. 2014,
            S. 5). Logistisch genutzt werden kann dieses ökonomische Potenzial
            der nächsten Jahrzehnte nur mit gut ausgebildeten MitarbeiterInnen
            am Boden und in der Luft. Luftverkehrskaufleute gehören auf alle
            Fälle dazu!
          </Paragraph>
          <Paragraph>
            Sie sind vom Boden aus verantwortlich für alle Abläufe rund um die
            Beförderung von Passagieren und Frachten, beispielsweise:
            Crew-Einsatz planen, Streckenunterlagen zusammenstellen, über Tarife
            und Flugverbindungen beraten, Flugpreisen und Tarife berechnen,
            Flüge buchen und reservieren, Frachtkapazitäten planen und
            Frachtpapiere erstellen, verkaufsfördernden Aktivitäten koordinieren
            und im Finanz-, Rechnungswesen, Personalwesen bzw. in der
            allgemeinen Organisation arbeiten. Verantwortungsbewusstsein,
            Flexibilität, Genauigkeit, souveräne und positive Ausstrahlung,
            körperliche Fitness und Attraktivität, Mehrsprachigkeit,
            Kollegialität bei gleichzeitiger Selbständigkeit sowie Belastbarkeit
            sind Voraussetzung für diesen vielseitigen, international geprägten
            Beruf mit viel Zukunft in der Logistik- und Verkehrsbranche
            (Fluggesellschaften, Flughafengesellschaften, Reisebüros,
            Speditionen, Abfertigungsunternehmen).
          </Paragraph>
          <Paragraph>
            Die Ausbildung in Vollzeit und – aufgrund des großen Bedarfs
            mittlerweile auch – in Teilzeit ist ein anerkannter Ausbildungsberuf
            der IHK, der nach Einzelfallprüfung von der Arbeitsagentur
            finanziert wird.
          </Paragraph>
          <Paragraph>
            Interessante Infos zur Ausbildung und den beruflichen Perspektiven
            in einer Studie des Bundesinstituts für Berufsbildung (BIB) von März
            2014, Pkt. 5.4.1, S.31:
          </Paragraph>
          <Link onPress={() => Linking.openURL('https://www2.bibb.de')}>
            www2.bibb.de
          </Link>
          <Paragraph>Allgemeine Infos zum Berufsbild:</Paragraph>
          <Link onPress={() => Linking.openURL('https://www.berlinonline.de/')}>
            www.berlinonline.de
          </Link>
          <Paragraph>
            Info-Veranstaltung zu Berufsperspektiven in der Luftfahrt:
          </Paragraph>
          <Link onPress={() => Linking.openURL('https://www.trainico.de/')}>
            www.trainico.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Mediengestalter = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Media designer digital & print or web design'
            : 'Mediengestalter_in digital und print bzw. Webdesign'}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <MediaDesignerEnglish />
      ) : (
        <Article>
          <Paragraph>
            Als Urvater dieses Ausbildungsberufes gilt Johannes Gutenberg, der
            1455 den Buchdruck revolutionierte, indem er bewegliche und
            wiederverwendbare Lettern verwendete. Mediengestalter/innen Digital
            und Print entwickeln in Abstimmung mit ihren Kunden Konzepte für die
            Gestaltung von digitalen oder gedruckten Informationsmitteln und
            setzen diese um. Sie gestalten und erstellen Medienprodukte.
          </Paragraph>
          <Paragraph>
            Mediengestalter/in Digital und Print ist ein 3-jähriger anerkannter
            Ausbildungsberuf. Die Ausbildung ist in folgenden Fachrichtungen
            möglich:
          </Paragraph>
          <Paragraph>
            Mediengestalter/innen Digital und Print der Fachrichtung Beratung
            und Planung betreuen und beraten Kunden und erstellen Angebote für
            Medienprodukte. Sie planen Projekte, bearbeiten Aufträge und
            präsentieren die Ergebnisse.
          </Paragraph>
          <Paragraph>
            Mediengestalter/innen Digital und Print der Fachrichtung Gestaltung
            und Technik gestalten Medienprodukte und planen Produktionsabläufe.
            Sie kombinieren Medienelemente, bereiten Daten für den digitalen
            Einsatz auf und stellen sie für den jeweiligen Verwendungszweck
            zusammen.
          </Paragraph>
          <Paragraph>
            Mediengestalter/innen Digital und Print der Fachrichtung Konzeption
            und Visualisierung analysieren Zielgruppen und erstellen
            Medienkonzeptionen. Sie präsentieren den Kunden Entwürfe und
            arbeiten diese für die mediengerechte Weiterverarbeitung aus.
          </Paragraph>
          <Paragraph>
            Mediengestalter/innen Digital und Print aller Fachrichtungen finden
            Beschäftigung in Werbeagenturen bzw. Werbeabteilungen und in
            Unternehmen der Druck- und Medienwirtschaft.
          </Paragraph>
          <Paragraph>
            Mediengestalter/innen Webdesign entwickeln und gestalten Webseiten,
            sie können diese nach der Ausbildung sowohl gestalten als auch
            programmieren. Auch Datenbanken und Webbanner usw. können sie
            erstellen.
          </Paragraph>
          <Paragraph>
            Art der Ausbildung: dual (Berufsschule und Betrieb), Zuständige
            Stelle: IHK, HWK
          </Paragraph>
          <Paragraph>
            Dauer: 3 Jahre, Verkürzung auf 2-2,5 Jahre möglich
          </Paragraph>
          <Paragraph>
            freie Ausbildungsstellen finden sich noch für dieses Jahr:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('https://jobboerse.arbeitsagentur.de')
            }
          >
            jobboerse.arbeitsagentur.de
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('http://www.azubiyo.de/stellenmarkt/')
            }
          >
            www.azubiyo.de/stellenmarkt/
          </Link>
        </Article>
      )}
    </>
  );
};

export const Osteopathie = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Osteopathy' : 'Osteopathie'} △
        </ArticleSubHeader>
        {props.eng ? (
          <OsteopathyEnglish />
        ) : (
          <Article>
            <Paragraph>
              Ostheopathie ist eine Behandlungsmethode für körperliche
              Beschwerden. Der Ansatz der Osteopathie ist einfach: Leben zeigt
              sich in Form von Bewegung. Dort wo Bewegung verhindert wird, macht
              sich Krankheit breit. Die Osteopathie kennt alle kleinen und
              großen Bewegungen des menschlichen Körpers. Sie hilft
              Bewegungseinschränkungen aufzuspüren und zu lösen. Die Osteopathie
              bietet gegenüber der Schulmedizin eine ganze Reihe von
              zusätzlichen Möglichkeiten zum Wohle des Patienten. So betrachtet
              die Osteopathie den Patienten immer in seiner Gesamtheit. Auch
              beschäftigt sich die Osteopathie nicht mit der Behandlung
              einzelner Symptome, sondern will immer die Ursachen von
              Beschwerden aufspüren und behandeln.
            </Paragraph>
            <Paragraph>
              In Deutschland erfolgt die Ausbildung zum Osteopathen vorrangig an
              privaten Osteopathie-Schulen.
            </Paragraph>
            <Paragraph>
              Die meisten dieser Schulen bieten ihre Ausbildung berufsbegleitend
              an. Die berufsbegleitende Ausbildung richtet sich an Ärzte,
              Heilpraktiker, Physiotherapeuten.
            </Paragraph>
            <Paragraph>
              Da die Osteopathie in Deutschland als Heilkunde gilt, darf sie nur
              von Ärzten oder Heilpraktikern eigenständig praktiziert werden.
              Andere Berufsgruppen müssen während oder nach ihrer Ausbildung den
              Heilpraktikerschein erwerben. Wer nicht Arzt oder Heilpraktiker
              ist (z.B. Physiotherapeut), darf nur auf Anordnung eine Arztes
              oder Heilpraktikers „in den Grenzen seines Grundberufes“
              osteopathisch arbeiten.
            </Paragraph>
            <Paragraph>
              Die berufsbegleitende Ausbildung beträgt mindestens vier Jahre und
              findet in Wochenendseminaren statt. Insgesamt müssen die Schüler
              mindestens 1.350 Unterrichtsstunden absolvieren. Der Unterricht
              ist aufgeteilt in Theorie und Praxis und umfasst medizinische
              Grundlagenfächer wie Anatomie und Physiologie sowie das Erlernen
              der verschiedenen osteopathischen Techniken. Eine Abschlussarbeit
              und eine Abschlussprüfung beenden die Ausbildung.
            </Paragraph>
            <Paragraph>
              Osteopathie wird ebenfalls als fünfjährige Vollzeitausbildung
              angeboten. Dieses Angebot richtet sich vorwiegend an Abiturienten.
              Während ihrer Ausbildung werden diese auf die Prüfung zum Erwerb
              des Heilpraktikertitels vorbereitet, ohne den sie die Osteopathie
              nicht eigenständig praktizieren zu dürfen.
            </Paragraph>
            <Paragraph>
              Vollzeitabsolventen haben in einer fünfjährigen Vollzeitausbildung
              mit über 5000 Unterrichtseinheiten an einer Vollzeitschule
              Osteopathie erlernt. Damit sie in Deutschland ohne Einschränkungen
              legal im Bereich Osteopathie arbeiten dürfen, haben sie die
              Heilpraktikerprüfung abgelegt. Die Vollzeitausbildung ist die
              derzeit fundierteste osteopathische Ausbildung.
            </Paragraph>
            <Paragraph>
              Die mindestens vierjährige Ausbildung ist notwendig, um einerseits
              die vielen Bereiche der Osteopathie als eigenständige und wirksame
              Form der Medizin zu erlernen und andererseits die eigenen Hände zu
              feinfühligen Instrumenten zu schulen.
            </Paragraph>
            <Paragraph>Verband der Osteopathen Deutschland e.V.</Paragraph>
            <Link onPress={() => Linking.openURL('http://www.osteopathie.de')}>
              www.osteopathie.de
            </Link>
          </Article>
        )}
      </TouchableOpacity>
    </>
  );
};

export const PTA = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Pharmaceutical Technical Assistant (PTA)'
            : 'Pharmazeutisch-technischen Assistentin (PTA)'}
          △
        </ArticleSubHeader>
      </TouchableOpacity>

      {props.eng ? (
        <PharmaceuticalTechnicalAssistantEnglish />
      ) : (
        <Article>
          <Paragraph>
            Ob verschreibungspflichtige oder rezeptfreie Medikamente -
            pharmazeutisch-technische Assistenten unterstützen Apotheker,
            ärztliche Rezepte zu kontrollieren und Arznei an Kunden zu
            übergeben.“ Sie beraten Kund*innen, stellen Arzneimittel her bzw.
            entwickeln sie weiter, sind für die Qualitätskontrolle (z.B. durch
            Analysen zur Reinheit und Dosierung gemäß gesetzlicher Vorgaben)
            verantwortlich, übernehmen Verwaltungsaufgaben und führen diverse
            Serviceleistungen durch, wie beispielsweise Blutdruckmessungen. Der
            Gesundheitssektor ist einer der am stärksten wachsenden Märkte.
            Deshalb sind PTA gesuchte Fachleute in Apotheken, Krankenhäusern,
            Seniorenresidenzen, in der Pharma-Industrie sowie für das
            betriebliche Gesundheitsmanagement verschiedenster Firmen. Sowohl in
            familienfreundlicher Teilzeit als auch aufgrund des hohen Bedarfs in
            Vollzeit erfolgt die Beschäftigung in Festanstellung.
          </Paragraph>
          <Paragraph>
            Die duale Ausbildung an einer der bundesweiten ungefähr 80 privaten
            (mit Schulgeld) oder staatlichen (ohne Schulgeld) Fachschulen dauert
            2,5 Jahre in Vollzeit und beinhaltet mindestens ein mehrmonatiges
            Berufspraktikum. Theoretische Grundlagen der Ausbildung sind u.a.
            Arzneimittelkunde, Chemie und Fachrechnen. Praktische Fächer sind
            beispielsweise Botanik, Ernährungskunde und Diätik sowie
            Drogenkunde. Ausbildungsvoraussetzung ist ein guter mittlerer
            Schulabschluss bzw. ein (Fach-) Abitur. Interesse an
            Naturwissenschaften und Mathematik, Freude am Menschen,
            Gründlichkeit und Sorgfalt sollten gegeben sein. Die Ausbildung zur
            PTA wird auf Antrag von den Arbeitsagenturen gefördert!
          </Paragraph>
          <Paragraph>Weitere DETAILS hier: </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('https://www.ausbildung.de/berufe/pta/')
            }
          >
            www.ausbildung.de/berufe/pta/
          </Link>
        </Article>
      )}
    </>
  );
};

export const Raumausstatter = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Interior decorator' : 'Raumausstatter*in'}△
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <InteriorDecoratorEnglish />
      ) : (
        <Article>
          {' '}
          <Paragraph>
            Wer gern gestaltet und kreativ ist, wem Schönes wichtig ist, wer
            gleichzeitig gern werkelt und Dinge berechnet sowie sich für
            verschiedene Materialien interessiert andere mit seiner Arbeit
            erfreuen möchte, für den/die kann Raumausstattung eine befriedigende
            berufliche Beschäftigung sein. „RaumausstatterInnen gestalten Wohn-
            und Geschäftsräume und beraten hinsichtlich der Gestaltung und
            Materialwahl. Sie planen die Raumausstattung nach den Wünschen des
            Kunden und bereiten diese vor. Sie ermitteln Kosten und besorgen
            nach Auftragsabschluss die benötigten Materialien, mit denen sie die
            Räumlichkeiten gestalten. [Bei Bedarf] bereiten [sie] die
            Untergründe vor, verlegen Bodenbeläge, kleiden Wände und Decken mit
            Stoffen und Tapeten aus, montieren Sicht- und Sonnenschutzanlagen
            und dekorieren die Räume. Darüber hinaus beziehen sie Polstermöbel
            neu. … “
          </Paragraph>
          <Paragraph>
            Ein sehr vielseitiges Berufsfeld, das selbstverständlich an Theatern
            und Spielstätten beispielsweise Einsatzmöglichkeiten als
            RequisiteurIn (konkrete Ausschreibung weiter unten) bietet. Darüber
            hinaus begleiten RaumausstatterInnen sehr oft freiberuflich
            ImmobilienbesitzerInnen oder auch beauftragte Architekturbüros bei
            der Innengestaltung von Räumlichkeiten. Deutsche HandwerkerInnen
            genießen im Ausland einen sehr guten Ruf, so dass
            RaumausstatterInnen grundsätzlich überall dort ein Auskommen möglich
            ist, wo es zu gestaltendes Wohneigentum gibt und gern angemessen für
            diese Dienstleistung bezahlt wird. In diesem Zusammenhang wichtig zu
            wissen, dass es für Azubis bzw. Berufstätige in Handwerksberufen mit
            SINDBAD ein EU-Mobilitätsprogramm gibt, mit dem im Ausland wichtige
            berufliche Erfahrungen gesammelt werden können. Näher dazu im
            nächsten Newsletter.
          </Paragraph>
          <Paragraph>
            Interessant ist, dass für die dreijährige duale Ausbildung (also
            Theoriemodule an einer Berufsschule/Praxismodule im
            Ausbildungsbetrieb) als RaumausstatterIn keine bestimmte
            Schulbildung vorausgesetzt wird, aber ein guter Mittelschulabschluss
            als Zugangsbedingung überwiegt. Ausbildungsbetrieb kann
            selbstverständlich auch ein Theater sein. Für an diesem Beruf
            interessierte TänzerInnen in Transition lohnt sich eine konkrete
            Nachfrage.
          </Paragraph>
          <Paragraph>
            Der Beruf Raumausstatter/in erfordert einerseits ein hohes Maß an
            gestalterischer Kreativität im Umgang mit Formen, Farben und
            unterschiedlichen Materialien, andererseits aber auch gute soziale
            und kommunikative Fähigkeiten. Der Wunsch der Kunden steht stets im
            Mittelpunkt, so dass man Freude daran haben muss die eigenen
            kreativen Fähigkeiten in den Dienst von Anderen zu stellen. Dennoch
            kann man natürlich mit zunehmender Berufserfahrung einen eigenen
            Stil entwickeln, was sich auch empfiehlt, um sich auf dem
            Arbeitsmarkt abzuheben.
          </Paragraph>
          <Paragraph>
            Die Ausbildung zum Raumausstatter/zur Raumausstatterin dauert
            insgesamt drei Jahre und gilt als anerkannter Handwerksberuf. Die
            Ausbildungsinhalte und -bedingungen sind in der deutschen
            Handwerksordnung festgeschrieben. Man kann eine klassische duale
            Ausbildung absolvieren, d.h. man ist bei einem Ausbildungsbetrieb
            eingestellt und erhält auch ein tariflich geregeltes Gehalt. Neben
            der Arbeit im Betrieb besucht man mehrmals wöchentlich oder aber in
            Blöcken die Berufsschule. Diejenigen, die keinen betrieblichen
            Ausbildungsplatz finden, können eine rein schulische Ausbildung
            machen. Diese ist grundsätzlich gleichwertig, wobei erfahrungsgemäß
            Praxiserfahrung immer ein Pluspunkt ist bei der späteren Jobsuche.
            Außerdem erhält man in diesem Fall natürlich kein Ausbildungsgehalt,
            unter Umständen kann man aber BaföG als Unterstützung erhalten.
          </Paragraph>
          <Paragraph>
            Im Prinzip kann sich jeder für die Ausbildung als Raumausstatter/in
            bewerben. Es ist kein bestimmter Schulabschluss vorgeschrieben.
            Sowohl die Ausbildungsbetriebe als auch die Berufsfachschulen haben
            eigene Kriterien, um ihre Bewerber auszuwählen. Empfehlenswert ist
            mindestens ein mittlerer Schulabschluss. Außerdem kann man seine
            Chance durch Praktika und ähnliches erhöhen.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Reiseleiter = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Tour guide' : 'Reiseleiter*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <TourGuideEnglish />
      ) : (
        <Article>
          <Paragraph>
            Deutschland und Europa werden als Reiseländer für Außereuropäer
            immer attraktiver. Zahlreiche Reiseanbieter (u.a. Education First,
            Globus, Insight, Trafalgar) suchen deshalb Reiseleiter für Gruppen,
            die durch Europa reisen (mehrere Tage oder Wochen). Dies ist eine
            herausfordernde Aufgabe, bei der man Sprachkenntnisse (Englisch 2.
            europäische Sprache sind zwingend erforderlich) und internationale
            Erfahrung einfließen lassen kann. Kommunikationsstärke,
            Organisations- und Improvisationstalent sollten vorhanden sein, ein
            paar Geschichts- und Kunstkenntnisse sind von Vorteil. Dann kann man
            die eigene Reiselust mit Gelderwerb verbinden. Als Reiseleiter
            arbeitet man häufig freelance und eher saisonabhängig, womit dieser
            Job also zur Finanzierung der Transition-Zeit, oder für die
            Kombination mit einer anderen projektorientierten Berufstätigkeit
            geeignet ist. Der Quereinstieg in diese Tätigkeit ist möglich. Auch
            eine weitere Qualifizierung im Tourismusbereich ist denkbar. mehr
            Information bei Andreas Müller: a.myller@gmx.de
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const SozialeArbeitBA = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Social Work BA' : 'Soziale Arbeit BA '} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <SocialWorkBAEnglish />
      ) : (
        <Article>
          <Paragraph>
            Im Bachelor Studiengang „Soziale Arbeit“ sind die beiden Bereiche
            Sozialarbeit und Sozialpädagogik integriert. Der Studiengang zielt
            inhaltlich auf die Vermittlung universeller Qualifikationen für die
            berufliche Praxis im weiten Feld der Sozialen Arbeit ab. Studiert
            werden kann Sozialen Arbeit überwiegend an Hochschulen wie z.B. der
            Alice Salomon Hochschule in Berlin. Es gibt den Studiengang jedoch
            auch an einigen wenigen Universitäten oder privaten Hochschulen.
          </Paragraph>
          <Paragraph>
            Voraussetzungen für das Studium der Sozialen Arbeit
          </Paragraph>
          <Paragraph>
            Grundsätzlich ist die allgemeine oder fachgebundene Hochschulreife
            oder die Fachhochschulreife erforderlich, um das Studium zu
            beginnen. An einigen Hochschulen gibt es jedoch die Möglichkeit,
            auch ohne Hochschulzugangsberechtigung und etwa über einen
            Eignungstest nach einer Ausbildung und mehrjähriger Berufserfahrung
            in anerkannten sozialen Bereichen die Qualifikation für ein Studium
            zu erhalten. Da sich in den letzten Jahren deutlich mehr
            Studieninteressierte bewerben, als Studienplätze zur Verfügung
            stehen, gibt es an vielen Hochschulen zusätzliche Auswahlkriterien.
            Dazu kann z.B. die Durchschnittsnote gehören oder auch Vorerfahrung
            im sozialen Bereich wie ehrenamtliches Arbeiten, ein
            Bundesfreiwilligendienst oder Praktika.
          </Paragraph>
          <Paragraph>Wie ist das Studium aufgebaut?</Paragraph>
          <Paragraph>
            Die Regelstudienzeit beträgt meist 6 oder 7 Semester je nach
            Hochschule. Grundsätzlich ist der Studiengang sehr praxisnah
            aufgebaut. Praktika sind in das Studium integriert und viele
            Hochschulen kooperieren mit sozialen Einrichtungen im Rahmen der
            Lehrveranstaltungen und Seminare. Die Dozenten sind auch oftmals
            neben ihre Lehrtätigkeit selbst in der Praxis tätig. An vielen
            Hochschulen besteht zudem die Möglichkeit, im letzten Teil des
            Studiums Schwerpunkte zu wählen und sich damit spezifischer zu
            qualifizieren. Viele Hochschulen bieten auch anschließende
            Masterstudiengänge an.
          </Paragraph>
          <Paragraph>Und nach dem Studium?</Paragraph>
          <Paragraph>
            Die Arbeitsfelder für SozialarbeiterInnen sind nahezu grenzenlos.
            Klassische Arbeitsfelder sind z.B. Kinder- und Jugendarbeit,
            Kinderschutz und Jugendhilfe, Bewährungshilfe, Allgemeiner Sozialer
            Dienst (z.B. Jugendämter), Flüchtlings- und Migrationshilfe,
            Streetwork oder Suchthilfe. SozialarbeiterInnen kommen aber auch in
            Schulen oder Kindergärten zum Einsatz oder arbeiten in
            Krankenhäusern, psychiatrischen Einrichtungen, im Bereich der
            Seniorenarbeit und in Werkstätten für beeinträchtigte Menschen.
          </Paragraph>
          <Paragraph style={{fontStyle: 'italic', fontSize: 11}}>
            Geschrieben von Lena Diel (Sozialpädagogin/Sozialarbeiterin, B.A.)
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const SozialeArbeitStudium = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Social work studies' : 'Studium Soziale Arbeit'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <SocialWorkStudiesEnglish />
      ) : (
        <Article>
          <Paragraph>
            Wer gern mit Menschen umgeben ist und ein Herz für benachteiligte
            Menschen hat, kann im sozialen Bereich große Befriedigung finden.
            Besonders praktisch orientiert ist die Soziale Arbeit.
            Sozialarbeiter/innen unterstützen hilfsbedürftige Menschen aller
            Altersgruppen mit sehr konkreten Hilfestellungen. Das dreijährige
            Bachelor-Studium „Soziale Arbeit“ umfasst Inhalte der
            Sozialpsychiatrie, der Beratung in Familie und Schule sowie der
            Klinischen Sozialarbeit und Entwicklungsrehabilitation. Die
            Studiengänge setzen sich – je nach Hochschule – aus einer
            unterschiedlichen Anzahl von Modulen zusammen und umfassen neben den
            Lehrveranstaltungen Praxismodule und eine Bachelorarbeit. Diese ist
            gegen Ende des Studiums anzufertigen. Praxisphasen werden bei
            Trägern der Kultur- und Sozialarbeit absolviert.
          </Paragraph>
          <Paragraph>
            Module sind beispielsweise: Beratung in Familie und Schule ,
            Geschichte, Grundbegriffe, Arbeitsfelder der Sozialen Arbeit,
            Handeln in Verwaltung/Organisation; Kindheit, Jugend, Erwachsene,
            Alter und Soziale Arbeit; Mensch und Organisation; Prekäre
            Lebenslagen; Rechtliche Grundlagen für die Soziale Arbeit; Soziale
            Ungleichheit; Sozialpsychiatrie; Sozialpolitik.
          </Paragraph>
          <Paragraph>
            Die Ausrichtung oder Schwerpunktsetzung der Studiengänge im Bereich
            Soziale Arbeit kann von Hochschule zu Hochschule unterschiedlich
            sein.
          </Paragraph>
          <Paragraph>
            Im Anschluss an ein Bachelorstudium im Bereich Soziale Arbeit ist
            ein direkter Einstieg ins Berufsleben in unterschiedlichen
            Tätigkeitsfeldern wie z.B. Sozialberatung, -arbeit oder Pädagogische
            Arbeit (ohne Lehrtätigkeit), möglich. Auch der Schritt in die
            Selbstständigkeit ist denkbar, z.B. als Jugendberater/in oder als
            Rehabilitationspädagoge/-pädagogin. Für Führungspositionen wird
            i.d.R. der Abschluss eines weiterführenden ca. 2-jährigen
            Master-Studiums erwartet. Wenn die Zugangsvoraussetzungen der
            jeweiligen Hochschule erfüllt sind, kann man nach dem Abschluss
            eines Bachelorstudiums im Bereich Soziale Arbeit das Studium in
            einem weiterführenden Studienfach fortsetzen und einen
            Masterabschluss erwerben, z.B. in Soziale Arbeit,
            Sozialwissenschaften oder Sozialmanagement.
          </Paragraph>
          <Paragraph>Mehr unter: berufenet.arbeitsagentur.de</Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('http://berufenet.arbeitsagentur.de')
            }
          >
            berufenet.arbeitsagentur.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Sozialversicherungsangestellter = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Social insurance clerk'
            : 'Sozialversicherungs- fachangestellte*r '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <SocialInsuranceClerkEnglish />
      ) : (
        <Article>
          <Paragraph>
            Der Ausbildungsberuf Sozialversicherungsfachangestellte*r ist
            anspruchsvoll und hat eine hohe Reputation. Als eine/r der ersten
            und wichtigsten Ansprechpartner*in ist die/der
            Sozialversicherungsfachangestellte Dreh- und Angelpunkt zwischen den
            Versicherungsträgern und den Versicherten. Sie sind Spezialist*innen
            im Umgang mit dem Sozialgesetzbuch (SGB V), das seit 1881 (!) eine
            wesentliche Säule des deutschen Sozialwesens darstellt.
          </Paragraph>
          <Paragraph>
            Die drei Ausbildungsjahre sind inhaltlich sehr abwechslungsreich
            bzw. kommunikativ und im Vergleich zu anderen Ausbildungsberufen
            überdurchschnittlich bezahlt. Bis zum Ende der Ausbildung werden
            mehrere Theoriebereiche absolviert, in denen
            sozialver-sicherungsrechtliches, verwaltungs- und auch
            kommunikations-wissenschaftliches Fachwissen im Mittelpunkt steht.
            Mehrere Praxismodule bei Versicherungsträgern wie Krankenkassen,
            gesetzlicher Renten- und Pflegeversicherung sowie Unfallkassen ist
            garantierter Ausbildungsbestandteil. Die Berufsaussichten sind sehr
            gut!
          </Paragraph>
          <Paragraph>
            Ein Ausbildungseinstieg ist mit Abitur oder mindestens sehr gutem
            Realschulabschluss möglich. Freude am Umgang mit Menschen,
            analytisches Denken und systematisches Herangehen sowie
            Selbständigkeit sind wichtige Voraussetzungen für eine erfüllte
            Tätigkeit in diesem Berufsfeld.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Sportkaufmann = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Sports and fitness management assistant'
            : 'Sport- und Fitnesskaufmann/Sport- und Fitnesskauffrau'}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <SportsManagerEnglish />
      ) : (
        <Article>
          <Paragraph>
            Wenn man sportbegeistert ist und gleichzeitig auch noch ein bisschen
            Freude am Organisieren, Planen und Rechnen hat, dann handelt es sich
            bei der Ausbildung zum Sport- und Fitnesskaufmann/zur Sport- und
            Fitnesskauffrau definitiv um einen Traumjob, der viel Abwechslung
            und Spaß mit sich bringt. So berät und betreut man nicht nur Kunden,
            sondern ist auch für die Planung von Verwaltungsprozessen zuständig
            und koordiniert den Sportbetrieb. Aber auch die Entwicklung von
            verschiedenen Programmen für die unterschiedlichsten Zielgruppen
            (von jung bis alt, vom Sportanfänger bis zum Profi) gehören zum
            üblichen Aufgabenfeld. Diese erstrecken sich inhaltlich von
            Trainings- bzw. Fitnessplänen und Sportprogrammen, über
            Ernährungspläne oder allgemeine Informationsveranstaltungen oder
            Präventionsprogramme.
          </Paragraph>
          <Paragraph>
            Dieses bunte Tätigkeitsfeld fordert natürlich auch eine Reihe von
            Fähigkeiten. So sollte man neben der als selbstverständlich
            vorausgesetzten Sportbegeisterung und Sportlichkeit definitiv Freude
            am Umgang mit Menschen mitbringen, aber auch organisatorische sowie
            wirtschaftlich-mathematische Fähigkeiten sowie ein hohes Maß an
            Engagement und Eigenverantwortung sind gefragt. Da man seinen Beruf
            zu großen Teilen ausübt, während andere Menschen ihre Freizeit
            verbringen, muss man auf Arbeitszeiten am Abend und am Wochenende
            eingestellt sein. Die Arbeitsmöglichkeiten sind breit gefächert und
            der Arbeitsmarkt bietet viele Angebote und Möglichkeiten. Ein
            weiterer großer Pluspunkt ist, dass man sein Hobby teilweise zum
            Beruf machen kann. Ich habe meine Berufswahl jedenfalls nie bereut!
          </Paragraph>
          <Paragraph>
            Es handelt sich um einen klassischen dualen Ausbildungsgang, der
            drei Jahre dauert und mit einer Prüfung der IHK (Industrie- und
            Handelskammer) endet. Als Eingangsvoraussetzung wird ein MSA
            (mittlerer Schulabschluss) empfohlen.
          </Paragraph>
          <Paragraph style={{fontStyle: 'italic', fontSize: 11}}>
            geschrieben von Samir E., Sport- und Fitnesskaufmann
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Veranstaltungstechnik = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng
            ? 'Theater or event technician'
            : 'Theater- bzw. Veranstaltungstechnik'}{' '}
          △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <TheaterEventTechnicianEnglish />
      ) : (
        <Article>
          <Paragraph>
            In jedem Theater arbeiten viele Techniker auf verschiedenen Ebenen.
            Bühnenarbeiter sind dabei teilweise Quereinsteiger aus anderen
            Handwerksberufen oder dem künstlerischen Bereich. Meist wird in den
            technischen Abteilungen (bei Bühnenbau, in der Tonabteilung und in
            der Beleuchtung) inzwischen die Ausbildung zur Fachkraft für
            Veranstaltungstechnik erwartet. Diese 3-jährige Ausbildung ist dual
            strukturiert. Das Theater ist dabei der Ausbildungsbetrieb, parallel
            besucht der Auszubildende 1 Tag pro Woche die Berufsschule.
          </Paragraph>
          <Paragraph>
            Fachkräfte für Veranstaltungstechnik planen und betreuen den
            technischen Ablauf von Veranstaltungen und sind an deren
            Durchführung beteiligt. Im Schwerpunkt Aufbau und Durchführung
            bereiten sie zunächst die Auswahl und den Einsatz der technischen
            Anlagen vor: Sie bauen Beleuchtungs-, Projektions- und
            Beschallungsanlagen auf und richten sie ein. Während einer
            Vorstellung oder eines Konzerts bedienen sie Mischpulte oder
            Nebelmaschinen. Im Schwerpunkt Aufbau und Organisation konzipieren
            sie Messestände oder Ausstellungsräume. Vor Ort koordinieren sie die
            unterschiedlichen Arbeitsgänge und -bereiche: So sorgen sie
            beispielsweise dafür, dass die Tischler/innen, die die Einrichtung
            aufbauen, und die Fachkräfte, die sich um die Elektrik kümmern,
            termingerecht zur Verfügung stehen. Außerdem bauen sie technische
            Ausstattung wie Beleuchtungs- und Tonanlagen auf.
          </Paragraph>
          <Paragraph>
            Die höheren Positionen der technischen Leitung von Theatern werden
            meist mit Ingenieuren besetzt. Ganz spezifisch kann man dieses Ziel
            mit dem BA und MA-Studium Theatertechnik an der Beuth-Hochschule für
            Technik Berlin anstreben. Das Bachelor-Studium dauert drei Jahre,
            das Master-Studium darauf aufbauend weitere 2 Jahre.
          </Paragraph>
        </Article>
      )}
    </>
  );
};

export const Tierphysiotherapie = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Animal physiotherapy ' : 'Tierphysiotherapie'} △
        </ArticleSubHeader>
        {props.eng ? (
          <AnimalPhysiotherapyEnglish />
        ) : (
          <Article>
            {' '}
            <Paragraph>
              Bei Physiotherapie denkt man zuerst wahrscheinlich vor allem an
              Menschen, die daran Bedarf haben könnten. Dass es aber auch
              Physiotherapie für Tiere, wie zum Beispiel für Pferde, Hunde und
              Kleintiere gibt, ist vielleicht manchem neu.
            </Paragraph>
            <Paragraph>
              Allgemeine Informationen zur Tierphysiotherapie, also
              beispielsweise ihre Entstehung und Verbreitung in Deutschland,
              finden sich hier:
            </Paragraph>
            <Link
              onPress={() => Linking.openURL('https://www.tiergestuetzte.org')}
            >
              www.tiergestuetzte.org
            </Link>
            <Paragraph>
              Tänzer/innen in Transition, die Tiere mögen,
              medizinisch-anatomisches Interesse haben und sich vorstellen
              können, als Tierphysiotherapeut/in tätig zu sein, sollten dieses
              Berufsfeld näher in Augenschein nehmen. Es bietet vielfältige
              Einsatzmöglichkeiten.
            </Paragraph>
            <Paragraph>
              Wie meist, geht es aber auch bei diesem relativ jungen Beruf nicht
              ohne spezifische Ausbildung, die in Deutschland bundesweit möglich
              ist.
            </Paragraph>
            <Paragraph>
              An dieser Stelle ein erstes Ausbildungsbeispiel: Jederzeit
              beginnen kann man an der ATM Akademie für Tierheilkunde eine
              24-monatige Ausbildung zum/r Tierphysiotherapeuten/in. Laut
              Informationen auf der ATM-Webseite sind zwei Ausbildungsaspekte
              wesentlich:
            </Paragraph>
            <Paragraph>
              - ein staatlich zugelassener Fernlehrgang in Anatomie, Physiologie
              und Krankheitslehre,
            </Paragraph>
            <Paragraph>
              begleitet von Seminaren und E-Learning Angeboten
            </Paragraph>
            <Paragraph>
              - ein spezifischer physiotherapeutischer Lehrgang aus Theorie und
              Praxis für die
            </Paragraph>
            <Paragraph>
              spezielle Schulung manueller Fähigkeiten der angehenden
              Therapeuten
            </Paragraph>
            <Paragraph>
              Die Kosten dieser Ausbildung betragen ca. 4.580,00 bis 5.980,00 €.
              Die Praktika werden in Bad Bramstedt absolviert, die theoretische
              Ausbildung läuft bundesweit an verschiedenen Standorten, von denen
              man einen wählen kann.
            </Paragraph>
            <Paragraph>
              Diese Ausbildung ist von der IHK zertifiziert.
            </Paragraph>
            <Paragraph>
              Ob eine Finanzierung über die Arbeitsagentur möglich wäre, sollte
              direkt erfragt werden (auf die Maßnahmenummer der Arbeitsagentur
              achten, siehe in Newsletter 02/2016).
            </Paragraph>
            <Paragraph>Weitere Infos:</Paragraph>
            <Link onPress={() => Linking.openURL('http://www.atm.de/')}>
              www.atm.de
            </Link>
            <Link
              onPress={() => Linking.openURL('http://www.atm.de/studiengang')}
            >
              www.atm.de/studiengang
            </Link>
          </Article>
        )}
      </TouchableOpacity>
    </>
  );
};

export const Tierwirt = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Animal farmer' : 'Tierwirt*in'}△
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <AnimalFarmerEnglish />
      ) : (
        <Article>
          <Paragraph>
            Fachrichtung Imkerei. Tierliebe, Interesse an Biologie und Ökologie,
            Freude an bewegungsintensiven Tätigkeiten im Freien,
            Verantwortungsbewusstsein, Belastbarkeit, selbständige und
            engagierte Arbeitsweise sind einige der wichtigsten Voraussetzungen,
            um generell Tierwirt*in sein zu können. Wer sich besonders für
            Bienen interessiert, kann sich zur/m Tierwirt*in für Imkerei
            spezialisieren. Sie arbeiten unter anderem in Imkereien, in
            Königinnenzucht- und Bestäubungsbetrieben oder sind in der
            ökologischen Landwirtschaft als Partner gefragt. Die Zahl der
            Imker*innen liegt bei ca. 120.000 Imker*innen, wobei der meiste
            Nachwuchs aus Bayern kommt. Die Imkerei erfreut sich zunehmender
            Beliebtheit, besonders in den Städten. Urbane Imkerei wird dort
            deshalb zwar oft sehr begeistert, aber meist als Hobby betrieben,
            was aufgrund fehlenden Fachwissens mit großen Risiken für die
            empfindlichen Bienenvölker verbunden ist. Die Professionalisierung
            der urbanen Bienenzucht durch spezialisierte Tierwirt*innen, die
            auch selbständig bzw. nebenberuflich tätig sein können, wäre deshalb
            sehr wünschenswert.
          </Paragraph>
          <Paragraph>
            Immerhin müssen 80% aller Kulturpflanzen durch Honigbienen bestäubt
            werden, um Früchte zu tragen „Imker leisten mit der Bienenhaltung
            [also] einen großen ökologischen Beitrag zur Bestäubung blühender
            Pflanzen und produzieren gleichzeitig ein hochwertiges
            Nahrungsmittel. Dazu füttern und pflegen sie die Bienenvölker,
            halten die Bienenunterkünfte instand und bestimmen einen passenden
            Standort für ihre Tiere. Sind die Honigwaben gefüllt, entnehmen sie
            diese und schleudern sie im Schleuderraum. Dabei achten sie auf
            Hygiene und Qualitätsstandards.“{' '}
          </Paragraph>
          <Paragraph>
            Die duale Ausbildung zur/m Tierwirt*in dauert in der Regel
            bundesweit drei Jahre und kann auf zwei Jahre verkürzt werden, wenn
            bereits eine abgeschlossene Berufsausbildung bzw. das Abitur
            vorliegt. Eine anerkannte staatliche Ausbildungsstätte in der
            Imkerei ist z.B. das niedersächsische Institut für Bienenkunde in
            Celle: www.laves.niedersachsen.deDETAILS zur Ausbildung als
            Tierwirt*in, Fachrichtung Imkerei bei der Landwirtschaftskammer
            unter:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.landwirtschaftskammer.de/bildung/tierwirt/einsteiger/'
              )
            }
          >
            www.landwirtschaftskammer.de/bildung/tierwirt/einsteiger/
          </Link>
        </Article>
      )}
    </>
  );
};

export const Trainee = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>Trainee △</ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <TraineeEnglish />
      ) : (
        <Article>
          <Paragraph>
            Bei unserer Beratungsarbeit fällt uns immer wieder auf, dass viele
            Tänzer*innen in Transition wenig oder gar nichts über Möglichkeiten
            wissen, wie man zeitlich befristet neue berufliche Praxiserfahrungen
            sammeln kann. Zum Beispiel als Trainee!
          </Paragraph>
          <Paragraph>
            Trainees sind in der Regel Hochschulabsolvent*innen, die innerhalb
            eines Unternehmens eine praktische Ausbildung in allen bzw.
            wichtigen Abteilungen erhalten und dadurch intensiv auf eine spätere
            Tätigkeit vorbereitet werden. Traineeprogramme laufen üblicherweise
            mindestens ein Jahr und längstens zwei Jahre, überwiegend in
            Vollzeit und werden entsprechend bezahlt. Sie sind deshalb sowohl
            inhaltlich, arbeitsrechtlich als auch finanziell nicht mit Praktika
            vergleichbar.
          </Paragraph>
          <Paragraph>
            Unternehmen, aber auch mehr und mehr Behörden bieten entsprechende
            Einstiegsprogramme für Absolvent*innen an, bei denen man sich zu
            einem High Potential mit Führungsverantwortung oder zum Spezialisten
            auf einem Gebiet entwickelt. Gleichzeitig knüpft man wichtige
            Kontakte und baut ein umfangreiches Netzwerk auf. Ausnahmen
            bestätigen dabei die Regel! Meist sind es Absolvent*innen, die mit
            einem Traineeprogramm den Einstieg wagen, doch auch mit
            Berufserfahrung oder als Quereinsteiger*in kann man als Trainee
            eingestellt werden. So wird man zum Beispiel bei der Bundesagentur
            für Arbeit innerhalb eines Traineeprogramms auf Aufgaben als
            Führungskraft vorbereitet:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.arbeitsagentur.de/ba-karriere/trainee-programm'
              )
            }
          >
            www.arbeitsagentur.de/ba-karriere/trainee-programm
          </Link>
          <Paragraph>DETAILS zu Traineeprogrammen generell unter:</Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('https://www.trainee.de/ratgeber/trainee/')
            }
          >
            www.trainee.de/ratgeber/trainee/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('https://www.berufsstart.de/trainee/')
            }
          >
            www.berufsstart.de/trainee/
          </Link>
          <Link onPress={() => Linking.openURL('https://www.connecticum.de/')}>
            www.connecticum.de/
          </Link>
        </Article>
      )}
    </>
  );
};

export const Versicherungsmakler = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Insurance broker' : 'Versicherungsmakler*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <InsuranceBrokerEnglish />
      ) : (
        <Article>
          <Paragraph>
            Wir hatten in unserem letzten Newsletter festgestellt, dass ein/e
            vertrauenswürdige/r und kompetente/r Versicherungsmakler/in für
            TänzerInnen und TänzerInnen in Transition von hoher Relevanz sein
            müsste, weil sie wegen des sehr spezifischen TänzerInnenberufs mit
            diversen Risiken auf alle Fälle gut versichert sein sollten. Heute
            informieren wir, wie angekündigt, über den sehr vielseitigen und
            anspruchsvollen Beruf des/der Versicherungsmakler/in:
          </Paragraph>
          <Paragraph>
            Versicherungsmakler sind KEINE Versicherungsvertreter, denn sie sind
            Kaufleute. Anders als Versicherungsvertreter, sind
            Versicherungsmakler an keine bestimmte Versicherungsgesellschaft
            gebunden. “Damit [sind sie ] ein absolut unabhängiger Partner. Er
            wird deshalb auch als „treuhänderischer Sachwalter” [von]
            Versicherungsinteressen bezeichnet.” Kommt der/die Makler/in aus der
            künstlerischen Branche, war vielleicht sogar selbst TänzerIn, dürfte
            das von großem Vorteil sein, weil sehr viel wichtiges
            Hintergrundwissen zum Tänzerberuf an sich und den Bedingungen der
            tänzerisch-künstlerischen Berufsausübung vorhanden ist, das Externe
            in dieser fundierten Art und Weise kaum vorweisen können. Hinzu
            kommt, dass die bei TänzerInnen in Transition überwiegend sehr hohe
            interkulturelle Kompetenz, also auch Mehrsprachigkeit, bereits
            vorhanden ist. Ein großer Vorteil, weil sich der Beruf des/der
            Versicherungsmaklers/in zunehmenden internationalisiert.
          </Paragraph>
          <Paragraph>
            Folgende Aufgaben gehören zum Beruf: Risikoanalyse/-optimierung und
            Bedarfsermittlung Vertragsgestaltung Dokumentation Betreuung und
            Verwaltung (einschließlich Begleitung bei Schäden)
          </Paragraph>
          <Paragraph>
            Der Beruf des/der Versicherungsmaklers/in ist in Deutschland
            aufgrund der sogenannten EU-Vermittlerrichtlinie seit 2007
            zulassungs- und registrierungspflichtig. Um als
            Versicherungsmakler/in tätig sein zu können, muss man also ganz
            bestimmte Voraussetzungen erfüllen. Dazu zählt auf alle Fälle ein
            Sachkundenachweis, der beispielsweise durch eine IHK-Prüfung zur/zum
            Versicherungsfachfrau/mann (IHK) erworben werden kann. Damit einher
            geht die Registrierung bei der örtlichen IHK, die für jede/n sein
            Gewerbe ausübenden Makler/in bindend ist und geprüft werden kann.
            Auch andere Qualifikationen sind als Nachweis der Sachkunde
            anerkannt, wie man beim Verband deutscher Versicherungsmakler e.V.
            (VDVM) nachlesen kann.
          </Paragraph>
          <Paragraph>
            Wo man aktuell eine entsprechende Ausbildung zu welchen Konditionen
            machen kann, erfährt man beispielsweise bei der örtlichen IHK (siehe
            dazu IHK-Artikel in diesem Newsletter). Wichtige Infos zum Beruf
            bekommt man auch bei den sogenannten Regionalkreisen des BDVM:
          </Paragraph>
          <Link onPress={() => Linking.openURL('https://bdvm.de/en/')}>
            www.bdvm.de
          </Link>
        </Article>
      )}
    </>
  );
};

export const Zirkuspaedagoge = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.close}>
        <ArticleSubHeader>
          {props.eng ? 'Circus educator' : 'Zirkuspädagog*in'} △
        </ArticleSubHeader>
      </TouchableOpacity>
      {props.eng ? (
        <CircusEducatorEnglish></CircusEducatorEnglish>
      ) : (
        <Article>
          <Paragraph>
            Aus Anlass der Gründung der Circus Akademie Berlin (CAB) Ende 2017,
            über die wir oben berichteten, machen wir an dieser Stelle auf das
            vielseitige Tätigkeitsfeld „Zirkuspädagogik“ aufmerksam.
          </Paragraph>
          <Paragraph>
            Die Zirkusdisziplinen Akrobatik, Trapez, Jonglage, Balance, Diabolo,
            Clownerie fördern als de facto Formen des Spiels in Kombination mit
            Musik, Tanz und Performance vielfältige kreative Körperarbeit,
            besseres Körperempfinden sowie konzeptionelles Denken. Darüber
            hinaus: Reflexion, Selbsterkenntnis und Zufriedenheit durch
            Aktivität und Freude im Austausch mit anderen. Da Zirkus ressourcen-
            und kompetenzorientiert altersunabhängige Kooperation, d.h.
            Gemeinschaft fördert, wirkt sich Zirkuspädagogik zusätzlich sehr
            günstig auf das Sozialverhalten und damit auf diverse Gruppengefüge
            aus. Zirkuspädagogische Angebote sind generell in der sozialen
            Arbeit mit Kindern, Jugendlichen, Senioren, Menschen mit
            Einschränkung (beispielsweise Autisten), für präventive Kurse im
            betrieblichen Gesundheitsmanagement (wie bei Haltungsproblemen,
            Stressbewältigungsstrategien), bei der Rehabilitation Verunfallter
            (Balance, Kraft, Reaktionsfähigkeit usw.) in der unternehmerischen
            Personalarbeit (u.a. Teambuilding-Maßnahmen, Führungstrainings,
            Konfliktbewältigung usw.) sowie bei der Arbeit mit traumatisierten
            Menschen (z.B. Flucht, sexualisierte Gewalt, Todeserfahrung)
            möglich. Zirkuspädagogik bereichert demnach nicht nur
            tanzpädagogische und theaterpädagogische Konzepte, sondern ist
            ebenso sehr gut mit weiteren Fachrichtungen kombinierbar (u.a.
            Sozialpädagogik, Rehabilitationspädagogik, Medizin,
            Heilerziehungspflege, Personalwesen). Deshalb ist sowohl eine
            festangestellte als auch eine freiberufliche Beschäftigung denkbar,
            wobei bei ausschließlich zirkuspädagogischem Ausbildungshintergrund
            wahrscheinlich die Freiberuflichkeit überwiegt.
          </Paragraph>
          <Paragraph>
            Die CAB bietet eine Vollzeit-Weiterbildung an, die neun Monate
            dauert, 1.200 h umfasst und lt. CAB momentan deutschlandweit die
            einzige zirkuspädagogische Vollzeit-Weiterbildung mit
            Zertifikatsabschluss „Geprüfte*r Zirkuspädagog*in“ ist. Sie richtet
            sich keineswegs nur an (ehemalige) Zirkusartist*innen und
            Tänzer*innen, sondern ebenso an (Tanz-) Pädagog*innen,
            Heilerziehungspfleger*innen, Lehrer*innen, Erzieher*innen,
            Sozialarbeiter*innen und alle ernsthaft an der Kunst- und
            Darstellungsform Zirkus/Varieté Interessierten. Folgende Kenntnisse
            sind für zukünftige Zirkuspädagog*innen wichtig und werden bei der
            CAB vermittelt:
          </Paragraph>
          <Paragraph>
            Zirkuspädagogische Praxis: Didaktik und Methodik in Trainings- und
            Unterrichtsaufbau, Spiele und Spielformen für Zirkustraining /
            Kommunikation: Grundlagen der Kommunikation, altersgerechtes
            Arbeiten, Entwicklungskommunikation / Künstlerisch-ästhetische
            Arbeitsprozesse: Geschichte der Artistik, Erarbeiten von
            Zirkusnummern mit Kindern, Präsentation einer Show, Schminken,
            Grundwissen Licht und Ton / Selbstständig als Zirkuspädadog*in:
            rechtliche Grundlagen der Selbständigkeit, Selbstorganisation /
            Trainingswissenschaft: Trainingslehre, Physiologie, Anatomie,
            Biomechanik
          </Paragraph>
          <Paragraph>Kosten: 8.500 € + DETAILS hier: </Paragraph>
          <Link onPress={() => Linking.openURL('http://circusakademie.de/')}>
            circusakademie.de/
          </Link>
          <Paragraph>
            Zirkuspädagogische Weiterbildungsangebote in Österreich und der
            Schweiz:{' '}
          </Paragraph>
          <Link
            onPress={() => Linking.openURL('https://www.zirkusakademie.ac.at')}
          >
            www.zirkusakademie.ac.at
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'http://www.zirkuspaedagogik.ch/akademie/index.php'
              )
            }
          >
            www.zirkuspaedagogik.ch/akademie/index.php
          </Link>
        </Article>
      )}
    </>
  );
};
