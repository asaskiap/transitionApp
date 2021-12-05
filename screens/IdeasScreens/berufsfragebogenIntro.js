import React from 'react';
import {Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import Menu from '../../components/menu';
import MyHeaderButton from '../../components/buttons/headerButton';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import {
  HeaderEB,
  SubheaderEB
} from '../../components/entscheidungsBaumComponents/headerEB';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ButtonSecondary from '../../components/buttons/buttonSecondary';
import ButtonPrimary from '../../components/buttons/buttonPrimary';
import colors from '../../assets/colors';

class BerufsfragebogenIntro extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng
        ? 'Job Interests'
        : 'Berufsinteressen',
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
    const eng = this.props.navigation.state.params.eng;
    return (
      <ScrollableScreenContainer>
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          {...this.props}
          english={eng}
        ></Menu>
        <HeaderEB textStyle={{textAlign: 'center'}}>
          {eng ? 'Job Interest Questionnaire' : 'Berufsinteressen Fragebogen'}
        </HeaderEB>
        <SubheaderEB>
          {eng
            ? 'An individual assessment'
            : 'Fragebogen mit individuellem Ergebnis'}
        </SubheaderEB>
        <ArticleIllustration
          imageContainerStyle={{marginVertical: -50}}
          imageStyle={{height: '70%'}}
          image={require('../../assets/illustrations/ideasIllustrations/berufstest.png')}
        />
        <ButtonPrimary
          backgroundStyle={{backgroundColor: colors.accentDark, marginTop: -30}}
          textStyle={{color: colors.textLight}}
          onPress={() =>
            this.props.navigation.navigate('BerufsfragebogenGo', {eng: eng})
          }
        >
          {eng ? 'Start Test' : 'Test Starten'}
        </ButtonPrimary>
      </ScrollableScreenContainer>
    );
  }
}

export default BerufsfragebogenIntro;
