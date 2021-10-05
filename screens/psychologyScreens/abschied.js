import React from 'react';
import {ScrollView, View} from 'react-native-gesture-handler';

import textStyles from '../../styles/generalTextStyles';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import ArticleScreenHeader from '../../components/articleComponents/articleSceenHeader';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleImage from '../../components/articleComponents/articleImage';

const Abschied = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleScreenHeader
        image={require('../../assets/images/psychologyImages/insecure.jpg')}
      >
        Abschied
      </ArticleScreenHeader>
      <Article>
        <ArticleHeader>Header</ArticleHeader>
        <Paragraph>this is a paragraph</Paragraph>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </Paragraph>
      </Article>
      <ArticleImage
        image={require('../../assets/images/psychologyImages/leanOnMe.jpg')}
      ></ArticleImage>
      <Article>
        <ArticleHeader>Header</ArticleHeader>
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

export default Abschied;
