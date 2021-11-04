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
          padding: 10,
          marginLeft: 80,
          marginRight: 16,
          shadowColor: colors.secondary,
          borderRadius: 20,
          backgroundColor: colors.textLight,
          shadowOpacity: 0.4,
          shadowRadius: 5,
          shadowOffset: {height: 2, width: -2},
          elevation: 5
        }}
      >
        <Text
          style={{
            fontSize: 14,
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
        <View
          style={{
            alignItems: 'center',
            marginRight: 20,
            marginTop: 20,
            width: '60%'
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',

              marginLeft: -30,
              color: colors.secondary,
              alignSelf: 'flex-start'
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontWeight: 'bold',
              alignSelf: 'flex-end'
            }}
          >
            - {props.title}
          </Text>
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
