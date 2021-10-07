import React from 'react';

import Card from '../articleComponents/card';
import Article from '../articleComponents/article';
import ArticleSubHeader from '../articleComponents/articleSubHeader';
import Paragraph from '../articleComponents/paragraph';
import MoreButton from '../buttons/moreButton';

const MenuCard = (props) => {
  return (
    <Card>
      <Article>
        <ArticleSubHeader>{props.children}</ArticleSubHeader>
        <Paragraph>{props.textSample}</Paragraph>
        <MoreButton onPress={props.onPress} />
      </Article>
    </Card>
  );
};

export default MenuCard;
