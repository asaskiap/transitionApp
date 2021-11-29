import React from 'react';

import {StyleSheet, Text, Dimensions, View} from 'react-native';

import Colors from '../../assets/colors';
import CardBtn from './cardBtn';

const windowHeight = Dimensions.get('window').height;

const cardEB = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.children}</Text>
      <View style={styles.cardBtnContainer}>
        <CardBtn
          handlePress={props.yes}
          style={{backgroundColor: props.backgroundYes}}
        >
          {props.eng ? 'Yes' : 'JA'}
        </CardBtn>
        <CardBtn
          handlePress={props.no}
          style={{backgroundColor: props.backgroundNo}}
        >
          {props.eng ? 'No' : 'NEIN'}
        </CardBtn>
      </View>
    </View>
  );
};

export default cardEB;

const styles = StyleSheet.create({
  card: {
    width: windowHeight > 600 ? 320 : 280,
    height: windowHeight > 600 ? 180 : 140,
    backgroundColor: 'white',
    shadowColor: Colors.text,
    borderColor: 'rgba(1, 1, 1, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: Colors.text,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {height: 2, width: 0},
    elevation: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginVertical: 10
  },
  cardText: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    padding: 10
  },
  cardBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10
  }
});
