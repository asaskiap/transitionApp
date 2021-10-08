import React from 'react';

import {View} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ScrollableScreenContainer from '../../components/scrollableScreen';

import Menu from '../../components/menu';
import colors from '../../assets/colors';
import MyHeaderButton from '../../components/buttons/headerButton';
import MoreButton from '../../components/buttons/moreButton';
import Article from '../../components/articleComponents/article';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import Card from '../../components/articleComponents/card';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
import MenuCard from '../../components/menuScreenComponents/menuCard';

class psychologyMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Psychologie',
      headerStyle: {
        backgroundColor: colors.psychology
      },
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
        <View style={{alignItems: 'center'}}>
          <Menu
            isVisible={this.state.displayMenu}
            close={this.closeMenu}
            {...this.props}
          ></Menu>
          <MenuScreenHeader
            image={require('./../../assets/images/psychologyImages/freeSwing.jpg')}
          >
            Psychologische Aspekte der Transition
          </MenuScreenHeader>

          <MenuCard
            onPress={() => this.props.navigation.navigate('Abschied')}
            textSample={
              'Das Leben eines Menschen ist geprägt von einer Reihe an Veränderungen, Abschieden und Neuanfängen. Sich von wichtigen Dingen, Menschen, Orten, Gewohnheiten zu trennen ist nicht leicht und kann ein ähnlich intensives Gefühl mit sich bringen wie ein körperlicher Schmerz. ...'
            }
          >
            Abschied
          </MenuCard>
          <MenuCard
            onPress={() => this.props.navigation.navigate('Veraenderung')}
            textSample={
              'Transition bedeutet definitionsgemäß „Übergang“. Es handelt sich dabei um einen Übergang von einer Phase in eine andere und geht unweigerlich mit Veränderung einher...'
            }
          >
            Veränderung
          </MenuCard>

          <MenuCard
            onPress={() => this.props.navigation.navigate('Unsicherheiten')}
            textSample={
              'Transition bedeutet Übergang, Wandel und Veränderung. Gerade im Kontext einer Tanzkarriere und deren Ende kann diese Veränderung sehr groß und weitreichend sein, da der Tanzberuf nicht nur einen Job darstellt, sondern vollkommene Leidenschaft und Hingabe bedeutet...'
            }
          >
            Unsicherheiten
          </MenuCard>

          <MenuCard
            onPress={() => this.props.navigation.navigate('WerBinIch')}
            textSample={'Fragebogen mit individuellem Ergebnis..'}
          >
            Wer Bin Ich?
          </MenuCard>
        </View>
      </ScrollableScreenContainer>
    );
  }
}

export default psychologyMenuScreen;
