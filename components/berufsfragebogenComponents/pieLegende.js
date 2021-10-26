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
            style={[styles.colorBox, {backgroundColor: colors.accentDark}]}
          ></View>
          <Text style={styles.colorText}>Handwerklich</Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.accentPale}]}
          ></View>
          <Text style={styles.colorText}>Forschend</Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.psychology}]}
          ></View>
          <Text style={styles.colorText}>Künstlerisch</Text>
        </View>
      </View>
      <View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.secondary}]}
          ></View>
          <Text style={styles.colorText}>Sozial</Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.primary}]}
          ></View>
          <Text style={styles.colorText}>Wirtschaftlich</Text>
        </View>
        <View style={styles.colorInfo}>
          <View
            style={[styles.colorBox, {backgroundColor: colors.secondaryLight}]}
          ></View>
          <Text style={styles.colorText}>Verwaltend</Text>
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
    marginLeft: 30
  },
  colorText: {
    fontSize: 14,
    color: colors.text
  }
});
