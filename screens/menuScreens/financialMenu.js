import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

import textStyles from '../../styles/generalTextStyles';
import Colors from '../../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../../components/buttons/headerButton';
import Menu from '../../components/menu';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
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
        <Button
          title={'Stipendium der Stiftung'}
          onPress={() =>
            this.props.navigation.navigate('StipendiumDerStiftung')
          }
        />
      </ScrollableScreenContainer>
    );
  }
}

export default financialMenuScreen;

const styles = StyleSheet.create({});
