import React from 'react';

import {Modal, Dimensions} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const windowHeight = Dimensions.get('window').height;

const Deutschkurse = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Deutschkurse</ArticleHeader>
        <ArticleIllustration
          imageContainerStyle={{marginTop: 20}}
          imageStyle={{maxHeight: windowHeight > 600 ? 350 : 300}}
          image={require('../../assets/illustrations/germanyIllustrations/headphones.png')}
        />
        <Article>
          <Paragraph>
            Deutschkurse sind über verschiedene Anbieter zu finden.
            Beispielsweise über das Goethe Institut, die Volkshochschule oder
            die DeutschAkademie in Berlin. Unter bestimmten Voraussetzungen kann
            der Deutschkurs über das Arbeitsamt finanziert.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Deutschkurse;
