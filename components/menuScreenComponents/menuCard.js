import React from 'react';

import {Text} from 'react-native';
import Card from '../articleComponents/card';
import Article from '../articleComponents/article';
import MoreButton from '../buttons/moreButton';
import colors from '../../assets/colors';

const MenuCard = (props) => {
  return (
    <Card style={props.style}>
      <Article>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: colors.primaryDark,
            paddingTop: 8,
            marginBottom: 10,
            borderBottomColor: colors.secondary,
            borderBottomWidth: 1
          }}
        >
          {props.children}
        </Text>
        <Text style={{fontSize: 14, lineHeight: 20, color: colors.text}}>
          {props.textSample}
        </Text>
        <MoreButton onPress={props.onPress} />
      </Article>
    </Card>
  );
};

export default MenuCard;
