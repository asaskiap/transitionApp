import React from 'react';

import {Modal, Dimensions, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const windowHeight = Dimensions.get('window').height;

const Bayrische = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader
          textStyle={{
            fontSize: windowHeight < 600 ? 28 : 30,
            letterSpacing: 1,
            textAlign: 'center'
          }}
        >
          Bayrische Versorgungskammer
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/NobodyHome.png')}
        />
        <Article>
          <Paragraph>
            Es gibt die Möglichkeit sich die Beiträge die man in der Bayerischen
            Versorgungskammer eingezahlt hat für seine Weiterbildung zu nutzen.
            Je nach Eintrittsdatum und Alter beim Beginn der Transition, kann
            man sich einen Teilbetrag oder alles als Abfindung für die eigene
            Transition auszahlen lassen. Dies kommt auf den individuellen Fall
            an und sollte vorab gut überlegt werden, da bei vorzeitigem
            Auszahlen der Beiträge, die Zusatzrente entfällt, welche aber auch
            sehr sinnvoll sein kann.
          </Paragraph>
          <Paragraph>
            Mehr Informationen zur Bayerischen Versorgungskammer unter
          </Paragraph>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Insurance');
              props.close();
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: colors.accentDark,
                fontWeight: 'bold',
                paddingVertical: 10,
                paddingHorizontal: 40
              }}
            >
              → Versicherung
            </Text>
          </TouchableOpacity>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};
export default Bayrische;
