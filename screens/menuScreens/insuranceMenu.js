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
import KünstlerSozialVersicherung from '../insuranceScreens/ksk';
import Arbeitslosversicherung from '../insuranceScreens/arbeitslosversicherung';
import Unfallversicherung from '../insuranceScreens/unfallversicherung';

class insuranceMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Versicherung',
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
          {...this.props}
        ></Menu>
        <Bayerische
          isVisible={this.state.bayrische}
          close={() => this.setState({bayrische: false})}
        />
        <KünstlerSozialVersicherung
          isVisible={this.state.ksk}
          close={() => this.setState({ksk: false})}
        />
        <Arbeitslosversicherung
          isVisible={this.state.arbeitslos}
          close={() => this.setState({arbeitslos: false})}
        />
        <Unfallversicherung
          isVisible={this.state.unfall}
          close={() => this.setState({unfall: false})}
        />
        <ArticleHeader>Versicherung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/rainGreen.png')}
        />
        <MenuCard
          textSample={'Wir haben das Wichtigste für euch zusammengetragen!'}
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
            'Die Versorgungsanstalt der deutschen Bühnen ist eine berufsständische Pflichtversorgungseinrichtung. Sie hat die Aufgabe, den an deutschen Theatern abhängig beschäftigten Bühnenangehörigen im Wege der Pflichtversicherung eine zusätzliche Alters-, Berufsunfähigkeits- und Hinterbliebenenversorgung zu gewähren...'
          }
          onPress={() => this.setState({bayrische: true})}
        >
          Bayerische Versorgungskammer
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({ksk: true})}
          textSample={
            'Mit der Künstlersozialversicherung sind seit 1983 die selbständigen Künstler und Publizisten in den Schutz der gesetzlichen Sozialversicherung einbezogen. Besonderheit: Die Künstler und Publizisten brauchen nur die Hälfte ihrer Beiträge zu tragen und sind damit ähnlich günstig gestellt wie Arbeitnehmer...'
          }
        >
          Die Künstlersozial- versicherung (KSK)
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({arbeitslos: true})}
          textSample={
            'Seit 1. Februar 2006 bietet die Arbeitsagentur eine Antragspflichtversicherung in der Arbeitslosenversicherung an. Auf Antrag können sich in der Arbeitslosenversicherung Personen weiter versichern, die eine selbständige Tätigkeit mit einem Umfang von mindestens 15 Stunden wöchentlich aufnehmen und ausüben...'
          }
        >
          Arbeitslosigkeits- Versicherung
        </MenuCard>
        <MenuCard
          onPress={() => this.setState({unfall: true})}
          textSample={
            'Was tun bei Berufsaufgabe aus gesundheitlichen Gründen?Voraussetzungen für den Erhalt von Leistungen zur Teilhabe am Arbeitsleben (LTA) wie Umschulungen, Maßnahmen zur Weiterqualifizierung bzw. Integrationshilfen oder Gründungszuschuss über die Deutsche Rentenversicherung...'
          }
        >
          Berufsunfähigkeits- und Unfallversicherung
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default insuranceMenuScreen;

const styles = StyleSheet.create({});
