import React from 'react';

import {Modal, Dimensions, Linking} from 'react-native';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Article from '../../components/articleComponents/article';
import Paragraph from '../../components/articleComponents/paragraph';
import {List, ListItem} from '../../components/articleComponents/list';
import Link from '../../components/articleComponents/link';
import Quote from '../../components/articleComponents/quote';

import CloseButton from '../../components/buttons/closeButton';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';

const Loans = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Loans</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/reading_financial.png')}
        />
        <Article>
          <ArticleSubHeader>Education loan</ArticleSubHeader>
          <Paragraph>
            The education loan is intended especially for the final phase of
            studies, for internships, additional, supplementary or postgraduate
            studies. It finances the student for up to two years with up to 300
            euros per month, provided that the studies are completed at a
            BAföG-recognized educational institution.
          </Paragraph>
          <Paragraph>
            In contrast to the BAföG, the education loan is not dependent on the
            student's own income and assets or those of his or her parents.
          </Paragraph>
          <Paragraph>
            The education loan is granted by KfW Privatkundenbank and can also
            be applied for in addition to BAföG. The loan interest rate is low
            and can be viewed on the website of KfW Bankengruppe. Maximum age:
            36 years.
          </Paragraph>
          <Paragraph>More at:</Paragraph>
          <Link onPress={() => Linking.openURL('http://www.bildungskredit.de')}>
            www.bildungskredit.de
          </Link>
        </Article>
        <Article>
          <ArticleSubHeader>Student loan</ArticleSubHeader>
          <Paragraph>
            Students can finance their living expenses for up to 14 semesters
            with a student loan. The monthly loan amounts can range from 100 to
            650 euros, depending on the wishes of the borrower. The interest
            rates are comparatively low and the repayment has to be started
            between 6 and 23 months after graduation. If possible, the loan
            application should be submitted 3 months before the start of
            financing to a KfW sales partner, i.e. a local student union, bank
            or savings bank. Further information on the KfW student loan can be
            found on the website of the KfW Bank Group. Maximum age: 44 years.
          </Paragraph>
          <Paragraph>More at:</Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Studieren-Qualifizieren/Finanzierungsangebote/KfW-Studienkredit-(174)/'
              )
            }
          >
            www.kfw.de/inlandsfoerderung/.../KfW-Studienkredit-(174)/
          </Link>
        </Article>
        <Article>
          <ArticleSubHeader>BAföG bank loan</ArticleSubHeader>
          <Paragraph>
            Under the Federal Training Assistance Act (BAföG), students can
            receive a low-interest bank loan under certain conditions. Those who
            wish to follow a further course of study that usefully supplements
            an initial university education, who need to finance the extended
            duration of their studies due to a change of subject, or who need
            financial support until they complete their studies because the
            BAföG maximum funding period has been exceeded, can submit an
            application to the Office for Training Assistance. The amount of the
            loan is determined by the responsible BAföG office. It is paid out
            by the Kreditanstalt für Wiederaufbau (KfW).
          </Paragraph>
          <Paragraph>More at:</Paragraph>
          <Link onPress={() => Linking.openURL('https://www.kfw.de/')}>
            www.kfw.de
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Loans;
