import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/colors';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import Menu from '../../components/menu';

import MyHeaderButton from '../../components/buttons/headerButton';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import MenuCard from '../../components/menuScreenComponents/menuCard';

import Existenzgruendung from '../selfEmploymentScreens/existenzgruendung';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class selfEmploymentMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng
        ? 'Self Employment'
        : 'Selbstständigkeit',
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
    existenzgruendung: false
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
        <Existenzgruendung
          isVisible={this.state.existenzgruendung}
          close={() => this.setState({existenzgruendung: false})}
        />
        <ArticleHeader>
          {this.props.navigation.state.params.eng
            ? 'Self Employment'
            : 'Selbstständigkeit'}
        </ArticleHeader>
        <ArticleIllustration
          imageContainerStyle={{marginBottom: -20}}
          image={require('../../assets/illustrations/selfemploymentIllustrations/Selbstständigkeit.png')}
        />
        {!this.props.navigation.state.params.eng && (
          <MenuCard
            onPress={() => this.setState({existenzgruendung: true})}
            textSample={
              'Einige TänzerInnen wollen nach ihrer Tanzkarriere als Selbständige arbeiten. Dies betrifft sowohl diejenigen, die vom Festengagement in die freie Szene wechseln als auch diejenigen, die in einem neuen Feld (z.B. als Tanzpädagoge oder Yogalehrer) freiberuflich arbeiten wollen.'
            }
          >
            Existenzgründung
          </MenuCard>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default selfEmploymentMenuScreen;

const styles = StyleSheet.create({});
