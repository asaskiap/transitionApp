import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import ArticleHeader from '../components/articleComponents/articleHeader';
import Paragraph from '../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../components/scrollableScreen';
import Menu from '../components/menu';
import Article from '../components/articleComponents/article';
import Colors from '../assets/colors';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MyHeaderButton from '../components/buttons/headerButton';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class Impressum extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.params.eng ? 'Imprint' : 'Impressum',
      headerStyle: {
        backgroundColor: Colors.pieGreen
      },
      headerTintColor: Colors.textLight,
      headerBackTitleVisible: false,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={navigation.getParam('toggleMenu')}
          />
        </HeaderButtons>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({toggleMenu: this.toggleMenu});
  }

  state = {
    displayMenu: false
  };

  toggleMenu = () => {
    this.setState({
      displayMenu: true
    });
  };

  closeMenu = () => {
    this.setState({
      displayMenu: false
    });
  };

  render() {
    return (
      <ScrollableScreenContainer>
        <Menu
          isVisible={this.state.displayMenu}
          close={this.closeMenu}
          english={this.props.navigation.state.params.eng}
          {...this.props}
        ></Menu>
        <ArticleHeader textStyle={{textAlign: 'center'}}>
          {this.props.navigation.state.params.eng ? 'Imprint' : 'Impressum'}
        </ArticleHeader>
        <Article>
          {this.props.navigation.state.params.eng ? (
            <>
              <Paragraph>
                Publisher: Stiftung TANZ – Transition Zentrum Deutschland
              </Paragraph>
              <Paragraph>Dresdener Straße 112a, 10179 Berlin-Mitte</Paragraph>
              <Paragraph>Tel. ++49 (0) 30 – 24 531 495</Paragraph>
              <Paragraph>
                E-Mail: info@stiftung-tanz.com /
                Sabrina.Sadowska@stiftung-tanz.com
              </Paragraph>
              <Paragraph>
                The Stiftung TANZ – Transition Zentrum Deutschland was founded
                on 12.17.2009 in Berlin and certified on 01.19.2010 in
                accordance with § 80 of the Bürgerliche Gesetzbuch in
                combination with § 2 paragraph 1 of the Berlin Stiftungsgesetz
                in the Juli 22nd 2003 version (GVBl. S. 293) from the
                Senatsverwaltung für Justiz.
              </Paragraph>
              <Paragraph>Deutsche Bank</Paragraph>
              <Paragraph>Account number 0649780</Paragraph>
              <Paragraph>BLZ 100 700 00</Paragraph>
              <Paragraph>Income tax number 27/605/58691</Paragraph>
              <Paragraph>Editors: Sabrina Sadowska, Eilika Leibold</Paragraph>
              <Paragraph>Photos: © Dieter Wuschanski</Paragraph>
              <Paragraph>Illustrations: © TreeeTop</Paragraph>
              <Paragraph>
                Please note: Despite careful control of contents, we accept no
                liability for the contents of external links. The contents of
                linked sites are the sole responsibility of the publishers of
                those sites. We would also like to point out that this site is
                free of barriers.
              </Paragraph>
              <Paragraph>
                Copyright: The Stiftung TANZ – Transition Zentrum Deutschland
                has the copyright on all its own contents. Copying into any
                other digital or printed media requires prior agreement.
              </Paragraph>
            </>
          ) : (
            <>
              <Paragraph>
                Herausgeber: Stiftung TANZ – Transition Zentrum Deutschland
              </Paragraph>
              <Paragraph>Dresdener Straße 112a, 10179 Berlin-Mitte</Paragraph>
              <Paragraph>Tel. ++49 (0) 30 – 24 531 495</Paragraph>
              <Paragraph>
                E-Mail: info@stiftung-tanz.com /
                Sabrina.Sadowska@stiftung-tanz.com
              </Paragraph>
              <Paragraph>
                Die Stiftung TANZ – Transition Zentrum Deutschland wurde am
                17.12.2009 in Berlin errichtet und am 19.01.2010 gemäß § 80 des
                Bürgerlichen Gesetzbuches in Verbindung mit § 2 Abs. 1 des
                Berliner Stiftungsgesetzes in der Fassung vom 22. Juli 2003
                (GVBl. S. 293) von der Senatsverwaltung für Justiz anerkannt
                worden.
              </Paragraph>
              <Paragraph>Deutsche Bank</Paragraph>
              <Paragraph>Account number 0649780</Paragraph>
              <Paragraph>BLZ 100 700 00</Paragraph>
              <Paragraph>Income tax number 27/605/58691</Paragraph>
              <Paragraph>Redaktion: Eilika Leibold, Sabrina Sadowska</Paragraph>
              <Paragraph>Fotos: © Dieter Wuschanski</Paragraph>
              <Paragraph>Illustrationen: © TreeeTop</Paragraph>
              <Paragraph>
                Hinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen
                wir keine Haftung für Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich. Darüber hinaus möchten wir darauf hinweisen,
                dass diese Website barrierefrei ist.
              </Paragraph>
              <Paragraph>
                Urheberrecht: An den eigenen Inhalten steht der Stiftung TANZ –
                Transition Zentrum Deutschland das Urheberrecht zu. Eine
                Vervielfältigung in anderen elektronischen oder gedruckten
                Medien bedarf der vorherigen Zustimmung.
              </Paragraph>
            </>
          )}
        </Article>
      </ScrollableScreenContainer>
    );
  }
}
export default Impressum;
