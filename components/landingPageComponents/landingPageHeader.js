import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LandingPageHeader = (props) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/appLogoAdaptive.png')}
        resizeMode={'cover'}
        style={styles.logo}
      />
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
  );
};

export default LandingPageHeader;

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
  logo: {
    width: windowHeight > 600 ? 50 : 40,
    height: windowHeight > 600 ? 50 : 40,
    position: 'absolute',
    left: 20,
    top: 20
  },
  headerText: {
    marginLeft: 80,
    fontSize: windowHeight > 600 ? 28 : 24,
    fontWeight: windowHeight < 600 ? '600' : 'bold',
    textAlign: 'center',
    color: Colors.secondaryLight,
    letterSpacing: windowHeight > 600 ? 5 : 2
  }
});
