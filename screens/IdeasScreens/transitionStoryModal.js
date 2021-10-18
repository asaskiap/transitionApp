import React from 'react';

import {Modal, Image, View, Text} from 'react-native';
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

        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              margin: 16,
              marginLeft: 20
            }}
            source={require('../../assets/images/portrait3.jpg')}
          />
          <View
            style={{alignItems: 'flex-end', marginRight: 10, marginLeft: -40}}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                paddingVertical: 10,
                color: colors.accentDark,
                borderBottomColor: colors.accentDark,
                borderBottomWidth: 2,
                maxWidth: '90%'
              }}
            >
              Immer Auf der Suche
            </Text>
            <Text
              style={{
                color: colors.text,
                padding: 20,
                fontSize: 16,
                backgroundColor: colors.secondaryLight
              }}
            >
              Luisa Sansho Escanero
            </Text>
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
