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
    const eng = this.props.navigation.state.params.eng;
    return (
      <ScrollableScreenContainer>
        <TransitionStoryTobias
          isVisible={this.state.storyTobias}
          close={() => {
            this.setState({storyTobias: false});
          }}
          eng={eng}
        />
        <TransitionStoryBram
          isVisible={this.state.storyBram}
          close={() => {
            this.setState({storyBram: false});
          }}
          eng={eng}
        />
        <TransitionStoryCynthia
          isVisible={this.state.storyCynthia}
          close={() => {
            this.setState({storyCynthia: false});
          }}
          eng={eng}
        />
        <TransitionStoryPeterBoch
          isVisible={this.state.storyPeterBoch}
          close={() => {
            this.setState({storyPeterBoch: false});
          }}
          eng={eng}
        />
        <TransitionStoryBritt
          isVisible={this.state.storyBritt}
          close={() => {
            this.setState({storyBritt: false});
          }}
          eng={eng}
        />
        <TransitionStoryYan
          isVisible={this.state.storyYan}
          close={() => {
            this.setState({storyYan: false});
          }}
          eng={eng}
        />
        <TransitionStoryPeter
          isVisible={this.state.storyPeterUlbrich}
          close={() => {
            this.setState({storyPeterUlbrich: false});
          }}
          eng={eng}
        />
        <TransitionStorySoeren
          isVisible={this.state.storySoeren}
          close={() => {
            this.setState({storySoeren: false});
          }}
          eng={eng}
        />
        <TransitionStoryAlexandra
          isVisible={this.state.storyAlexandra}
          close={() => {
            this.setState({storyAlexandra: false});
          }}
          eng={eng}
        />
        <TransitionStoryLuisa
          isVisible={this.state.storyLuisa}
          close={() => {
            this.setState({storyLuisa: false});
          }}
          eng={eng}
        />
        <TransitionStoryMichal
          isVisible={this.state.storyMichal}
          close={() => {
            this.setState({storyMichal: false});
          }}
          eng={eng}
        />
        <TransitionStoryLenhart
          isVisible={this.state.storyLenhart}
          close={() => {
            this.setState({storyLenhart: false});
          }}
          eng={eng}
        />
        <ArticleHeader>Transition Stories</ArticleHeader>

        <SingleStory
          quote={
            eng
              ? "Because he never learned to take things lightly, he is now studying the hardest thing: human medicine at Berlin's Charit?? hospital, a six-year course of study. "
              : '... Elisabeth Exner-Grave, eine Tanzmedizinerin... ist Mitschuld daran, dass er nun selbst Mediziner werden will. '
          }
          image={require('../../assets/images/TobiasAlmasi.jpg')}
          title={eng ? 'Medical studies' : 'Medizin Studium'}
          name={'Tobias Almasi'}
          onPress={() => this.setState({storyTobias: true})}
          eng={eng}
        ></SingleStory>

        <SingleStory
          quote={
            eng
              ? "Sometimes this dance world felt like living in a bubble. I always knew I wanted to work in the 'real world' one day. It then also felt like a second 'growing up'. "
              : 'Manchmal f??hlte sich diese Tanzwelt an, als w??rde man in einer Blase leben. Ich wu??te immer, ich m??chte auch einmal in der richtigen Welt arbeiten'
          }
          image={require('../../assets/images/bramKoch.jpg')}
          title={eng ? 'Curative education nurse ' : 'Heilerziehungspfleger '}
          name={'Bram Koch'}
          onPress={() => this.setState({storyBram: true})}
          eng={eng}
        ></SingleStory>

        <SingleStory
          quote={
            eng
              ? '...being allowed to learn without exposing herself.'
              : '...lernen zu d??rfen ohne sich selbst dabei eine Bl????e zu geben'
          }
          image={require('../../assets/images/cynthiaBarcomi.jpg')}
          title={eng ? 'Pastry chef' : 'Konditorin'}
          name={'Cynthia Barcomi'}
          onPress={() => this.setState({storyCynthia: true})}
          eng={eng}
        ></SingleStory>
        <SingleStory
          quote={
            eng
              ? " 'A tough decision, an honest decision,' which he still doesn't regret. 'I made it on my own, no one pushed me to do it.' "
              : ' "Eine harte, eine ehrliche Entscheidung???, die er bis heute nicht bereut. ???Ich habe sie alleine getroffen, niemand hat mich dazu gedr??ngt.???'
          }
          image={require('../../assets/images/peterBoch.jpg')}
          title={eng ? 'Lord Mayor' : 'Oberb??rgermeister'}
          name={'Peter Boch'}
          onPress={() => this.setState({storyPeterBoch: true})}
          eng={eng}
        ></SingleStory>
        <SingleStory
          quote={
            eng
              ? 'There is also a fulfilling life after dance. '
              : 'Es gibt auch ein erf??lltes Leben nach dem Tanz.'
          }
          image={require('../../assets/images/brittFolk.jpeg')}
          title={eng ? 'Physiotherapist' : 'Physiotherapeutin'}
          name={'Britt Folk'}
          onPress={() => this.setState({storyBritt: true})}
          eng={eng}
        ></SingleStory>
        <SingleStory
          quote={
            eng
              ? '"In the studio, the creations are made of light, color, idea, composition, whether portraits or theater posters."  '
              : ' "Im Studio entstehen die Kreationen aus Licht, Farbe, Idee, Komposition, ob Portr??ts oder Theaterplakate.??? '
          }
          image={require('../../assets/images/yanRevazov.jpg')}
          title={eng ? 'Photographer   ' : 'Fotograf'}
          name={'Yan Revazov'}
          onPress={() => this.setState({storyYan: true})}
          eng={eng}
        ></SingleStory>
        <SingleStory
          quote={
            eng
              ? 'Today, he thoroughly enjoys this status, traveling a lot, meeting interesting people and getting to know sometimes bizarre filming locations, "from the morgue to the archives of the Natural History Museum, from the millionaire\'s mansion to the brothel." '
              : ' Offen, neugierig zu sein, r??t er jungen T??nzern. '
          }
          image={require('../../assets/images/PeterUlbrich.jpg')}
          title={eng ? 'Recording manager' : 'Aufnahmeleiter'}
          name={'Peter Ulbrich'}
          onPress={() => this.setState({storyPeterUlbrich: true})}
          eng={eng}
        ></SingleStory>
        <SingleStory
          quote={
            eng
              ? '"I can only encourage every dancer to enter the next professional world relaxed and with their heads held high"'
              : '???Ich kann nur jeden T??nzer und jede T??nzerin ermutigen, entspannt und erhobenen Hauptes in die n??chste Berufswelt hineinzugehen??? '
          }
          image={require('../../assets/images/SoerenSwart.jpg')}
          title={eng ? 'Teacher' : 'Lehrer'}
          name={'S??ren Swart'}
          onPress={() => this.setState({storySoeren: true})}
          eng={eng}
        ></SingleStory>
        <SingleStory
          quote={
            eng
              ? 'She can put her skills as a dancer to good use, "especially with the massage holds," she says.  She also masters them faster than others. "I apply them like a choreography, can connect them fluently" '
              : '"Ich wende sie an wie eine Choreografie, kann sie flie??end verbinden" '
          }
          image={require('../../assets/images/AlexandraPost.png')}
          title={eng ? 'Beautician ' : 'Kosmetikerin'}
          name={'Alexandra Post'}
          onPress={() => this.setState({storyAlexandra: true})}
          eng={eng}
        ></SingleStory>

        <SingleStory
          quote={
            eng
              ? "It's like dancing: Getting into a role, that helps with interpretation. And with creativity."
              : ' "In eine Rolle zu steigen, das hilft bei der Interpretation. Und bei der Kreativit??t" '
          }
          image={require('../../assets/images/MichalFatura.jpg')}
          title={'Art director'}
          name={'Michael Fatura'}
          onPress={() => this.setState({storyMichal: true})}
          eng={eng}
        />
        <SingleStory
          quote={
            eng
              ? ' "That keeps you alive, exposing yourself to new situations." '
              : ' "Das h??lt einen am Leben, sich selber neuen Situationen auszusetzen" '
          }
          image={require('../../assets/images/LuisaEscanero.jpg')}
          title={eng ? 'Theater Scholar' : 'Theaterwissenschaftlerin'}
          name={'Luisa Sancho Escanero'}
          onPress={() => this.setState({storyLuisa: true})}
          eng={eng}
        />
        <SingleStory
          quote={
            eng
              ? '"What is it but to stand at the barre every day: to learn something additional, to learn something new, to check yourself again and again, to stay open"'
              : ' "Ein Osteopath ist nicht alleine, er hat immer ein Gegen??ber" '
          }
          image={require('../../assets/images/HGLenhart.jpg')}
          title={'Osteopath'}
          name={'Hans-Georg Lenhart'}
          onPress={() => this.setState({storyLenhart: true})}
          eng={eng}
        />
      </ScrollableScreenContainer>
    );
  }
}

TransitionStories.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.pieDarkBlue
  },
  headerTintColor: colors.textLight,
  title: 'Transition Stories',
  headerBackTitleVisible: false
};

export default TransitionStories;

// <SingleStory
// quote={''}
// image={require('')}
// title={''}
// name={''}></SingleStory>
