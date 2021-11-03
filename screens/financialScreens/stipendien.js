import React from 'react';

import {Linking, Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Link from '../../components/articleComponents/link';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Stipendien = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader textStyle={{textAlign: 'center'}}>
          Andere Stipendien
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/Painter.png')}
        />
        <Article>
          <Paragraph>
            Es gibt eine Vielzahl von anderen Stipendienmöglichkeiten. Es lohnt
            sich auf jeden Fall sich genauer zu informieren und zu bewerben.
            Eine Übersicht über verschiedene Stipendien gibt es beispielsweise
            auf der folgenden Seite:
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('https://www.studienfinanzierung.de/stipendien/')
            }
          >
            www.studienfinanzierung.de/stipendien/
          </Link>
          <Paragraph>
            Ein Beispiel dafür wären unter anderem die Heinrich-Böll-Stiftung
            oder die Rosa Luxemburg Stiftung. Aber diese sind nur eine von
            vielen Möglichkeiten. Eine andere Möglichkeit ist zum Beispiel auch
            der „European Social Fund“, ein von der EU gestiftete
            Stipendienmöglichkeit für die eigene Weiterbildung.
          </Paragraph>
          <Link
            onPress={() =>
              Linking.openURL('https://www.boell.de/de/stipendien')
            }
          >
            www.boell.de/de/stipendien
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.rosalux.de/stiftung/studienwerk/stipendienbewerbung'
              )
            }
          >
            www.rosalux.de/stiftung/studienwerk/stipendienbewerbung
          </Link>
          <Link
            onPress={() => Linking.openURL('https://ec.europa.eu/esf/home.jsp')}
          >
            ec.europa.eu/esf/home.jsp
          </Link>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Stipendien;
