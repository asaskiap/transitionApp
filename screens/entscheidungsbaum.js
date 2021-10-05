import React from 'react';

import Colors from './../assets/colors';

import CardEB from '../components/entscheidungsBaumComponents/cardEB';

import ScrollableScreenContainer from '../components/scrollableScreen';
import {
  HeaderEB,
  SubheaderEB
} from '../components/entscheidungsBaumComponents/headerEB';
import ArticleImage from '../components/articleComponents/articleImage';
import ButtonSecondary from '../components/buttons/buttonSecondary';

const Entscheidungsbaum = (props) => {
  return (
    <ScrollableScreenContainer>
      <HeaderEB>Entscheidungsbaum</HeaderEB>
      <SubheaderEB>Was brauche ich in meiner Situation?</SubheaderEB>

      <ArticleImage image={require('./../assets/illustrations/thinking.png')} />
      <ButtonSecondary
        onPress={() => props.navigation.navigate('EntscheidungsbaumGo')}
      >
        Los Gehts!
      </ButtonSecondary>
    </ScrollableScreenContainer>
  );
};

export default Entscheidungsbaum;
