import React from 'react';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const WerBindIch = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Wer Bin Ich? </ArticleHeader>
      <ArticleIllustration
        image={require('../../assets/illustrations/psychologyIllustrations/freedom.png')}
      />
    </ScrollableScreenContainer>
  );
};

export default WerBindIch;
