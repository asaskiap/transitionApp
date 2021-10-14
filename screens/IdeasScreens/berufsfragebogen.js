import React from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

import {Slider} from 'react-native-elements';
import colors from '../../assets/colors';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ButtonPrimary from '../../components/buttons/buttonPrimary';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const SliderComponent = (props) => {
  return (
    <>
      <Text style={{fontSize: 14, textAlign: 'center'}}>{props.children}</Text>
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
        <Text style={{alignSelf: 'flex-end'}}>Ausgewählt: {props.val}</Text>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 32
          }}
        >
          <Text
            style={{fontSize: 14, fontWeight: 'bold', color: colors.primary}}
          >
            1: trifft gar nicht zu
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: 'bold', color: colors.primary}}
          >
            5: trifft voll und ganz zu
          </Text>
        </View>

        <View>
          <SliderComponent val={this.props.a} setVal={this.props.setA}>
            {this.props.element1}
          </SliderComponent>

          <SliderComponent val={this.props.b} setVal={this.props.setB}>
            {this.props.element2}
          </SliderComponent>

          <SliderComponent val={this.props.c} setVal={this.props.setC}>
            {this.props.element3}
          </SliderComponent>

          <SliderComponent val={this.props.d} setVal={this.props.setD}>
            {this.props.element4}
          </SliderComponent>

          <SliderComponent val={this.props.e} setVal={this.props.setE}>
            {this.props.element5}
          </SliderComponent>
        </View>
      </View>
    );
  }
}

const Question1 = (props) => {
  return (
    <Question
      element1={'In einer Werkstatt arbeiten'}
      element2={'Elektrische Geräte einbauen und bedienen'}
      element3={'Computer einrichten'}
      element4={'Im Garten arbeiten'}
      element5={'Handwerklich arbeiten'}
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
    >
      Meine Interessen sind...
    </Question>
  );
};

const Question2 = (props) => {
  return (
    <Question
      element1={'Wissenschaftliche Bücher und Artikel lesen'}
      element2={'Ein Problem intensiv analysieren'}
      element3={'In einem Forschungsinstitut arbeiten'}
      element4={'Einen wissenschaftlichen Kongress besuchen'}
      element5={'Experimente durchführen'}
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
    >
      Meine Interessen sind...
    </Question>
  );
};

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
    currE: 0,
    displayQ1: true,
    displayQ2: false
  };

  handleSubmit = () => {
    this.setState({
      handwerklich: this.state.handwerklich + this.state.currA,
      forschend: this.state.forschend + this.state.currB,
      künstlerisch: this.state.künstlerisch + this.state.currC,
      sozial: this.state.sozial + this.state.currD,
      wirtschaftlich: this.state.wirtschaftlich + this.state.currE,
      displayQ1: false,
      displayQ2: true
    });
  };

  render() {
    return (
      <ScrollableScreenContainer>
        <ArticleHeader>Berufsfragebogen</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/messy.png')}
          imageStyle={{width: '90%', height: 300}}
        />
        {this.state.displayQ1 && (
          <Question1
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
          />
        )}

        {this.state.displayQ2 && (
          <Question2
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
          />
        )}

        <ButtonPrimary
          onPress={this.handleSubmit}
          backgroundStyle={{backgroundColor: colors.accentDark}}
          textStyle={{color: colors.textLight}}
        >
          WEITER
        </ButtonPrimary>
        <Text>{this.state.handwerklich}</Text>
      </ScrollableScreenContainer>
    );
  }
}

export default Berufsfragebogen;
