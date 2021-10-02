import React, {useState} from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import Colors from '../../assets/colors';
import textStyles from '../../styles/generalTextStyles';
import imageStyles from './../../styles/imageStyles';

import Menu from '../../components/menu';
import MenuButton from '../../components/buttons/menuButton';
import colors from '../../assets/colors';
import MyHeaderButton from '../../components/buttons/headerButton';

const windowHeight = Dimensions.get('window').height;

class psychologyMenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Psychologie',
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
    displayMenu: false
  };

  toggleMenu = () => {
    console.log(this.state.displayMenu);
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
      <ScrollView>
        <View style={textStyles.fullScreenContainer}>
          <Menu
            isVisible={this.state.displayMenu}
            close={this.closeMenu}
            {...this.props}
          ></Menu>
          <ImageBackground
            source={require('./../../assets/images/pyschologyImages/freeSwing.jpg')}
            style={imageStyles.headerBackgroundImage}
          >
            <View style={textStyles.screenHeader}>
              <Text style={textStyles.screenHeaderText}>
                Psychologische Aspekte
              </Text>
            </View>
          </ImageBackground>

          <View style={textStyles.card}>
            <View style={textStyles.article}>
              <View style={textStyles.articleHeader}>
                <Text style={textStyles.articleHeaderText}>Aspekt 1</Text>
              </View>
              <Text style={textStyles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </Text>
              <TouchableOpacity
                style={textStyles.moreBtn}
                onPress={() => this.props.navigation.navigate('ArticleScreen')}
              >
                <Text style={textStyles.moreTxt}>[ mehr...]</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={textStyles.card}>
            <View style={textStyles.article}>
              <View style={textStyles.articleHeader}>
                <Text style={textStyles.articleHeaderText}>Aspekt 2</Text>
              </View>
              <Text style={textStyles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo...
              </Text>
              <TouchableOpacity
                style={textStyles.moreBtn}
                onPress={() => this.props.navigation.navigate('ArticleScreen')}
              >
                <Text style={textStyles.moreTxt}>[ mehr...]</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={textStyles.card}>
            <View style={textStyles.article}>
              <View style={textStyles.articleHeader}>
                <Text style={textStyles.articleHeaderText}>Aspekt 3</Text>
              </View>
              <Text style={textStyles.paragraph}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo...
              </Text>
              <TouchableOpacity
                style={textStyles.moreBtn}
                onPress={() => this.props.navigation.navigate('ArticleScreen')}
              >
                <Text style={textStyles.moreTxt}>[ mehr...]</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default psychologyMenuScreen;

const styles = StyleSheet.create({});
