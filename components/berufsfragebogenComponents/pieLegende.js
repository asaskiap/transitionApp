import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;

const PieLegende = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: windowHeight > 600 ? 20 : 10,
        marginVertical: windowHeight > 600 ? 40 : 20
      }}
    >
      <View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.pieBlue}]}
          ></View>
          <Text style={styles.colorText}>
            {props.eng ? 'Manual- Technical' : 'Handwerklich'}
          </Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.pieGreen}]}
          ></View>
          <Text style={styles.colorText}>
            {props.eng ? 'Researching' : 'Forschend'}
          </Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.pieDarkBlue}]}
          ></View>
          <Text style={styles.colorText}>
            {props.eng ? 'Artistic' : 'Künstlerisch'}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.pieOrange}]}
          ></View>
          <Text style={styles.colorText}>
            {props.eng ? 'Social' : 'Sozial'}
          </Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.pieYellow}]}
          ></View>
          <Text style={styles.colorText}>
            {props.eng ? 'Entrepreneurial' : 'Wirtschaftlich'}
          </Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.piePink}]}
          ></View>
          <Text style={styles.colorText}>
            {props.eng ? 'Administrating' : 'Verwaltend'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PieLegende;
const styles = StyleSheet.create({
  colorBox: {
    width: 10,
    height: 10,
    marginHorizontal: windowHeight > 600 ? 20 : 10
  },
  colorInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  colorText: {
    fontSize: 14,
    color: colors.text
  }
});
