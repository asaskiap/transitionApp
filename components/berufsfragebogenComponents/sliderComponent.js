import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {Slider} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import colors from '../../assets/colors';

const windowWidth = Dimensions.get('window').width;

const SliderComponent = (props) => {
  return (
    <>
      <Text style={{fontSize: 14, textAlign: 'center'}}>{props.children}</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          marginVertical: 16,
          marginHorizontal: 20
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{color: colors.primary}}>1</Text>
          <Text
            style={{
              color: colors.secondary,
              borderColor: colors.secondary,
              borderRadius: 10,
              borderWidth: 1,
              paddingHorizontal: 5
            }}
          >
            {props.val}
          </Text>
          <Text style={{color: colors.primary}}>5</Text>
        </View>
      </View>
    </>
  );
};

export default SliderComponent;
