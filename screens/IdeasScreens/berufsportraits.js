import React from 'react';

import {Modal} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Paragraph from '../../components/articleComponents/paragraph';
import Link from '../../components/articleComponents/link';
const Berufsportraits = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Berufsportraits</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/ideasIllustrations/PictureFrame.png')}
        />
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
        <Link>https://www.aubi-plus.de/berufe/a-z/</Link>
        <Link>https://www.einstieg.com/ausbildung/berufe-a-z.html</Link>
        <Link>
          https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/
        </Link>
        <Link>https://www.xing.com/campus/de/job-search</Link>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Berufsportraits;
