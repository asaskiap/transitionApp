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
        <ArticleHeader>
          {props.english ? 'German courses' : 'Deutschkurse'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/germanyIllustrations/2windows.png')}
        />
        <Article>
          {props.english ? (
            <Paragraph>
              German courses can be found through various providers. For
              example, through the Goethe Institute, the Volkshochschule or the
              DeutschAkademie in Berlin. Under certain conditions, German
              courses can be financed through the employment office.
            </Paragraph>
          ) : (
            <Paragraph>
              Deutschkurse sind über verschiedene Anbieter zu finden.
              Beispielsweise über das Goethe Institut, die Volkshochschule oder
              die DeutschAkademie in Berlin. Unter bestimmten Voraussetzungen
              kann der Deutschkurs über das Arbeitsamt finanziert.
            </Paragraph>
          )}
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Deutschkurse;
