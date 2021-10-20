import React from 'react';

import {Modal} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import CloseButton from '../../components/buttons/closeButton';

const WerBindIch = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Wer Bin Ich?</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/freedom.png')}
        />
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default WerBindIch;
