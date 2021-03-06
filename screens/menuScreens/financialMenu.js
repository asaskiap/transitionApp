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
import Loans from '../financialScreens/loans';

const windowHeight = Dimensions.get('window').height;

class financialMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng ? 'Financial' : 'Finanzierung',
      headerStyle: {
        backgroundColor: Colors.psychology
      },
      headerBackTitleVisible: false,
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
    bildungsgutschein: false,
    loans: false
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
        <Loans
          isVisible={this.state.loans}
          close={() => this.setState({loans: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Aufstiegsstipendium
          isVisible={this.state.aufstiegsstipendium}
          close={() => this.setState({aufstiegsstipendium: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          english={this.props.navigation.state.params.eng}
          {...this.props}
        ></Menu>
        <StipendiumStiftung
          isVisible={this.state.stipendiumStiftung}
          close={() => this.setState({stipendiumStiftung: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Bafoeg
          isVisible={this.state.bafoeg}
          close={() => this.setState({bafoeg: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Bildungskredit
          isVisible={this.state.bildungskredit}
          close={() => this.setState({bildungskredit: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Studienkredit
          isVisible={this.state.studienkredit}
          close={() => this.setState({studienkredit: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Arbeitslosengeld
          isVisible={this.state.arbeitslosengeld}
          close={() => this.setState({arbeitslosengeld: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Bildungsgutschein
          isVisible={this.state.bildungsgutschein}
          close={() => this.setState({bildungsgutschein: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Bayrische
          isVisible={this.state.bayrische}
          close={() => this.setState({bayrische: false})}
          english={this.props.navigation.state.params.eng}
          {...this.props}
        />
        <Stipendien
          isVisible={this.state.stipendien}
          close={() => this.setState({stipendien: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Nebenjobs
          isVisible={this.state.nebenjobs}
          close={() => this.setState({nebenjobs: false})}
          english={this.props.navigation.state.params.eng}
        />
        <ArticleHeader>
          {this.props.navigation.state.params.eng
            ? 'Funding Opportunities'
            : 'Finanzierung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/images/financeColorful.png')}
        />
        {!this.props.navigation.state.params.eng && (
          <>
            <MenuCard
              onPress={() => this.setState({stipendiumStiftung: true})}
              textSample={
                'Die Stiftung TANZ vergibt Stipendien an Tanzschaffende im ??bergang in einen neuen Beruf nach der aktiven Tanzkarriere. Jedes Jahr zum 30.3., 30.6. und 30.10. kann ein Antrag auf eine einmalige F??rderung f??r z.B: Kurs- oder Studiengeb??hren, Fahrtkosten oder Kinderbetreuung w??hrend einer Ausbildung gestellt werden...'
              }
            >
              Stipendium der Stiftung
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bafoeg: true})}
              textSample={
                'Die staatliche Unterst??tzung f??r Studierende ist im Bundesausbildungs-F??rderungsgesetz geregelt ??? besser bekannt unter dem K??rzel BAf??G, womit auch die F??rderung an sich bezeichnet wird...'
              }
            >
              Baf??g
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({aufstiegsstipendium: true})}
              textSample={
                'Das Aufstiegsstipendium unterst??tzt Berufserfahrene bei der Durchf??hrung eines ersten akademischen Hochschulstudiums. Das Stipendium ist ein Programm der Begabtenf??rderung und unterst??tzt Menschen, die in Ausbildung und Beruf ihr besonderes Talent und Engagement bewiesen haben...'
              }
            >
              Aufstiegsstipendium
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bildungsgutschein: true})}
              textSample={
                'Wenn man sich beim Arbeitsamt als arbeitslos gemeldet hat und eine Weiterbildung zu einem anderen Beruf machen m??chte, gibt es in manchen F??llen die M??glichkeit eines Bildungsgutscheins. Das bedeutet, dass das Arbeitsamt die Kosten f??r die Weiterbildung ??bernimmt.'
              }
            >
              Bildungsgutschein
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bildungskredit: true})}
              textSample={
                'Der Bildungskredit ist speziell f??r die Schlussphase des Studiums, f??r Praktika, Zusatz-, Erg??nzungs- oder Aufbaustudieng??nge gedacht. Er finanziert den Studierenden oder die Studierende bis zu zwei Jahre lang mit monatlich...'
              }
            >
              Bildungskredit
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({arbeitslosengeld: true})}
              textSample={
                'In manchen F??llen kann f??r eine Weile das Arbeitslosengeld genutzt werden um die erste Zeit der Weiterbildung zu ??berbr??cken. Im besten Fall hat man Anspruch auf 12 Monate Arbeitslosengeld (60% des vorherigen Nettogehalts) und kann diese Zeit nutzen um sich ggf. um weitere Finanzierungsm??glichkeiten zu k??mmern. '
              }
            >
              Arbeitslosengeld
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bayrische: true})}
              textSample={
                'Es gibt die M??glichkeit sich die Beitr??ge die man in der BayerischenVersorgungskammer eingezahlt hat f??r seine Weiterbildung zu nutzen.'
              }
            >
              Bayrische Versicherung
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({studienkredit: true})}
              textSample={
                'Bis zu 14 Semester lang k??nnen Studierende ihre Lebenshaltungskosten mit einem Studienkredit finanzieren. Die monatlichen Kreditbetr??ge k??nnen von 100,- bis zu 650,- Euro betragen, abh??ngig vom Wunsch des Kreditnehmers oder der Kreditnehmerin... '
              }
            >
              Studienkredit
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({stipendien: true})}
              textSample={
                ' Es gibt eine Vielzahl von anderen Stipendienm??glichkeiten. Es lohnt sich auf jeden Fall sich genauer zu informieren und zu bewerben.'
              }
            >
              Andere Stipendien
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({nebenjobs: true})}
              textSample={
                'Einige Studieng??nge oder Weiterbildungsma??nahmen sind so strukturiert, dass man auch durchaus neben dem Studium sein Geld mit einem Nebenjob verdienen kann. Das ist zwar manchmal eine Herausforderung, aber mit etwas Organisation und Strukturiertheit auch sehr gut zu bew??ltigen.'
              }
            >
              Nebenjobs
            </MenuCard>
          </>
        )}
        {this.props.navigation.state.params.eng && (
          <>
            <MenuCard
              onPress={() => this.setState({stipendiumStiftung: true})}
              textSample={
                'The Stiftung TANZ awards scholarships to dance professionals in transition to a new career after an active dance career.'
              }
              eng={true}
            >
              Stiftung TANZ Scholarship :
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bafoeg: true})}
              textSample={
                'State support for students is regulated in the German Federal Law on Support in Education, otherwise known as BAf??G, which also is the term used for the support itself.'
              }
              eng={true}
            >
              BAf??G
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({arbeitslosengeld: true})}
              textSample={
                'In some cases, unemployment benefits can be used for a while to bridge the initial period of further education. In the best case, one is entitled to 12 months of unemployment benefits (60% of the previous net salary) and can use this time to look for further financing possibilities if necessary.'
              }
              eng={true}
            >
              Unemployment benefit
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bayrische: true})}
              textSample={
                'It is possible to use the contributions paid into the Bayerische Versorgungskammer for your further education.'
              }
              eng={true}
            >
              Bayerische Versorgungskammer
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({aufstiegsstipendium: true})}
              textSample={
                'The ???Aufstiegsstipendium??? applies to all those who have not yet graduated from university and now want to start a course of study. In this case you can get a grant from the state.'
              }
              eng={true}
            >
              Aufstiegsstipendium
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bildungsgutschein: true})}
              textSample={
                'If you have registered with the employment office as unemployed and would like to do further training in a different profession, there is sometimes the possibility of an education voucher.  '
              }
              eng={true}
            >
              Education voucher
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({loans: true})}
              textSample={'Education loan - Student loan - BAf??G bank loan'}
              eng={true}
            >
              Loans
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({stipendien: true})}
              textSample={
                'There are a variety of other scholarship opportunities. It is definitely worthwhile to find out more and apply.'
              }
              eng={true}
            >
              Other scholarships
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({nebenjobs: true})}
              textSample={
                'Some degree programs or continuing education programs are structured in such a way that it is quite possible to earn money with a part-time job while studying. '
              }
              eng={true}
            >
              Part-time jobs
            </MenuCard>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default financialMenuScreen;

const styles = StyleSheet.create({});
