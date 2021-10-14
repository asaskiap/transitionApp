import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../assets/colors';

import ButtonPrimary from '../../components/buttons/buttonPrimary';

import SliderComponent from '../../components/berufsfragebogenComponents/sliderComponent';

class Question extends React.Component {
  render() {
    return (
      <View style={{width: '90%'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            margin: 18,
            textAlign: 'center'
          }}
        >
          {this.props.children}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 32
          }}
        >
          <Text
            style={{fontSize: 14, fontWeight: 'bold', color: colors.primary}}
          >
            0: trifft gar nicht zu
          </Text>
          <Text
            style={{fontSize: 14, fontWeight: 'bold', color: colors.primary}}
          >
            5: trifft voll und ganz zu
          </Text>
        </View>

        <View>
          <SliderComponent val={this.props.a} setVal={this.props.setA}>
            {this.props.element1}
          </SliderComponent>

          <SliderComponent val={this.props.b} setVal={this.props.setB}>
            {this.props.element2}
          </SliderComponent>

          <SliderComponent val={this.props.c} setVal={this.props.setC}>
            {this.props.element3}
          </SliderComponent>

          <SliderComponent val={this.props.d} setVal={this.props.setD}>
            {this.props.element4}
          </SliderComponent>

          <SliderComponent val={this.props.e} setVal={this.props.setE}>
            {this.props.element5}
          </SliderComponent>

          <SliderComponent val={this.props.f} setVal={this.props.setF}>
            {this.props.element6}
          </SliderComponent>
        </View>

        <ButtonPrimary
          onPress={this.props.handleSubmit}
          backgroundStyle={{backgroundColor: colors.accentDark}}
          textStyle={{color: colors.textLight}}
        >
          WEITER
        </ButtonPrimary>
      </View>
    );
  }
}

export default Question;
