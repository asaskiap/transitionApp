import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

import textStyles from '../../styles/generalTextStyles';
import Colors from '../../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../../components/buttons/headerButton';
import Menu from '../../components/menu';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
import MenuCard from '../../components/menuScreenComponents/menuCard';
import ArticleModal from '../../components/articleModal';
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
    displayArticle: false
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
        <ArticleModal
          isVisible={this.state.displayArticle}
          close={() => this.setState({displayArticle: false})}
        />
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          {...this.props}
        ></Menu>
        <MenuScreenHeader image={require('../../assets/images/moneyJar.jpg')}>
          Finanzierung
        </MenuScreenHeader>
        <MenuCard
          onPress={() =>
            this.props.navigation.navigate('StipendiumDerStiftung')
          }
          textSample={
            'Die Stiftung TANZ vergibt Stipendien an Tanzschaffende im Übergang in einen neuen Beruf nach der aktiven Tanzkarriere. Jedes Jahr zum 30.3., 30.6. und 30.10. kann ein Antrag auf eine einmalige Förderung für z.B: Kurs- oder Studiengebühren, Fahrtkosten oder Kinderbetreuung während einer Ausbildung gestellt werden...'
          }
        >
          Stipendium der Stiftung
        </MenuCard>
        <MenuCard
          onPress={() => this.props.navigation.navigate('Bafoeg')}
          textSample={
            'Die staatliche Unterstützung für Studierende ist im Bundesausbildungs-Förderungsgesetz geregelt – besser bekannt unter dem Kürzel BAföG, womit auch die Förderung an sich bezeichnet wird...'
          }
        >
          Bafög
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({displayArticle: true})}
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
