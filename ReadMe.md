### TO DO

- link up councelling invite inner app links
- check all links (presentation and functionality)
- rework starting page for Transition?
- menu shortcut for die transition
- add other berufsportraits
- add proper photos for transition stories
- add real logo and splash screen
- implement send email
- look up how to add news updates

- check on other devices!

## reminder: Links need to have https:// before ! in order to work!!

## General

- Create documentation for components
- create components for landing page and landing page parts
- find a way that close button sticks on screen in scroll views?
- rework navigator?
- Implement automatic scrolling to top of screen on rerender ❗✅ (maybe still for Entscheidungsbaum)
- bigger close button ❗

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
