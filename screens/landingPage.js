import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';

import MenuButton from '../components/buttons/menuButton';

import Menu from '../components/menu';
import WerSindWir from '../components/landingPageComponents/WerSindWir';
import WasMachenWir from '../components/landingPageComponents/WasMachenWir';
import WomitHelfen from '../components/landingPageComponents/WomitKönnenWirHelfen';
import ContactButton from '../components/buttons/contactButton';
import textStyles from '../styles/generalTextStyles';
import Colors from '../assets/colors';
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
        source={require('./../assets/images/cambreSketchDark.png')}
        style={styles.backgroundImage}
        //blurRadius={2}
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
            <Image
              source={require('../assets/transitionLogoTransparent.png')}
              resizeMode={'cover'}
              style={{
                width: windowHeight > 600 ? 50 : 40,
                height: windowHeight > 600 ? 50 : 36,
                position: 'absolute',
                left: 20,
                top: 25
              }}
            />
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
              <Text style={styles.subHeaderText}>Wobei können wir helfen?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.subHeader,
                {
                  backgroundColor: colors.pieOrange,
                  marginTop: 30
                }
              ]}
              onPress={() => props.navigation.navigate('Transition')}
            >
              <Text style={[styles.subHeaderText, {letterSpacing: 2}]}>
                Tanz! Und Danach?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <MenuButton
          style={{
            position: 'absolute',
            bottom: 12,
            right: 15,
            //backgroundColor: colors.primary,
            height: windowHeight > 600 ? 50 : 45,
            width: windowHeight > 600 ? 50 : 45,
            borderRadius: windowHeight > 600 ? 25 : 22,
            padding: windowHeight > 600 ? 8 : 4,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          setDisplayMenu={setDisplayMenu}
        />

        <ContactButton
          style={{
            position: 'absolute',
            bottom: 12,
            left: 15,
            // backgroundColor: colors.primary,
            height: windowHeight > 600 ? 50 : 45,
            width: windowHeight > 600 ? 50 : 45,
            borderRadius: windowHeight > 600 ? 25 : 22,
            padding: windowHeight > 600 ? 8 : 4,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          // onPress={() => console.log('pressed contact button')}
        />
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
    flexDirection: 'row',
    paddingTop: windowHeight > 600 ? 28 : 24,
    paddingBottom: windowHeight > 600 ? 10 : 4,
    marginTop: 20,
    position: 'absolute',
    top: 0,
    width: windowWidth
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain'
  },
  headerText: {
    marginLeft: 90,
    fontSize: windowHeight > 600 ? 28 : 24,
    fontWeight: windowHeight < 600 ? '600' : 'bold',
    textAlign: 'center',
    color: Colors.secondaryLight,
    letterSpacing: windowHeight > 600 ? 5 : 2
  },
  buttonContainer: {
    marginTop: windowHeight > 600 ? 400 : 300,
    marginBottom: windowHeight > 600 ? 20 : 10
  },
  subHeader: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    marginVertical: 6
  },
  subHeaderText: {
    fontSize: windowHeight < 600 ? 16 : 22,
    fontWeight: 'bold',
    color: Colors.textLight,

    textAlign: 'center'
  }
});

// import React, {useState} from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions,
//   ImageBackground
// } from 'react-native';

// import MenuButton from '../components/buttons/menuButton';

// import Menu from '../components/menu';
// import WerSindWir from '../components/landingPageComponents/WerSindWir';
// import WasMachenWir from '../components/landingPageComponents/WasMachenWir';
// import WomitHelfen from '../components/landingPageComponents/WomitKönnenWirHelfen';

// import textStyles from '../styles/generalTextStyles';
// import Colors from '../assets/colors';

// const windowHeight = Dimensions.get('window').height;

// const LandingPage = (props) => {
//   const [displayMenu, setDisplayMenu] = useState(false);
//   const [displayWer, setDisplayWer] = useState(false);
//   const [displayWas, setDisplayWas] = useState(false);
//   const [displayWomit, setDisplayWomit] = useState(false);

//   const closeMenu = () => {
//     setDisplayMenu(false);
//   };
//   const closeWer = () => {
//     setDisplayWer(false);
//   };
//   const closeWas = () => {
//     setDisplayWas(false);
//   };
//   const closeWomit = () => {
//     setDisplayWomit(false);
//   };

//   return (
//     <ScrollView>
//       <ImageBackground
//         source={require('./../assets/images/cambre_1.jpg')}
//         style={styles.backgroundImage}
//       >
//         <View style={textStyles.fullScreenContainer}>
//           <Menu isVisible={displayMenu} close={closeMenu} {...props}></Menu>
//           <WerSindWir isVisible={displayWer} close={closeWer}></WerSindWir>
//           <WasMachenWir isVisible={displayWas} close={closeWas}></WasMachenWir>
//           <WomitHelfen
//             isVisible={displayWomit}
//             close={closeWomit}
//           ></WomitHelfen>

//           <View style={styles.header}>
//             <Text style={styles.headerText}>Stiftung Tanz</Text>
//           </View>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.subHeader}
//               onPress={() => setDisplayWer(true)}
//             >
//               <Text style={styles.subHeaderText}>Wer sind wir?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.subHeader}
//               onPress={() => setDisplayWas(true)}
//             >
//               <Text style={styles.subHeaderText}>Was machen wir?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.subHeader}
//               onPress={() => setDisplayWomit(true)}
//             >
//               <Text style={styles.subHeaderText}>Womit können wir helfen?</Text>
//             </TouchableOpacity>
//           </View>
//           <MenuButton setDisplayMenu={setDisplayMenu} />
//         </View>
//       </ImageBackground>
//     </ScrollView>
//   );
// };

// LandingPage.navigationOptions = {
//   headerStyle: {
//     backgroundColor: '#171717'
//   },
//   headerTintColor: Colors.textLight,
//   headerShown: false
// };

// export default LandingPage;

// const styles = StyleSheet.create({
//   header: {
//     paddingTop: 20,
//     marginHorizontal: 20,
//     alignItems: 'center',
//     //marginBottom: windowHeight < 600 ? 240 : 300,
//     marginBottom: windowHeight < 600 ? 140 : 170
//     //marginTop: 5
//     // borderBottomColor: Colors.accentDark,
//     // borderBottomWidth: 5
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'contain'
//   },
//   headerText: {
//     fontSize: windowHeight < 600 ? 36 : 72,
//     fontWeight: windowHeight < 600 ? '600' : 'bold',

//     color: Colors.primary,
//     //alignItems: 'center',
//     textAlign: 'right',
//     letterSpacing: 5

//     // textShadowColor: Colors.primaryLight,
//     // textShadowOffset: {width: -2, height: -2},
//     // textShadowRadius: 5
//   },
//   buttonContainer: {
//     // alignItems: 'center',
//     // justifyContent: 'center',

//     marginBottom: 50
//   },
//   subHeader: {
//     padding: 10,
//     alignItems: 'flex-end'
//   },
//   subHeaderText: {
//     fontSize: windowHeight < 600 ? 16 : 22,
//     fontWeight: 'bold',
//     color: Colors.text,
//     backgroundColor: Colors.secondary,
//     padding: 3,
//     paddingHorizontal: 8,
//     borderRadius: 15,
//     borderColor: Colors.secondaryLight,
//     borderWidth: 1
//     //paddingLeft: 90
//   }
// });
