import React from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

import {Slider} from 'react-native-elements';
import colors from '../../assets/colors';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const SliderComponent = (props) => {
  return (
    <>
      <Text>{props.children}</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'center',
          marginVertical: 16
        }}
      >
        <Slider
          value={props.val}
          onValueChange={(value) => props.setVal(value)}
          minimumValue={0}
          maximumValue={5}
          step={1}
          thumbStyle={{
            backgroundColor: colors.secondary,
            width: 22,
            height: 22
          }}
        />
        <Text style={{alignSelf: 'flex-end'}}>Selected: {props.val}</Text>
      </View>
    </>
  );
};

class Question extends React.Component {
  render() {
    return (
      <View style={{width: '90%'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            margin: 18,
            textAlign: 'center'
          }}
        >
          {this.props.children}
        </Text>
        <View>
          <SliderComponent val={this.props.a} setVal={this.props.setA}>
            {this.props.element1}
          </SliderComponent>

          <SliderComponent val={this.props.b} setVal={this.props.setB}>
            {this.props.element2}
          </SliderComponent>

          <Text>{this.props.element3}</Text>
          <View
            style={{
              flex: 1,
              alignItems: 'stretch',
              justifyContent: 'center',
              marginVertical: 20
            }}
          >
            <Slider
              value={this.props.c}
              onValueChange={(value) => this.props.setC(value)}
              minimumValue={0}
              maximumValue={5}
              step={1}
              thumbStyle={{backgroundColor: colors.secondary}}
            />
            <Text style={{alignSelf: 'flex-end'}}>
              Selected: {this.props.c}
            </Text>
          </View>

          <Text>{this.props.element4}</Text>
          <View
            style={{
              flex: 1,
              alignItems: 'stretch',
              justifyContent: 'center',
              marginVertical: 20
            }}
          >
            <Slider
              value={this.props.d}
              onValueChange={(value) => this.props.setD(value)}
              minimumValue={0}
              maximumValue={5}
              step={1}
              thumbStyle={{backgroundColor: colors.secondary}}
            />
            <Text style={{alignSelf: 'flex-end'}}>
              Selected: {this.props.d}
            </Text>
          </View>

          <Text>{this.props.element5}</Text>
          <View
            style={{
              flex: 1,
              alignItems: 'stretch',
              justifyContent: 'center',
              marginVertical: 20
            }}
          >
            <Slider
              value={this.props.e}
              onValueChange={(value) => this.props.setE(value)}
              minimumValue={0}
              maximumValue={5}
              step={1}
              thumbStyle={{backgroundColor: colors.secondary}}
            />
            <Text style={{alignSelf: 'flex-end'}}>
              Selected: {this.props.e}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class Berufsfragebogen extends React.Component {
  state = {
    handwerklich: 0,
    forschend: 0,
    künstlerisch: 0,
    sozial: 0,
    wirtschaftlich: 0,
    verwaltend: 0,
    currA: 0,
    currB: 0,
    currC: 0,
    currD: 0,
    currE: 0
  };

  render() {
    return (
      <ScrollableScreenContainer>
        <ArticleHeader>Berufsfragebogen</ArticleHeader>
        {/* <ArticleIllustration
          image={require('../../assets/illustrations/messy.png')}
        /> */}

        <Question
          element1={'Aspect A'}
          element2={'Aspect B'}
          element3={'Aspect C'}
          element4={'Aspect D'}
          element5={'Aspect E'}
          a={this.state.currA}
          b={this.state.currB}
          c={this.state.currC}
          d={this.state.currD}
          e={this.state.currE}
          setA={(val) => this.setState({currA: val})}
          setB={(val) => this.setState({currB: val})}
          setC={(val) => this.setState({currC: val})}
          setD={(val) => this.setState({currD: val})}
          setE={(val) => this.setState({currE: val})}
        >
          Question 1
        </Question>

        <TouchableOpacity
          onPress={() =>
            this.setState({
              handwerklich: this.state.handwerklich + this.state.currA,
              forschend: this.state.forschend + this.state.currB,
              künstlerisch: this.state.künstlerisch + this.state.currC,
              sozial: this.state.sozial + this.state.currD,
              wirtschaftlich: this.state.wirtschaftlich + this.state.currE
            })
          }
        >
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollableScreenContainer>
    );
  }
}

export default Berufsfragebogen;

// component:

// state:
// - wekstatt: 0
// - el. geräte: 0
// - garten: 0
// - hand: 0
// - techn: 0

// --> for each question:
// sliders that alter each of
// state properties + add current
// value to final value (i.e. this.setState({ werkstatt += val});

// --> the individual text per question can be
// passed to processing component via props.children,
// the update function underneath each slider can be the same
// --> in order to switch the order: make each slider
// a seperate component that updates one of the
// state values

// --> in the end trigger conditional rendering
// of component by the highest score of a state
// property
