import React, {useState} from 'react';

import {Modal, View, Linking, TouchableOpacity} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Paragraph from '../../components/articleComponents/paragraph';
import Link from '../../components/articleComponents/link';

import {
  Augenoptiker,
  Automobilverkäufer,
  AuswertigesAmt
} from '../../components/berufsportraitComponents/berufsportaitTexts';
import colors from '../../assets/colors';

const Berufsportraits = (props) => {
  const [augenoptikerIn, setAugenoptikerIn] = useState(false);
  const [automobilverkäuferIn, setAutomobilverkäuferin] = useState(false);
  const [auswertigesAmt, setAuswertigesAmt] = useState(false);

  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Berufsportraits</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/ideasIllustrations/PictureFrame.png')}
        />

        <TouchableOpacity onPress={() => setAugenoptikerIn(!augenoptikerIn)}>
          <ArticleSubHeader>AugenoptikerIn ▽</ArticleSubHeader>
        </TouchableOpacity>
        {augenoptikerIn && <Augenoptiker></Augenoptiker>}

        <TouchableOpacity
          onPress={() => setAutomobilverkäuferin(!automobilverkäuferIn)}
        >
          <ArticleSubHeader>AutomobilverkäuferIn ▽</ArticleSubHeader>
        </TouchableOpacity>
        {automobilverkäuferIn && <Automobilverkäufer />}

        <TouchableOpacity onPress={() => setAuswertigesAmt(!auswertigesAmt)}>
          <ArticleSubHeader textStyle={{textAlign: 'center'}}>
            Beamte*r im Mittleren Dienst des Auswärtigen Amtes ▽
          </ArticleSubHeader>
        </TouchableOpacity>
        {auswertigesAmt && <AuswertigesAmt />}

        <View
          style={{
            width: '100%',
            borderBottomColor: colors.secondary,
            borderBottomWidth: 1,
            marginVertical: 40
          }}
        ></View>
        <Paragraph
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            lineHeight: 24,
            marginVertical: 8
          }}
        >
          Eine Auflistung mit den verschiedensten Berufen gibt es auf folgenden
          Webseiten:
        </Paragraph>
        <View style={{alignItems: 'flex-start'}}>
          <Link
            onPress={() =>
              Linking.openURL('https://www.aubi-plus.de/berufe/a-z/')
            }
          >
            www.aubi-plus.de/berufe/a-z/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.einstieg.com/ausbildung/berufe-a-z.html'
              )
            }
          >
            www.einstieg.com/ausbildung/berufe-a-z.html
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/'
              )
            }
          >
            planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('https://www.xing.com/campus/de/job-search')
            }
          >
            www.xing.com/campus/de/job-search
          </Link>
        </View>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Berufsportraits;
