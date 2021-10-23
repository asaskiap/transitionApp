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

class germanyMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Deutschland',
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
        <ArticleHeader textStyle={{textAlign: 'center', letterSpacing: 1}}>
          Leben und Arbeiten in Deutschland
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/globeColorful.png')}
        />
        <MenuCard
          textSample={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus velit. In vulputate venenatis iaculis. Vivamus et dictum dui, at auctor ex. Sed eget mauris quis lacus venenatis fringilla. Phasellus ac lorem eros. Sed condimentum est tellus, ut maximus nulla venenatis quis. Vestibulum porta sed eros id lacinia. '
          }
        >
          Deutschkurse
        </MenuCard>
        <MenuCard
          textSample={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus velit. In vulputate venenatis iaculis. Vivamus et dictum dui, at auctor ex. Sed eget mauris quis lacus venenatis fringilla. Phasellus ac lorem eros. Sed condimentum est tellus, ut maximus nulla venenatis quis. Vestibulum porta sed eros id lacinia. '
          }
        >
          Visum
        </MenuCard>
        <MenuCard
          textSample={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus velit. In vulputate venenatis iaculis. Vivamus et dictum dui, at auctor ex. Sed eget mauris quis lacus venenatis fringilla. Phasellus ac lorem eros. Sed condimentum est tellus, ut maximus nulla venenatis quis. Vestibulum porta sed eros id lacinia. '
          }
        >
          Nachweise
        </MenuCard>
        <MenuCard
          textSample={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus velit. In vulputate venenatis iaculis. Vivamus et dictum dui, at auctor ex. Sed eget mauris quis lacus venenatis fringilla. Phasellus ac lorem eros. Sed condimentum est tellus, ut maximus nulla venenatis quis. Vestibulum porta sed eros id lacinia. '
          }
        >
          Anerkennen von ausländischen Zeugnissen
        </MenuCard>
      </ScrollableScreenContainer>
    );
  }
}

export default germanyMenuScreen;

const styles = StyleSheet.create({});
