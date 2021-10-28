import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';

class germanyMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Deutschland',
      headerStyle: {
        backgroundColor: colors.psychology
      },
      headerTintColor: colors.textLight,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            //color={colors.primaryLight}
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
    displayMenu: false
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
        <ArticleHeader textStyle={{textAlign: 'center', letterSpacing: 1}}>
          Leben und Arbeiten in Deutschland
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/globeColorful.png')}
        />
        <MenuCard
          textSample={
            'Deutschkurse sind über verschiedene Anbieter zu finden. Beispielsweise über das Goethe Institut, die Volkshochschule oder die DeutschAkademie in Berlin. Unter bestimmten Voraussetzungen kann der Deutschkurs über das Arbeitsamt finanziert.'
          }
        >
          Deutschkurse
        </MenuCard>
        <MenuCard
          textSample={'Aufenthalts- und Arbeitsgenehmigung in Deutschland'}
        >
          Visum
        </MenuCard>
        <MenuCard
          textSample={
            'Allgemeine Informationen zum Thema „Leben und Arbeiten in Deutschland” und damit verbundene Fragen... '
          }
        >
          Nachweise
        </MenuCard>
        <MenuCard
          textSample={
            'In Deutschland verfügt jedes Bundesland über eine Zeugnisanerkennungsstelle, die für die Bewertung von Zeugnissen als Nachweis der Hochschulreife,der Fachhochschulreife, eines mittleren Schulabschlusses oder des erfolgreichen Hauptschulabschlusses zuständig ist.'
          }
        >
          Anerkennen von ausländischen Zeugnissen
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default germanyMenuScreen;

const styles = StyleSheet.create({});
