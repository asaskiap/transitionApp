import React from 'react';

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import textStyles from '../styles/generalTextStyles';
import imageStyles from '../styles/imageStyles';
import Colors from '../assets/colors';

const ArticleScreen = (props) => {
  return (
    <ScrollView>
      <View style={textStyles.fullScreenContainer}>
        <ImageBackground
          source={require('./../assets/images/pyschologyImages/insecure.jpg')}
          style={imageStyles.headerBackgroundImage}
        >
          <View style={textStyles.articleScreenHeader}>
            <Text style={textStyles.screenHeaderText}>Article</Text>
          </View>
        </ImageBackground>

        <View style={textStyles.article}>
          <View style={textStyles.articleHeader}>
            <Text style={textStyles.articleHeaderText}>Article Header</Text>
          </View>
          <Text style={textStyles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo
          </Text>

          <Text style={textStyles.paragraph}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </Text>
        </View>

        <View style={imageStyles.articleImageContainer}>
          <ImageBackground
            source={require('../assets/images/pyschologyImages/leanOnMe.jpg')}
            style={imageStyles.articleImage}
          ></ImageBackground>
        </View>

        <View style={textStyles.article}>
          <View style={textStyles.articleHeader}>
            <Text style={textStyles.articleHeaderText}>Header</Text>
          </View>

          <Text style={textStyles.paragraph}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur,
          </Text>

          <Text style={textStyles.paragraph}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </Text>
          <Text style={textStyles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo...
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

ArticleScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.psychology
  },
  headerTintColor: Colors.textLight
};

export default ArticleScreen;

const styles = StyleSheet.create({});
