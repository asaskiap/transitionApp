import React from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import MoreButton from '../../components/buttons/moreButton';
import colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SingleStory = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.title}>- {props.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={props.image} />
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{props.quote}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <MoreButton
          onPress={props.onPress}
          btnContainerStyle={{alignSelf: 'center'}}
          eng={props.eng}
        />
      </View>
    </View>
  );
};

export default SingleStory;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    maxWidth: windowWidth * 0.9,
    marginHorizontal: windowHeight > 600 ? 10 : 12,
    padding: 10,

    borderRadius: 20,
    shadowColor: colors.text,
    borderRadius: 20,
    backgroundColor: colors.textLight,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {height: 2, width: -2},
    elevation: 5
  },
  buttonContainer: {
    alignSelf: 'center',

    width: '60%'
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    borderRadius: 10,
    color: colors.secondary,
    alignSelf: 'flex-start'
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  quoteContainer: {
    padding: 10,
    margin: 10,
    shadowColor: colors.primaryDark,
    borderRadius: 20,
    borderColor: 'rgb(235, 243, 250)',
    borderWidth: 1,
    backgroundColor: 'rgb(235, 243, 250)',
    maxWidth: windowWidth * 0.5,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {height: 2, width: -2},
    elevation: 5
  },
  quoteText: {
    fontSize: 14,
    color: colors.text,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  image: {
    width: windowHeight > 600 ? 120 : 90,
    height: windowHeight > 600 ? 120 : 90,
    borderRadius: 60,
    //backgroundColor: 'lightgrey',
    margin: 16,
    marginRight: 3
  }
});
