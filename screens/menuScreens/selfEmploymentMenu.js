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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class selfEmploymentMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Selbstständigkeit',
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
        ></Menu>
        <ArticleHeader>Selbstständigkeit</ArticleHeader>
        <ArticleIllustration
          imageStyle={{
            resizeMode: 'contain',
            maxHeight: windowHeight * 0.3,
            maxWidth: windowWidth * 0.9
          }}
          image={require('../../assets/illustrations/levitate.png')}
        />
        <MenuCard
          textSample={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus velit. In vulputate venenatis iaculis. Vivamus et dictum dui, at auctor ex. Sed eget mauris quis lacus venenatis fringilla. Phasellus ac lorem eros. Sed condimentum est tellus, ut maximus nulla venenatis quis. Vestibulum porta sed eros id lacinia. '
          }
        >
          Existenzgründung
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default selfEmploymentMenuScreen;

const styles = StyleSheet.create({});
