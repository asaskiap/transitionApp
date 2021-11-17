import React from 'react';

import {Linking, Modal} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import CloseButton from '../../components/buttons/closeButton';

const Arbeitslosversicherung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Arbeitslosen- Versicherung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/Dove.png')}
        />
        <Article>
          <ArticleSubHeader>
            Die freiwillige Weiterversicherung in der Arbeitslosenversicherung
          </ArticleSubHeader>
          <Paragraph>
            Seit 1. Februar 2006 bietet die Arbeitsagentur eine
            Antragspflichtversicherung in der Arbeitslosenversicherung an. Auf
            Antrag können sich in der Arbeitslosenversicherung Personen weiter
            versichern, die eine selbständige Tätigkeit mit einem Umfang von
            mindestens 15 Stunden wöchentlich aufnehmen und ausüben oder eine
            Beschäftigung mit einem Umfang von minde- stens 15 Stunden
            wöchentlich in einem Staat außerhalb eines Mitgliedstaates der
            Europäischen Union, eines Vertragsstaates des Europäischen
            Wirtschaftsraums oder der Schweiz aufnehmen und ausüben.
            Selbständige und Beschäftigte im Nicht-EU- Ausland können in die
            Antragspflichtversicherung einbezogen werden, wenn sie ihre
            Tätigkeit nach dem 01. Februar 2006 begonnen haben. Der Antrag auf
            die Antragspflichtversicherung muss innerhalb von drei Monaten nach
            Aufnahme der selbständigen Tätigkeit oder der Auslandsbeschäftigung
            gestellt werden. Die Zeiten der Antragspflichtversicherung können
            später für einen Anspruch auf Arbeitslosengeld heran gezogen werden.
          </Paragraph>
          <ArticleSubHeader>Voraussetzung</ArticleSubHeader>
          <Paragraph>
            Der Versicherte war innerhalb der letzten 24 Monate zwölf Monate
            versicherungspflichtig beschäftigt oder hat Arbeitslosengeld nach
            dem SGB III bezogen.
          </Paragraph>
          <ArticleSubHeader>Zuständigkeit </ArticleSubHeader>
          <Paragraph>
            Die Antragspflichtversicherung kann man bei der örtlichen Agentur
            für Arbeit beantragen. Dort liegen die erforderlichen
            Antragsvordrucke bereit. Wer im Ausland beschäftigt ist, muss den
            Antrag bei der Arbeitsagentur seines letzten Wohnsitzes stellen. Die
            Antragspflichtversicherung beginnt mit dem Tag der Aufnahme der
            selbständigen Tätigkeit oder der Auslandsbeschäftigung, wenn der
            Antrag innerhalb der Ausschlussfrist von 3 Monaten gestellt wird..
            Der Antrag muss persönlich bei der Arbeitsagentur am Wohnort
            abgegeben werden. Dabei muss ein gültiger Personalausweis vorgelegt
            werden.
          </Paragraph>
          <ArticleSubHeader>
            Höhe des Monatsbeitrags (Stand 2014):
          </ArticleSubHeader>
          <Paragraph>
            Selbständige: 41,48 € (West) und 35,18 € (Ost) in der Start- phase,
            nach 2 Jahren verdoppelt sich der Beitrag Auslandsbeschäftigte:
            82,95 € bundeseinheitlich. Die versicherte Person muss den Beitrag
            alleine tragen und direkt an die Bundesagentur für Arbeit zahlen.
            Wenn die selbstän- dige Tätigkeit oder die Auslandsbeschäftigung
            beendet wird und Arbeitslosigkeit eintritt, werden die Zeiten der
            Antrags-pflichtversicherung wie Zeiten einer
            versicherungspflichtigen Beschäftigung berücksichtigt, d.h. sie sind
            anwartschafts-begründend für das Arbeitslosengeld.
          </Paragraph>
          <ArticleSubHeader textStyle={{color: colors.accentDark}}>
            Antragsvordrucke
          </ArticleSubHeader>
          <Link
            onPress={() =>
              Linking.openURL(
                'http://www.arbeitsagentur.de/web/content/DE/Formulare/'
              )
            }
          >
            www.arbeitsagentur.de/web/content/DE/Formulare/
          </Link>
        </Article>
        <CloseButton close={props.close} />
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Arbeitslosversicherung;
