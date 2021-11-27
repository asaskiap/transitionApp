import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import ArticleHeader from '../components/articleComponents/articleHeader';
import ArticleIllustration from '../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../components/articleComponents/articleSubHeader';
import Paragraph from '../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../components/scrollableScreen';
import Menu from '../components/menu';
import Colors from '../assets/colors';
import {
  Interests_DE,
  Needs_DE,
  Skills_DE,
  Transition_DE,
  Values_DE,
  Vision_DE
} from '../components/transitionComponents';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../components/buttons/headerButton';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class Transition extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng
        ? 'Transition'
        : 'Die Transition',
      headerStyle: {
        backgroundColor: Colors.pieOrange
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
    displayMenu: false,
    vision: false,
    needs: false,
    interests: false,
    skills: false,
    values: false
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
    console.log(this.props.navigation.state.params.eng);
    return (
      <ScrollableScreenContainer>
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          english={this.props.navigation.state.params.eng}
          {...this.props}
        ></Menu>
        <ArticleHeader textStyle={{textAlign: 'center'}}>
          {this.props.navigation.state.params.eng
            ? 'The Transition Process'
            : 'Die Transition'}
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 350}}
          image={require('../assets/illustrations/transitionIllustrations/transitionHeader.png')}
        />
        {!this.props.navigation.state.params.eng && (
          <Transition_DE></Transition_DE>
        )}

        <ArticleHeader
          textStyle={{
            fontSize: windowHeight > 600 ? 28 : 26,
            letterSpacing: windowHeight > 600 ? 2 : 1,
            textAlign: 'center'
          }}
        >
          {this.props.navigation.state.params.eng
            ? 'Developing a vision for life after dance'
            : 'Entwicklung einer Vision für ein Leben nach dem Tanz'}
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 370}}
          image={require('../assets/illustrations/transitionIllustrations/transitionVision.png')}
        ></ArticleIllustration>

        <TouchableOpacity
          onPress={() => this.setState({vision: !this.state.vision})}
        >
          <ArticleSubHeader>Vision ▽</ArticleSubHeader>
        </TouchableOpacity>
        {this.state.vision && <Vision_DE></Vision_DE>}

        <TouchableOpacity
          onPress={() => this.setState({needs: !this.state.needs})}
        >
          <ArticleSubHeader>Needs ▽</ArticleSubHeader>
        </TouchableOpacity>
        {this.state.needs && <Needs_DE></Needs_DE>}

        <TouchableOpacity
          onPress={() => this.setState({interests: !this.state.interests})}
        >
          <ArticleSubHeader>Interests ▽</ArticleSubHeader>
        </TouchableOpacity>

        {this.state.interests && <Interests_DE></Interests_DE>}

        <TouchableOpacity
          onPress={() => this.setState({skills: !this.state.skills})}
        >
          <ArticleSubHeader>Skills ▽</ArticleSubHeader>
        </TouchableOpacity>

        {this.state.skills && <Skills_DE></Skills_DE>}

        <TouchableOpacity
          onPress={() => this.setState({values: !this.state.values})}
        >
          <ArticleSubHeader>Values ▽</ArticleSubHeader>
        </TouchableOpacity>

        {this.state.values && <Values_DE></Values_DE>}
      </ScrollableScreenContainer>
    );
  }
}
export default Transition;
