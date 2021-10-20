import React from 'react';

import {Modal} from 'react-native';

import CloseButton from '../components/buttons/closeButton';
import ScrollableScreenContainer from './scrollableScreen';
import ArticleHeader from './articleComponents/articleHeader';
import ArticleIllustration from './articleComponents/articleIllustration';
import Article from './articleComponents/article';
import Paragraph from './articleComponents/paragraph';
import {List, ListItem} from '../components/articleComponents/list';
import Link from './articleComponents/link';
import Quote from './articleComponents/quote';

const ArticleModal = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>{props.header}</ArticleHeader>
        <ArticleIllustration image={props.image} />
        <Article>{props.children}</Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default ArticleModal;
