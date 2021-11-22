import React from 'react';
import {View, Dimensions} from 'react-native';
import colors from '../../assets/colors';

const windowWidth = Dimensions.get('window').width;

const Circle = (props) => {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor: props.backgroundColor
      }}
    ></View>
  );
};
const ProgressBar = (props) => {
  return (
    <View
      style={{
        width: windowWidth * 0.8,
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <Circle
        backgroundColor={
          props.children === 1 ? colors.accentDark : colors.btnDeactivated
        }
      ></Circle>
      <Circle
        backgroundColor={
          props.children === 2 ? colors.accentDark : colors.btnDeactivated
        }
      ></Circle>
      <Circle
        backgroundColor={
          props.children === 3 ? colors.accentDark : colors.btnDeactivated
        }
      ></Circle>
      <Circle
        backgroundColor={
          props.children === 4 ? colors.accentDark : colors.btnDeactivated
        }
      ></Circle>
      <Circle
        backgroundColor={
          props.children === 5 ? colors.accentDark : colors.btnDeactivated
        }
      ></Circle>
      <Circle
        backgroundColor={
          props.children === 6 ? colors.accentDark : colors.btnDeactivated
        }
      ></Circle>
    </View>
  );
};

export default ProgressBar;
