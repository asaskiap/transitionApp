import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

import colors from '../../assets/colors';

import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import {
  Question1,
  Question2
} from '../../components/berufsfragebogenComponents/questionContent';
import ButtonPrimary from '../../components/buttons/buttonPrimary';
import PieLegende from '../../components/berufsfragebogenComponents/pieLegende';
import {
  Handwerklich,
  Künstlerisch,
  Forschend,
  Verwaltend,
  Sozial,
  Wirtschaftlich
} from '../../components/berufsfragebogenComponents/textAboutYou';

class Berufsfragebogen extends React.Component {
  state = {
    displayIllustration: true,
    handwerklich: 1,
    forschend: 1,
    künstlerisch: 1,
    sozial: 1,
    wirtschaftlich: 1,
    verwaltend: 1,
    currA: 1,
    currB: 1,
    currC: 1,
    currD: 1,
    currE: 1,
    currF: 1,
    displayQ1: true,
    displayQ2: false,
    displayQ3: false,
    displayQ4: false,
    displayQ5: false,
    displayQ6: false,
    displayResult: false,
    result: -1,
    pieData: []
  };

  createPieData = () => {
    this.setState({
      pieData: [
        {
          value: this.state.handwerklich,
          svg: {fill: colors.pieBlue},
          key: 0
        },
        {value: this.state.forschend, svg: {fill: colors.pieGreen}, key: 1},
        {
          value: this.state.künstlerisch,
          svg: {fill: colors.pieDarkBlue},
          key: 2
        },
        {value: this.state.sozial, svg: {fill: colors.pieOrange}, key: 3},
        {
          value: this.state.wirtschaftlich,
          svg: {fill: colors.pieYellow},
          key: 4
        },
        {
          value: this.state.verwaltend,
          svg: {fill: colors.piePink},
          key: 5
        }
      ]
    });
  };

  reset = () => {
    this.setState({
      displayIllustration: true,
      handwerklich: 1,
      forschend: 1,
      künstlerisch: 1,
      sozial: 1,
      wirtschaftlich: 1,
      verwaltend: 1,
      currA: 1,
      currB: 1,
      currC: 1,
      currD: 1,
      currE: 1,
      currF: 1,
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

  handleSubmit1 = () => {
    this.updateValues();
    this.setState({
      displayQ1: false,
      displayQ2: true
    });
  };

  handleSubmit2 = () => {
    this.updateValues();
    this.createPieData();
    this.setState({
      displayQ2: false,
      displayIllustration: false,
      displayResult: true
    });
  };

  render() {
    return (
      <ScrollableScreenContainer>
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
            <ArticleHeader
              containerStyle={{
                marginTop: 5
              }}
              textStyle={{
                backgroundColor: colors.secondaryLight,
                fontSize: 24,
                padding: 10
              }}
            >
              Mein Ergebnis
            </ArticleHeader>

            <PieChart style={{height: 200}} data={this.state.pieData} />
            <PieLegende />

            {this.state.handwerklich >= this.state.forschend &&
              this.state.handwerklich >= this.state.künstlerisch &&
              this.state.handwerklich >= this.state.sozial &&
              this.state.handwerklich >= this.state.wirtschaftlich &&
              this.state.handwerklich >= this.state.verwaltend && (
                <Handwerklich />
              )}

            {this.state.forschend >= this.state.handwerklich &&
              this.state.forschend >= this.state.künstlerisch &&
              this.state.forschend >= this.state.sozial &&
              this.state.forschend >= this.state.wirtschaftlich &&
              this.state.forschend >= this.state.verwaltend && <Forschend />}

            {this.state.künstlerisch >= this.state.handwerklich &&
              this.state.künstlerisch >= this.state.forschend &&
              this.state.künstlerisch >= this.state.sozial &&
              this.state.künstlerisch >= this.state.wirtschaftlich &&
              this.state.künstlerisch >= this.state.verwaltend && (
                <Künstlerisch />
              )}

            {this.state.sozial >= this.state.handwerklich &&
              this.state.sozial >= this.state.forschend &&
              this.state.sozial >= this.state.künstlerisch &&
              this.state.sozial >= this.state.wirtschaftlich &&
              this.state.sozial >= this.state.verwaltend && <Sozial />}

            {this.state.wirtschaftlich >= this.state.handwerklich &&
              this.state.wirtschaftlich >= this.state.forschend &&
              this.state.wirtschaftlich >= this.state.sozial &&
              this.state.wirtschaftlich >= this.state.künstlerisch &&
              this.state.wirtschaftlich >= this.state.verwaltend && (
                <Wirtschaftlich />
              )}

            {this.state.verwaltend >= this.state.handwerklich &&
              this.state.verwaltend >= this.state.forschend &&
              this.state.verwaltend >= this.state.sozial &&
              this.state.verwaltend >= this.state.wirtschaftlich &&
              this.state.verwaltend >= this.state.künstlerisch && (
                <Verwaltend />
              )}

            <ButtonPrimary
              onPress={this.reset}
              backgroundStyle={{backgroundColor: colors.accentDark}}
              textStyle={{color: colors.textLight}}
            >
              Test neu starten
            </ButtonPrimary>

            <ButtonPrimary
              onPress={() => this.props.navigation.navigate('Home')}
            >
              Startseite
            </ButtonPrimary>
          </View>
        )}
      </ScrollableScreenContainer>
    );
  }
}
Berufsfragebogen.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.accentPale
  },
  title: 'Berufsinteressen Fragebogen'
};

export default Berufsfragebogen;
