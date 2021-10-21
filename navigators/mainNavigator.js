import {createStackNavigator} from 'react-navigation-stack';

import LandingPage from '../screens/landingPage';
import psychologyMenuScreen from '../screens/menuScreens/psychologyMenu';
import ideasMenuScreen from '../screens/menuScreens/ideasMenu';
import financialMenuScreen from '../screens/menuScreens/financialMenu';
import insuranceMenuScreen from '../screens/menuScreens/insuranceMenu';
import germanyMenuScreen from '../screens/menuScreens/germanyMenu';
import selfEmploymentMenuScreen from '../screens/menuScreens/selfEmploymentMenu';
import {createAppContainer} from 'react-navigation';
import Entscheidungsbaum from '../screens/entscheidungsbaum';
import menu from '../components/menu';
import EntscheidungsbaumGoScreen from '../screens/entscheidungsbaumGoScreen';
import BerufsfragebogenIntro from '../screens/IdeasScreens/berufsfragebogenIntro';
import BerufsfragebogenGo from '../screens/IdeasScreens/berufsfragebogen';
import TransitionStories from '../screens/IdeasScreens/transitionStories';

const mainNavigator = createStackNavigator({
  Home: LandingPage,
  Menu: menu,
  Psychology: psychologyMenuScreen,
  Ideas: ideasMenuScreen,
  Financial: financialMenuScreen,
  Insurance: insuranceMenuScreen,
  Germany: germanyMenuScreen,
  Selfemployment: selfEmploymentMenuScreen,
  Entscheidungsbaum: Entscheidungsbaum,
  EntscheidungsbaumGo: EntscheidungsbaumGoScreen,
  Berufsfragebogen: BerufsfragebogenIntro,
  BerufsfragebogenGo: BerufsfragebogenGo,
  TransitionStories: TransitionStories
});

export default createAppContainer(mainNavigator);
