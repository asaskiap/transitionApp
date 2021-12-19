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
      headerBackTitleVisible: false,
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
          english={this.props.navigation.state.params.eng}
        />
        <Veraenderung
          isVisible={this.state.veraenderung}
          close={() => this.setState({veraenderung: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Unsicherheiten
          isVisible={this.state.unsicherheiten}
          close={() => this.setState({unsicherheiten: false})}
          english={this.props.navigation.state.params.eng}
        />
        <WerBindIch
          isVisible={this.state.werBindIch}
          close={() => this.setState({werBindIch: false})}
          english={this.props.navigation.state.params.eng}
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
            <ArticleHeader>Psychological Aspects of Transition</ArticleHeader>
            <ArticleIllustration
              image={require('../../assets/illustrations/psychologyIllustrations/earth.png')}
            />
            <MenuCard
              onPress={() => this.setState({abschied: true})}
              textSample={
                'A persons life is characterized by a series of changes, farewells and new beginnings. Parting with important things, people, places, habits is not easy and can bring on a an intense feeling, similar to physical pain.'
              }
              eng={true}
            >
              Farewell
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({veraenderung: true})}
              textSample={
                'Transition, by definition, means "transforming & change." It is a transition from one phase to another and is inevitably accompanied by change. Especially in a professional context, and especially when an active dance career comes to an end.'
              }
              eng={true}
            >
              Change
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({unsicherheiten: true})}
              textSample={
                'Transition means change and transformation. Especially in the context of a dance career and its end, this change can be very big and far-reaching, as the dance profession is not just a job, but means complete passion and dedication.'
              }
              eng={true}
            >
              Uncertainties
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({werBindIch: true})}
              textSample={'Individual Questionnaire'}
              eng={true}
            >
              Who am I?
            </MenuCard>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default psychologyMenuScreen;
