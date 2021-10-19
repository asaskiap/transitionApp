import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Bayerische from '../insuranceScreens/bayrischeVersorgungskammer';

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
            //color={colors.primaryLight}
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
    bayrische: false
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
        <ArticleHeader>Versicherung</ArticleHeader>
        <ArticleIllustration
          imageContainerStyle={{marginBottom: 80}}
          image={require('../../assets/illustrations/insuranceIllustrations/rainGreen.png')}
        />
        <MenuCard
          textSample={
            'https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Fl_Blallett_Leitfaden_18.pdf'
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
          textSample={
            'Mit der Künstlersozialversicherung sind seit 1983 die selbständigen Künstler und Publizisten in den Schutz der gesetzlichen Sozialversicherung einbezogen. Besonderheit: Die Künstler und Publizisten brauchen nur die Hälfte ihrer Beiträge zu tragen und sind damit ähnlich günstig gestellt wie Arbeitnehmer...'
          }
        >
          Die Künstlersozialversicherung (KSK)
        </MenuCard>
        <MenuCard
          textSample={
            'Seit 1. Februar 2006 bietet die Arbeitsagentur eine Antragspflichtversicherung in der Arbeitslosenversicherung an. Auf Antrag können sich in der Arbeitslosenversicherung Personen weiter versichern, die eine selbständige Tätigkeit mit einem Umfang von mindestens 15 Stunden wöchentlich aufnehmen und ausüben...'
          }
        >
          Arbeitslosigkeits- Versicherung
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default insuranceMenuScreen;

const styles = StyleSheet.create({});
