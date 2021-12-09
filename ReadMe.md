### TO DO

# IMPORTANT before Upload

- change email addresses in send email

- how to give proper name to back button on ios ✅
  const SomeNavigator = StackNavigator({
  Main: { screen: Main },
  Login: {
  screen: Login,
  navigationOptions: {
  headerBackTitle: 'some label'
  }
  }
  });

- credits for illustrations

- check on other devices!

- check all links (presentation and functionality) ✅

## reminder: Links need to have https:// before ! in order to work!!

## General

- Create documentation for components

### Modal Template

<!--
import React from 'react';

import {Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Ausbildung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader></ArticleHeader>
        <ArticleIllustration image={require('')} />
        <Article>
          <ArticleSubHeader></ArticleSubHeader>
          <Paragraph></Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Ausbildung; -->
