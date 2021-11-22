import React from 'react';

import {Linking, Modal, Dimensions} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
const windowHeight = Dimensions.get('window').height;

const Studienkredit = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Studienkredit</ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 300}}
          image={require('../../assets/illustrations/financialIllustrations/Bildungsscheck.png')}
        />
        <Article>
          <Paragraph>
            Bis zu 14 Semester lang können Studierende ihre Lebenshaltungskosten
            mit einem Studienkredit finanzieren. Die monatlichen Kreditbeträge
            können von 100,- bis zu 650,- Euro betragen, abhängig vom Wunsch des
            Kreditnehmers oder der Kreditnehmerin. Die Zinsen sind
            vergleichsweise niedrig und mit der Rückzahlung ist zwischen 6 und
            23 Monate nach Studienabschluss zu beginnen. Der Kreditantrag ist
            möglichst 3 Monate vor Finanzierungsbeginn bei einem
            KfW-Vertriebspartner, das ist ein Studentenwerk, eine Bank oder
            Sparkasse vor Ort, einzureichen. Weitere Informationen zum
            Studienkredit der KfW gibt es auf der Internetseite der KfW
            Bankengruppe. Höchstalter: 44 Jahre.
          </Paragraph>
          <Paragraph>Mehr unter: </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Studieren-Qualifizieren/Finanzierungsangebote/KfW-Studienkredit-(174)/'
              )
            }
          >
            https://www.kfw.de/inlandsfoerderung/Privatpersonen/Studieren-Qualifizieren/Finanzierungsangebote/KfW-Studienkredit-(174)/
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Studienkredit;
