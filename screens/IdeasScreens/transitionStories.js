import React from 'react';
import {Text, Image, View, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import SingleStory from '../../components/transitionStoriesComponents/singleStory';
import {
  TransitionStoryLuisa,
  TransitionStoryMichal,
  TransitionStoryLenhart
} from './transitionStories/transitionStoryModal';
import TransitionStoryTobias from './transitionStories/transitionStoryTobias';
import TransitionStoryBram from './transitionStories/transitionStoryBram';
import TransitionStoryCynthia from './transitionStories/transitionStoryCynthia';
import TransitionStoryPeterBoch from './transitionStories/transitionStoryPeterBoch';
import TransitionStoryBritt from './transitionStories/transitionStoryBritt';
import TransitionStoryYan from './transitionStories/transitionStoryYan';
import TransitionStoryPeter from './transitionStories/transitionStroryPeterUlbrich';
import TransitionStoryAlexandra from './transitionStories/transitionStoryAlexandra';
import TransitionStorySoeren from './transitionStories/transitionStorySoeren';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class TransitionStories extends React.Component {
  state = {
    storyTobias: false,
    storyCynthia: false,
    storyPeterBoch: false,
    storyBritt: false,
    storyYan: false,
    storyPeterUlbrich: false,
    storyAlexandra: false,
    storySoeren: false,
    storyLuisa: false,
    storyMichal: false,
    storyLenhart: false,
    storyBram: false
  };
  render() {
    return (
      <ScrollableScreenContainer>
        <TransitionStoryTobias
          isVisible={this.state.storyTobias}
          close={() => {
            this.setState({storyTobias: false});
          }}
        />
        <TransitionStoryBram
          isVisible={this.state.storyBram}
          close={() => {
            this.setState({storyBram: false});
          }}
        />
        <TransitionStoryCynthia
          isVisible={this.state.storyCynthia}
          close={() => {
            this.setState({storyCynthia: false});
          }}
        />
        <TransitionStoryPeterBoch
          isVisible={this.state.storyPeterBoch}
          close={() => {
            this.setState({storyPeterBoch: false});
          }}
        />
        <TransitionStoryBritt
          isVisible={this.state.storyBritt}
          close={() => {
            this.setState({storyBritt: false});
          }}
        />
        <TransitionStoryYan
          isVisible={this.state.storyYan}
          close={() => {
            this.setState({storyYan: false});
          }}
        />
        <TransitionStoryPeter
          isVisible={this.state.storyPeterUlbrich}
          close={() => {
            this.setState({storyPeterUlbrich: false});
          }}
        />
        <TransitionStorySoeren
          isVisible={this.state.storySoeren}
          close={() => {
            this.setState({storySoeren: false});
          }}
        />
        <TransitionStoryAlexandra
          isVisible={this.state.storyAlexandra}
          close={() => {
            this.setState({storyAlexandra: false});
          }}
        />
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
          image={require('../../assets/images/avatarMale.jpg')}
          title={'Medizin Studium'}
          name={'Tobias Almasi'}
          onPress={() => this.setState({storyTobias: true})}
        ></SingleStory>

        <SingleStory
          quote={
            'Manchmal fühlte sich diese Tanzwelt an, als würde man in einer Blase leben. Ich wußte immer, ich möchte auch einmal in der richtigen Welt arbeiten'
          }
          image={require('../../assets/images/bramKoch.jpg')}
          title={'Heilerziehungspfleger '}
          name={'Bram Koch'}
          onPress={() => this.setState({storyBram: true})}
        ></SingleStory>

        <SingleStory
          quote={'lernen zu dürfen ohne sich selbst dabei eine Blöße zu geben'}
          image={require('../../assets/images/cynthiaBarcomi.jpg')}
          title={'Konditorin'}
          name={'Cynthia Barcomi'}
          onPress={() => this.setState({storyCynthia: true})}
        ></SingleStory>
        <SingleStory
          quote={
            ' "Eine harte, eine ehrliche Entscheidung“, die er bis heute nicht bereut. „Ich habe sie alleine getroffen, niemand hat mich dazu gedrängt.“'
          }
          image={require('../../assets/images/peterBoch.jpg')}
          title={'Oberbürgermeister'}
          name={'Peter Boch'}
          onPress={() => this.setState({storyPeterBoch: true})}
        ></SingleStory>
        <SingleStory
          quote={
            'Aus dem schüchternen Mädchen von einst ist eine selbstbewusste Frau mit ansteckend fröhlichem Lachen geworden, eine zweifache Mutter mit intakter Familie. Was beweist: Es gibt auch ein erfülltes Leben nach dem Tanz.'
          }
          image={require('../../assets/images/brittFolk.jpeg')}
          title={'Physiotherapeutin'}
          name={'Britt Folk'}
          onPress={() => this.setState({storyBritt: true})}
        ></SingleStory>
        <SingleStory
          quote={
            ' "Im Studio entstehen die Kreationen aus Licht, Farbe, Idee, Komposition, ob Porträts oder Theaterplakate.“ '
          }
          image={require('../../assets/images/yanRevazov.jpg')}
          title={'Fotograf'}
          name={'Yan Revazov'}
          onPress={() => this.setState({storyYan: true})}
        ></SingleStory>
        <SingleStory
          quote={
            ' Offen, neugierig zu sein, rät er jungen Tänzern. Inzwischen sammelt er Kunst, Fotos, Malerei, Objekte, Collagen - und bleibt selbst neugierig, was die Zukunft noch so bringen mag.'
          }
          image={require('../../assets/images/avatarMale.jpg')}
          title={'Aufnahmeleiter'}
          name={'Peter Ulbrich'}
          onPress={() => this.setState({storyPeterUlbrich: true})}
        ></SingleStory>
        <SingleStory
          quote={
            '„Ich kann nur jeden Tänzer und jede Tänzerin ermutigen, entspannt und erhobenen Hauptes in die nächste Berufswelt hineinzugehen“ '
          }
          image={require('../../assets/images/avatarMale.jpg')}
          title={'Lehrer'}
          name={'Sören Swart'}
          onPress={() => this.setState({storySoeren: true})}
        ></SingleStory>
        <SingleStory
          quote={
            '"Ich wende sie an wie eine Choreografie, kann sie fließend verbinden" '
          }
          image={require('../../assets/images/avatarFemale.jpg')}
          title={'Kosmetikerin'}
          name={'Alexandra Post'}
          onPress={() => this.setState({storyAlexandra: true})}
        ></SingleStory>

        <SingleStory
          quote={
            ' "In eine Rolle zu steigen, das hilft bei der Interpretation. Und bei der Kreativität" '
          }
          image={require('../../assets/images/avatarMale.jpg')}
          title={'Ich will in Berlin bleiben'}
          name={'Michael Fatura'}
          onPress={() => this.setState({storyMichal: true})}
        />
        <SingleStory
          quote={
            ' "Das hält einen am Leben, sich selber neuen Situationen auszusetzen" '
          }
          image={require('../../assets/images/avatarFemale.jpg')}
          title={'Immer auf der Suche'}
          name={'Luisa Sancho Escanero'}
          onPress={() => this.setState({storyLuisa: true})}
        />
        <SingleStory
          quote={
            ' "Ein Osteopath ist nicht alleine, er hat immer ein Gegenüber" '
          }
          image={require('../../assets/images/avatarMale.jpg')}
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
