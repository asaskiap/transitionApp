import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

import Colors from '../../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../../components/buttons/headerButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Menu from '../../components/menu';
import StipendiumStiftung from '../financialScreens/stipendiumStiftung';
import Bafoeg from '../financialScreens/bafoeg';
import Aufstiegsstipendium from '../financialScreens/aufgstieg';

const windowHeight = Dimensions.get('window').height;

class financialMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Finanzierung',
      headerStyle: {
        backgroundColor: Colors.psychology
      },
      headerTintColor: Colors.textLight,
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
    aufstiegsstipendium: false,
    stipendiumStiftung: false,
    bafoeg: false
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
        <Aufstiegsstipendium
          isVisible={this.state.aufstiegsstipendium}
          close={() => this.setState({aufstiegsstipendium: false})}
        />
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          {...this.props}
        ></Menu>
        <StipendiumStiftung
          isVisible={this.state.stipendiumStiftung}
          close={() => this.setState({stipendiumStiftung: false})}
        />
        <Bafoeg
          isVisible={this.state.bafoeg}
          close={() => this.setState({bafoeg: false})}
        />

        <ArticleHeader>Finanzierung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/images/financeColorful.png')}
          imageContainerStyle={{marginBottom: windowHeight > 600 ? -20 : 20}}
        />
        <MenuCard
          onPress={() => this.setState({stipendiumStiftung: true})}
          textSample={
            'Die Stiftung TANZ vergibt Stipendien an Tanzschaffende im Übergang in einen neuen Beruf nach der aktiven Tanzkarriere. Jedes Jahr zum 30.3., 30.6. und 30.10. kann ein Antrag auf eine einmalige Förderung für z.B: Kurs- oder Studiengebühren, Fahrtkosten oder Kinderbetreuung während einer Ausbildung gestellt werden...'
          }
        >
          Stipendium der Stiftung
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({bafoeg: true})}
          textSample={
            'Die staatliche Unterstützung für Studierende ist im Bundesausbildungs-Förderungsgesetz geregelt – besser bekannt unter dem Kürzel BAföG, womit auch die Förderung an sich bezeichnet wird...'
          }
        >
          Bafög
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({aufstiegsstipendium: true})}
          textSample={
            'Das Aufstiegsstipendium unterstützt Berufserfahrene bei der Durchführung eines ersten akademischen Hochschulstudiums. Das Stipendium ist ein Programm der Begabtenförderung und unterstützt Menschen, die in Ausbildung und Beruf ihr besonderes Talent und Engagement bewiesen haben...'
          }
        >
          Aufstiegsstipendium
        </MenuCard>
        <MenuCard>Bildungsgutschein</MenuCard>
        <MenuCard
          textSample={
            'Der Bildungskredit ist speziell für die Schlussphase des Studiums, für Praktika, Zusatz-, Ergänzungs- oder Aufbaustudiengänge gedacht. Er finanziert den Studierenden oder die Studierende bis zu zwei Jahre lang mit monatlich...'
          }
        >
          Bildungskredit
        </MenuCard>
        <MenuCard>Bankdarlehn</MenuCard>
        <MenuCard>Arbeitslosengeld</MenuCard>
        <MenuCard>Bayrische Versicherung</MenuCard>
        <MenuCard
          textSample={
            'Bis zu 14 Semester lang können Studierende ihre Lebenshaltungskosten mit einem Studienkredit finanzieren. Die monatlichen Kreditbeträge können von 100,- bis zu 650,- Euro betragen, abhängig vom Wunsch des Kreditnehmers oder der Kreditnehmerin... '
          }
        >
          Studienkredit
        </MenuCard>
        <MenuCard>Andere Stipendien</MenuCard>
        <MenuCard>Nebenjobs</MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default financialMenuScreen;

const styles = StyleSheet.create({});
