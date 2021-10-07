import React from 'react';

import {View} from 'react-native';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleImage from '../../components/articleComponents/articleImage';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';

const Veraenderung = (props) => {
  return (
    <ScrollableScreenContainer>
      <View style={{alignItems: 'center'}}>
        <ArticleHeader>Veränderung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/earth.png')}
        />
      </View>
    </ScrollableScreenContainer>
  );
};

export default Veraenderung;
