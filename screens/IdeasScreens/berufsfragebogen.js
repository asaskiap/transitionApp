import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

import colors from '../../assets/colors';

import ArticleHeader from '../../components/articleComponents/articleHeader';

import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6
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
import {ScrollView} from 'react-native';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';

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
    pieData: [],
    scrollRef: React.createRef()
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
    this.scrollRef.scrollTo({x: 0, y: 0});
  };

  resetCurrVariables() {
    this.setState({
      currA: 1,
      currB: 1,
      currC: 1,
      currD: 1,
      currE: 1,
      currF: 1
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
    this.scrollRef.scrollTo({x: 0, y: 0});
  };

  handleSubmit2 = () => {
    this.updateValues();
    this.setState({
      displayQ2: false,
      displayQ3: true
    });
    this.scrollRef.scrollTo({x: 0, y: 0});
  };

  handleSubmit3 = () => {
    this.updateValues();
    this.setState({
      displayQ3: false,
      displayQ4: true
    });
    this.scrollRef.scrollTo({x: 0, y: 0});
  };
  handleSubmit4 = () => {
    this.updateValues();
    this.setState({
      displayQ4: false,
      displayQ5: true
    });
    this.scrollRef.scrollTo({x: 0, y: 0});
  };
  handleSubmit5 = () => {
    this.updateValues();
    this.setState({
      displayQ5: false,
      displayQ6: true
    });
    this.scrollRef.scrollTo({x: 0, y: 0});
  };

  handleSubmit6 = () => {
    this.updateValues();
    this.createPieData();
    this.setState({
      displayQ6: false,
      displayIllustration: false,
      displayResult: true
    });
    this.scrollRef.scrollTo({x: 0, y: 0});
  };

  render() {
    const eng = this.props.navigation.state.params.eng;
    return (
      <ScrollView
        style={{padding: 16}}
        ref={(scrollRef) => (this.scrollRef = scrollRef)}
      >
        {this.state.displayQ1 && (
          <>
            <Paragraph style={{color: colors.primaryDark}}>
              {eng
                ? 'Please read through the individual activities at your leisure and consider whether you enjoy doing them. It is not important whether you like to do it in your free time or whether you can imagine doing it as a job in the future. What matters is your basic interest in it.'
                : 'German version here'}
            </Paragraph>
            <Question1
              a={this.state.currA}
              b={this.state.currC}
              c={this.state.currD}
              d={this.state.currB}
              e={this.state.currE}
              f={this.state.currF}
              setA={(val) => this.setState({currA: val})}
              setB={(val) => this.setState({currC: val})}
              setC={(val) => this.setState({currD: val})}
              setD={(val) => this.setState({currB: val})}
              setE={(val) => this.setState({currE: val})}
              setF={(val) => this.setState({currF: val})}
              handleSubmit={this.handleSubmit1}
              progress={1}
              eng={eng}
            />
          </>
        )}

        {this.state.displayQ2 && (
          <Question2
            a={this.state.currD}
            b={this.state.currA}
            c={this.state.currB}
            d={this.state.currE}
            e={this.state.currF}
            f={this.state.currC}
            setA={(val) => this.setState({currD: val})}
            setB={(val) => this.setState({currA: val})}
            setC={(val) => this.setState({currB: val})}
            setD={(val) => this.setState({currE: val})}
            setE={(val) => this.setState({currF: val})}
            setF={(val) => this.setState({currC: val})}
            handleSubmit={this.handleSubmit2}
            progress={2}
            eng={eng}
          />
        )}

        {this.state.displayQ3 && (
          <Question3
            a={this.state.currE}
            b={this.state.currB}
            c={this.state.currA}
            d={this.state.currF}
            e={this.state.currC}
            f={this.state.currD}
            setA={(val) => this.setState({currE: val})}
            setB={(val) => this.setState({currB: val})}
            setC={(val) => this.setState({currA: val})}
            setD={(val) => this.setState({currF: val})}
            setE={(val) => this.setState({currC: val})}
            setF={(val) => this.setState({currD: val})}
            handleSubmit={this.handleSubmit3}
            progress={3}
            eng={eng}
          />
        )}

        {this.state.displayQ4 && (
          <Question4
            a={this.state.currC}
            b={this.state.currE}
            c={this.state.currF}
            d={this.state.currA}
            e={this.state.currD}
            f={this.state.currB}
            setA={(val) => this.setState({currC: val})}
            setB={(val) => this.setState({currE: val})}
            setC={(val) => this.setState({currF: val})}
            setD={(val) => this.setState({currA: val})}
            setE={(val) => this.setState({currD: val})}
            setF={(val) => this.setState({currB: val})}
            handleSubmit={this.handleSubmit4}
            progress={4}
            eng={eng}
          />
        )}
        {this.state.displayQ5 && (
          <Question5
            a={this.state.currF}
            b={this.state.currD}
            c={this.state.currE}
            d={this.state.currC}
            e={this.state.currB}
            f={this.state.currA}
            setA={(val) => this.setState({currF: val})}
            setB={(val) => this.setState({currD: val})}
            setC={(val) => this.setState({currE: val})}
            setD={(val) => this.setState({currC: val})}
            setE={(val) => this.setState({currB: val})}
            setF={(val) => this.setState({currA: val})}
            handleSubmit={this.handleSubmit5}
            progress={5}
            eng={eng}
          />
        )}
        {this.state.displayQ6 && (
          <Question6
            a={this.state.currB}
            b={this.state.currF}
            c={this.state.currC}
            d={this.state.currD}
            e={this.state.currA}
            f={this.state.currE}
            setA={(val) => this.setState({currB: val})}
            setB={(val) => this.setState({currF: val})}
            setC={(val) => this.setState({currC: val})}
            setD={(val) => this.setState({currD: val})}
            setE={(val) => this.setState({currA: val})}
            setF={(val) => this.setState({currE: val})}
            handleSubmit={this.handleSubmit6}
            progress={6}
            eng={eng}
          />
        )}

        {this.state.displayResult && (
          <View style={{paddingVertical: 10}}>
            <ArticleHeader
              containerStyle={{
                marginTop: 5,
                marginBottom: 10
              }}
            >
              {eng ? 'My Result' : ' Mein Ergebnis'}
            </ArticleHeader>

            <PieChart style={{height: 200}} data={this.state.pieData} />
            <PieLegende eng={eng} />

            {this.state.handwerklich >= this.state.forschend &&
              this.state.handwerklich >= this.state.künstlerisch &&
              this.state.handwerklich >= this.state.sozial &&
              this.state.handwerklich >= this.state.wirtschaftlich &&
              this.state.handwerklich >= this.state.verwaltend && (
                <Handwerklich eng={eng} />
              )}

            {this.state.forschend >= this.state.handwerklich &&
              this.state.forschend >= this.state.künstlerisch &&
              this.state.forschend >= this.state.sozial &&
              this.state.forschend >= this.state.wirtschaftlich &&
              this.state.forschend >= this.state.verwaltend && (
                <Forschend eng={eng} />
              )}

            {this.state.künstlerisch >= this.state.handwerklich &&
              this.state.künstlerisch >= this.state.forschend &&
              this.state.künstlerisch >= this.state.sozial &&
              this.state.künstlerisch >= this.state.wirtschaftlich &&
              this.state.künstlerisch >= this.state.verwaltend && (
                <Künstlerisch eng={eng} />
              )}

            {this.state.sozial >= this.state.handwerklich &&
              this.state.sozial >= this.state.forschend &&
              this.state.sozial >= this.state.künstlerisch &&
              this.state.sozial >= this.state.wirtschaftlich &&
              this.state.sozial >= this.state.verwaltend && (
                <Sozial eng={eng} />
              )}

            {this.state.wirtschaftlich >= this.state.handwerklich &&
              this.state.wirtschaftlich >= this.state.forschend &&
              this.state.wirtschaftlich >= this.state.sozial &&
              this.state.wirtschaftlich >= this.state.künstlerisch &&
              this.state.wirtschaftlich >= this.state.verwaltend && (
                <Wirtschaftlich eng={eng} />
              )}

            {this.state.verwaltend >= this.state.handwerklich &&
              this.state.verwaltend >= this.state.forschend &&
              this.state.verwaltend >= this.state.sozial &&
              this.state.verwaltend >= this.state.wirtschaftlich &&
              this.state.verwaltend >= this.state.künstlerisch && (
                <Verwaltend eng={eng} />
              )}

            <ButtonPrimary
              onPress={this.reset}
              backgroundStyle={{backgroundColor: colors.accentDark}}
              textStyle={{color: colors.textLight}}
            >
              {eng ? 'Start over' : 'Test neu starten'}
            </ButtonPrimary>

            <ButtonPrimary
              onPress={() => this.props.navigation.navigate('Home')}
            >
              {eng ? 'Home' : 'Startseite'}
            </ButtonPrimary>
          </View>
        )}
      </ScrollView>
    );
  }
}
Berufsfragebogen.navigationOptions = {
  headerStyle: {
    backgroundColor: colors.accentPale
  },
  headerTintColor: colors.accentDark,
  title: 'Test',
  headerBackTitleVisible: false
};

export default Berufsfragebogen;
