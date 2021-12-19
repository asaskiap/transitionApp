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
      headerTitle: navigation.state.params.eng
        ? 'Decision Tree'
        : 'Entscheidungsbaum',
      headerStyle: {
        backgroundColor: colors.psychology
      },
      headerBackTitleVisible: false,
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
          english={this.props.navigation.state.params.eng}
          {...this.props}
        />
        <HeaderEB>
          {this.props.navigation.state.params.eng
            ? 'Decision Tree'
            : 'Entscheidungsbaum'}
        </HeaderEB>
        <SubheaderEB>
          {this.props.navigation.state.params.eng
            ? 'What do I need right now?'
            : 'Was brauche ich in meiner Situation'}
        </SubheaderEB>

        <ArticleImage
          image={require('./../assets/illustrations/entscheidungsbaumIllustrations/thinking.png')}
        />

        <ButtonSecondary
          onPress={() =>
            this.props.navigation.navigate('EntscheidungsbaumGo', {
              eng: this.props.navigation.state.params.eng
            })
          }
        >
          {this.props.navigation.state.params.eng ? 'Start' : 'Los Gehts!'}
        </ButtonSecondary>
      </ScrollableScreenContainer>
    );
  }
}

export default Entscheidungsbaum;
