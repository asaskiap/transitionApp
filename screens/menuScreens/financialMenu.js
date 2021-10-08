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
class financialMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Finanzierung',
      headerStyle: {
        backgroundColor: Colors.secondaryLight
      },
      headerTintColor: Colors.text,
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
    displayMenu: false
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
      </ScrollableScreenContainer>
    );
  }
}

export default financialMenuScreen;

const styles = StyleSheet.create({});
