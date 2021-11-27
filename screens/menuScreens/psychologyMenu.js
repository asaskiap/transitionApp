import React from 'react';

import {View, Dimensions} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import colors from '../../assets/colors';
import MyHeaderButton from '../../components/buttons/headerButton';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Menu from '../../components/menu';
import Abschied from '../psychologyScreens/abschied';
import Unsicherheiten from '../psychologyScreens/unsicherheiten';
import Veraenderung from '../psychologyScreens/veraenderung';
import WerBindIch from '../psychologyScreens/werBinIch';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleHeader from '../../components/articleComponents/articleHeader';

const windowHeight = Dimensions.get('window').height;

class psychologyMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng ? 'Psychology' : 'Psychologie',
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
    displayMenu: false,
    abschied: false,
    unsicherheiten: false,
    veraenderung: false,
    werBindIch: false
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
        <Abschied
          isVisible={this.state.abschied}
          close={() => this.setState({abschied: false})}
        />
        <Veraenderung
          isVisible={this.state.veraenderung}
          close={() => this.setState({veraenderung: false})}
        />
        <Unsicherheiten
          isVisible={this.state.unsicherheiten}
          close={() => this.setState({unsicherheiten: false})}
        />
        <WerBindIch
          isVisible={this.state.werBindIch}
          close={() => this.setState({werBindIch: false})}
        />
        {!this.props.navigation.state.params.eng && (
          <>
            <ArticleHeader>Psychologische Aspekte der Transition</ArticleHeader>
            <ArticleIllustration
              image={require('../../assets/illustrations/psychologyIllustrations/earth.png')}
            />
            <MenuCard
              onPress={() => this.setState({abschied: true})}
              textSample={
                'Das Leben eines Menschen ist geprägt von einer Reihe an Veränderungen, Abschieden und Neuanfängen. Sich von wichtigen Dingen, Menschen, Orten, Gewohnheiten zu trennen ist nicht leicht und kann ein ähnlich intensives Gefühl mit sich bringen wie ein körperlicher Schmerz. ...'
              }
            >
              Abschied
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({veraenderung: true})}
              textSample={
                'Transition bedeutet definitionsgemäß „Übergang“. Es handelt sich dabei um einen Übergang von einer Phase in eine andere und geht unweigerlich mit Veränderung einher...'
              }
            >
              Veränderung
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({unsicherheiten: true})}
              textSample={
                'Transition bedeutet Übergang, Wandel und Veränderung. Gerade im Kontext einer Tanzkarriere und deren Ende kann diese Veränderung sehr groß und weitreichend sein, da der Tanzberuf nicht nur einen Job darstellt, sondern vollkommene Leidenschaft und Hingabe bedeutet...'
              }
            >
              Unsicherheiten
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({werBindIch: true})}
              textSample={'Fragebogen mit individuellem Ergebnis..'}
            >
              Wer Bin Ich?
            </MenuCard>
          </>
        )}
        {this.props.navigation.state.params.eng && (
          <>
            <ArticleHeader>Psychological Aspects</ArticleHeader>
            <ArticleIllustration
              image={require('../../assets/illustrations/psychologyIllustrations/earth.png')}
            />
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default psychologyMenuScreen;
