import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Paragraph from '../../components/articleComponents/paragraph';
import MoreButton from '../../components/buttons/moreButton';
import Quote from '../../components/articleComponents/quote';
import colors from '../../assets/colors';
const SingleStory = (props) => {
  return (
    <View>
      <View>{props.quote}</View>
      <View style={{flexDirection: 'row '}}>
        <View>
          <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
          <Paragraph
            style={{borderColor: 'lightgrey', borderRadius: 20, padding: 20}}
          >
            {props.name}
          </Paragraph>
          <MoreButton />
        </View>
      </View>
    </View>
  );
};

const TransitionStories = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Transition Stories</ArticleHeader>
      <View style={{marginVertical: 20}}>
        <Paragraph
          style={{
            borderColor: colors.textLight,
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            shadowColor: colors.text,
            backgroundColor: 'white',
            shadowOpacity: 0.4,
            shadowRadius: 5,
            shadowOffset: {height: 2, width: -2},
            elevation: 5
          }}
        >
          "Ich will in Berlin bleiben"
        </Paragraph>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'lightgrey',
              margin: 16
            }}
          ></View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
                color: colors.text
              }}
            >
              Immer auf der Suche
            </Text>
            <Text style={{color: colors.text}}>Michael Fatura</Text>
            <MoreButton />
          </View>
        </View>
      </View>
    </ScrollableScreenContainer>
  );
};

export default TransitionStories;
