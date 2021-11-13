import React, {useState} from 'react';

import {Modal, View, Linking, TouchableOpacity} from 'react-native';
import Article from '../../components/articleComponents/article';
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
  AuswertigesAmt,
  Bekleidungstechniker,
  Gesundheitsmanager,
  Biologie,
  Blindenpädagoge,
  Buchbinder,
  Clown,
  Cruise,
  Ernaehrungsberatung,
  Eurythmist,
  Erzieher,
  Goethe,
  Freizeit,
  Gesundheitsfoerderung,
  Hoerakustiker,
  Hoergeraeteaktustiker,
  Kosmetik,
  Kulturvermittler,
  Kunstgeragoge,
  Lehrer,
  Logopaede,
  Luftverkehr,
  Mediengestalter
} from '../../components/berufsportraitComponents/berufsportaitTexts';
import colors from '../../assets/colors';

const Berufsportraits = (props) => {
  const [augenoptikerIn, setAugenoptikerIn] = useState(false);
  const [automobilverkäuferIn, setAutomobilverkäuferin] = useState(false);
  const [auswertigesAmt, setAuswertigesAmt] = useState(false);
  const [bekleidungstechniker, setBekleidungstechniker] = useState(false);
  const [gesundheitsmanager, setGesundheitsmanager] = useState(false);
  const [biologe, setBiologe] = useState(false);
  const [blindenpaedagoge, setBlingenpaedagoge] = useState(false);
  const [buchbinder, setBuchbinder] = useState(false);
  const [clown, setClown] = useState(false);
  const [cruise, setCruise] = useState(false);
  const [ernaehrung, setErnaehrung] = useState(false);
  const [eurythmist, setEurythmist] = useState(false);
  const [erzieher, setErzieher] = useState(false);
  const [goethe, setGoethe] = useState(false);
  const [freizeit, setFreizeit] = useState(false);
  const [gesundheitsfoerderung, setGesundheitsfoerderung] = useState(false);
  const [hoerakustiker, setHoerakustiker] = useState(false);
  const [hoergeraeteaktustiker, setHoergeraeteakustiker] = useState(false);
  const [kosmetik, setKosmetik] = useState(false);
  const [kulturvermittler, setKulturvermittler] = useState(false);
  const [kunstgeragoge, setKunstgeragoge] = useState(false);
  const [lehrer, setLehrer] = useState(false);
  const [luftverkehr, setLuftverkehr] = useState(false);
  const [logopaede, setLogopaede] = useState(false);
  const [mediengestalter, setMediengestalter] = useState(false);

  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Berufsportraits</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/ideasIllustrations/PictureFrame.png')}
        />

        <Article>
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
            <ArticleSubHeader>
              Beamte*r im Mittleren Dienst des Auswärtigen Amtes ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {auswertigesAmt && <AuswertigesAmt />}

          <TouchableOpacity
            onPress={() => setBekleidungstechniker(!bekleidungstechniker)}
          >
            <ArticleSubHeader>BekleidungstechnikerIn (BA) ▽</ArticleSubHeader>
          </TouchableOpacity>
          {bekleidungstechniker && <Bekleidungstechniker />}

          <TouchableOpacity
            onPress={() => setGesundheitsmanager(!gesundheitsmanager)}
          >
            <ArticleSubHeader>
              Betriebliche/r Gesundheits- manager/in ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {gesundheitsmanager && <Gesundheitsmanager />}

          <TouchableOpacity onPress={() => setBiologe(!biologe)}>
            <ArticleSubHeader>Biologe/in M.Sc. ▽</ArticleSubHeader>
          </TouchableOpacity>
          {biologe && <Biologie />}

          <TouchableOpacity
            onPress={() => setBlingenpaedagoge(!blindenpaedagoge)}
          >
            <ArticleSubHeader>Blindenpädagog*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {blindenpaedagoge && <Blindenpädagoge />}

          <TouchableOpacity onPress={() => setBuchbinder(!buchbinder)}>
            <ArticleSubHeader>Buchbinder*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {buchbinder && <Buchbinder />}

          <TouchableOpacity onPress={() => setClown(!clown)}>
            <ArticleSubHeader>Clown ▽</ArticleSubHeader>
          </TouchableOpacity>
          {clown && <Clown />}

          <TouchableOpacity onPress={() => setCruise(!cruise)}>
            <ArticleSubHeader>Cruise Tourism Manager*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {cruise && <Cruise />}

          <TouchableOpacity onPress={() => setErnaehrung(!ernaehrung)}>
            <ArticleSubHeader>Ernährungsberatung ▽</ArticleSubHeader>
          </TouchableOpacity>
          {ernaehrung && <Ernaehrungsberatung />}

          <TouchableOpacity onPress={() => setEurythmist(!eurythmist)}>
            <ArticleSubHeader>EurythmistIn ▽</ArticleSubHeader>
          </TouchableOpacity>
          {eurythmist && <Eurythmist />}

          <TouchableOpacity onPress={() => setErzieher(!erzieher)}>
            <ArticleSubHeader>
              Erzieher*in sowie Facherzieher*in ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {erzieher && <Erzieher />}

          <TouchableOpacity onPress={() => setGoethe(!goethe)}>
            <ArticleSubHeader>
              Fach- und Führungskraft beim Goethe-Institut ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {goethe && <Goethe />}

          <TouchableOpacity onPress={() => setFreizeit(!freizeit)}>
            <ArticleSubHeader>Freizeitwissenschaftler*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {freizeit && <Freizeit />}

          <TouchableOpacity
            onPress={() => setGesundheitsfoerderung(!gesundheitsfoerderung)}
          >
            <ArticleSubHeader>
              Berufe in der Gesundheitsförderung ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {gesundheitsfoerderung && <Gesundheitsfoerderung />}

          <TouchableOpacity onPress={() => setHoerakustiker(!hoerakustiker)}>
            <ArticleSubHeader>Hörakustiker*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {hoerakustiker && <Hoerakustiker />}

          <TouchableOpacity
            onPress={() => setHoergeraeteakustiker(!hoergeraeteaktustiker)}
          >
            <ArticleSubHeader>Hörgeräteakustiker*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {hoergeraeteaktustiker && <Hoergeraeteaktustiker />}

          <TouchableOpacity onPress={() => setKosmetik(!kosmetik)}>
            <ArticleSubHeader>
              Kosmetik, Maskenbild, Tätowierer*in ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {kosmetik && <Kosmetik />}

          <TouchableOpacity
            onPress={() => setKulturvermittler(!kulturvermittler)}
          >
            <ArticleSubHeader>
              Kultur- und Kunstvermittler*in ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {kulturvermittler && <Kulturvermittler />}

          <TouchableOpacity onPress={() => setKunstgeragoge(!kunstgeragoge)}>
            <ArticleSubHeader>Kunstgeragog*Innen ▽</ArticleSubHeader>
          </TouchableOpacity>
          {kunstgeragoge && <Kunstgeragoge />}

          <TouchableOpacity onPress={() => setLehrer(!lehrer)}>
            <ArticleSubHeader>
              Lehrer*in an staatlichen Schulen ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {lehrer && <Lehrer />}

          <TouchableOpacity onPress={() => setLogopaede(!logopaede)}>
            <ArticleSubHeader>Logopäde*in ▽</ArticleSubHeader>
          </TouchableOpacity>
          {logopaede && <Logopaede />}

          <TouchableOpacity onPress={() => setLuftverkehr(!luftverkehr)}>
            <ArticleSubHeader>Luftverkehrskaufleute ▽</ArticleSubHeader>
          </TouchableOpacity>
          {luftverkehr && <Luftverkehr />}

          <TouchableOpacity
            onPress={() => setMediengestalter(!mediengestalter)}
          >
            <ArticleSubHeader>
              Mediengestalter_in digital und print bzw. Webdesign ▽
            </ArticleSubHeader>
          </TouchableOpacity>
          {mediengestalter && <Mediengestalter />}
        </Article>
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
