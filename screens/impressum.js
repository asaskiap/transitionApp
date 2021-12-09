import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import ArticleHeader from '../components/articleComponents/articleHeader';
import Paragraph from '../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../components/scrollableScreen';
import Menu from '../components/menu';
import Article from '../components/articleComponents/article';
import Colors from '../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../components/buttons/headerButton';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class Impressum extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng ? 'Imprint' : 'Impressum',
      headerStyle: {
        backgroundColor: Colors.pieGreen
      },
      headerTintColor: Colors.textLight,
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
        ></Menu>
        <ArticleHeader textStyle={{textAlign: 'center'}}>
          {this.props.navigation.state.params.eng ? 'Imprint' : 'Impressum'}
        </ArticleHeader>
        <Article>
          <Paragraph>Contact information here</Paragraph>
        </Article>
      </ScrollableScreenContainer>
    );
  }
}
export default Impressum;
