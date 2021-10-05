import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';

import MenuButton from '../components/buttons/menuButton';

import Menu from '../components/menu';
import WerSindWir from '../components/landingPageComponents/WerSindWir';
import WasMachenWir from '../components/landingPageComponents/WasMachenWir';
import WomitHelfen from '../components/landingPageComponents/WomitKönnenWirHelfen';

import textStyles from '../styles/generalTextStyles';
import Colors from '../assets/colors';

const windowHeight = Dimensions.get('window').height;

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
        source={require('./../assets/images/long3.jpg')}
        style={styles.backgroundImage}
      >
        <View style={textStyles.fullScreenContainer}>
          <Menu isVisible={displayMenu} close={closeMenu} {...props}></Menu>
          <WerSindWir isVisible={displayWer} close={closeWer}></WerSindWir>
          <WasMachenWir isVisible={displayWas} close={closeWas}></WasMachenWir>
          <WomitHelfen
            isVisible={displayWomit}
            close={closeWomit}
          ></WomitHelfen>

          <View style={styles.header}>
            <Text style={styles.headerText}>Stiftung Tanz</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.subHeader}
              onPress={() => setDisplayWer(true)}
            >
              <Text style={styles.subHeaderText}>Wer sind wir?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.subHeader}
              onPress={() => setDisplayWas(true)}
            >
              <Text style={styles.subHeaderText}>Was machen wir?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.subHeader}
              onPress={() => setDisplayWomit(true)}
            >
              <Text style={styles.subHeaderText}>Womit können wir helfen?</Text>
            </TouchableOpacity>
          </View>
          <MenuButton setDisplayMenu={setDisplayMenu} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

LandingPage.navigationOptions = {
  headerStyle: {
    backgroundColor: '#171717'
  },
  headerTintColor: Colors.textLight,
  headerShown: false
};

export default LandingPage;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    //marginBottom: windowHeight < 600 ? 240 : 300,
    marginBottom: windowHeight < 600 ? 140 : 130
    //marginTop: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  headerText: {
    fontSize: windowHeight < 600 ? 36 : 62,
    fontWeight: windowHeight < 600 ? '600' : 'bold',
    color: Colors.primaryDark,
    alignItems: 'center',
    letterSpacing: 3
  },
  buttonContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',

    marginBottom: 50
  },
  subHeader: {
    padding: 10,
    alignItems: 'flex-start'
  },
  subHeaderText: {
    fontSize: windowHeight < 600 ? 16 : 24,

    color: Colors.textLight,

    backgroundColor: Colors.secondary,
    padding: 5,
    borderRadius: 15,
    paddingLeft: 90
  }
});
