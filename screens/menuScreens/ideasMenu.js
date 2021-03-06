import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../../assets/colors';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';

import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import Berufsportraits from '../IdeasScreens/berufsportraits';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class ideasMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng
        ? 'Career Ideas'
        : 'Berufsfindung',
      headerStyle: {
        backgroundColor: colors.psychology
      },
      headerBackTitleVisible: false,
      headerTintColor: colors.textLight,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
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
          english={this.props.navigation.state.params.eng}
          {...this.props}
        ></Menu>
        <Berufsportraits
          isVisible={this.state.berufsportraits}
          close={() => this.setState({berufsportraits: false})}
          english={this.props.navigation.state.params.eng}
        />
        <ArticleHeader>
          {this.props.navigation.state.params.eng
            ? 'Career Ideas'
            : 'Ideen - Berufsfindung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/ideasIllustrations/baloon.png')}
        />

        {this.props.navigation.state.params.eng ? (
          <>
            <MenuCard
              textSample={
                'A test to help you define your skills and interests.'
              }
              onPress={() =>
                this.props.navigation.navigate('Berufsfragebogen', {eng: true})
              }
              eng={true}
            >
              Job Interest Questionnaire
            </MenuCard>
            <MenuCard
              textSample={'Introductions to various jobs.'}
              onPress={() => this.setState({berufsportraits: true})}
              eng={true}
            >
              Job portraits
            </MenuCard>
            <MenuCard
              textSample={'Read how other dancers mastered their transition.'}
              onPress={() =>
                this.props.navigation.navigate('TransitionStories', {eng: true})
              }
              eng={true}
            >
              Transition Stories
            </MenuCard>
          </>
        ) : (
          <>
            <MenuCard
              textSample={'Test mit individuellem Ergebnis'}
              onPress={() =>
                this.props.navigation.navigate('Berufsfragebogen', {eng: false})
              }
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
              onPress={() =>
                this.props.navigation.navigate('TransitionStories', {
                  eng: false
                })
              }
              textSample={'Wie haben andere T??nzer die Transition gemeistert?'}
            >
              Transition Stories
            </MenuCard>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default ideasMenuScreen;

const styles = StyleSheet.create({});
