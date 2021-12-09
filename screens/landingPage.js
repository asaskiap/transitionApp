import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';

import Menu from '../components/menu';
import WerSindWir from '../components/landingPageComponents/WerSindWir';
import WasMachenWir from '../components/landingPageComponents/WasMachenWir';
import WomitHelfen from '../components/landingPageComponents/WomitKönnenWirHelfen';
import colors from '../assets/colors';
import LandingPageDeutsch from '../components/landingPageComponents/landingPageDeutsch';
import LandingPageEnglish from '../components/landingPageComponents/landingPageEnglish';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LandingPage = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayWer, setDisplayWer] = useState(false);
  const [displayWas, setDisplayWas] = useState(false);
  const [displayWomit, setDisplayWomit] = useState(false);
  const [english, setEnglish] = useState(false);

  const closeMenu = () => {
    setDisplayMenu(false);
  };
  const closeWer = () => {
    setDisplayWer(false);
  };
  const closeWas = () => {
    setDisplayWas(false);
  };
  const closeWomit = () => {
    setDisplayWomit(false);
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('./../assets/landingPageBackground.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.fullScreenContainer}>
          <Menu
            isVisible={displayMenu}
            close={closeMenu}
            english={english}
            {...props}
          ></Menu>

          <WerSindWir
            isVisible={displayWer}
            close={closeWer}
            english={english}
          ></WerSindWir>
          <WasMachenWir
            isVisible={displayWas}
            close={closeWas}
            english={english}
          ></WasMachenWir>
          <WomitHelfen
            isVisible={displayWomit}
            close={closeWomit}
            english={english}
          ></WomitHelfen>

          <Image
            source={require('../assets/StiftungFullLogo_transparent.png')}
            style={styles.logo}
          ></Image>
          {!english && (
            <LandingPageDeutsch
              setDisplayWer={() => setDisplayWer(true)}
              setDisplayWas={() => setDisplayWas(true)}
              setDisplayWomit={() => setDisplayWomit(true)}
              setDisplayMenu={() => setDisplayMenu(true)}
            ></LandingPageDeutsch>
          )}
          {english && (
            <LandingPageEnglish
              setDisplayWer={() => setDisplayWer(true)}
              setDisplayWas={() => setDisplayWas(true)}
              setDisplayWomit={() => setDisplayWomit(true)}
              setDisplayMenu={() => setDisplayMenu(true)}
            ></LandingPageEnglish>
          )}
          <View style={styles.langBtn}>
            <TouchableOpacity onPress={() => setEnglish(!english)}>
              <Text style={styles.langBtnText}>{!english ? 'EN' : 'DE'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

LandingPage.navigationOptions = {
  headerStyle: {
    backgroundColor: '#171717'
  },
  headerBackTitle: '',
  headerTintColor: colors.textLight,
  headerShown: false
};

export default LandingPage;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    minHeight: windowHeight,
    // paddingBottom: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  logo: {
    maxWidth: windowWidth,
    minHeight: 60,
    maxHeight: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: 40
  },
  langBtn: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  langBtnText: {
    color: colors.piePink,
    fontSize: 24,
    fontWeight: 'bold'
  }
});
