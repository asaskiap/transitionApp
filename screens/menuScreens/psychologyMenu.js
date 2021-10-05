import React from 'react';

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import textStyles from '../../styles/generalTextStyles';
import imageStyles from './../../styles/imageStyles';

import Menu from '../../components/menu';
import colors from '../../assets/colors';
import MyHeaderButton from '../../components/buttons/headerButton';
import MoreButton from '../../components/buttons/moreButton';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import Card from '../../components/articleComponents/card';

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
            source={require('./../../assets/images/psychologyImages/freeSwing.jpg')}
            style={imageStyles.headerBackgroundImage}
          >
            <View style={textStyles.screenHeader}>
              <Text style={textStyles.screenHeaderText}>
                Psychologische Aspekte
              </Text>
            </View>
          </ImageBackground>

          <Card>
            <Article>
              <ArticleHeader>Aspekt 1</ArticleHeader>
              <Paragraph>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </Paragraph>
              <MoreButton
                onPress={() => this.props.navigation.navigate('Abschied')}
              />
            </Article>
          </Card>

          <Card>
            <Article>
              <ArticleHeader>Aspekt 2</ArticleHeader>
              <Paragraph>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo...
              </Paragraph>
              <MoreButton
                onPress={() => this.props.navigation.navigate('ArticleScreen')}
              />
            </Article>
          </Card>

          <Card>
            <Article>
              <ArticleHeader>Aspekt 3</ArticleHeader>
              <Paragraph>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo...
              </Paragraph>
              <MoreButton
                onPress={() => this.props.navigation.navigate('ArticleScreen')}
              />
            </Article>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default psychologyMenuScreen;

const styles = StyleSheet.create({});
