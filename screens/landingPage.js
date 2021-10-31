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
import TreeButton from '../components/buttons/treeButton';

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
        source={require('./../assets/images/cambre_1.jpg')}
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
            <Image
              source={require('../assets/transitionLogoTransparent.png')}
              resizeMode={'cover'}
              style={{
                width: windowHeight > 600 ? 50 : 36,
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
              <Text style={styles.subHeaderText}>Womit können wir helfen?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            height: windowHeight > 600 ? 45 : 38,
            width: windowWidth,
            position: 'absolute',
            bottom: 0
          }}
        >
          <MenuButton setDisplayMenu={setDisplayMenu} />
          <TreeButton
            style={{position: 'absolute', bottom: 2, left: '45%'}}
            onPress={() => props.navigation.navigate('Entscheidungsbaum')}
          />
          <ContactButton
            style={{position: 'absolute', bottom: 2, left: 5}}
            onPress={() => console.log('pressed contact button')}
          />
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
    flexDirection: 'row',
    paddingTop: windowHeight > 600 ? 25 : 22,
    paddingBottom: windowHeight > 600 ? 10 : 4,
    //backgroundColor: Colors.primary,
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
    fontSize: windowHeight > 600 ? 30 : 24,
    fontWeight: windowHeight < 600 ? '600' : 'bold',
    textAlign: 'center',
    color: Colors.secondaryLight,
    letterSpacing: windowHeight > 600 ? 5 : 2
  },
  buttonContainer: {
    marginTop: windowHeight > 600 ? 450 : 350,

    marginBottom: windowHeight > 600 ? 50 : 20
    //marginTop: windowHeight > 600 ? 180 : 170
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
