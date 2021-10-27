import React from 'react';
import {Text, Image, View, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import SingleStory from '../../components/transitionStoriesComponents/singleStory';
import {
  TransitionStoryLuisa,
  TransitionStoryMichal,
  TransitionStoryLenhart
} from './transitionStoryModal';

const windowHeight = Dimensions.get('window').height;

class TransitionStories extends React.Component {
  state = {
    storyLuisa: false,
    storyMichal: false,
    storyLenhart: false
  };
  render() {
    return (
      <ScrollableScreenContainer>
        <TransitionStoryLuisa
          isVisible={this.state.storyLuisa}
          close={() => {
            this.setState({storyLuisa: false});
          }}
        />
        <TransitionStoryMichal
          isVisible={this.state.storyMichal}
          close={() => {
            this.setState({storyMichal: false});
          }}
        />
        <TransitionStoryLenhart
          isVisible={this.state.storyLenhart}
          close={() => {
            this.setState({storyLenhart: false});
          }}
        />
        <ArticleHeader textStyle={{letterSpacing: 2}}>
          Transition Stories
        </ArticleHeader>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: windowHeight > 600 ? 28 : 22,
              fontWeight: 'bold',
              color: colors.accentDark,
              padding: 18,
              marginLeft: -40,
              marginTop: 150
            }}
          >
            Tänzer berichten:
          </Text>
          <Image
            style={{
              width: windowHeight > 600 ? 180 : 160,
              height: windowHeight > 600 ? 180 : 160,
              borderRadius: 90,
              margin: 16,
              marginLeft: -100
            }}
            source={require('../../assets/illustrations/coffee.png')}
          />
        </View>

        <SingleStory
          quote={
            ' "In eine Rolle zu steigen, das hilft bei der Interpretation. Und bei der Kreativität" '
          }
          image={require('../../assets/images/portrait.jpg')}
          title={'Ich will in Berlin bleiben'}
          name={'Michael Fatura'}
          onPress={() => this.setState({storyMichal: true})}
        />
        <SingleStory
          quote={
            ' "Das hält einen am Leben, sich selber neuen Situationen auszusetzen" '
          }
          image={require('../../assets/images/portrait3.jpg')}
          title={'Immer auf der Suche'}
          name={'Luisa Sancho Escanero'}
          onPress={() => this.setState({storyLuisa: true})}
        />
        <SingleStory
          quote={
            ' "Ein Osteopath ist nicht alleine, er hat immer ein Gegenüber" '
          }
          image={require('../../assets/images/portrait2.jpg')}
          title={'Versuchung'}
          name={'Hans-Georg Lenhart'}
          onPress={() => this.setState({storyLenhart: true})}
        />
      </ScrollableScreenContainer>
    );
  }
}

TransitionStories.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.accentPale
  },
  headerTintColor: colors.text,
  title: 'Transition Stories'
};

export default TransitionStories;
