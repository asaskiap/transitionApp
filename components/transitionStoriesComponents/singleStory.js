import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import MoreButton from '../../components/buttons/moreButton';
import colors from '../../assets/colors';
import {color} from 'react-native-reanimated';

const windowHeight = Dimensions.get('window').height;

const SingleStory = (props) => {
  return (
    <View
      style={{
        marginVertical: 20,
        marginHorizontal: windowHeight > 600 ? 10 : 12,
        paddingVertical: 10,
        borderRadius: 20,
        shadowColor: colors.text,
        borderRadius: 20,
        backgroundColor: colors.textLight,
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: {height: 2, width: -2},
        elevation: 5
      }}
    >
      <View
        style={{
          padding: 10,
          marginLeft: 80,
          marginRight: 16,
          marginBottom: -16,
          shadowColor: colors.primaryDark,
          borderRadius: 20,
          borderColor: 'rgb(235, 243, 250)',
          borderWidth: 1,
          backgroundColor: 'rgb(235, 243, 250)',

          // backgroundColor: colors.textLight,
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
              fontSize: 28,
              fontWeight: 'bold',
              marginLeft: -30,
              borderRadius: 10,
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
