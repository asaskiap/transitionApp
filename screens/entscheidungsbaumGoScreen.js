import React from 'react';

import Colors from './../assets/colors';

import CardEB from '../components/entscheidungsBaumComponents/cardEB';
import ScrollableScreenContainer from '../components/scrollableScreen';
import {HeaderEB} from '../components/entscheidungsBaumComponents/headerEB';
import ArticleIllustration from '../components/articleComponents/articleIllustration';
import {
  CouncellingInvite1,
  CouncellingInvite2,
  CouncellingInvite3,
  FinalCouncellingInvite
} from '../components/entscheidungsBaumComponents/councellingInvite';
import colors from './../assets/colors';

class EntscheidungsbaumGoScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng
        ? 'Decision Tree'
        : 'Entscheidungsbaum',
      headerStyle: {
        backgroundColor: colors.pieDarkBlue
      },
      headerBackTitleVisible: false,
      headerTintColor: colors.textLight
    };
  };
  state = {
    displayImage: true,
    display_q1: true,
    q1_yes: false,
    q1_no: false,
    display_q2: false,
    q2_yes: false,
    q2_no: false,
    display_q3: false,
    q3_yes: false,
    q3_no: false,
    displayCouncellingInvite1: false,
    displayCouncellingInvite2: false,
    displayCouncellingInvite3: false,
    displayFinalCouncellingInvite: false
  };

  set_q1 = (ans) => {
    this.setState({
      q1_yes: ans,
      display_q2: ans,
      q1_no: !ans,
      displayImage: false,
      displayCouncellingInvite1: !ans,
      //reset
      q2_yes: false,
      q2_no: false,
      q3_yes: false,
      q3_no: false,
      displayCouncellingInvite2: false,
      displayCouncellingInvite3: false,
      displayFinalCouncellingInvite: false
    });
  };

  set_q2 = (ans) => {
    this.setState({
      q2_yes: ans,
      display_q3: ans,
      q2_no: !ans,
      displayCouncellingInvite2: !ans,
      // reset
      q3_yes: false,
      q3_no: false,
      displayCouncellingInvite1: false,
      displayCouncellingInvite3: false,
      displayFinalCouncellingInvite: false
    });
  };

  set_q3 = (ans) => {
    this.setState({
      q3_yes: ans,
      q3_no: !ans,
      displayCouncellingInvite3: !ans,
      displayFinalCouncellingInvite: ans,
      //reset
      displayCouncellingInvite2: false,
      displayCouncellingInvite1: false
    });
  };

  render() {
    const eng = this.props.navigation.state.params.eng;
    return (
      <ScrollableScreenContainer>
        <HeaderEB>{eng ? 'Decision Tree' : 'Entscheidungsbaum'}</HeaderEB>

        {/* image should only show up if no answer has been given yet: no next question or councelling invite is displayed */}
        {/* {!(this.state.q1 || this.state.displayCouncellingInvite1) && ( */}
        {this.state.display_q1 && (
          <>
            <CardEB
              backgroundYes={
                !(this.state.q1_yes || this.state.q1_no)
                  ? Colors.secondaryLight
                  : this.state.q1_yes
                  ? Colors.secondary
                  : Colors.btnDeactivated
              }
              backgroundNo={
                !(this.state.q1_yes || this.state.q1_no)
                  ? Colors.accentPale
                  : this.state.q1_no
                  ? Colors.accentDark
                  : Colors.btnDeactivated
              }
              yes={() => this.set_q1(true)}
              no={() => this.set_q1(false)}
              eng={eng}
            >
              {eng
                ? 'I am thinking about the end of my carreer and I already know what I want to do next '
                : 'Ich denke über das Ende meiner Karriere nach und weiß schon was ich machen möchte'}
              ''
            </CardEB>
          </>
        )}
        {this.state.displayImage && (
          <ArticleIllustration
            image={require('../assets/illustrations/entscheidungsbaumIllustrations/mountain.png')}
          />
        )}

        {this.state.display_q2 && (
          <CardEB
            backgroundYes={
              !(this.state.q2_yes || this.state.q2_no)
                ? Colors.secondaryLight
                : this.state.q2_yes
                ? Colors.secondary
                : Colors.btnDeactivated
            }
            backgroundNo={
              !(this.state.q2_yes || this.state.q2_no)
                ? Colors.accentPale
                : this.state.q2_no
                ? Colors.accentDark
                : Colors.btnDeactivated
            }
            yes={() => this.set_q2(true)}
            no={() => this.set_q2(false)}
            eng={eng}
          >
            {eng
              ? 'I also know where and what I want to study'
              : 'Ich weiß auch wo und was ich studieren möchte'}
          </CardEB>
        )}

        {this.state.displayCouncellingInvite1 && (
          <CouncellingInvite1 {...this.props} />
        )}

        {this.state.display_q3 && (
          <CardEB
            backgroundYes={
              !(this.state.q3_yes || this.state.q3_no)
                ? Colors.secondaryLight
                : this.state.q3_yes
                ? Colors.secondary
                : Colors.btnDeactivated
            }
            backgroundNo={
              !(this.state.q3_yes || this.state.q3_no)
                ? Colors.accentPale
                : this.state.q3_no
                ? Colors.accentDark
                : Colors.btnDeactivated
            }
            yes={() => this.set_q3(true)}
            no={() => this.set_q3(false)}
            eng={eng}
          >
            {eng
              ? 'I know how I will finance my studies'
              : ' Ich habe bereits eine Finanzierungsmöglichkeit'}
          </CardEB>
        )}

        {this.state.displayCouncellingInvite2 && (
          <CouncellingInvite2 {...this.props} />
        )}
        {this.state.displayCouncellingInvite3 && (
          <CouncellingInvite3 {...this.props} />
        )}

        {this.state.displayFinalCouncellingInvite && (
          <FinalCouncellingInvite {...this.props} />
        )}
      </ScrollableScreenContainer>
    );
  }
}

// EntscheidungsbaumGoScreen.navigationOptions = {
//   headerStyle: {
//     backgroundColor: Colors.accentPale
//   },
//   headerTintColor: colors.accentDark,
//   title: '',
//   headerBackTitleVisible: false
// };
export default EntscheidungsbaumGoScreen;
