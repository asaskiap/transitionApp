import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../../assets/colors';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';

import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import Berufsportraits from '../IdeasScreens/berufsportraits';

class ideasMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Ideen - Berufsfindung',
      headerStyle: {
        backgroundColor: colors.primaryDark
      },
      headerTintColor: colors.primaryLight,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            color={colors.primaryLight}
            onPress={navigation.getParam('toggleMenu')}
          />
        </HeaderButtons>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({toggleMenu: this.toggleMenu});
  }

  state = {
    displayMenu: false,
    berufsportraits: false
  };

  toggleMenu = () => {
    this.setState({
      displayMenu: true
    });
  };

  closeMenu = () => {
    this.setState({
      displayMenu: false
    });
  };

  render() {
    return (
      <ScrollableScreenContainer>
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          {...this.props}
        ></Menu>
        <Berufsportraits
          isVisible={this.state.berufsportraits}
          close={() => this.setState({berufsportraits: false})}
        />
        <ArticleHeader>Ideen - Berufsfindung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/businessPlan.png')}
        />

        <MenuCard
          textSample={'Test mit individuellem Ergebnis'}
          onPress={() => this.props.navigation.navigate('Berufsfragebogen')}
        >
          Berufsinteressen Fragebogen
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({berufsportraits: true})}
          textSample={'Eine Auflistung mit verschiedensten Berufen...'}
        >
          Berufsportraits
        </MenuCard>
        <MenuCard
          onPress={() => this.props.navigation.navigate('TransitionStories')}
          textSample={'Wie haben andere Tänzer die Transition gemeistert?'}
        >
          Transition Stories
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default ideasMenuScreen;

const styles = StyleSheet.create({});
