### TO DO

## reminder: Links need to have https:// before ! in order to work!!

# Add modals

# contact form

# Berufsfragebogen:

- finish and link all questions and recalculate result
- give notice if 2 results equal?? how?

## General

- Create documentation for components
- create components for landing page and landing page parts
- find a way that close button sticks on screen in scroll views?
- rework navigator?
- Implement automatic scrolling to top of screen on rerender ❗
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
