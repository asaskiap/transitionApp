import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import MoreButton from '../../components/buttons/moreButton';
import colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;

const SingleStory = (props) => {
  return (
    <View
      style={{
        marginVertical: 40,
        marginHorizontal: windowHeight > 600 ? 10 : 12
      }}
    >
      <View
        style={{
          borderColor: colors.secondary,
          borderWidth: 1,
          borderRadius: 20,
          padding: 10,
          marginLeft: 80,
          marginRight: 16,
          shadowColor: colors.secondary,
          backgroundColor: colors.secondaryLight,
          shadowOpacity: 0.4,
          shadowRadius: 5,
          shadowOffset: {height: 2, width: -2},
          elevation: 5
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: colors.text,
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          {props.quote}
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          style={{
            width: windowHeight > 600 ? 120 : 90,
            height: windowHeight > 600 ? 120 : 90,
            borderRadius: 60,
            //backgroundColor: 'lightgrey',
            margin: 16,
            marginRight: 3
          }}
          source={props.image}
        />
        <View style={{alignItems: 'center', marginRight: 20, width: '65%'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              padding: 10,
              color: colors.text
            }}
          >
            {props.title}
          </Text>
          <Text style={{color: colors.text}}>{props.name}</Text>
          <MoreButton
            onPress={props.onPress}
            btnContainerStyle={{alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleStory;