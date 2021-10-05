import {createStackNavigator} from 'react-navigation-stack';

import LandingPage from '../screens/landingPage';
import psychologyMenuScreen from '../screens/menuScreens/psychologyMenu';
import ideasMenuScreen from '../screens/menuScreens/ideasMenu';
import financialMenuScreen from '../screens/menuScreens/financialMenu';
import insuranceMenuScreen from '../screens/menuScreens/insuranceMenu';
import germanyMenuScreen from '../screens/menuScreens/germanyMenu';
import selfEmploymentMenuScreen from '../screens/menuScreens/selfEmploymentMenu';
import {createAppContainer} from 'react-navigation';
import ArticleScreen from '../screens/articleScreen';
import Entscheidungsbaum from '../screens/entscheidungsbaum';
import menu from '../components/menu';
import Abschied from '../screens/psychologyScreens/abschied';
import EntscheidungsbaumGoScreen from '../screens/entscheidungsbaumGoScreen';

const mainNavigator = createStackNavigator({
  Home: LandingPage,
  Menu: menu,
  Psychology: psychologyMenuScreen,
  Ideas: ideasMenuScreen,
  Financial: financialMenuScreen,
  Insurance: insuranceMenuScreen,
  Germany: germanyMenuScreen,
  Selfemployment: selfEmploymentMenuScreen,
  ArticleScreen: ArticleScreen,
  Entscheidungsbaum: Entscheidungsbaum,
  EntscheidungsbaumGo: EntscheidungsbaumGoScreen,
  Abschied: Abschied
});

export default createAppContainer(mainNavigator);
