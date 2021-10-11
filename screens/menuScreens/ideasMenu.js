import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';

import Colors from '../../assets/colors';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import textStyles from '../../styles/generalTextStyles';

const ideasMenuScreen = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Ideen - Berufsfindung</ArticleHeader>
      <ArticleIllustration
        image={require('../../assets/illustrations/umsetzungIllustrations/businessPlan.png')}
      />
      <MenuCard textSample={'Test mit individuellem Ergebnis'}>
        Berufsinteressen Fragebogen
      </MenuCard>
      <MenuCard textSample={'Eine Auflistung mit verschiedensten Berufen...'}>
        Berufsportraits
      </MenuCard>
      <MenuCard
        textSample={'Wie haben andere Tänzer die Transition gemeistert?'}
      >
        Transition Stories
      </MenuCard>
    </ScrollableScreenContainer>
  );
};

export default ideasMenuScreen;

const styles = StyleSheet.create({});
