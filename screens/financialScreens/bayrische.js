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
          {props.english ? (
            <Paragraph>
              It is possible to use the contributions paid into the Bayerische
              Versorgungskammer for your further education. Depending on the
              entry date and age at the start of the transition, you can have a
              partial amount or all of it paid out as a settlement for your own
              transition. This depends on the individual case and should be
              considered well in advance, because if the contributions are paid
              out prematurely, the supplementary pension is not applicable, but
              this can also be very useful.
            </Paragraph>
          ) : (
            <Paragraph>
              Es gibt die Möglichkeit sich die Beiträge die man in der
              Bayerischen Versorgungskammer eingezahlt hat für seine
              Weiterbildung zu nutzen. Je nach Eintrittsdatum und Alter beim
              Beginn der Transition, kann man sich einen Teilbetrag oder alles
              als Abfindung für die eigene Transition auszahlen lassen. Dies
              kommt auf den individuellen Fall an und sollte vorab gut überlegt
              werden, da bei vorzeitigem Auszahlen der Beiträge, die Zusatzrente
              entfällt, welche aber auch sehr sinnvoll sein kann.
            </Paragraph>
          )}

          <Paragraph>
            {props.english
              ? 'For more information on the Bayerische Versorgungskammer, see'
              : ' Mehr Informationen zur Bayerischen Versorgungskammer unter'}
          </Paragraph>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Insurance', {eng: props.english});
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
              → {props.english ? 'Insurances' : 'Versicherung'}
            </Text>
          </TouchableOpacity>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};
export default Bayrische;
