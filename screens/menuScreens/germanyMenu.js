import React from 'react';

import {StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../../assets/colors';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Visum from '../germanyScreens/Visum';
import Nachweise from '../germanyScreens/nachweise';
import Zeugnisse from '../germanyScreens/zeugnisse';
import Deutschkurse from '../germanyScreens/deutschkurse';

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
    displayMenu: false,
    visum: false,
    nachweise: false,
    zeugnisse: false,
    deutschkurse: false
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
        <Visum
          isVisible={this.state.visum}
          close={() => this.setState({visum: false})}
        />
        <Nachweise
          isVisible={this.state.nachweise}
          close={() => this.setState({nachweise: false})}
        />
        <Zeugnisse
          isVisible={this.state.zeugnisse}
          close={() => this.setState({zeugnisse: false})}
        />
        <Deutschkurse
          isVisible={this.state.deutschkurse}
          close={() => this.setState({deutschkurse: false})}
        />
        <ArticleHeader>Leben und Arbeiten in Deutschland</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/globeColorful.png')}
        />
        <MenuCard
          onPress={() => this.setState({deutschkurse: true})}
          textSample={
            'Deutschkurse sind über verschiedene Anbieter zu finden...'
          }
        >
          Deutschkurse
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({visum: true})}
          textSample={'Aufenthalts- und Arbeitsgenehmigung in Deutschland'}
        >
          Visum
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({nachweise: true})}
          textSample={
            'Allgemeine Informationen zum Thema „Leben und Arbeiten in Deutschland” und damit verbundene Fragen... '
          }
        >
          Nachweise
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({zeugnisse: true})}
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
