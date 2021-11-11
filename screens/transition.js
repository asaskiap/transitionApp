import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import ArticleHeader from '../components/articleComponents/articleHeader';
import ArticleIllustration from '../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../components/articleComponents/articleSubHeader';
import Paragraph from '../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../components/scrollableScreen';
import Menu from '../components/menu';
import Colors from '../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../components/buttons/headerButton';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class Transition extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Die Transition',
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
    return (
      <ScrollableScreenContainer>
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          {...this.props}
        ></Menu>
        <ArticleHeader textStyle={{textAlign: 'center'}}>
          Ein Leben nach dem Tanz
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 300}}
          image={require('../assets/illustrations/transitionIllustrations/hurry.png')}
        />
        <ArticleSubHeader>Was bedeutet Transition?</ArticleSubHeader>
        <Paragraph>
          Unser Verständnis von Transition ist, dass jeder Mensch im Leben durch
          verschiedenste Momente der Veränderung geht. Transition meint also die
          Phase in der wir von einem Zustand in unserem Leben in den nächsten
          übergehen. In manchen Fällen dauert dies nur ganz kurz, in anderen
          Momenten braucht es eine längere Zeit. Es ist jedoch immer ein Prozess
          der Veränderung, der Entwicklung und des persönlichen Wachstums.
        </Paragraph>
        <Paragraph>
          Für TänzerInnen ist der Prozess der Transition vom Tanzen hin zu einer
          neuen Profession jedoch eine ganz besondere Herausforderung, da tanzen
          meist nicht nur einen Teil, sondern alle Bereiche des bisherigen
          Lebens umfasst. Daher gehören zu diesem besonderen Prozess der
          Veränderung meist verschiedenste Gefühle und emotionale Zustände und
          es bedarf meist viel Zeit und Raum um zunächst bereit für diesen
          Prozess zu sein und danach benötigt es nochmal Zeit um eine
          Orientierung und Richtung zu finden.
        </Paragraph>
        <Paragraph>
          Im besten Falle gibt es bereits während der Ausbildung und Karriere
          als TänzerIn bereits immer wieder Momente und Zeit der Orientierung,
          um sich selbst, seine Interessen und Fähigkeiten gut zu kennen, um in
          dem Moment der Entscheidung für einen neuen Weg sich seiner sicher zu
          sein, dass dies der richtige Weg für einen ist. Sollte dieser Prozess
          nicht schon während der aktiven Karriere stattgefunden haben, muss
          dieser am Ende der Karriere durchlaufen werden – was meist mit mehr
          Verunsicherungen, Ängsten und Trauer einhergeht. Wir als Stiftung TANZ
          helfen in all diesen Momenten; sei es während der Ausbildung, der
          Karriere oder am Ende des Tänzer-Daseins.
        </Paragraph>

        <ArticleHeader
          textStyle={{
            fontSize: windowHeight > 600 ? 28 : 26,
            letterSpacing: windowHeight > 600 ? 2 : 1,
            textAlign: 'center'
          }}
        >
          Entwicklung einer Vision für ein Leben nach dem Tanz
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 300 : 240}}
          image={require('../assets/illustrations/transitionIllustrations/meditating_transition.png')}
        ></ArticleIllustration>

        <TouchableOpacity
          onPress={() => this.setState({vision: !this.state.vision})}
        >
          <ArticleSubHeader
            textStyle={{fontWeight: 'bold', marginVertical: 10}}
          >
            Vision ∇
          </ArticleSubHeader>
        </TouchableOpacity>
        {this.state.vision && (
          <>
            <Paragraph>
              Zur Entwicklung einer Vision für das eigene Leben und die weitere
              berufliche Zukunft, kann eine Analyse der eigenen Bedürfnisse,
              Interessen, Fähigkeiten und Werte sinnvoll. Da sich meist aus der
              Kombination dieser 4 Faktoren bereits ein Bild abzeichnet welcher
              berufliche Bereich am besten zu einem passt. Mal kann dies sehr
              offensichtlich sein und zeigt sich schnell wohin es gehen soll,
              manchmal braucht aber auch das Entdecken und Formulieren dieser
              Bereiche seine Zeit und seinen Ort. Hierfür bietet die Stiftung
              Tanz einen Ort in dem die Möglichkeit besteht diese zu definieren.
            </Paragraph>
          </>
        )}

        <TouchableOpacity
          onPress={() => this.setState({needs: !this.state.needs})}
        >
          <ArticleSubHeader
            textStyle={{fontWeight: 'bold', marginVertical: 10}}
          >
            Needs ∇
          </ArticleSubHeader>
        </TouchableOpacity>
        {this.state.needs && (
          <Paragraph>
            An einem bestimmten Punkt im Leben entdeckt man, dass man sich
            selbst verändert hat, indem man neue Bedürfnisse an sich feststellt.
            Das kann im Leben eines Tänzers/-in beispielsweise der Moment sein,
            an dem man merkt, dass man das Tanzen zwar sehr liebt, aber auch
            mehr Zeit, mehr Sicherheit, mehr Raum für sein Privatleben oder eine
            bedeutungsvolle Aufgabe haben möchte. Dies ist meist der Moment in
            dem die eigenen Bedürfnisse beginnen stets mehr in unterschiedliche
            Richtungen zu gehen und man beginnt zu zweifeln ob das Leben auf der
            Bühne einen dauerhaft glücklich machen wird. Meist kommt hiermit der
            erste Stein der Veränderung ins Rollen und man beginnt sich über
            alternative Möglichkeiten und Lebensmodelle Gedanken zu machen.
            Dieser Prozess ist ganz wichtig und es bedarf Zeit, Ruhe und
            Selbstreflexion um sich mit diesen Bedürfnissen und Wünschen
            intensiv auseinander zu setzen; denn sie sagen einem was man braucht
            um dauerhaft ein erfülltes und glückliches Leben zu führen.
          </Paragraph>
        )}

        <TouchableOpacity
          onPress={() => this.setState({interests: !this.state.interests})}
        >
          <ArticleSubHeader
            textStyle={{fontWeight: 'bold', marginVertical: 10}}
          >
            Interests ∇
          </ArticleSubHeader>
        </TouchableOpacity>

        {this.state.interests && (
          <>
            <ArticleIllustration
              imageStyle={{maxHeight: windowHeight > 600 ? 260 : 220}}
              image={require('../assets/illustrations/transitionIllustrations/reading-side_transition.png')}
            ></ArticleIllustration>
            <Paragraph>
              Die eigenen Interessen zu kennen ist meist gar nicht so leicht wie
              es auf Anhieb erscheinen mag. Und doch sind sie einer der
              grundlegenden Elemente beim Finden eines neuen beruflichen Weges.
              Daher sollte man sich die Möglichkeit des Nachdenkens,
              Ausprobierens, Erkundens und Reflektieren geben. Hierzu kann man
              über Fragen nachdenken wie: „was interessiert mich wirklich?“,
              „was kann meinem Leben Erfüllung geben?“ oder „Wo kann ich mich am
              besten selbst verwirklichen?“. Meist erfährt man in dem
              Herausfinden seiner Interessen eine ganze Menge wichtiger Dinge
              über sich selbst. Dies ist ein ganz besonderer Prozess der Zeit
              mit und zu sich selbst.
            </Paragraph>
          </>
        )}

        <TouchableOpacity
          onPress={() => this.setState({skills: !this.state.skills})}
        >
          <ArticleSubHeader
            textStyle={{fontWeight: 'bold', marginVertical: 10}}
          >
            Skills ∇
          </ArticleSubHeader>
        </TouchableOpacity>

        {this.state.skills && (
          <Paragraph>
            TänzerInnen bringen viele Fähigkeiten bereits mit, die sich gut auf
            andere Bereiche anwenden lassen oder gar in diesen gefordert werden.
            TänzerInnen verfügen über wichtige Eigenschaften wie Kreativität,
            Flexibilität, Genauigkeit, physische Wahrnehmung, Feingefühl für die
            Menschen um einen herum, Sprachen oder interkulturelles Miteinander.
            Dies sind alles wichtige Eigenschaften, welche in vielen beruflichen
            Bereichen sehr gefragt sind. Eine Analyse der eigenen Fähigkeiten
            und Stärken, kann daher gute Einsichten und Erkenntnisse bringen,
            welcher berufliche Bereich gut.
          </Paragraph>
        )}

        <TouchableOpacity
          onPress={() => this.setState({values: !this.state.values})}
        >
          <ArticleSubHeader
            textStyle={{fontWeight: 'bold', marginVertical: 10}}
          >
            Values ∇
          </ArticleSubHeader>
        </TouchableOpacity>

        {this.state.values && (
          <>
            <ArticleIllustration
              imageStyle={{maxHeight: windowHeight > 600 ? 300 : 240}}
              image={require('../assets/illustrations/transitionIllustrations/coffee_transition.png')}
            ></ArticleIllustration>
            <Paragraph>
              Die Erfüllung die wir in einer Tätigkeit erleben hängt meist stark
              zusammen mit den persönlichen Werten die wir mit dieser Tätigkeit
              verbinden. Unsere persönlichen Werte definieren und unterscheiden
              uns von anderen. Wenn man eine Tätigkeit gefunden hat, in der es
              möglich ist die eigenen Werte aktiv zu leben und zu praktizieren,
              korreliert dies sehr stark mit Lebensglück und Erfüllung. Eine
              Möglichkeit um Zugang zu den eigenen Werten zu bekommen, ist die
              Analyse von dem Wert der Tanz für einen hat. Ist es die
              künstlerische Tätigkeit? Ist es das Arbeiten am Theater? Ist es
              die Ästhetik? Ist es andere Menschen glücklich zu machen? Ist es
              die Arbeit mit dem eigenen Körper? Ist es die Arbeit im Team? Ist
              es das Auftreten und die Aufmerksamkeit die man bekommt? Etc. Eine
              genaue Auseinandersetzung mit den eigenen Werten, eröffnet einem
              meist schnell neue Perspektiven auf andere Tätigkeitsfelder in
              denen diese Werte auf andere, aber ähnlich erfüllende Weise gelebt
              werden können.
            </Paragraph>
          </>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default Transition;
