import React from 'react';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import colors from '../assets/colors';
import Menu from '../components/menu';
import MyHeaderButton from '../components/buttons/headerButton';
import ScrollableScreenContainer from '../components/scrollableScreen';
import {
  HeaderEB,
  SubheaderEB
} from '../components/entscheidungsBaumComponents/headerEB';
import ArticleImage from '../components/articleComponents/articleImage';
import ButtonSecondary from '../components/buttons/buttonSecondary';

class Entscheidungsbaum extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Entscheidungsbaum',
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
        />
        <HeaderEB>Entscheidungsbaum</HeaderEB>
        <SubheaderEB>Was brauche ich in meiner Situation?</SubheaderEB>

        <ArticleImage
          image={require('./../assets/illustrations/thinking.png')}
        />
        <ButtonSecondary
          onPress={() => this.props.navigation.navigate('EntscheidungsbaumGo')}
        >
          Los Gehts!
        </ButtonSecondary>
      </ScrollableScreenContainer>
    );
  }
}

export default Entscheidungsbaum;
