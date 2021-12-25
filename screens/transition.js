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
  Interests_EN,
  Needs_DE,
  Needs_EN,
  Skills_DE,
  Skills_EN,
  Transition_DE,
  Transition_EN,
  Values_DE,
  Values_EN,
  Vision_DE,
  Vision_EN
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
      headerBackTitleVisible: false,
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
          image={require('../assets/images/stiftungLogoCollage.png')}
        />
        {!this.props.navigation.state.params.eng ? (
          <Transition_DE></Transition_DE>
        ) : (
          <Transition_EN></Transition_EN>
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

        {!this.state.vision && (
          <TouchableOpacity onPress={() => this.setState({vision: true})}>
            <ArticleSubHeader>Vision ▽</ArticleSubHeader>
          </TouchableOpacity>
        )}

        {this.state.vision &&
          (this.props.navigation.state.params.eng ? (
            <Vision_EN close={() => this.setState({vision: false})}></Vision_EN>
          ) : (
            <Vision_DE close={() => this.setState({vision: false})}></Vision_DE>
          ))}

        {!this.state.needs && (
          <TouchableOpacity onPress={() => this.setState({needs: true})}>
            <ArticleSubHeader>Needs ▽</ArticleSubHeader>
          </TouchableOpacity>
        )}

        {this.state.needs &&
          (this.props.navigation.state.params.eng ? (
            <Needs_EN close={() => this.setState({needs: false})}></Needs_EN>
          ) : (
            <Needs_DE close={() => this.setState({needs: false})}></Needs_DE>
          ))}

        {!this.state.interests && (
          <TouchableOpacity onPress={() => this.setState({interests: true})}>
            <ArticleSubHeader>Interests ▽</ArticleSubHeader>
          </TouchableOpacity>
        )}

        {this.state.interests &&
          (this.props.navigation.state.params.eng ? (
            <Interests_EN
              close={() => this.setState({interests: false})}
            ></Interests_EN>
          ) : (
            <Interests_DE
              close={() => this.setState({interests: false})}
            ></Interests_DE>
          ))}

        {!this.state.skills && (
          <TouchableOpacity onPress={() => this.setState({skills: true})}>
            <ArticleSubHeader>Skills ▽</ArticleSubHeader>
          </TouchableOpacity>
        )}

        {this.state.skills &&
          (this.props.navigation.state.params.eng ? (
            <Skills_EN close={() => this.setState({skills: false})}></Skills_EN>
          ) : (
            <Skills_DE close={() => this.setState({skills: false})}></Skills_DE>
          ))}

        {!this.state.values && (
          <TouchableOpacity onPress={() => this.setState({values: true})}>
            <ArticleSubHeader>Values ▽</ArticleSubHeader>
          </TouchableOpacity>
        )}

        {this.state.values &&
          (this.props.navigation.state.params.eng ? (
            <Values_EN close={() => this.setState({values: false})}></Values_EN>
          ) : (
            <Values_DE close={() => this.setState({values: false})}></Values_DE>
          ))}
      </ScrollableScreenContainer>
    );
  }
}
export default Transition;
