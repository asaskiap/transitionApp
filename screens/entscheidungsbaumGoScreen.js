import React from 'react';

import Colors from './../assets/colors';

import CardEB from '../components/entscheidungsBaumComponents/cardEB';
import ScrollableScreenContainer from '../components/scrollableScreen';
import {HeaderEB} from '../components/entscheidungsBaumComponents/headerEB';
import ArticleImage from '../components/articleComponents/articleImage';
import {
  CouncellingInvite1,
  CouncellingInvite2,
  CouncellingInvite3,
  FinalCouncellingInvite
} from '../components/entscheidungsBaumComponents/councellingInvite';

class EntscheidungsbaumGoScreen extends React.Component {
  state = {
    q1: false,
    q2: false,
    q3: false,
    displayCouncellingInvite1: false,
    displayCouncellingInvite2: false,
    displayCouncellingInvite3: false
  };

  set_q1 = (ans) => {
    console.log(ans);
    this.setState({
      q1: ans,
      displayCouncellingInvite1: !ans
    });
    console.log(this.state.q1, this.state.displayCouncellingInvite1);
  };

  set_q2 = (ans) => {
    this.setState({
      q2: ans,
      displayCouncellingInvite2: !ans
    });
  };

  set_q3 = (ans) => {
    this.setState({
      q3: ans,
      displayCouncellingInvite3: !ans
    });
  };

  render() {
    return (
      <ScrollableScreenContainer>
        <HeaderEB>Entscheidungsbaum</HeaderEB>

        {/* image should only show up if no answer has been given yet: no next question or councelling invite is displayed */}
        {!(this.state.q1 || this.state.displayCouncellingInvite1) && (
          <>
            <CardEB
              backgroundYes={Colors.secondaryLight}
              backgroundNo={Colors.accentPale}
              yes={() => this.set_q1(true)}
              no={() => this.set_q1(false)}
            >
              Ich denke über das Ende meiner Karriere nach und weiß schon was
              ich machen möchte
            </CardEB>
            <ArticleImage
              image={require('../assets/illustrations/entscheidungsbaumIllustrations/mountain.png')}
              imageContainerStyle={{width: '90%', alignSelf: 'center'}}
            />
          </>
        )}

        {this.state.q1 && (
          <>
            <CardEB
              backgroundYes={Colors.secondary}
              backgroundNo={Colors.btnDeactivated}
            >
              Ich denke über das Ende meiner Karriere nach und weiß schon was
              ich machen möchte
            </CardEB>
            {!(this.state.q2 || this.state.displayCouncellingInvite2) && (
              <CardEB
                backgroundYes={Colors.secondaryLight}
                backgroundNo={Colors.accentPale}
                yes={() => this.set_q2(true)}
                no={() => this.set_q2(false)}
              >
                Ich weiß auch wo und was ich studieren möchte
              </CardEB>
            )}
          </>
        )}

        {this.state.displayCouncellingInvite1 && (
          <>
            <CardEB
              backgroundYes={Colors.btnDeactivated}
              backgroundNo={Colors.accentDark}
            >
              Ich denke über das Ende meiner Karriere nach und weiß schon was
              ich machen möchte
            </CardEB>
            <CouncellingInvite1 {...this.props} />
          </>
        )}

        {this.state.q1 && this.state.q2 && (
          <>
            <CardEB
              backgroundYes={Colors.secondary}
              backgroundNo={Colors.btnDeactivated}
            >
              Ich weiß auch wo und was ich studieren möchte
            </CardEB>
            {!(this.state.q3 || this.state.displayCouncellingInvite3) && (
              <CardEB
                backgroundYes={Colors.secondaryLight}
                backgroundNo={Colors.accentPale}
                yes={() => this.set_q3(true)}
                no={() => this.set_q3(false)}
              >
                Ich habe bereits eine Finanzierungsmöglichkeit
              </CardEB>
            )}
          </>
        )}

        {this.state.displayCouncellingInvite2 && (
          <>
            <CardEB
              backgroundYes={Colors.btnDeactivated}
              backgroundNo={Colors.accentDark}
            >
              Ich weiß auch wo und was ich studieren möchte
            </CardEB>
            <CouncellingInvite2 {...this.props} />
          </>
        )}

        {this.state.q3 && (
          <CardEB
            backgroundYes={Colors.secondary}
            backgroundNo={Colors.btnDeactivated}
          >
            Ich habe bereits eine Finanzierungsmöglichkeit
          </CardEB>
        )}

        {this.state.displayCouncellingInvite3 && (
          <>
            <CardEB
              backgroundYes={Colors.btnDeactivated}
              backgroundNo={Colors.accentDark}
            >
              Ich habe bereits eine Finanzierungsmöglichkeit
            </CardEB>
            <CouncellingInvite3 {...this.props} />
          </>
        )}
        {this.state.q1 && this.state.q2 && this.state.q3 && (
          <FinalCouncellingInvite />
        )}
      </ScrollableScreenContainer>
    );
  }
}

EntscheidungsbaumGoScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.accentPale
  },
  title: 'Entscheidungsbaum Test'
};
export default EntscheidungsbaumGoScreen;
