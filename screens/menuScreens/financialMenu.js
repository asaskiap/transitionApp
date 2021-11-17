import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

import Colors from '../../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../../components/buttons/headerButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Menu from '../../components/menu';
import StipendiumStiftung from '../financialScreens/stipendiumStiftung';
import Bafoeg from '../financialScreens/bafoeg';
import Aufstiegsstipendium from '../financialScreens/aufgstieg';
import Bildungskredit from '../financialScreens/bildungskredit';
import Studienkredit from '../financialScreens/studienkredit';
import Arbeitslosengeld from '../financialScreens/arbeitslosengeld';
import Stipendien from '../financialScreens/stipendien';
import Bayrische from '../financialScreens/bayrische';
import Nebenjobs from '../financialScreens/nebenjobs';
import Bildungsgutschein from '../financialScreens/bildungsgutschein';

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
    bafoeg: false,
    bildungskredit: false,
    studienkredit: false,
    arbeitslosengeld: false,
    stipendien: false,
    bayrische: false,
    nebenjobs: false,
    bildungsgutschein: false
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
        <Bildungskredit
          isVisible={this.state.bildungskredit}
          close={() => this.setState({bildungskredit: false})}
        />
        <Studienkredit
          isVisible={this.state.studienkredit}
          close={() => this.setState({studienkredit: false})}
        />
        <Arbeitslosengeld
          isVisible={this.state.arbeitslosengeld}
          close={() => this.setState({arbeitslosengeld: false})}
        />
        <Bildungsgutschein
          isVisible={this.state.bildungsgutschein}
          close={() => this.setState({bildungsgutschein: false})}
        />
        <Bayrische
          isVisible={this.state.bayrische}
          close={() => this.setState({bayrische: false})}
          {...this.props}
        />
        <Stipendien
          isVisible={this.state.stipendien}
          close={() => this.setState({stipendien: false})}
        />
        <Nebenjobs
          isVisible={this.state.nebenjobs}
          close={() => this.setState({nebenjobs: false})}
        />
        <ArticleHeader>Finanzierung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/images/financeColorful.png')}
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
        <MenuCard
          onPress={() => this.setState({bildungsgutschein: true})}
          textSample={
            'Wenn man sich beim Arbeitsamt als arbeitslos gemeldet hat und eine Weiterbildung zu einem anderen Beruf machen möchte, gibt es in manchen Fällen die Möglichkeit eines Bildungsgutscheins. Das bedeutet, dass das Arbeitsamt die Kosten für die Weiterbildung übernimmt.'
          }
        >
          Bildungsgutschein
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({bildungskredit: true})}
          textSample={
            'Der Bildungskredit ist speziell für die Schlussphase des Studiums, für Praktika, Zusatz-, Ergänzungs- oder Aufbaustudiengänge gedacht. Er finanziert den Studierenden oder die Studierende bis zu zwei Jahre lang mit monatlich...'
          }
        >
          Bildungskredit
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({arbeitslosengeld: true})}
          textSample={
            'In manchen Fällen kann für eine Weile das Arbeitslosengeld genutzt werden um die erste Zeit der Weiterbildung zu überbrücken. Im besten Fall hat man Anspruch auf 12 Monate Arbeitslosengeld (60% des vorherigen Nettogehalts) und kann diese Zeit nutzen um sich ggf. um weitere Finanzierungsmöglichkeiten zu kümmern. '
          }
        >
          Arbeitslosengeld
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({bayrische: true})}
          textSample={
            'Es gibt die Möglichkeit sich die Beiträge die man in der BayerischenVersorgungskammer eingezahlt hat für seine Weiterbildung zu nutzen.'
          }
        >
          Bayrische Versicherung
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({studienkredit: true})}
          textSample={
            'Bis zu 14 Semester lang können Studierende ihre Lebenshaltungskosten mit einem Studienkredit finanzieren. Die monatlichen Kreditbeträge können von 100,- bis zu 650,- Euro betragen, abhängig vom Wunsch des Kreditnehmers oder der Kreditnehmerin... '
          }
        >
          Studienkredit
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({stipendien: true})}
          textSample={
            ' Es gibt eine Vielzahl von anderen Stipendienmöglichkeiten. Es lohnt sich auf jeden Fall sich genauer zu informieren und zu bewerben.'
          }
        >
          Andere Stipendien
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({nebenjobs: true})}
          textSample={
            'Einige Studiengänge oder Weiterbildungsmaßnahmen sind so strukturiert, dass man auch durchaus neben dem Studium sein Geld mit einem Nebenjob verdienen kann. Das ist zwar manchmal eine Herausforderung, aber mit etwas Organisation und Strukturiertheit auch sehr gut zu bewältigen.'
          }
        >
          Nebenjobs
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default financialMenuScreen;

const styles = StyleSheet.create({});
