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
      headerTitle: navigation.state.params.eng ? 'Germany' : 'Deutschland',
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
          english={this.props.navigation.state.params.eng}
          {...this.props}
        ></Menu>
        <Visum
          isVisible={this.state.visum}
          close={() => this.setState({visum: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Nachweise
          isVisible={this.state.nachweise}
          close={() => this.setState({nachweise: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Zeugnisse
          isVisible={this.state.zeugnisse}
          close={() => this.setState({zeugnisse: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Deutschkurse
          isVisible={this.state.deutschkurse}
          close={() => this.setState({deutschkurse: false})}
          english={this.props.navigation.state.params.eng}
        />
        <ArticleHeader>
          {this.props.navigation.state.params.eng
            ? 'Life and Work in Germany'
            : 'Leben und Arbeiten in Deutschland'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/globeColorful.png')}
        />
        {!this.props.navigation.state.params.eng && (
          <>
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
          </>
        )}
        {this.props.navigation.state.params.eng && (
          <>
            <MenuCard
              onPress={() => this.setState({deutschkurse: true})}
              textSample={
                'German courses can be found through various providers.'
              }
              eng={true}
            >
              German courses
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({visum: true})}
              textSample={
                'Foreigners from non-EU countries require a visa for entry and a residence permit for a longer stay in Germany. The visa for entry into the Federal Republic must be applied for at the German Embassy in the country of origin and is valid for up to 3 months.'
              }
              eng={true}
            >
              Visa / Residence Permit
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({nachweise: true})}
              textSample={
                'General information on the subject of "Living and Working in Germany" and related issues such as the recognition of degrees, employment opportunities and social security, etc. can be found on the Internet platform of the Foreign Placement Office of the Federal Employment Agency.'
              }
              eng={true}
            >
              Proofs
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({zeugnisse: true})}
              textSample={
                'In Germany, each federal state has a "Zeugnisanerkennungsstelle" (certificate recognition office), which is responsible for evaluating certificates as proof of university entrance qualification.'
              }
              eng={true}
            >
              Recognition of foreign certificates
            </MenuCard>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default germanyMenuScreen;

const styles = StyleSheet.create({});
