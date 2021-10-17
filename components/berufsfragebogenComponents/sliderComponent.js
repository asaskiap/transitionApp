import React from 'react';
import {View, Text} from 'react-native';

import {Slider} from 'react-native-elements';
import colors from '../../assets/colors';

const SliderComponent = (props) => {
  return (
    <>
      <Text style={{fontSize: 14, textAlign: 'center'}}>{props.children}</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'center',
          marginVertical: 16
        }}
      >
        <Slider
          value={props.val}
          onValueChange={(value) => props.setVal(value)}
          minimumValue={1}
          maximumValue={5}
          step={1}
          thumbStyle={{
            backgroundColor: colors.secondary,
            width: 22,
            height: 22
          }}
        />
        <Text style={{alignSelf: 'flex-end'}}>Ausgewählt: {props.val}</Text>
      </View>
    </>
  );
};

export default SliderComponent;
