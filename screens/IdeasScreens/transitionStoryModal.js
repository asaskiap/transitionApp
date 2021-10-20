import React from 'react';

import {Modal, Image, View, Text, StyleSheet} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';

export const TransitionStoryLuisa = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Luisa Sansho</ArticleHeader>

        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/portrait3.jpg')}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>Immer Auf der Suche</Text>
            <Text style={styles.name}>Luisa Sansho Escanero</Text>
          </View>
        </View>
        <Article>
          <Paragraph>
            Um ihr Masterstudium abzuschließen, hatte sie sich ein halbes Jahr
            freigeschaufelt, mit Unterstützung des Theaters, an dem sie als
            Tänzerin engagiert war: Das Gehalt für ein halbes Jahr Arbeit wurde
            über ein ganzes gestreckt, war dann wenig, kam aber regelmäßig.
            Kostbare Zeit, um sich mal nur der Theaterwissenschaft und dem
            Einfluss der europäischen Theateravantgarde auf die spanische neue
            Dramaturgie zu widmen. Darüber schreibt Luisa Sancho Escanero ihre
            Masterarbeit. Es kam dann anders, Plan geändert, Studium verlängert;
            denn attraktive Arbeitsangebote flatterten ihr ins Haus. Darunter
            ein großes: die Nachfolge der berühmten Forsythe-Company unter der
            Leitung des Choreografen Jacopo Godani mit vorzubereiten und zu
            gestalten als Künstlerische Koordinatorin/Referentin des
            Künstlerischen Direktors der neuen Dresden Frankfurt Dance Company.
          </Paragraph>
          <Paragraph>
            Währenddessen sitzt sie in jeder freien Minute über Brecht, Arrabal,
            Beckett, Cage, über Tadeusz Kantor, Heiner Müller, Robert Wilson,
            über Semantik und Semiotik. Liest und schreibt. Sie absolviert ein
            Fernstudium an der Nationalen Fernuniversität von Spanien, UNED. Als
            sie am Staatstheater Mainz engagiert war, hatte sie nach
            Studiengängen gesucht. An einer deutschen Universität würde es wegen
            der Zugangsprüfungen für sie als Ausländerin zu lange dauern,
            stellte sie fest. Ein interessantes Programm fand sie in Barcelona,
            doch ist dessen Abschluss nicht europaweit anerkannt. Bei dem
            Fernstudium aber doch, und soeben war der Masterstudiengang in
            theoretischer und interkulturell vergleichender Theaterwissenschaft
            aufgelegt worden. „Wie für dich gemacht!“, sagten ihre Freunde.
          </Paragraph>
          <Paragraph>
            Zunächst war Luisa Escanero skeptisch, wie so etwas online
            funktionieren würde. „Am Anfang fühlst du dich total allein“, nach
            einer Weile kam sie gut zurecht mit der Eigenverantwortlichkeit. Der
            Kontakt zu den Dozenten läuft gut. In ihrem Fach unterrichten
            ausgewiesene Spezialisten. „Da hatte ich Glück“. Sie studiert jetzt
            sogar noch Philosophie dazu. Gute Tipps zum Weg in die akademische
            Welt bekam sie von der promovierten Dramaturgin der (ehemaligen)
            Forsythe-Company, wo sie phasenweise per Gastvertrag arbeitete. Nach
            dem Master möchte sie auch promovieren und am liebsten in die
            Forschung gehen; diese anstrengenden Studienjahre, „schön, aber viel
            Arbeit, halleluja“, haben den Wunsch nach mehr geweckt.
          </Paragraph>
          <Paragraph>
            „Ich wollte nie Assistentin eines Choreografen werden. Nein!“. In
            der Rolle sah sie sich einfach nicht. Aber Godani war der Richtige
            für ein „Ja“, sagt sie. Die zwei sind befreundet, sie führten schon,
            als sie noch Tänzerin war, lange Gespräche, und sie studiert seit
            einiger Zeit seine Werke bei Kompanien in aller Welt ein. Er bat sie
            nun um Mitarbeit, „im Studio und draußen“, an seinen Ideen für
            künstlerische Projekte. Aus dem Studium kann sie Themen einbringen,
            denn bei der konzeptionell-dramaturgischen Tätigkeit geht es auch um
            die sprachliche Vermittlung dessen, was der Choreograf im
            Ballettsaal erschafft, in seinem „Laboratorium“, wie sie es nennt.
          </Paragraph>
          <Paragraph>
            Als Luisa Escanero ihre Ballettausbildung abschloss, hatte sie nicht
            einmal Abitur. „Geht hinaus in die Welt.“, riet ihre berühmte
            Lehrerin María de Avila in Zaragoza den Absolventen. Das tat die
            junge Tänzerin. Als sie später mal zwei Jahre lang in Spanien
            arbeitete, holte sie in sechs Monaten die Abiturprüfungen nach,
            gemäß einem speziellen Programm für Berufstätige über 25. Sie war 26
            und probierte gleich das Studieren aus: Anglistik. „Ich war
            überrascht. Wow, das geht ja“. Sie habe immer viel gelesen. Dazu
            kam, ums Jahr 2000 herum, als künstlerische Studiengänge den anderen
            angepasst wurden und den Hochschulen plötzlich Lehrer fehlten, dass
            die alte siebenjährige Ballettausbildung als adäquat anerkannt
            wurde. Luisa Escanero legte dann als erste Tänzerin in Spanien eine
            Prüfung ab, die, kombiniert mit ihrer Berufserfahrung, als
            Studienabschluss und Lehrbefähigung galt. Als sie 2010, mit 35
            Jahren, das Masterstudium begann, war ihre Überlegung: „Ich kann
            noch etwa fünf Jahre tanzen, aber ich glaube, ich möchte weiter
            studieren.“
          </Paragraph>
          <Paragraph>
            Doch im Jahr 2011 erhöhte die neue Regierung in Spanien die
            Studiengebühren um 70 Prozent. Dafür reichte ihr Mainzer Gehalt
            nicht mehr. Für spanische Stipendien, recherchierte sie, war sie zu
            alt und zu berufstätig. In Deutschland fand sie die Stiftung TANZ.
            Eine Freundin half ihr mit den Belegen, Bescheinigungen, Rechnungen
            für den Stipendiumsantrag. Dreimal insgesamt bekam sie die
            Unterstützung von der Stiftung. „Das war die Lösung, genau der
            richtige Tropfen im richtigen Moment“. Selber aktiv sein, nicht
            erwarten, dass jemand anderes für einen den Weg findet, das sei seit
            jeher ihre Losung, sagt Luisa Sancho Escanero. Nicht klein beigeben.
            „Es war kein ruhiger Übergang“, aber sie wolle nicht jammern: „Es
            war ja meine Entscheidung“.
          </Paragraph>
          <Paragraph>
            Sie kennt Kollegen und Kolleginnen, die 15 bis 20 Jahre in derselben
            Kompanie bleiben. Anders als diese ist sie neue Schritte gewohnt.
            „Ich habe in zehn Kompanien in acht Ländern in Europa getanzt,
            daneben auch in freien Projekten“. Leeds, Biarritz, Zürich, Berlin,
            Madrid, Arnheim, Köln, Mainz. „Ich weiß, ich habe Handwerk, Technik
            war nie ein Problem“. Doch an einem Haus die Hierarchiestufen
            hochzuklettern, war von Anfang an nicht ihr Ding, und „das
            Drumherum“ in den Institutionen setzte ihr zu, der Umgangston. „Ich
            war immer auf der Suche“, fasst sie die Wechsel zusammen, „nach
            jemandem oder etwas“. Ein Gefühl, dass es „etwas anderes“ sein
            sollte oder etwas, das sie sich selber gern auf der Bühne anschauen
            würde. Diese vielen Schritte auf ihrem Karriereweg möchte sie
            letztlich auch nicht missen: „Das hält einen am Leben, sich selber
            neuen Situationen auszusetzen“.
          </Paragraph>
          <Paragraph>
            Etwas vom Alten, Gewohnten nimmt sie sich dabei jetzt wieder zur
            Hilfe: das tägliche Balletttraining. Das habe sie in dem Jahr nach
            dem Mainzer Engagement vermisst. Die wichtige Tänzereigenschaft, die
            sie in die nächste Lebensphase mitbringt, nennt sie „stubbornness“,
            Hartnäckigkeit, dazu „Disziplin, viel Disziplin“. Es gebe da etwas
            in der Mentalität von Tänzern und Choreografen im Umgang mit
            Prozessen: nicht aufzuhören, bei der Kreation, beim Suchen oder
            Üben, bis etwas vollendet ist, „determination“.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export const TransitionStoryMichal = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Michal Fatura</ArticleHeader>

        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/portrait.jpg')}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>Ich will in Berlin bleiben</Text>
            <Text style={styles.name}>Michal Fatura</Text>
          </View>
        </View>
        <Article>
          <Paragraph>
            Als Michal Fatura gleich mehrere Stellenangebote der renommiertesten
            Werbeagenturen weit und breit bekommt, entscheidet er sich, nicht
            umzuziehen. „Berlin ist mein Zuhause“. Acht Jahre vorher war der
            Slowake hergekommen, um in einer großen deutschen Ballettkompanie zu
            tanzen. Seit kurzem, seit April 2015, ist er Junior Art Director.
            „Ich freue mich jeden Tag, zur Arbeit zu gehen.“ Er fängt dort von
            vorn an, von unten; bis zum Senior Director sind noch ein paar
            Stufen zu erklimmen. Hierarchien kennt er aus der Theaterwelt. Das
            sei einer seiner Pluspunkte, sagt er. Mit seinen dreißig Jahren hat
            er bereits eine Menge Erfahrung. Sie hat seine potenziellen neuen
            Arbeitgeber, die ihn zum Vorstellungsgespräch geladen hatten,
            beeindruckt: Der hat ja schon eine Karriere!
          </Paragraph>
          <Paragraph>
            Hart erarbeitet. Mit zehn Jahren begann er in seiner Heimatstadt
            Žilina auf eigenen Wunsch mit Ballettunterricht in einer privaten
            Tanzschule. Als er vierzehn war, riet ihm die Lehrerin, aufs
            Konservatorium mit Internat in Košice zu wechseln. Er wollte
            eigentlich zum Wirtschaftsgymnasium, aber versuchte es mit Ballett,
            wurde sogar gleich in die zweite Klasse aufgenommen. „Das war zu
            viel, aber ich wollte es so sehr, dass ich es geschafft habe.“
            Häufig hörte er, er habe zu spät mit Profiunterricht begonnen, um
            Ballett zum Beruf zu machen. Dieses „zu spät“ lässt den jungen Mann
            jahrelang an sich zweifeln, treibt ihn an zum Lernen, Trainieren,
            Arbeiten, „immer mehr, immer mehr“.
          </Paragraph>
          <Paragraph>
            Er schaffte den Wechsel zur Ballettakademie in Bratislava.
            Abschlussnote 1. Danach wollte er weg, dahin, wo ihn niemand als
            „Späten“ kannte. Er bekam ein Engagement in Prag. „Eine
            Bestätigung“, sagt er, ein Ansporn, viel zu trainieren, auch
            sonntags, allein im Ballettsaal. Es waren gute Jahre, sagt Michal
            Fatura. Doch als bessere Rollen für ihn dran waren, musste er wegen
            einer Stressfraktur einige Wochen aussetzen; kurz danach fuhr er
            nach Berlin zu einer Audition, „Ich riskiere das“. Er wurde
            angenommen. Deutschland war sein Ziel gewesen, das Bayerische
            Staatsballett. Jetzt war es eben das Berliner.
          </Paragraph>
          <Paragraph>
            Gruppentänzer zu sein, fand er in Ordnung, „weil ich so
            selbstkritisch bin“. Es lief gut. Bis ein gebrochener Fuß ihn ein
            halbes Jahr rauswarf. „Mein Leben war leer“, denn das Leben fand ja
            nur im Theater und unter Kollegen statt. Er begann, diese
            Ausschließlichkeit in Frage zu stellen. Bei der Rückkehr ins Ballett
            bekam er weniger anspruchsvolle Partien zu tanzen, das Repertoire
            veränderte sich, die Stimmung im Ensemble sackte. Er litt und fand
            keine Kraft zum Weggehen. Dann wurde sein Vertrag nicht verlängert.
            „Eine große Enttäuschung. Es tat weh, aber es war auch das Beste,
            was mir passieren konnte.“
          </Paragraph>
          <Paragraph>
            Der 28-Jährige entschied: „Ich will in Berlin bleiben“. In eine
            andere Kompanie? Beim Friedrichstadtpalast schaffte er es ins
            Finale, gab dann die Hoffnung auf einen Ballettneuanfang auf und
            schaute sich anderweitig um. Er fragte einen Freund aus, der in der
            Werbebranche arbeitete. Das hörte sich gut an, denn schöne Dinge,
            das Optische und auch Humorvolle mochte Michal Fatura schon immer.
            Also sammelte er Tipps, suchte Schulen, fand eine Fashion Academy zu
            reglementiert und begeisterte sich für die internationale,
            bilinguale Miami Ad School in Berlin. Er bastelte eine Bewerbung,
            über die er heute lächelt, und fing zehn Tage nach dem Spielzeitende
            dort an.
          </Paragraph>
          <Paragraph>
            Die zweijährige Schule war teuer. Mit der Berechtigung auf
            Umschulung wegen des Arbeitsunfalls, mit der ausgezahlten Abfindung
            von der Versorgungsanstalt der deutschen Bühnen, der sogenannten
            ‚Bayerischen’, ein bisschen Geld von den Eltern, dazu die halbierte
            Miete, würde es klappen, dachte er. Doch die Beziehung, die
            Letzteres garantierte, hielt nicht, und mit der Agentur für Arbeit
            verhandelte er ein Jahr lang über die Ausbildung, da seine Schule
            nicht auf der Liste geförderter Institutionen stand und deren
            durchschnittliche Tageskosten angeblich zu hoch waren. Im fehlte
            zwar nur noch Geld fürs zweite Jahr, das Argument zog aber nicht. Er
            gab auf.
          </Paragraph>
          <Paragraph>
            Ein Schulquartal setzte er aus. Um dann Arbeitslosengeld zu
            beziehen, fehlten ihm 20 Tage zu den erforderlichen 12 Monaten
            Arbeit während zweier Jahre. „So ein Pech!“ Bei der Stiftung Tanz
            war er einmal gewesen, aber er wusste ja, welche Ausbildung er
            wollte. „Ich habe nicht weit genug gedacht“. Jetzt ging er wieder
            hin. „Das ist meine letzte Chance.“ Er führte lange Gespräche und
            bekam finanzielle Unterstützung. Inzwischen jobbte er ab und zu beim
            Deutschen Fernsehballett. Weil er sich aus dem Bedürfnis nach
            Bewegung mit Sport fit gehalten hatte, war er schnell wieder in Form
            dafür. „Es war schön, wieder auf der Bühne zu stehen“. Dass es Spaß
            machte, fühlte sich neu an. Keine leichte Arbeit, kurze Probenzeiten
            und viel Reisen, aber er mochte die Atmosphäre.
          </Paragraph>
          <Paragraph>
            Die Schule war für Fatura „ein 24/7-Studium“. Die Kommilitonen
            konnten schon mit bestimmten Computerprogrammen umgehen, er nicht.
            „Da kam wieder dieses: Ich will!“ Er lacht. Abendelang arbeitete er
            sich durch Aufgaben, für die er heute nur noch eine Stunde bräuchte.
            Nach dem ersten Jahr, in dem Creative Directors großer Agenturen in
            der Schule Unterricht gaben, folgten Praktika in Agenturen in
            Peking, Prag, Berlin, dann das Bewerbungsportfolio. Der Abschluss.
            Mit ihm könnte er in diversen Bereichen arbeiten, doch er wollte
            zuerst „den klassischen Weg gehen“ und bewarb sich bei großen
            Werbeagenturen. Mehrere wollten ihn. Also Berlin!
          </Paragraph>
          <Paragraph>
            „Die Transformation vom Tänzer zum Art Director“, dafür stehe das
            Bewerbungsbuch, in das er Photos und Sätze einfügte darüber, was er
            aus seinem Ballettleben mitbringt in den nächsten Beruf. Seite eins:
            der Blick von einer leeren Bühne in einen Zuschauerraum. Etwas geht
            zu Ende. Auf der letzten Seite dasselbe Photo als Bildschirmschoner:
            „the new chapter starts now“. Dazwischen Statements über Disziplin,
            Selbstkritik, Teamarbeit. Fürs Thema Kreativität wählte er das Foto
            von Theaterperücken auf Holzköpfen. „About characters“, titelte er
            dazu. „Jede Marke, jeder Kunde hat einen anderen Charakter, es ist
            ganz unterschiedlich, was er jeweils braucht, welches Aussehen, und
            was für einen mood er ausdrücken will“, erklärt Fatura. „Wie beim
            Tanzen: In eine Rolle zu steigen, das hilft bei der Interpretation.
            Und bei der Kreativität.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export const TransitionStoryLenhart = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Hans-Georg Lenhart</ArticleHeader>

        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/portrait2.jpg')}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>Versuchung</Text>
            <Text style={styles.name}>Hans-Georg Lenhart</Text>
          </View>
        </View>
        <Article>
          <Paragraph>
            Für den Tanz entdeckt wurde der dreizehnjährige Hans-Georg auf einer
            Disco-Tanzfläche von seiner eigenen Mutter. Sie sah, wie ihr Sohn
            sich kreativ und frei zur Musik bewegte und ermunterte ihn, doch mal
            in den Jazzgymnastikkurs der Volkshochschule mitzukommen. „Da war
            ich der einzige Teenager unter lauter Hausfrauen“. Diese VHS in
            Duisburg samt ihrer internationalen Tanzworkshops in den Ferien „war
            mein Tor zur Tanzwelt“, zum Modernen Tanz, sagt Hans-Georg Lenhart
            heute. Dreißig Jahre später schob er das Tor langsam wieder zu und
            öffnete gleichzeitig neue.
          </Paragraph>
          <Paragraph>
            Nach der Mittleren Reife hatte er damals nur ungefähre
            Berufswünsche. Seine Tanzlehrerin, ausgebildet an der
            Folkwanghochschule in Essen, riet ihm, dort vorzutanzen. Mit
            siebzehn bestand er die Aufnahmeprüfung und hatte keine große
            Vorstellung davon, was darauf folgen würde. Es packte ihn: „Ich war
            auf dem Tanztrip“. Schon während des dritten Studienjahres durfte er
            beim Wuppertaler Tanztheater in „Das Frühlingsopfer / Le Sacre du
            Printemps“ von Pina Bausch mittanzen. Eine Ehre und „einzigartige
            Erfahrung“. Inspirierend fand er auch seine Lehrer und eine Menge
            Mitstudenten, Tänzer wie Rainer Behr, Christiana Morganti, Bernd
            Marszan, Ruth Amarante und spätere Choreographen wie Urs Dietrich,
            Livia Patrizi, Gregor Zöllig, Joachim Schlömer. Nach dem Abschluss
            1989 ging er nach Brüssel, tanzte dort zwei Jahre projektweise bei
            der Mark Morris Dance Group an der Oper La Monnaie und in freien
            Projekten, auch in denen von Schlömer. Als dieser die Leitung der
            Tanzsparte am Theater Ulm übernahm, ging Lenhart mit.
          </Paragraph>
          <Paragraph>
            Neben Engagements in freien Produktionen in den Niederlanden und in
            Deutschland choreografierte Hans-Georg Lenhart eigene Stücke. Er
            fand die Arbeit zäh und verzweifelte an der Aufgabe Produzent,
            Manager und Künstler gleichzeitig sein zu müssen. „Nicht meins“. Er
            könne am besten aus der zweiten Reihe jemandem zuarbeiten, sagt er.
            2001 zog er aus privaten Gründen weiter nach Südfrankreich,
            verdiente mit Tangounterricht und einer Milonga etwas Geld und
            pendelte zu Kurzengagements nach Deutschland und England. Auch zu
            Peter Sellars‘ „Idomeneo“ in Glyndebourne 2003. Mark Morris
            choreografierte, Dirigent war Sir Simon Rattle. Der gab dem Tänzer
            Lenhart auf der Bühne das Gefühl zu fliegen: „Ich hatte das Gefühl
            von grenzenloser tänzerischer Freiheit, Rattle folgte mir, fing mich
            auf, war immer da.“ Einige Tage später brach ihm bei einem
            Motorradunfall der Knöchel. Das Ende vom Tanz?
          </Paragraph>
          <Paragraph>
            Nein. Er tanzte weiter, aber „das war Murks.“ Eine grundsätzlich
            Entscheidung stand an, die aber brauchte Zeit und eine Rückkehr nach
            Deutschland. 2006 zog Lenhart nach Berlin, fasste aber kaum Fuß in
            der Tanzszene. „Der Körper war angeschlagen, irgendwann wollte der
            Kopf auch nicht mehr“. Er überlegte, wie seine zweite Karriere
            aussehen könnte. „Ich bin ja nur Tänzer, sonst kann ich nix.“ Von
            der Blockade musste er sich lösen. Mit dem Schmerzensgeld, das die
            Versicherung nach dem Unfall zahlte, machte er eine
            Massageausbildung. Das Massieren machte ihm Freude. „In der
            Ausbildung habe ich meine Vorteile ausgespielt: Ich kann gut
            abschauen, Leute nachmachen, kann mir Sequenzen merken, habe keine
            Angst vor Kontakt.“ Lenhart arbeitet seitdem als freiberuflicher
            Masseur in einem Health-Club.
          </Paragraph>
          <Paragraph>
            Er dachte bald, „ich mache ja nur Wellness, aber ich will mehr“,
            nämlich helfen. Doch er schreckte vor der berüchtigt schwierigen
            Heilpraktiker-Amtsarztprüfung und dem vielen Lernen zurück, denn die
            Schulzeit war lange her. Erst als eine Tänzerin ihm sagte: „Etwas
            Neues lernen, das ist doch nicht viel anders, als jeden Tag an der
            Stange zu stehen: offen bleiben, sich immer wieder überprüfen“. Da
            meldete er sich bei einer Schule an, schaffte ein Jahr später die
            Prüfung beim Amtsarzt und konnte sich nun, als Heilpraktiker, bei
            der Osteopathieschule Deutschland einschreiben. Osteopathie
            faszinierte ihn, seit er in seinem ersten Folkwang-Studienjahr eine
            nachdrückliche Erfahrung mit einem Osteopathen gemacht hatte. Später
            begleitete sie ihn durch seine gesamte Karriere.
          </Paragraph>
          <Paragraph>
            Das vierjährige Teilzeit-Bachelor-Studium in Berlin kostet aber
            Geld; er klopfte also bei der Stiftung Tanz an. Sie wies ihn hin auf
            die Käthe Dorsch Stiftung, die ihm eine einmalige Unterstützung
            gewährte. Ein wenig später fand er ein weiteres Stipendium, das ihn
            seit seinem zweiten Studienjahr unterstützt. Von der Stiftung Tanz
            konnte er, als er Vater wurde und die Verlängerung seiner
            Unterstützung unsicher war, ein einmaliges Stipendium bekommen.
            Seinen Bachelor hat er demnächst abgeschlossen; der Master folgt
            noch. 2017 wird Lenhart fertig sein, „dann bin ich 50, das passt
            doch“. All das bewältigt er momentan neben der Arbeit im
            Fitnesscenter. Um flexiblere Behandlungszeiten vereinbaren zu
            können, hat er sich zusätzlich in einer Naturheilpraxis eingemietet.
          </Paragraph>
          <Paragraph>
            Seit 2010 ist er außerdem Regieassistent bei Peter Sellars für
            Inszenierungen mit den Berliner Philharmonikern unter der Leitung
            von Sir Simon Rattle. Es begann mit der „Matthäuspassion“. Als
            Sellars ihn auch auf der Bühne besetzen wollte, als Christus, sagte
            er Nein. „The last temptation of Hans-Georg Lenhart“, lacht er. In
            der Theaterarbeit die Seite zu wechseln war ein logischer
            Entwicklungsschritt. Den Tanz vermisse er gar nicht, ebensowenig,
            sich Stücke anzusehen. „Was ich geliebt habe, war nicht nur der
            Arbeitsprozess, sondern vor allem das gemeinsame Tanzen, wenn Tanz
            und Musik verschmelzen, dieser besondere Moment, wenn alles Eins
            wird.“ Wo bleibt diese Liebe in dem neuen Beruf? „Ein Osteopath ist
            nicht alleine, er hat immer ein Gegenüber; das Gewebe des Patienten,
            mit dem man arbeitet und in gewisser Hinsicht auch tanzt.“
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 10},
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    margin: 16,
    marginLeft: 20
  },
  header: {marginRight: 20, maxWidth: '60%'},
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: colors.accentDark,
    borderBottomColor: colors.accentDark,
    borderBottomWidth: 2,
    marginLeft: -20
  },
  name: {
    color: colors.text,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    padding: 20,
    fontSize: 16,
    backgroundColor: colors.secondaryLight
  }
});
