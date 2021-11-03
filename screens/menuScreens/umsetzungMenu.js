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

import UniversitaetenListe from '../umsetzungScreens/uniList';
import Studienplatzsuche from '../umsetzungScreens/studienplatzsuche';
import Ausbildungsbetriebe from '../umsetzungScreens/ausbildung';
import Bewerbungsprozess from '../umsetzungScreens/bewerbung';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class UmsetzungMenu extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Wie setze ich Ideen um?',
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
    uniList: false,
    studienplatz: false,
    ausbildung: false,
    bewerbung: false
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
        <UniversitaetenListe
          isVisible={this.state.uniList}
          close={() => this.setState({uniList: false})}
        />
        <Studienplatzsuche
          isVisible={this.state.studienplatz}
          close={() => this.setState({studienplatz: false})}
        />
        <Ausbildungsbetriebe
          isVisible={this.state.ausbildung}
          close={() => this.setState({ausbildung: false})}
        />
        <Bewerbungsprozess
          isVisible={this.state.bewerbung}
          close={() => this.setState({bewerbung: false})}
        />
        <ArticleHeader textStyle={{textAlign: 'center'}}>
          Wie setze ich meine Ideen um?
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{
            width: windowWidth,
            height: windowHeight * 0.45,
            resizeMode: 'cover'
          }}
          image={require('../../assets/illustrations/umsetzungIllustrations/businessPlan.png')}
        />
        <MenuCard
          onPress={() => this.setState({uniList: true})}
          textSample={
            'Es gibt ein paar gute Seiten im Netz, auf denen eine Auflistung aller Universitäten und deren Studiengänge zu finden sind...'
          }
        >
          Liste mit Universitäten
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({studienplatz: true})}
          textSample={'Wie gehe ich vor, wenn ich einen Studienplatz suche?'}
        >
          Studienplatzsuche
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({ausbildung: true})}
          textSample={
            'Die Suche nach einer Ausbildung und einem Ausbildungsbetrieb kann sehr individuell und facettenreich sein, denn es gibt eine Vielzahl an verschiedensten Berufen und Bereichen in denen eine Berufsausbildung absolviert werden kann...'
          }
        >
          Ausbildungsbetriebe
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({bewerbung: true})}
          textSample={
            'Für das Schreiben einer Bewerbung gibt es kein allgemeingültiges Rezept; hängt es doch stark von dem beruflichen Feld und der spezifischen Stellenbeschreibung, sowie der Person des Bewerbers ab...'
          }
        >
          Bewerbungsprozess
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default UmsetzungMenu;