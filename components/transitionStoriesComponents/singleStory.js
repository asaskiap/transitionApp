import React from 'react';
import {Text, View, Image} from 'react-native';
import MoreButton from '../../components/buttons/moreButton';
import colors from '../../assets/colors';

const SingleStory = (props) => {
  return (
    <View style={{marginVertical: 40}}>
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

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            //backgroundColor: 'lightgrey',
            margin: 16
          }}
          source={props.image}
        />
        <View style={{alignItems: 'center', marginRight: 20, width: '60%'}}>
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
          <MoreButton onPress={props.onPress} />
        </View>
      </View>
    </View>
  );
};

export default SingleStory;
