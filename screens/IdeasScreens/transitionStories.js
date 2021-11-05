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

        <SingleStory
          quote={
            '... Elisabeth Exner-Grave, eine Tanzmedizinerin. Sie ist Mitschuld daran, dass er nun selbst Mediziner werden will. '
          }
          image={require('../../assets/images/portrait1.jpg')}
          title={'Medizin Studium'}
          name={'Tobias Almasi'}
        ></SingleStory>

        <SingleStory
          quote={
            'Manchmal fühlte sich diese Tanzwelt an, als würde man in einer Blase leben. Ich wußte immer, ich möchte auch einmal in der richtigen Welt arbeiten'
          }
          image={require('../../assets/images/portrait4.jpg')}
          title={'Heilerziehungspfleger '}
          name={'Bram Koch'}
        ></SingleStory>

        <SingleStory
          quote={'lernen zu dürfen ohne sich selbst dabei eine Blöße zu geben'}
          image={require('../../assets/images/portrait5.jpg')}
          title={'Konditorin'}
          name={'Cynthia Barcomi'}
        ></SingleStory>
        <SingleStory
          quote={
            ' "Eine harte, eine ehrliche Entscheidung“, die er bis heute nicht bereut. „Ich habe sie alleine getroffen, niemand hat mich dazu gedrängt.“'
          }
          image={require('../../assets/images/portrait6.jpg')}
          title={'Oberbürgermeister'}
          name={'Peter Boch'}
        ></SingleStory>
        <SingleStory
          quote={
            'Aus dem schüchternen Mädchen von einst ist eine selbstbewusste Frau mit ansteckend fröhlichem Lachen geworden, eine zweifache Mutter mit intakter Familie. Was beweist: Es gibt auch ein erfülltes Leben nach dem Tanz.'
          }
          image={require('../../assets/images/portrait7.jpg')}
          title={'Physiotherapeutin'}
          name={'Britt Folk'}
        ></SingleStory>
        <SingleStory
          quote={
            ' "Im Studio entstehen die Kreationen aus Licht, Farbe, Idee, Komposition, ob Porträts oder Theaterplakate.“ '
          }
          image={require('../../assets/images/portrait8.jpg')}
          title={'Fotograf'}
          name={'Yan Revazov'}
        ></SingleStory>
        <SingleStory
          quote={
            ' Offen, neugierig zu sein, rät er jungen Tänzern. Inzwischen sammelt er Kunst, Fotos, Malerei, Objekte, Collagen - und bleibt selbst neugierig, was die Zukunft noch so bringen mag.'
          }
          image={require('../../assets/images/portrait9.jpg')}
          title={'Aufnahmeleiter'}
          name={'Peter Ulbrich'}
        ></SingleStory>
        <SingleStory
          quote={
            '„Ich kann nur jeden Tänzer und jede Tänzerin ermutigen, entspannt und erhobenen Hauptes in die nächste Berufswelt hineinzugehen“ '
          }
          image={require('../../assets/images/portrait10.jpg')}
          title={'Lehrer'}
          name={'Sören Swart'}
        ></SingleStory>
        <SingleStory
          quote={
            '"Ich wende sie an wie eine Choreografie, kann sie fließend verbinden" '
          }
          image={require('../../assets/images/portrait11.jpg')}
          title={'Kosmetikerin'}
          name={'Alexandra Post'}
        ></SingleStory>

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

// <SingleStory
// quote={''}
// image={require('')}
// title={''}
// name={''}></SingleStory>
