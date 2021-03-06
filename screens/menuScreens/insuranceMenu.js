import React from 'react';

import {Linking, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../../assets/colors';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Bayerische from '../insuranceScreens/bayrischeVersorgungskammer';
import K├╝nstlerSozialVersicherung from '../insuranceScreens/ksk';
import Arbeitslosversicherung from '../insuranceScreens/arbeitslosversicherung';
import Unfallversicherung from '../insuranceScreens/unfallversicherung';

class insuranceMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng ? 'Insurance' : 'Versicherung',
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
    bayrische: false,
    ksk: false,
    arbeitslos: false,
    unfall: false
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
        <Bayerische
          isVisible={this.state.bayrische}
          close={() => this.setState({bayrische: false})}
          english={this.props.navigation.state.params.eng}
        />
        <K├╝nstlerSozialVersicherung
          isVisible={this.state.ksk}
          close={() => this.setState({ksk: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Arbeitslosversicherung
          isVisible={this.state.arbeitslos}
          close={() => this.setState({arbeitslos: false})}
          english={this.props.navigation.state.params.eng}
        />
        <Unfallversicherung
          isVisible={this.state.unfall}
          close={() => this.setState({unfall: false})}
          english={this.props.navigation.state.params.eng}
        />
        <ArticleHeader>
          {this.props.navigation.state.params.eng
            ? 'Insurance'
            : 'Versicherung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/rainGreen.png')}
        />

        {!this.props.navigation.state.params.eng && (
          <>
            <MenuCard
              textSample={'Wir haben das Wichtigste f├╝r euch zusammengetragen!'}
              onPress={() =>
                Linking.openURL(
                  'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Fl_Blallett_Leitfaden_18.pdf'
                )
              }
            >
              Unser Flyer zu Arbeitsagentur und Co
            </MenuCard>
            <MenuCard
              textSample={
                'Die Versorgungsanstalt der deutschen B├╝hnen ist eine berufsst├Ąndische Pflichtversorgungseinrichtung. Sie hat die Aufgabe, den an deutschen Theatern abh├Ąngig besch├Ąftigten B├╝hnenangeh├Ârigen im Wege der Pflichtversicherung eine zus├Ątzliche Alters-, Berufsunf├Ąhigkeits- und Hinterbliebenenversorgung zu gew├Ąhren...'
              }
              onPress={() => this.setState({bayrische: true})}
            >
              Bayerische Versorgungskammer
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({ksk: true})}
              textSample={
                'Mit der K├╝nstlersozialversicherung sind seit 1983 die selbst├Ąndigen K├╝nstler und Publizisten in den Schutz der gesetzlichen Sozialversicherung einbezogen. Besonderheit: Die K├╝nstler und Publizisten brauchen nur die H├Ąlfte ihrer Beitr├Ąge zu tragen und sind damit ├Ąhnlich g├╝nstig gestellt wie Arbeitnehmer...'
              }
            >
              Die K├╝nstlersozial- versicherung (KSK)
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({arbeitslos: true})}
              textSample={
                'Seit 1. Februar 2006 bietet die Arbeitsagentur eine Antragspflichtversicherung in der Arbeitslosenversicherung an. Auf Antrag k├Ânnen sich in der Arbeitslosenversicherung Personen weiter versichern, die eine selbst├Ąndige T├Ątigkeit mit einem Umfang von mindestens 15 Stunden w├Âchentlich aufnehmen und aus├╝ben...'
              }
            >
              Arbeitslosigkeits- Versicherung
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({unfall: true})}
              textSample={
                'Was tun bei Berufsaufgabe aus gesundheitlichen Gr├╝nden?Voraussetzungen f├╝r den Erhalt von Leistungen zur Teilhabe am Arbeitsleben (LTA) wie Umschulungen, Ma├čnahmen zur Weiterqualifizierung bzw. Integrationshilfen oder Gr├╝ndungszuschuss ├╝ber die Deutsche Rentenversicherung...'
              }
            >
              Berufsunf├Ąhigkeits- und Unfallversicherung
            </MenuCard>
          </>
        )}
        {this.props.navigation.state.params.eng && (
          <>
            <MenuCard
              textSample={'Link provided here'}
              onPress={() =>
                Linking.openURL(
                  'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Fl_Blallett_Leitfaden_18.pdf'
                )
              }
            >
              Our flyer on employment agency and Co
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({bayrische: true})}
              textSample={
                "The Versorgungsanstalt der deutschen B├╝hnen is a compulsory professional pension institution. Its purpose is to provide additional retirement, disability and survivors' benefits to stage employees of German theaters by means of mandatory insurance."
              }
              eng={true}
            >
              Bayerische Versorgungskammer
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({ksk: true})}
              textSample={
                'Since 1983, self-employed artists and publicists have been included in the protection of statutory social insurance through the K├╝nstlersozialversicherung (KSK). A special feature is that artists and publicists only have to pay half of their contributions and are thus in a similarly favorable position as employees. '
              }
              eng={true}
            >
              K├╝nstlersozialversicherung /KSK (Artists' Social Insurance)
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({arbeitslos: true})}
              textSample={
                'Voluntary continued insurance in unemployment insurance. Since February 1, 2006, the Employment Agency has offered compulsory application insurance in unemployment insurance...'
              }
              eng={true}
            >
              Unemployment insurance
            </MenuCard>
            <MenuCard
              onPress={() => this.setState({unfall: true})}
              textSample={
                'What to do if I give up my job for health reasons? Prerequisites for receiving benefits for participation in working life (LTA) such as retraining, measures for further qualification or integration assistance ...'
              }
              eng={true}
            >
              Occupational disability and accident insurance
            </MenuCard>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default insuranceMenuScreen;

const styles = StyleSheet.create({});
