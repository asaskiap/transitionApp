import React from 'react';
import {Text, Image, View} from 'react-native';
import colors from '../../assets/colors';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import SingleStory from '../../components/transitionStoriesComponents/singleStory';
import {TransitionStoryLuisa} from './transitionStoryModal';

class TransitionStories extends React.Component {
  state = {
    storyLuisa: false
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
        <ArticleHeader>Transition Stories</ArticleHeader>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 28,
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
              width: 180,
              height: 180,
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
          onPress={() => console.log('pressed read more')}
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
          onPress={() => console.log('pressed read more')}
        />
      </ScrollableScreenContainer>
    );
  }
}

TransitionStories.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.psychology
  },
  headerTintColor: colors.text,
  title: 'Transition Stories'
};

export default TransitionStories;
