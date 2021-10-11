import React from 'react';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Bafoeg = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Bafög</ArticleHeader>
      <ArticleIllustration
        image={require('../../assets/illustrations/financialIllustrations/Relationship.png')}
      ></ArticleIllustration>
      <Article>
        <ArticleSubHeader>Wie finanziere ich ein Studium?</ArticleSubHeader>
        <Paragraph>
          Nach §7 Abs.1 BAföG werden grundsätzlich finanzielle Leistungen nach
          dem BAföG nur für eine Ausbildung gewährt. Ausgebildete TänzerInnen im
          Besitz einer Hochschulzugangsberechtigung erhalten deshalb keine
          finanzielle Leistung nach dem BAföG, wenn die Erstausbildung nach dem
          BAföG gefördert werden konnte. Ausnahme nach §7 Abs.2 BAföG, wenn die
          TänzerInnen als erste berufsbildende Ausbildung eine zumindest
          dreijährige Ausbildung an einer Berufsfachschule abgeschlossen haben,
          deren Besuch eine abgeschlossene Berufsausbildung nicht voraussetzt.
        </Paragraph>
        <ArticleSubHeader>BAföG</ArticleSubHeader>
        <Paragraph>
          Die staatliche Unterstützung für Studierende ist im
          Bundesausbildungs-Förderungsgesetz geregelt – besser bekannt unter dem
          Kürzel BAföG, womit auch die Förderung an sich bezeichnet wird. BAföG
          wird für Studierende grundsätzlich zur Hälfte als Zuschuss und zur
          Hälfte als zinsfreies Staatsdarlehen gezahlt, das nach dem Studium an
          das Bundesverwaltungsamt zurückgezahlt werden muss. Die Förderung nach
          dem BAföG ist  vom Einkommen der Eltern abhängig. Nach 5 Jahren
          eigenständiger Erwerbsarbeit ist der Antragsteller allerdings
          elternunabhängig. Einkommen und Vermögen des/der Studierenden werden
          dagegen grundsätzlich nach Abzug der Freibeträge (Single ohne Kind:
          5200,- €) auf den Förderbetrag angerechnet.
        </Paragraph>
        <Paragraph>
          Auszubildende/ Studierende können grundsätzlich nur gefördert werden,
          wenn sie die Ausbildung/ das Studium, für die sie Förderung
          beantragen, vor Vollendung des 30. Lebensjahres beginnen. Es gibt aber
          verschiedene Ausnahmeregelungen, z. B. für Absolventen des zweiten
          Bildungsweges, Berufstätige ohne formelle
          Hochschulzugangsberechtigung, die aufgrund ihrer beruflichen
          Qualifikation an einer Hochschule eingeschrieben worden sind, oder für
          Personen, die aus persönlichen (z. B. Krankheit) oder familiären (z.
          B. Kindererziehung) Gründen gehindert waren, die Ausbildung vor
          Vollendung des 30. Lebensjahres zu beginnen. Eine Ausnahme von der
          Altersgrenze ist allerdings nur möglich, wenn die Auszubildenden die
          Ausbildung ihrer Wahl unverzüglich nach Erreichen der
          Zugangsvoraussetzungen oder dem Wegfall der Hinderungsgründe
          aufgenommen haben. Seit 2010 ist man für ein Masterstudium bei
          Studienbeginn bis zum 35. Geburtstag BAföG-berechtigt. Auch beim BaföG
          gibt es die Möglichkeit gegen einen abgelehnten Antrag innerhalb von 4
          Wochen Widerspruch einzulegen.
        </Paragraph>
        <Paragraph>
          Mehr unter: 
          <Paragraph style={{fontWeight: 'bold', color: colors.primaryDark}}>
            www.bafoeg.bmbf.de
          </Paragraph>
        </Paragraph>
      </Article>
    </ScrollableScreenContainer>
  );
};

export default Bafoeg;
