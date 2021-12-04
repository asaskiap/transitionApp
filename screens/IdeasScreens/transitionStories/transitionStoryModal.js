import React from 'react';

import {Modal, Image, View, Text, StyleSheet} from 'react-native';
import ArticleHeader from '../../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import colors from '../../../assets/colors';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';
import {ArticleBy} from '../../../components/littleTextComponents';

const Luisa_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Um ihr Masterstudium abzuschließen, hatte sie sich ein halbes Jahr
        freigeschaufelt, mit Unterstützung des Theaters, an dem sie als Tänzerin
        engagiert war: Das Gehalt für ein halbes Jahr Arbeit wurde über ein
        ganzes gestreckt, war dann wenig, kam aber regelmäßig. Kostbare Zeit, um
        sich mal nur der Theaterwissenschaft und dem Einfluss der europäischen
        Theateravantgarde auf die spanische neue Dramaturgie zu widmen. Darüber
        schreibt Luisa Sancho Escanero ihre Masterarbeit. Es kam dann anders,
        Plan geändert, Studium verlängert; denn attraktive Arbeitsangebote
        flatterten ihr ins Haus. Darunter ein großes: die Nachfolge der
        berühmten Forsythe-Company unter der Leitung des Choreografen Jacopo
        Godani mit vorzubereiten und zu gestalten als Künstlerische
        Koordinatorin/Referentin des Künstlerischen Direktors der neuen Dresden
        Frankfurt Dance Company.
      </Paragraph>
      <Paragraph>
        Währenddessen sitzt sie in jeder freien Minute über Brecht, Arrabal,
        Beckett, Cage, über Tadeusz Kantor, Heiner Müller, Robert Wilson, über
        Semantik und Semiotik. Liest und schreibt. Sie absolviert ein
        Fernstudium an der Nationalen Fernuniversität von Spanien, UNED. Als sie
        am Staatstheater Mainz engagiert war, hatte sie nach Studiengängen
        gesucht. An einer deutschen Universität würde es wegen der
        Zugangsprüfungen für sie als Ausländerin zu lange dauern, stellte sie
        fest. Ein interessantes Programm fand sie in Barcelona, doch ist dessen
        Abschluss nicht europaweit anerkannt. Bei dem Fernstudium aber doch, und
        soeben war der Masterstudiengang in theoretischer und interkulturell
        vergleichender Theaterwissenschaft aufgelegt worden. „Wie für dich
        gemacht!“, sagten ihre Freunde.
      </Paragraph>
      <Paragraph>
        Zunächst war Luisa Escanero skeptisch, wie so etwas online funktionieren
        würde. „Am Anfang fühlst du dich total allein“, nach einer Weile kam sie
        gut zurecht mit der Eigenverantwortlichkeit. Der Kontakt zu den Dozenten
        läuft gut. In ihrem Fach unterrichten ausgewiesene Spezialisten. „Da
        hatte ich Glück“. Sie studiert jetzt sogar noch Philosophie dazu. Gute
        Tipps zum Weg in die akademische Welt bekam sie von der promovierten
        Dramaturgin der (ehemaligen) Forsythe-Company, wo sie phasenweise per
        Gastvertrag arbeitete. Nach dem Master möchte sie auch promovieren und
        am liebsten in die Forschung gehen; diese anstrengenden Studienjahre,
        „schön, aber viel Arbeit, halleluja“, haben den Wunsch nach mehr
        geweckt.
      </Paragraph>
      <Paragraph>
        „Ich wollte nie Assistentin eines Choreografen werden. Nein!“. In der
        Rolle sah sie sich einfach nicht. Aber Godani war der Richtige für ein
        „Ja“, sagt sie. Die zwei sind befreundet, sie führten schon, als sie
        noch Tänzerin war, lange Gespräche, und sie studiert seit einiger Zeit
        seine Werke bei Kompanien in aller Welt ein. Er bat sie nun um
        Mitarbeit, „im Studio und draußen“, an seinen Ideen für künstlerische
        Projekte. Aus dem Studium kann sie Themen einbringen, denn bei der
        konzeptionell-dramaturgischen Tätigkeit geht es auch um die sprachliche
        Vermittlung dessen, was der Choreograf im Ballettsaal erschafft, in
        seinem „Laboratorium“, wie sie es nennt.
      </Paragraph>
      <Paragraph>
        Als Luisa Escanero ihre Ballettausbildung abschloss, hatte sie nicht
        einmal Abitur. „Geht hinaus in die Welt.“, riet ihre berühmte Lehrerin
        María de Avila in Zaragoza den Absolventen. Das tat die junge Tänzerin.
        Als sie später mal zwei Jahre lang in Spanien arbeitete, holte sie in
        sechs Monaten die Abiturprüfungen nach, gemäß einem speziellen Programm
        für Berufstätige über 25. Sie war 26 und probierte gleich das Studieren
        aus: Anglistik. „Ich war überrascht. Wow, das geht ja“. Sie habe immer
        viel gelesen. Dazu kam, ums Jahr 2000 herum, als künstlerische
        Studiengänge den anderen angepasst wurden und den Hochschulen plötzlich
        Lehrer fehlten, dass die alte siebenjährige Ballettausbildung als
        adäquat anerkannt wurde. Luisa Escanero legte dann als erste Tänzerin in
        Spanien eine Prüfung ab, die, kombiniert mit ihrer Berufserfahrung, als
        Studienabschluss und Lehrbefähigung galt. Als sie 2010, mit 35 Jahren,
        das Masterstudium begann, war ihre Überlegung: „Ich kann noch etwa fünf
        Jahre tanzen, aber ich glaube, ich möchte weiter studieren.“
      </Paragraph>
      <Paragraph>
        Doch im Jahr 2011 erhöhte die neue Regierung in Spanien die
        Studiengebühren um 70 Prozent. Dafür reichte ihr Mainzer Gehalt nicht
        mehr. Für spanische Stipendien, recherchierte sie, war sie zu alt und zu
        berufstätig. In Deutschland fand sie die Stiftung TANZ. Eine Freundin
        half ihr mit den Belegen, Bescheinigungen, Rechnungen für den
        Stipendiumsantrag. Dreimal insgesamt bekam sie die Unterstützung von der
        Stiftung. „Das war die Lösung, genau der richtige Tropfen im richtigen
        Moment“. Selber aktiv sein, nicht erwarten, dass jemand anderes für
        einen den Weg findet, das sei seit jeher ihre Losung, sagt Luisa Sancho
        Escanero. Nicht klein beigeben. „Es war kein ruhiger Übergang“, aber sie
        wolle nicht jammern: „Es war ja meine Entscheidung“.
      </Paragraph>
      <Paragraph>
        Sie kennt Kollegen und Kolleginnen, die 15 bis 20 Jahre in derselben
        Kompanie bleiben. Anders als diese ist sie neue Schritte gewohnt. „Ich
        habe in zehn Kompanien in acht Ländern in Europa getanzt, daneben auch
        in freien Projekten“. Leeds, Biarritz, Zürich, Berlin, Madrid, Arnheim,
        Köln, Mainz. „Ich weiß, ich habe Handwerk, Technik war nie ein Problem“.
        Doch an einem Haus die Hierarchiestufen hochzuklettern, war von Anfang
        an nicht ihr Ding, und „das Drumherum“ in den Institutionen setzte ihr
        zu, der Umgangston. „Ich war immer auf der Suche“, fasst sie die Wechsel
        zusammen, „nach jemandem oder etwas“. Ein Gefühl, dass es „etwas
        anderes“ sein sollte oder etwas, das sie sich selber gern auf der Bühne
        anschauen würde. Diese vielen Schritte auf ihrem Karriereweg möchte sie
        letztlich auch nicht missen: „Das hält einen am Leben, sich selber neuen
        Situationen auszusetzen“.
      </Paragraph>
      <Paragraph>
        Etwas vom Alten, Gewohnten nimmt sie sich dabei jetzt wieder zur Hilfe:
        das tägliche Balletttraining. Das habe sie in dem Jahr nach dem Mainzer
        Engagement vermisst. Die wichtige Tänzereigenschaft, die sie in die
        nächste Lebensphase mitbringt, nennt sie „stubbornness“, Hartnäckigkeit,
        dazu „Disziplin, viel Disziplin“. Es gebe da etwas in der Mentalität von
        Tänzern und Choreografen im Umgang mit Prozessen: nicht aufzuhören, bei
        der Kreation, beim Suchen oder Üben, bis etwas vollendet ist,
        „determination“.
      </Paragraph>
    </Article>
  );
};
const Luisa_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        To complete her master's degree, she had shoveled half a year off, with
        the support of the theater where she was engaged as a dancer: the salary
        for half a year's work was stretched over a whole one, was then little,
        but came regularly. Precious time to devote to theater studies and the
        influence of the European theater avant-garde on the Spanish new
        dramaturgy. Luisa Sancho Escanero is writing her master's thesis on
        this. Things turned out differently, so she changed her plans and
        extended her studies, because attractive job offers started coming her
        way. One of them was a big one: to help prepare and shape the successor
        to the famous Forsythe Company under the direction of choreographer
        Jacopo Godani as assistant, dramaturge and artistic coordinator. October
        2015 is the first premiere of the Frankfurt-Dresden Dance Company.
      </Paragraph>
      <Paragraph>
        Meanwhile she sits in every free minute over Brecht, Arrabal, Beckett,
        Cage, over Tadeusz Kantor, Heiner Müller, Robert Wilson, over semantics
        and semiotics. She reads and writes. She completes a correspondence
        course, at the National Distance University of Spain, UNED. When she was
        engaged at the Staatstheater Mainz, she had been looking for courses of
        study. At a German university it would take too long for her as a
        foreigner because of the entrance exams, she realized. She found an
        interesting program in Barcelona, but its degree is not recognized
        throughout Europe. With the distance learning program, however, it was,
        and the master's in theoretical and intercultural comparative theater
        studies had just been launched. "How made for you!" her friends said.{' '}
      </Paragraph>
      <Paragraph>
        At first, Luisa Escanero was skeptical about how something like this
        would work online. "At first you feel totally alone," but after a while
        she got along well with the personal responsibility. The contact with
        the lecturers goes well. In her subject, proven specialists teach. "I
        was lucky there." She is now even studying philosophy in addition. She
        got good tips on her way into the academic world from the dramaturg with
        a doctorate from the (former) Forsythe Company, where she worked in
        phases on a guest contract. After her master's, she, too, wants to get
        her PhD and preferably go into research; those exhausting years of
        study, "nice, but a lot of work, hallelujah," made her want to do more.{' '}
      </Paragraph>
      <Paragraph>
        "I never wanted to be a choreographer's assistant. No!". She just didn't
        see herself in that role. But Godani was the right person to say yes,
        she says. The two are friends, they had long conversations when she was
        still a dancer, and she has been studying his work with companies around
        the world for some time. He now asked her to collaborate, "in the studio
        and out," on his ideas for artistic projects. From her studies, she can
        bring in themes. After all, the conceptual-dramaturgical work is also
        about the linguistic communication of what he creates in the ballet
        hall, in his "laboratory," as she calls it.
      </Paragraph>
      <Paragraph>
        When Luisa Escanero completed her ballet training, she didn't even have
        a high school diploma. Go out into the world, her famous teacher María
        de Avila in Zaragoza advised graduates. This is what the young dancer
        did. Later, when she worked in Spain for two years, she caught up on her
        high school exams in six months, according to a special system for
        professionals over 25. She was 26 and immediately tried studying:
        English studies. "I was surprised. Wow, you can do that." She had always
        read a lot. In addition, around the year 2000, when artistic courses of
        study were adapted to the others and the universities suddenly lacked
        teachers, the old seven-year ballet training was recognized as adequate.
        Luisa Escanero was the first dancer in Spain to pass an exam that, along
        with her professional experience, was considered a degree and teaching
        qualification. When she began her master's degree in 2010, at age 35,
        her thinking was, "I can dance for another five years or so, but I think
        I want to keep studying."
      </Paragraph>
      <Paragraph>
        But in 2011, the new government in Spain raised tuition by 70 percent.
        Her Mainz salary was no longer enough for that. For Spanish
        scholarships, she researched, she was too old and too busy working. In
        Germany, she found the Tanz Foundation. A friend helped her with the
        receipts, certificates, invoices for the scholarship application. Three
        times in total she got the support from the foundation. "That was the
        solution, just the right drop at the right moment". Be active yourself,
        don't expect someone else to find the way for you, that has always been
        her slogan, says Luisa Escanero. Not backing down. "It wasn't a smooth
        transition," but she doesn't want to complain: "It was my decision.
      </Paragraph>
      <Paragraph>
        She knows colleagues who stay in the same company for 15 to 20 years.
        Unlike them, she is used to new steps. "I have danced in ten companies
        in eight countries in Europe, in addition to free projects". Leeds,
        Biarritz, Zurich, Berlin, Madrid, Arnhem, Cologne, Mainz. "I know I have
        craft, technique has never been a problem". But climbing the hierarchy
        levels at a house was not her thing from the beginning, and "the
        trappings" in the institutions got to her, the tone. "I was always
        looking," she sums up the changes, "for someone or something." A feeling
        that it should be "something different" or something she herself would
        like to see. At this point, she mentions William Forsythe, whose
        choreographies were rarely danced by companies outside of Frankfurt in
        the 1990s. Unlike today. She would have loved to dance with him all too
        much; that came much later. "He's the master of 'failure, better
        failure,'" she reflects, quoting Beckett. "That keeps you alive,
        exposing yourself to new situations."{' '}
      </Paragraph>
      <Paragraph>
        She takes something from the old to help her, daily ballet training:
        "exercise." That's what she missed in the year after the Mainz
        engagement, she says. She cites "stubbornness" as a dancer's
        characteristic that she will bring with her into the next phase of her
        life, along with "discipline, a lot of discipline. There is something in
        the mentality of dancers and choreographers in dealing with processes,
        she says: not stopping when creating, searching or practicing until
        something is completed, "determination."
      </Paragraph>
      <ArticleBy>Melanie Suchy</ArticleBy>
    </Article>
  );
};
export const TransitionStoryLuisa = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <TransitionStoryModalHeader
          image={require('../../../assets/images/LuisaEscanero.jpg')}
          title={props.eng ? 'Theater Scholar' : 'Theater- Wissenschaft'}
        >
          Luisa Sansho
        </TransitionStoryModalHeader>
        {props.eng ? <Luisa_EN /> : <Luisa_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

const Michal_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Als Michal Fatura gleich mehrere Stellenangebote der renommiertesten
        Werbeagenturen weit und breit bekommt, entscheidet er sich, nicht
        umzuziehen. „Berlin ist mein Zuhause“. Acht Jahre vorher war der Slowake
        hergekommen, um in einer großen deutschen Ballettkompanie zu tanzen.
        Seit kurzem, seit April 2015, ist er Junior Art Director. „Ich freue
        mich jeden Tag, zur Arbeit zu gehen.“ Er fängt dort von vorn an, von
        unten; bis zum Senior Director sind noch ein paar Stufen zu erklimmen.
        Hierarchien kennt er aus der Theaterwelt. Das sei einer seiner
        Pluspunkte, sagt er. Mit seinen dreißig Jahren hat er bereits eine Menge
        Erfahrung. Sie hat seine potenziellen neuen Arbeitgeber, die ihn zum
        Vorstellungsgespräch geladen hatten, beeindruckt: Der hat ja schon eine
        Karriere!
      </Paragraph>
      <Paragraph>
        Hart erarbeitet. Mit zehn Jahren begann er in seiner Heimatstadt Žilina
        auf eigenen Wunsch mit Ballettunterricht in einer privaten Tanzschule.
        Als er vierzehn war, riet ihm die Lehrerin, aufs Konservatorium mit
        Internat in Košice zu wechseln. Er wollte eigentlich zum
        Wirtschaftsgymnasium, aber versuchte es mit Ballett, wurde sogar gleich
        in die zweite Klasse aufgenommen. „Das war zu viel, aber ich wollte es
        so sehr, dass ich es geschafft habe.“ Häufig hörte er, er habe zu spät
        mit Profiunterricht begonnen, um Ballett zum Beruf zu machen. Dieses „zu
        spät“ lässt den jungen Mann jahrelang an sich zweifeln, treibt ihn an
        zum Lernen, Trainieren, Arbeiten, „immer mehr, immer mehr“.
      </Paragraph>
      <Paragraph>
        Er schaffte den Wechsel zur Ballettakademie in Bratislava. Abschlussnote
        1. Danach wollte er weg, dahin, wo ihn niemand als „Späten“ kannte. Er
        bekam ein Engagement in Prag. „Eine Bestätigung“, sagt er, ein Ansporn,
        viel zu trainieren, auch sonntags, allein im Ballettsaal. Es waren gute
        Jahre, sagt Michal Fatura. Doch als bessere Rollen für ihn dran waren,
        musste er wegen einer Stressfraktur einige Wochen aussetzen; kurz danach
        fuhr er nach Berlin zu einer Audition, „Ich riskiere das“. Er wurde
        angenommen. Deutschland war sein Ziel gewesen, das Bayerische
        Staatsballett. Jetzt war es eben das Berliner.
      </Paragraph>
      <Paragraph>
        Gruppentänzer zu sein, fand er in Ordnung, „weil ich so selbstkritisch
        bin“. Es lief gut. Bis ein gebrochener Fuß ihn ein halbes Jahr rauswarf.
        „Mein Leben war leer“, denn das Leben fand ja nur im Theater und unter
        Kollegen statt. Er begann, diese Ausschließlichkeit in Frage zu stellen.
        Bei der Rückkehr ins Ballett bekam er weniger anspruchsvolle Partien zu
        tanzen, das Repertoire veränderte sich, die Stimmung im Ensemble sackte.
        Er litt und fand keine Kraft zum Weggehen. Dann wurde sein Vertrag nicht
        verlängert. „Eine große Enttäuschung. Es tat weh, aber es war auch das
        Beste, was mir passieren konnte.“
      </Paragraph>
      <Paragraph>
        Der 28-Jährige entschied: „Ich will in Berlin bleiben“. In eine andere
        Kompanie? Beim Friedrichstadtpalast schaffte er es ins Finale, gab dann
        die Hoffnung auf einen Ballettneuanfang auf und schaute sich anderweitig
        um. Er fragte einen Freund aus, der in der Werbebranche arbeitete. Das
        hörte sich gut an, denn schöne Dinge, das Optische und auch Humorvolle
        mochte Michal Fatura schon immer. Also sammelte er Tipps, suchte
        Schulen, fand eine Fashion Academy zu reglementiert und begeisterte sich
        für die internationale, bilinguale Miami Ad School in Berlin. Er
        bastelte eine Bewerbung, über die er heute lächelt, und fing zehn Tage
        nach dem Spielzeitende dort an.
      </Paragraph>
      <Paragraph>
        Die zweijährige Schule war teuer. Mit der Berechtigung auf Umschulung
        wegen des Arbeitsunfalls, mit der ausgezahlten Abfindung von der
        Versorgungsanstalt der deutschen Bühnen, der sogenannten ‚Bayerischen’,
        ein bisschen Geld von den Eltern, dazu die halbierte Miete, würde es
        klappen, dachte er. Doch die Beziehung, die Letzteres garantierte, hielt
        nicht, und mit der Agentur für Arbeit verhandelte er ein Jahr lang über
        die Ausbildung, da seine Schule nicht auf der Liste geförderter
        Institutionen stand und deren durchschnittliche Tageskosten angeblich zu
        hoch waren. Im fehlte zwar nur noch Geld fürs zweite Jahr, das Argument
        zog aber nicht. Er gab auf.
      </Paragraph>
      <Paragraph>
        Ein Schulquartal setzte er aus. Um dann Arbeitslosengeld zu beziehen,
        fehlten ihm 20 Tage zu den erforderlichen 12 Monaten Arbeit während
        zweier Jahre. „So ein Pech!“ Bei der Stiftung Tanz war er einmal
        gewesen, aber er wusste ja, welche Ausbildung er wollte. „Ich habe nicht
        weit genug gedacht“. Jetzt ging er wieder hin. „Das ist meine letzte
        Chance.“ Er führte lange Gespräche und bekam finanzielle Unterstützung.
        Inzwischen jobbte er ab und zu beim Deutschen Fernsehballett. Weil er
        sich aus dem Bedürfnis nach Bewegung mit Sport fit gehalten hatte, war
        er schnell wieder in Form dafür. „Es war schön, wieder auf der Bühne zu
        stehen“. Dass es Spaß machte, fühlte sich neu an. Keine leichte Arbeit,
        kurze Probenzeiten und viel Reisen, aber er mochte die Atmosphäre.
      </Paragraph>
      <Paragraph>
        Die Schule war für Fatura „ein 24/7-Studium“. Die Kommilitonen konnten
        schon mit bestimmten Computerprogrammen umgehen, er nicht. „Da kam
        wieder dieses: Ich will!“ Er lacht. Abendelang arbeitete er sich durch
        Aufgaben, für die er heute nur noch eine Stunde bräuchte. Nach dem
        ersten Jahr, in dem Creative Directors großer Agenturen in der Schule
        Unterricht gaben, folgten Praktika in Agenturen in Peking, Prag, Berlin,
        dann das Bewerbungsportfolio. Der Abschluss. Mit ihm könnte er in
        diversen Bereichen arbeiten, doch er wollte zuerst „den klassischen Weg
        gehen“ und bewarb sich bei großen Werbeagenturen. Mehrere wollten ihn.
        Also Berlin!
      </Paragraph>
      <Paragraph>
        „Die Transformation vom Tänzer zum Art Director“, dafür stehe das
        Bewerbungsbuch, in das er Photos und Sätze einfügte darüber, was er aus
        seinem Ballettleben mitbringt in den nächsten Beruf. Seite eins: der
        Blick von einer leeren Bühne in einen Zuschauerraum. Etwas geht zu Ende.
        Auf der letzten Seite dasselbe Photo als Bildschirmschoner: „the new
        chapter starts now“. Dazwischen Statements über Disziplin, Selbstkritik,
        Teamarbeit. Fürs Thema Kreativität wählte er das Foto von
        Theaterperücken auf Holzköpfen. „About characters“, titelte er dazu.
        „Jede Marke, jeder Kunde hat einen anderen Charakter, es ist ganz
        unterschiedlich, was er jeweils braucht, welches Aussehen, und was für
        einen mood er ausdrücken will“, erklärt Fatura. „Wie beim Tanzen: In
        eine Rolle zu steigen, das hilft bei der Interpretation. Und bei der
        Kreativität.
      </Paragraph>
      <ArticleBy>Melanie Suchy</ArticleBy>
    </Article>
  );
};
const Michal_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        When Michal Fatura receives several job offers from the most renowned
        advertising agencies far and wide, he decides not to move. "Berlin is my
        home". Eight years earlier, the Slovakian had come here to dance in a
        large German ballet company. Since April 2015, he has been a junior art
        director. "I look forward to going to work every day." He starts there
        from the beginning, from the bottom; there are still a few steps to
        climb to Senior Director. He knows hierarchies from the theater world.
        That's one of his plus points, he says. At thirty years old, he already
        has a lot of experience. It impressed his potential new employers who
        invited him for an interview: "He's already got a career!
      </Paragraph>
      <Paragraph>
        Hard-earned. At the age of ten he started ballet lessons at his own
        request, in his hometown Žilina, at a private dance school. At the age
        of fourteen, his teacher advised him to transfer to a conservatory with
        a boarding school in Košice. He actually wanted to go to the business
        high school, but tried ballet, was even admitted to the second class
        right away. "It was too much, but I wanted it so much that I made it."
        He often heard that he started professional lessons too late to make
        ballet a career. This "too late" made the young man doubt himself for
        years, driving him to learn, train, work, "more and more, more and
        more."
      </Paragraph>
      <Paragraph>
        He managed to transfer to the Ballet Academy in Bratislava. After that
        he wanted to leave, to go where no one knew him as a "late". He got an
        engagement in Prague. "A confirmation," he says, an incentive to train a
        lot, even on Sundays, alone in the ballet hall. They were good years,
        says Michal Fatura. But when better roles were up for him, he had to
        miss a few weeks because of a stress fracture; shortly after, he went to
        Berlin for an audition, "I'll risk it." He was accepted. Germany had
        been his goal, the Bavarian State Ballet. Now it was the Berlin one.
      </Paragraph>
      <Paragraph>
        He found being a group dancer okay, "because I'm so self-critical." It
        was going well. Until a broken foot threw him out for six months. "My
        life was empty," because life took place only in the theater and among
        colleagues. He began to question that exclusivity. When he returned to
        ballet, he was given less challenging work to dance, the repertoire
        changed, and the mood in the ensemble soured. He suffered and found no
        strength to leave. Then his contract was not renewed, "a big
        disappointment, it hurt, but it was also the best thing that could have
        happened to me."
      </Paragraph>
      <Paragraph>
        The 28-year-old decided, "I want to stay in Berlin." To another company?
        He made it to the finals at the Friedrichstadtpalast, then gave up on
        the prospect of starting a new ballet company and looked elsewhere. He
        asked a friend who worked in the advertising industry. That sounded
        good, because Michal Fatura always liked beautiful things, the visual
        and also humorous. He collected tips, looked for schools, found a
        fashion academy too regimented, and got excited about the international,
        bilingual Miami Ad School in Berlin. He crafted an application, which he
        smiles about today, and started there ten days after the season ended.
      </Paragraph>
      <Paragraph>
        The two-year school cost 25,000 euros. With the entitlement to
        retraining because of the work accident, with the Bavarian paid out, a
        little money from his parents, plus the rent cut in half, it would work
        out, he thought. But the relationship that guaranteed the latter did not
        last, and he negotiated with the Employment Agency for a year about the
        training, because his school was not on the list of supported
        institutions and their average daily costs were allegedly too high. He
        only lacked money for the second year, but the argument didn't work. He
        gave up.
      </Paragraph>
      <Paragraph>
        He sat out one quarter of school. Then, in order to receive unemployment
        benefits, he was 20 days short of the required 12 months of work over
        two years. "Too bad!" He had been to the Dance Foundation once, but he
        knew what training he wanted. "I didn't think far enough". Now he went
        again, "this is my last chance," had long talks and got financial
        support. In the meantime, he occasionally worked at the German
        Television Ballet. Because he had kept fit with sports, out of a need
        for exercise, he was quickly in shape for it. "It was nice to be on
        stage again". That it was fun felt new. Not easy work, short rehearsal
        times and lots of travel, but he liked the atmosphere.
      </Paragraph>
      <Paragraph>
        School was "a 24/7 study" for Fatura. Fellow students already knew how
        to use certain computer programs; he didn't. "There came that again: I
        want!" He laughs. The first year of classes with creative directors at
        large agencies was followed by internships at agencies in Beijing,
        Prague, Berlin, then the application portfolio. The conclusion. With it,
        he could work in diverse fields, but he wanted to "go the classic route"
        first and applied to large advertising agencies. Several wanted him. So
        Berlin!
      </Paragraph>
      <Paragraph>
        "The transformation from dancer to art director" is what the application
        book stands for, in which he inserted photos and sentences about what he
        brings from his ballet life into his next profession. Page one: the view
        from an empty stage into an auditorium. Something is ending. On the last
        page, the same photo as a screen saver: "the new chapter starts now". In
        between, statements about discipline, self-criticism, teamwork. For the
        topic of creativity, he chose the photo of theater wigs on wooden heads.
        "About characters," he wrote. "Every brand, every client has a different
        character, what they need, how they look, what mood they want to
        express," Fatura explains. "It's like dancing: Getting into a role, that
        helps with interpretation. And with creativity."
      </Paragraph>
      <ArticleBy>Melanie Suchy</ArticleBy>
    </Article>
  );
};
export const TransitionStoryMichal = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <TransitionStoryModalHeader
          image={require('../../../assets/images/MichalFatura.jpg')}
          title={'Art Director'}
        >
          Michal Fatura
        </TransitionStoryModalHeader>
        {props.eng ? <Michal_EN /> : <Michal_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

const Hans_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Für den Tanz entdeckt wurde der dreizehnjährige Hans-Georg auf einer
        Disco-Tanzfläche von seiner eigenen Mutter. Sie sah, wie ihr Sohn sich
        kreativ und frei zur Musik bewegte und ermunterte ihn, doch mal in den
        Jazzgymnastikkurs der Volkshochschule mitzukommen. „Da war ich der
        einzige Teenager unter lauter Hausfrauen“. Diese VHS in Duisburg samt
        ihrer internationalen Tanzworkshops in den Ferien „war mein Tor zur
        Tanzwelt“, zum Modernen Tanz, sagt Hans-Georg Lenhart heute. Dreißig
        Jahre später schob er das Tor langsam wieder zu und öffnete gleichzeitig
        neue.
      </Paragraph>
      <Paragraph>
        Nach der Mittleren Reife hatte er damals nur ungefähre Berufswünsche.
        Seine Tanzlehrerin, ausgebildet an der Folkwanghochschule in Essen, riet
        ihm, dort vorzutanzen. Mit siebzehn bestand er die Aufnahmeprüfung und
        hatte keine große Vorstellung davon, was darauf folgen würde. Es packte
        ihn: „Ich war auf dem Tanztrip“. Schon während des dritten Studienjahres
        durfte er beim Wuppertaler Tanztheater in „Das Frühlingsopfer / Le Sacre
        du Printemps“ von Pina Bausch mittanzen. Eine Ehre und „einzigartige
        Erfahrung“. Inspirierend fand er auch seine Lehrer und eine Menge
        Mitstudenten, Tänzer wie Rainer Behr, Christiana Morganti, Bernd
        Marszan, Ruth Amarante und spätere Choreographen wie Urs Dietrich, Livia
        Patrizi, Gregor Zöllig, Joachim Schlömer. Nach dem Abschluss 1989 ging
        er nach Brüssel, tanzte dort zwei Jahre projektweise bei der Mark Morris
        Dance Group an der Oper La Monnaie und in freien Projekten, auch in
        denen von Schlömer. Als dieser die Leitung der Tanzsparte am Theater Ulm
        übernahm, ging Lenhart mit.
      </Paragraph>
      <Paragraph>
        Neben Engagements in freien Produktionen in den Niederlanden und in
        Deutschland choreografierte Hans-Georg Lenhart eigene Stücke. Er fand
        die Arbeit zäh und verzweifelte an der Aufgabe Produzent, Manager und
        Künstler gleichzeitig sein zu müssen. „Nicht meins“. Er könne am besten
        aus der zweiten Reihe jemandem zuarbeiten, sagt er. 2001 zog er aus
        privaten Gründen weiter nach Südfrankreich, verdiente mit
        Tangounterricht und einer Milonga etwas Geld und pendelte zu
        Kurzengagements nach Deutschland und England. Auch zu Peter Sellars‘
        „Idomeneo“ in Glyndebourne 2003. Mark Morris choreografierte, Dirigent
        war Sir Simon Rattle. Der gab dem Tänzer Lenhart auf der Bühne das
        Gefühl zu fliegen: „Ich hatte das Gefühl von grenzenloser tänzerischer
        Freiheit, Rattle folgte mir, fing mich auf, war immer da.“ Einige Tage
        später brach ihm bei einem Motorradunfall der Knöchel. Das Ende vom
        Tanz?
      </Paragraph>
      <Paragraph>
        Nein. Er tanzte weiter, aber „das war Murks.“ Eine grundsätzlich
        Entscheidung stand an, die aber brauchte Zeit und eine Rückkehr nach
        Deutschland. 2006 zog Lenhart nach Berlin, fasste aber kaum Fuß in der
        Tanzszene. „Der Körper war angeschlagen, irgendwann wollte der Kopf auch
        nicht mehr“. Er überlegte, wie seine zweite Karriere aussehen könnte.
        „Ich bin ja nur Tänzer, sonst kann ich nix.“ Von der Blockade musste er
        sich lösen. Mit dem Schmerzensgeld, das die Versicherung nach dem Unfall
        zahlte, machte er eine Massageausbildung. Das Massieren machte ihm
        Freude. „In der Ausbildung habe ich meine Vorteile ausgespielt: Ich kann
        gut abschauen, Leute nachmachen, kann mir Sequenzen merken, habe keine
        Angst vor Kontakt.“ Lenhart arbeitet seitdem als freiberuflicher Masseur
        in einem Health-Club.
      </Paragraph>
      <Paragraph>
        Er dachte bald, „ich mache ja nur Wellness, aber ich will mehr“, nämlich
        helfen. Doch er schreckte vor der berüchtigt schwierigen
        Heilpraktiker-Amtsarztprüfung und dem vielen Lernen zurück, denn die
        Schulzeit war lange her. Erst als eine Tänzerin ihm sagte: „Etwas Neues
        lernen, das ist doch nicht viel anders, als jeden Tag an der Stange zu
        stehen: offen bleiben, sich immer wieder überprüfen“. Da meldete er sich
        bei einer Schule an, schaffte ein Jahr später die Prüfung beim Amtsarzt
        und konnte sich nun, als Heilpraktiker, bei der Osteopathieschule
        Deutschland einschreiben. Osteopathie faszinierte ihn, seit er in seinem
        ersten Folkwang-Studienjahr eine nachdrückliche Erfahrung mit einem
        Osteopathen gemacht hatte. Später begleitete sie ihn durch seine gesamte
        Karriere.
      </Paragraph>
      <Paragraph>
        Das vierjährige Teilzeit-Bachelor-Studium in Berlin kostet aber Geld; er
        klopfte also bei der Stiftung Tanz an. Sie wies ihn hin auf die Käthe
        Dorsch Stiftung, die ihm eine einmalige Unterstützung gewährte. Ein
        wenig später fand er ein weiteres Stipendium, das ihn seit seinem
        zweiten Studienjahr unterstützt. Von der Stiftung Tanz konnte er, als er
        Vater wurde und die Verlängerung seiner Unterstützung unsicher war, ein
        einmaliges Stipendium bekommen. Seinen Bachelor hat er demnächst
        abgeschlossen; der Master folgt noch. 2017 wird Lenhart fertig sein,
        „dann bin ich 50, das passt doch“. All das bewältigt er momentan neben
        der Arbeit im Fitnesscenter. Um flexiblere Behandlungszeiten vereinbaren
        zu können, hat er sich zusätzlich in einer Naturheilpraxis eingemietet.
      </Paragraph>
      <Paragraph>
        Seit 2010 ist er außerdem Regieassistent bei Peter Sellars für
        Inszenierungen mit den Berliner Philharmonikern unter der Leitung von
        Sir Simon Rattle. Es begann mit der „Matthäuspassion“. Als Sellars ihn
        auch auf der Bühne besetzen wollte, als Christus, sagte er Nein. „The
        last temptation of Hans-Georg Lenhart“, lacht er. In der Theaterarbeit
        die Seite zu wechseln war ein logischer Entwicklungsschritt. Den Tanz
        vermisse er gar nicht, ebensowenig, sich Stücke anzusehen. „Was ich
        geliebt habe, war nicht nur der Arbeitsprozess, sondern vor allem das
        gemeinsame Tanzen, wenn Tanz und Musik verschmelzen, dieser besondere
        Moment, wenn alles Eins wird.“ Wo bleibt diese Liebe in dem neuen Beruf?
        „Ein Osteopath ist nicht alleine, er hat immer ein Gegenüber; das Gewebe
        des Patienten, mit dem man arbeitet und in gewisser Hinsicht auch
        tanzt.“
      </Paragraph>
      <ArticleBy>Melanie Suchy</ArticleBy>
    </Article>
  );
};
const Hans_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        In the disco, where the mother, who loved to move, took her four
        not-so-little children every Wednesday evening, she saw her
        thirteen-year-old Hans Georg creatively swaying on the dance floor and
        encouraged him to come along to the jazz gymnastics course at the adult
        education center. "There I was the only teenager among all the young
        mothers. This VHS in Duisburg, including its dance workshops during the
        vacations, "was my gateway to the world of dance," to modern dance, says
        Hans Georg Lenhart today. Thirty years later, he slid it shut again,
        slowly and somewhat squeakily. And he opened a new one.
      </Paragraph>
      <Paragraph>
        After graduating from high school, the teenager had only vague career
        aspirations at the time. His dance teacher, trained at the
        Folkwanghochschule in Essen, advised him to audition there. At eighteen,
        he passed the entrance exam and had no idea what would follow. It
        grabbed him: "I was on a dance trip". Already during his second year of
        studies, he was allowed to dance in Pina Bausch's "Sacre" at the
        Wuppertal Dance Theater, a rare honor, "a unique experience". He also
        found the teachers and a lot of fellow students inspiring; in the years
        above his were Felix Ruckert, Rainer Behr, Gregor Zöllig, Livia Patrizi,
        Joachim Schlömer. After graduating in 1989, he followed two ex-students
        to Brussels, where he danced for two years on a project basis with the
        Mark Morris Dance Group at the opera La Monnaie and in independent
        projects, including those of Schlömer. When Schlömer took over as
        director of the dance department at the Theater Ulm, Lenhart went with
        him.
      </Paragraph>
      <Paragraph>
        There, as later in Weimar, they replaced the ballet at the house. With
        dance theater. At times, he says, it felt like fighting windmills. "We
        worked like berserkers, but it was insanely fun". He also moved to Basel
        with him, but the friendly and professionally very close relationship
        with the choreographer had cooled. In addition, a chronic inflammation
        in his foot made life difficult for Lenhart. So when his girlfriend at
        the time moved away, he went along, despite the fear of losing job
        security. At least the theater helped with a transitional allowance.
      </Paragraph>
      <Paragraph>
        Now Amsterdam. On the street, the dancer ran into a director he had
        known since his time with Mark Morris: Peter Sellars. "You here?" At a
        dinner once, he had told him his production of The Magic Flute had
        disappointed him, whereupon the world-famous man spent an hour
        explaining the adverse circumstances of the work, "the beginning of a
        long friendship." Now Sellars invited him to join his Stravinsky evening
        for the 1999 Holland Festival. "That was my way back into dance, so to
        speak."
      </Paragraph>
      <Paragraph>
        But he didn't find himself in the best position with the other
        engagements, free productions in Amsterdam and in North Rhine-Westphalia
        with former fellow students. He choreographed himself once, found it
        tough and despaired of the organizational stuff. "Not mine." He could
        best work for someone from the second row, he says. Working on pieces in
        partnership was his ideal, a kind of fidelity he envisioned, far from
        his reality at the time. In 1999, he and his girlfriend moved to the
        south of France, earned some money with tango lessons and a milonga, and
        commuted to Germany and England for short engagements. Also to Peter
        Sellars' "Idomeneo" in Glyndebourne 2003. Mark Morris choreographed,
        conductor was Simon Rattle. He made the dancer Lenhart feel like he was
        flying on stage: "I was always on the music, he was always there,
        catching me". A few days later, in a motorcycle accident, he broke his
        ankle. The end of the dance?
      </Paragraph>
      <Paragraph>
        No, he felt he owed himself a comeback, danced again. "That was
        rubbish." A fundamental decision was coming, he says today, but it took
        time. In 2006, he moved to Berlin, but barely gained a foothold in the
        dance scene. "The body was battered, at some point the head didn't want
        to either". He thought about what he would like to do. "After all, I'm
        only a dancer, otherwise I can do nothing," from the blockade he had to
        break free. With the pain money that the insurance company paid after
        the accident, he did massage training, weekends at a time. He enjoyed
        massaging. "I played to my advantages: I'm good at copying, copying
        people, I can remember sequences, I'm not afraid of contact, I know what
        the body feels like from the inside." Lenhart has since worked at a gym.
      </Paragraph>
      <Paragraph>
        When he realized, "I do wellness, but I want more," namely to help, he
        shied away from the notoriously difficult Heilpraktikerschein. Until a
        dancer once told him, "What is it but to stand at the barre every day:
        to learn something additional, to learn something new, to check yourself
        again and again, to stay open". So he registered with the school, passed
        the exam with the medical officer a year later, and could now, as a
        non-medical person, enroll in the Ostheopathieschule Deutschland OSD. He
        had been fascinated by the method ever since he had had an emphatic
        experience with an Ostheopath during his first year of study at the
        Folkwang, when such a thing was still completely unknown in Germany.
        Later he found colleagues in Belgium who accompanied him through his
        career.
      </Paragraph>
      <Paragraph>
        But the four-year, part-time bachelor's degree program based in Berlin
        cost money; so he knocked on the door of the Dance Foundation. She
        pointed him to the Käthe Dorst Foundation, which gave him a one-time
        grant. A little later, when he found GLS Treuhand, which awards
        scholarships, he also reported the find to Stiftung Tanz. From them, in
        turn, he was able to get a one-time scholarship when he became a father
        and the renewal at GLS Treuhand was uncertain. He will soon have his
        bachelor's degree; his master's will follow. Only writing is difficult
        for him, he says. Lenhart will be finished in 2017, "then I'll be 50,
        which fits, doesn't it?" He's doing all this while working at the
        fitness center. To be able to arrange more flexible treatment times, he
        is currently looking for a space, his own or a group practice.
      </Paragraph>
      <Paragraph>
        Since 2010, he has also been an assistant director with Peter Sellars
        when he puts out productions with Simon Rattle's Berlin Philharmonic. It
        began with the "St. Matthew Passion." When Sellars also wanted to cast
        him as Christ on stage, he said no. "The last temptation of Hans Georg
        Lenhart," he laughs. He didn't feel he owed it to himself anymore. He
        also didn't miss dancing that much, nor did he miss watching plays.
        "What I loved was the working process. When it works, the
        companionship," being strong together. Where is that love in the new
        profession? "An osteopath is alone, but you always have a counterpart, a
        partner to work with."
      </Paragraph>
      <ArticleBy>Melanie Suchy</ArticleBy>
    </Article>
  );
};
export const TransitionStoryLenhart = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <TransitionStoryModalHeader
          image={require('../../../assets/images/HGLenhart.jpg')}
          title={'Osteopath'}
        >
          Hans-Georg Lenhart
        </TransitionStoryModalHeader>
        {props.eng ? <Hans_EN /> : <Hans_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
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
