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
      headerTitle: navigation.state.params.eng
        ? 'Implementation'
        : 'Ideen - Umsetzung',
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
          english={this.props.navigation.state.params.eng}
          {...this.props}
        ></Menu>
        <UniversitaetenListe
          isVisible={this.state.uniList}
          close={() => this.setState({uniList: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Studienplatzsuche
          isVisible={this.state.studienplatz}
          close={() => this.setState({studienplatz: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Ausbildungsbetriebe
          isVisible={this.state.ausbildung}
          close={() => this.setState({ausbildung: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Bewerbungsprozess
          isVisible={this.state.bewerbung}
          close={() => this.setState({bewerbung: false})}
          english={this.props.navigation.state.params.eng}
        />
        <ArticleHeader>
          {this.props.navigation.state.params.eng
            ? 'How do I implement my ideas?'
            : 'Wie setze ich meine Ideen um?'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/umsetzungIllustrations/businessPlan.png')}
        />
        {!this.props.navigation.state.params.eng && (
          <>
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
              textSample={
                'Wie gehe ich vor, wenn ich einen Studienplatz suche?'
              }
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
          </>
        )}

        {this.props.navigation.state.params.eng && (
          <>
            <MenuCard
              onPress={() => this.setState({uniList: true})}
              textSample={
                'There are a few good sites on the web where you can find a list of all universities and their study programs.'
              }
              eng={true}
            >
              List of universities
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({studienplatz: true})}
              textSample={'How do I go about looking for a place to study?'}
              eng={true}
            >
              Searching for a study place
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({ausbildung: true})}
              textSample={
                'The search for an apprenticeship and a training company can be very individual and multifaceted, because there are a variety of different professions and areas in which vocational training can be completed. There are various ways to get an apprenticeship.'
              }
              eng={true}
            >
              Vocational Training
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bewerbung: true})}
              textSample={
                'There is no universal recipe for writing an application; it depends on the professional field and the specific job description, as well as the person of the applicant.'
              }
              eng={true}
            >
              Application process
            </MenuCard>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default UmsetzungMenu;
