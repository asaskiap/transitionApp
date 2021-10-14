import React from 'react';
import {Text, View} from 'react-native';

import colors from '../../assets/colors';

import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import {
  Question1,
  Question2
} from '../../components/berufsfragebogenComponents/questionContent';
import ButtonPrimary from '../../components/buttons/buttonPrimary';

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
    currF: 0,
    displayQ1: true,
    displayQ2: false,
    displayQ3: false,
    displayQ4: false,
    displayQ5: false,
    displayQ6: false,
    displayResult: false,
    result: -1
  };

  reset = () => {
    this.setState({
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
      currF: 0,
      displayQ1: true,
      displayQ2: false,
      displayQ3: false,
      displayQ4: false,
      displayQ5: false,
      displayQ6: false,
      displayResult: false,
      result: -1
    });
  };

  resetCurrVariables() {
    this.setState({
      currA: 0,
      currB: 0,
      currC: 0,
      currD: 0,
      currE: 0,
      currF: 0
    });
  }

  updateValues() {
    this.setState({
      handwerklich: this.state.handwerklich + this.state.currA,
      forschend: this.state.forschend + this.state.currB,
      künstlerisch: this.state.künstlerisch + this.state.currC,
      sozial: this.state.sozial + this.state.currD,
      wirtschaftlich: this.state.wirtschaftlich + this.state.currE,
      verwaltend: this.state.verwaltend + this.state.currF
    });
    this.resetCurrVariables();
  }

  calculateResult = () => {
    const arr = [
      this.state.handwerklich,
      this.state.forschend,
      this.state.künstlerisch,
      this.state.sozial,
      this.state.wirtschaftlich,
      this.state.verwaltend
    ];
    console.log(arr);

    let max = Math.max(arr);
    console.log(max);
    let idx = arr.indexOf(max);
    console.log(idx);
    this.setState({
      result: idx
    });
  };

  handleSubmit1 = () => {
    this.updateValues();
    this.setState({
      displayQ1: false,
      displayQ2: true
    });
  };

  handleSubmit2 = () => {
    this.updateValues();
    this.calculateResult();
    this.setState({
      displayQ2: false,
      displayResult: true
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
            f={this.state.currF}
            setA={(val) => this.setState({currA: val})}
            setB={(val) => this.setState({currB: val})}
            setC={(val) => this.setState({currC: val})}
            setD={(val) => this.setState({currD: val})}
            setE={(val) => this.setState({currE: val})}
            setF={(val) => this.setState({currF: val})}
            handleSubmit={this.handleSubmit1}
          />
        )}

        {this.state.displayQ2 && (
          <Question2
            a={this.state.currA}
            b={this.state.currB}
            c={this.state.currC}
            d={this.state.currD}
            e={this.state.currE}
            f={this.state.currF}
            setA={(val) => this.setState({currA: val})}
            setB={(val) => this.setState({currB: val})}
            setC={(val) => this.setState({currC: val})}
            setD={(val) => this.setState({currD: val})}
            setE={(val) => this.setState({currE: val})}
            setF={(val) => this.setState({currF: val})}
            handleSubmit={this.handleSubmit2}
          />
        )}

        {this.state.displayResult && (
          <View>
            <Text>{this.state.handwerklich}</Text>
            <Text>{this.state.forschend}</Text>
            <Text>{this.state.künstlerisch}</Text>
            <Text>{this.state.sozial}</Text>
            <Text>{this.state.wirtschaftlich}</Text>
            <Text>{this.state.verwaltend}</Text>
            <Text>{this.state.result}</Text>
            <ButtonPrimary
              onPress={this.reset}
              backgroundStyle={{backgroundColor: colors.accentDark}}
              textStyle={{color: colors.textLight}}
            >
              Test neu starten
            </ButtonPrimary>
          </View>
        )}
      </ScrollableScreenContainer>
    );
  }
}

export default Berufsfragebogen;
