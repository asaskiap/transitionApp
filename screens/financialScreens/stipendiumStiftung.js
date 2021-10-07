import React from 'react';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';

const StipendiumStiftung = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Stipendium der Stiftung</ArticleHeader>
      <ArticleIllustration
        image={require('../../assets/illustrations/Rain.png')}
      ></ArticleIllustration>
      <Article>
        <Paragraph>this is a paragraph</Paragraph>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </Paragraph>
      </Article>

      <Article>
        <ArticleSubHeader>Header</ArticleSubHeader>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </Paragraph>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </Paragraph>
      </Article>
    </ScrollableScreenContainer>
  );
};

export default StipendiumStiftung;
