import React from 'react';

import {Modal, Dimensions, Linking} from 'react-native';

import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import CloseButton from '../../components/buttons/closeButton';
import Link from '../../components/articleComponents/link';

const windowHeight = Dimensions.get('window').height;

const Bafoeg = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Bafög</ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 300}}
          image={require('../../assets/illustrations/financialIllustrations/Bafoeg.png')}
        ></ArticleIllustration>
        {props.english ? (
          <Article>
            <Paragraph>
              According to §7 Abs.1 BAföG, financial benefits under the BAföG
              are generally only granted for training. Trained dancers in
              possession of a university entrance qualification therefore do not
              receive financial benefits according to BAföG if the initial
              training could be funded according to BAföG.
            </Paragraph>
            <Paragraph>
              Exception according to §7 Abs.2 BAföG, if the dancers have
              completed as their first vocational training a training of at
              least three years at a vocational school, whose attendance does
              not require a completed vocational training.
            </Paragraph>
            <Paragraph>
              State support for students is regulated in the Federal Training
              Assistance Act (Bundesausbildungs-Förderungsgesetz) - better known
              by the abbreviation BAföG, which also refers to the support
              itself. BAföG is generally paid to students half as a grant and
              half as an interest-free government loan, which must be repaid to
              the Federal Office of Administration after the student has
              completed his or her studies. Support under BAföG depends on the
              income of the parents. However, after 5 years of independent
              gainful employment, the applicant is independent of parents.
              Income and assets of the student, on the other hand, are generally
              deducted from the amount of the grant after deduction of the
              allowance (single person without child: 5200,- €).
            </Paragraph>
            <Paragraph>
              Trainees/students can only be supported if they begin the
              training/studies for which they are applying for support before
              they reach the age of 30. However, there are various exceptions,
              e.g. for second-chance graduates, employees without formal
              university entrance qualifications who have been enrolled at a
              university on the basis of their professional qualifications, or
              for people who were prevented from starting their education before
              the age of 30 for personal (e.g. illness) or family (e.g. bringing
              up children) reasons. However, an exception to the age limit is
              only possible if the trainees have started the training of their
              choice immediately after reaching the entry requirements or after
              the obstacles have ceased to exist. Since 2010, students are
              entitled to BAföG for a master's degree if they begin their
              studies by their 35th birthday. BaföG also offers the possibility
              to appeal against a rejected application within 4 weeks.
            </Paragraph>
            <Paragraph>More at:</Paragraph>
            <Link onPress={() => Linking.openURL('http://www.bafoeg.bmbf.de')}>
              www.bafoeg.bmbf.de
            </Link>
          </Article>
        ) : (
          <Article>
            <ArticleSubHeader>Wie finanziere ich ein Studium?</ArticleSubHeader>
            <Paragraph>
              Nach §7 Abs.1 BAföG werden grundsätzlich finanzielle Leistungen
              nach dem BAföG nur für eine Ausbildung gewährt. Ausgebildete
              TänzerInnen im Besitz einer Hochschulzugangsberechtigung erhalten
              deshalb keine finanzielle Leistung nach dem BAföG, wenn die
              Erstausbildung nach dem BAföG gefördert werden konnte. Ausnahme
              nach §7 Abs.2 BAföG, wenn die TänzerInnen als erste berufsbildende
              Ausbildung eine zumindest dreijährige Ausbildung an einer
              Berufsfachschule abgeschlossen haben, deren Besuch eine
              abgeschlossene Berufsausbildung nicht voraussetzt.
            </Paragraph>
            <ArticleSubHeader>BAföG</ArticleSubHeader>
            <Paragraph>
              Die staatliche Unterstützung für Studierende ist im
              Bundesausbildungs-Förderungsgesetz geregelt – besser bekannt unter
              dem Kürzel BAföG, womit auch die Förderung an sich bezeichnet
              wird. BAföG wird für Studierende grundsätzlich zur Hälfte als
              Zuschuss und zur Hälfte als zinsfreies Staatsdarlehen gezahlt, das
              nach dem Studium an das Bundesverwaltungsamt zurückgezahlt werden
              muss. Die Förderung nach dem BAföG ist  vom Einkommen der Eltern
              abhängig. Nach 5 Jahren eigenständiger Erwerbsarbeit ist der
              Antragsteller allerdings elternunabhängig. Einkommen und Vermögen
              des/der Studierenden werden dagegen grundsätzlich nach Abzug der
              Freibeträge (Single ohne Kind: 5200,- €) auf den Förderbetrag
              angerechnet.
            </Paragraph>
            <Paragraph>
              Auszubildende/ Studierende können grundsätzlich nur gefördert
              werden, wenn sie die Ausbildung/ das Studium, für die sie
              Förderung beantragen, vor Vollendung des 30. Lebensjahres
              beginnen. Es gibt aber verschiedene Ausnahmeregelungen, z. B. für
              Absolventen des zweiten Bildungsweges, Berufstätige ohne formelle
              Hochschulzugangsberechtigung, die aufgrund ihrer beruflichen
              Qualifikation an einer Hochschule eingeschrieben worden sind, oder
              für Personen, die aus persönlichen (z. B. Krankheit) oder
              familiären (z. B. Kindererziehung) Gründen gehindert waren, die
              Ausbildung vor Vollendung des 30. Lebensjahres zu beginnen. Eine
              Ausnahme von der Altersgrenze ist allerdings nur möglich, wenn die
              Auszubildenden die Ausbildung ihrer Wahl unverzüglich nach
              Erreichen der Zugangsvoraussetzungen oder dem Wegfall der
              Hinderungsgründe aufgenommen haben. Seit 2010 ist man für ein
              Masterstudium bei Studienbeginn bis zum 35. Geburtstag
              BAföG-berechtigt. Auch beim BaföG gibt es die Möglichkeit gegen
              einen abgelehnten Antrag innerhalb von 4 Wochen Widerspruch
              einzulegen.
            </Paragraph>
            <Paragraph>Mehr unter: </Paragraph>
            <Link onPress={() => Linking.openURL('http://www.bafoeg.bmbf.de')}>
              www.bafoeg.bmbf.de
            </Link>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Bafoeg;
