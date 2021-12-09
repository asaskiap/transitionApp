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
const Arbeitslosversicherung_DE = (props) => {
  return (
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
        Beschäftigung mit einem Umfang von minde- stens 15 Stunden wöchentlich
        in einem Staat außerhalb eines Mitgliedstaates der Europäischen Union,
        eines Vertragsstaates des Europäischen Wirtschaftsraums oder der Schweiz
        aufnehmen und ausüben. Selbständige und Beschäftigte im Nicht-EU-
        Ausland können in die Antragspflichtversicherung einbezogen werden, wenn
        sie ihre Tätigkeit nach dem 01. Februar 2006 begonnen haben. Der Antrag
        auf die Antragspflichtversicherung muss innerhalb von drei Monaten nach
        Aufnahme der selbständigen Tätigkeit oder der Auslandsbeschäftigung
        gestellt werden. Die Zeiten der Antragspflichtversicherung können später
        für einen Anspruch auf Arbeitslosengeld heran gezogen werden.
      </Paragraph>
      <ArticleSubHeader>Voraussetzung</ArticleSubHeader>
      <Paragraph>
        Der Versicherte war innerhalb der letzten 24 Monate zwölf Monate
        versicherungspflichtig beschäftigt oder hat Arbeitslosengeld nach dem
        SGB III bezogen.
      </Paragraph>
      <ArticleSubHeader>Zuständigkeit </ArticleSubHeader>
      <Paragraph>
        Die Antragspflichtversicherung kann man bei der örtlichen Agentur für
        Arbeit beantragen. Dort liegen die erforderlichen Antragsvordrucke
        bereit. Wer im Ausland beschäftigt ist, muss den Antrag bei der
        Arbeitsagentur seines letzten Wohnsitzes stellen. Die
        Antragspflichtversicherung beginnt mit dem Tag der Aufnahme der
        selbständigen Tätigkeit oder der Auslandsbeschäftigung, wenn der Antrag
        innerhalb der Ausschlussfrist von 3 Monaten gestellt wird.. Der Antrag
        muss persönlich bei der Arbeitsagentur am Wohnort abgegeben werden.
        Dabei muss ein gültiger Personalausweis vorgelegt werden.
      </Paragraph>
      <ArticleSubHeader>Höhe des Monatsbeitrags (Stand 2014):</ArticleSubHeader>
      <Paragraph>
        Selbständige: 41,48 € (West) und 35,18 € (Ost) in der Start- phase, nach
        2 Jahren verdoppelt sich der Beitrag Auslandsbeschäftigte: 82,95 €
        bundeseinheitlich. Die versicherte Person muss den Beitrag alleine
        tragen und direkt an die Bundesagentur für Arbeit zahlen. Wenn die
        selbstän- dige Tätigkeit oder die Auslandsbeschäftigung beendet wird und
        Arbeitslosigkeit eintritt, werden die Zeiten der
        Antrags-pflichtversicherung wie Zeiten einer versicherungspflichtigen
        Beschäftigung berücksichtigt, d.h. sie sind anwartschafts-begründend für
        das Arbeitslosengeld.
      </Paragraph>
    </Article>
  );
};

const Arbeitslosversicherung_EN = (props) => {
  return (
    <Article>
      <ArticleSubHeader>
        Voluntary continued insurance in unemployment insurance
      </ArticleSubHeader>
      <Paragraph>
        Since February 1, 2006, the Employment Agency has offered compulsory
        application insurance in unemployment insurance. Upon application,
        persons may continue to be insured under the unemployment insurance
        scheme if they take up and pursue a self-employed activity of at least
        15 hours per week or take up and pursue an employment of at least 15
        hours per week in a country outside a member state of the European
        Union, a contracting state of the European Economic Area or Switzerland.
        Self-employed persons and employees in non-EU countries can be included
        in the compulsory application insurance if they began their activity
        after February 1, 2006. The application for compulsory insurance must be
        submitted within three months of commencing self-employment or
        employment abroad. The periods of compulsory application insurance can
        later be used for a claim to unemployment benefit.
      </Paragraph>
      <ArticleSubHeader>Prerequisite: </ArticleSubHeader>
      <Paragraph>
        The insured person has been employed for twelve months within the last
        24 months subject to compulsory insurance or has received unemployment
        benefits according to SGB III.
      </Paragraph>
      <ArticleSubHeader>Responsibility: </ArticleSubHeader>
      <Paragraph>
        You can apply for compulsory insurance at your local employment agency.
        The necessary application forms are available there. If you are employed
        abroad, you must apply to the employment agency of your last place of
        residence. The compulsory insurance begins on the day of the start of
        the self-employed activity or the employment abroad, if the application
        is made within the cut-off period of 3 months. The application must be
        submitted in person to the employment agency at the place of residence.
        A valid identity card must be presented.
      </Paragraph>
      <ArticleSubHeader>
        Amount of the monthly contribution (as of 2014):
      </ArticleSubHeader>
      <Paragraph>
        Self-employed: €41.48 (West) and €35.18 (East) in the starting phase,
        after 2 years the contribution doubles Foreign employees: €82.95
        nationwide. The insured person must bear the contribution alone and pay
        it directly to the Federal Employment Agency. If the self-employment or
        employment abroad is terminated and unemployment occurs, the periods of
        compulsory insurance are taken into account as periods of employment
        subject to compulsory insurance, i.e. they constitute a qualifying
        period for unemployment benefits.
      </Paragraph>
    </Article>
  );
};
const Arbeitslosversicherung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english
            ? 'Unemployment insurance'
            : 'Arbeitslosen- Versicherung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/Dove.png')}
        />
        {props.english ? (
          <Arbeitslosversicherung_EN />
        ) : (
          <Arbeitslosversicherung_DE />
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Arbeitslosversicherung;
