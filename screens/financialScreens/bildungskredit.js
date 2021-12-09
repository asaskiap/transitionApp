import React from 'react';

import {Linking, Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Link from '../../components/articleComponents/link';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Bildungskredit = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>Bildungskredit</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/reading_financial.png')}
        />
        <Article>
          <Paragraph>
            Der Bildungskredit ist speziell für die Schlussphase des Studiums,
            für Praktika, Zusatz-, Ergänzungs- oder Aufbaustudiengänge gedacht.
            Er finanziert den Studierenden oder die Studierende bis zu zwei
            Jahre lang mit monatlich bis zu 300,- Euro, sofern das Studium an
            einer BAföG-anerkannten Ausbildungsstätte absolviert wird.
          </Paragraph>
          <Paragraph>
            Im Gegensatz zur Ausbildungsförderung nach dem BAföG ist der
            Bildungskredit unabhängig vom eigenen Einkommen und Vermögen sowie
            dem der Eltern.
          </Paragraph>
          <Paragraph>
            Der Bildungskredit wird von der KfW Privatkundenbank vergeben und
            kann auch zusätzlich zum BAföG beantragt werden. Der Darlehenszins
            ist niedrig und auf der Internetseite der KfW Bankengruppe
            einsehbar. Höchstalter: 36 Jahre.
          </Paragraph>
          <Paragraph>Mehr unter: </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.bva.bund.de/DE/Services/Buerger/Schule-Ausbildung-Studium/Bildungskredit/bildungskredit_node.html'
              )
            }
          >
            www.bva.bund.de/
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Bildungskredit;
