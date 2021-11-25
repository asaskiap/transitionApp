import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import Menu from '../components/menu';
import LandingPageButton from '../components/buttons/landingPageButton';
import LandingPageHeader from '../components/landingPageComponents/landingPageHeader';
import WerSindWir from '../components/landingPageComponents/WerSindWir';
import WasMachenWir from '../components/landingPageComponents/WasMachenWir';
import WomitHelfen from '../components/landingPageComponents/WomitKönnenWirHelfen';
import colors from '../assets/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LandingPage = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayWer, setDisplayWer] = useState(false);
  const [displayWas, setDisplayWas] = useState(false);
  const [displayWomit, setDisplayWomit] = useState(false);

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
          <Menu isVisible={displayMenu} close={closeMenu} {...props}></Menu>
          <WerSindWir isVisible={displayWer} close={closeWer}></WerSindWir>
          <WasMachenWir isVisible={displayWas} close={closeWas}></WasMachenWir>
          <WomitHelfen
            isVisible={displayWomit}
            close={closeWomit}
          ></WomitHelfen>

          {/* <LandingPageHeader>Stiftung Tanz</LandingPageHeader> */}
          <Image
            source={require('../assets/StiftungFullLogo_transparent.png')}
            style={{
              maxWidth: windowWidth,
              minHeight: 60,
              maxHeight: 100,
              resizeMode: 'contain',
              position: 'absolute',
              top: 40
            }}
          ></Image>
          <View style={styles.buttonContainer}>
            <LandingPageButton onPress={() => setDisplayWer(true)}>
              Wer sind wir?
            </LandingPageButton>
            <LandingPageButton onPress={() => setDisplayWas(true)}>
              Was machen wir?
            </LandingPageButton>
            <LandingPageButton onPress={() => setDisplayWomit(true)}>
              Wobei können wir helfen?
            </LandingPageButton>

            <LandingPageButton
              backgroundStyle={{
                backgroundColor: colors.pieOrangeSemiTransparant,
                marginTop: 30
              }}
              onPress={() => props.navigation.navigate('Transition')}
            >
              Tanz! Und Danach?
            </LandingPageButton>

            <LandingPageButton
              backgroundStyle={{
                backgroundColor: colors.primarySemiTransparent,
                paddingVertical: 3,
                paddingHorizontal: 20,
                alignSelf: 'center'
              }}
              onPress={() => setDisplayMenu(true)}
            >
              <Ionicons
                name="menu"
                size={windowHeight > 600 ? 28 : 24}
                color={colors.textLight}
              />
            </LandingPageButton>
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
  headerTintColor: colors.textLight,
  headerShown: false
};

export default LandingPage;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    minHeight: windowHeight,
    paddingBottom: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },

  buttonContainer: {
    marginTop: windowHeight > 600 ? 400 : 290,
    marginBottom: windowHeight > 600 ? 20 : 10
  }
});
