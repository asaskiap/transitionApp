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
  Mediengestalter,
  Osteopathie,
  SozialeArbeitBA,
  SozialeArbeitStudium,
  Sozialversicherungsangestellter,
  Sportkaufmann,
  PTA,
  Raumausstatter,
  Reiseleiter,
  Veranstaltungstechnik,
  Tierphysiotherapie,
  Tierwirt,
  Trainee,
  Versicherungsmakler,
  Zirkuspaedagoge
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
  const [osteopathie, setOsteopathie] = useState(false);
  const [sozialeArbeitBA, setSozialeArbeitBA] = useState(false);
  const [sozialeArbeitStudium, setSozialeArbeitStudium] = useState(false);
  const [sozialversicherungsangestellter, setSozialversicherungsangestellter] =
    useState(false);
  const [sportkaufmann, setSportkaufmann] = useState(false);
  const [pta, setPTA] = useState(false);
  const [raumausstatter, setRaumausstatter] = useState(false);
  const [reiseleiter, setReiseleiter] = useState(false);
  const [veranstaltungstechnik, setVeranstaltungstechnik] = useState(false);
  const [tierphysiotherapie, setTierphysiotherapie] = useState(false);
  const [tierwirt, setTierwirt] = useState(false);
  const [trainee, setTrainee] = useState(false);
  const [versicherungsmakler, setVersicherungsmakler] = useState(false);
  const [zirkuspaedagoge, setZirkuspaedagoge] = useState(false);

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

          <Paragraph
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 24,
              marginTop: 40
            }}
          >
            Ein Paar Berufe im Portrait:
          </Paragraph>

          <Article>
            <TouchableOpacity
              onPress={() => setAugenoptikerIn(!augenoptikerIn)}
            >
              <ArticleSubHeader>AugenoptikerIn ▽</ArticleSubHeader>
            </TouchableOpacity>
            {augenoptikerIn && <Augenoptiker></Augenoptiker>}

            <TouchableOpacity
              onPress={() => setAutomobilverkäuferin(!automobilverkäuferIn)}
            >
              <ArticleSubHeader>AutomobilverkäuferIn ▽</ArticleSubHeader>
            </TouchableOpacity>
            {automobilverkäuferIn && <Automobilverkäufer />}

            <TouchableOpacity
              onPress={() => setAuswertigesAmt(!auswertigesAmt)}
            >
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

            <TouchableOpacity onPress={() => setOsteopathie(!osteopathie)}>
              <ArticleSubHeader>Osteopathie ▽</ArticleSubHeader>
            </TouchableOpacity>
            {osteopathie && <Osteopathie />}

            <TouchableOpacity onPress={() => setPTA(!pta)}>
              <ArticleSubHeader>
                Pharmazeutisch-technischen Assistentin (PTA) ▽
              </ArticleSubHeader>
            </TouchableOpacity>
            {pta && <PTA />}

            <TouchableOpacity
              onPress={() => setRaumausstatter(!raumausstatter)}
            >
              <ArticleSubHeader>Raumausstatter*in ▽</ArticleSubHeader>
            </TouchableOpacity>
            {raumausstatter && <Raumausstatter />}

            <TouchableOpacity onPress={() => setReiseleiter(!reiseleiter)}>
              <ArticleSubHeader>Reiseleiter*in ▽</ArticleSubHeader>
            </TouchableOpacity>
            {reiseleiter && <Reiseleiter />}

            <TouchableOpacity
              onPress={() => setSozialeArbeitBA(!sozialeArbeitBA)}
            >
              <ArticleSubHeader>Soziale Arbeit BA ▽</ArticleSubHeader>
            </TouchableOpacity>
            {sozialeArbeitBA && <SozialeArbeitBA />}

            <TouchableOpacity
              onPress={() => setSozialeArbeitStudium(!sozialeArbeitStudium)}
            >
              <ArticleSubHeader>Studium Soziale Arbeit ▽</ArticleSubHeader>
            </TouchableOpacity>
            {sozialeArbeitStudium && <SozialeArbeitStudium />}

            <TouchableOpacity
              onPress={() =>
                setSozialversicherungsangestellter(
                  !sozialversicherungsangestellter
                )
              }
            >
              <ArticleSubHeader>
                Sozialversicherungs- fachangestellte*r ▽
              </ArticleSubHeader>
            </TouchableOpacity>
            {sozialversicherungsangestellter && (
              <Sozialversicherungsangestellter />
            )}

            <TouchableOpacity onPress={() => setSportkaufmann(!sportkaufmann)}>
              <ArticleSubHeader>
                Sport- und Fitnesskaufmann/Sport- und Fitnesskauffrau ▽
              </ArticleSubHeader>
            </TouchableOpacity>
            {sportkaufmann && <Sportkaufmann />}

            <TouchableOpacity
              onPress={() => setVeranstaltungstechnik(!veranstaltungstechnik)}
            >
              <ArticleSubHeader>
                Theater- bzw. Veranstaltungstechnik ▽
              </ArticleSubHeader>
            </TouchableOpacity>
            {veranstaltungstechnik && <Veranstaltungstechnik />}

            <TouchableOpacity
              onPress={() => setTierphysiotherapie(!tierphysiotherapie)}
            >
              <ArticleSubHeader>Tierphysiotherapie ▽</ArticleSubHeader>
            </TouchableOpacity>
            {tierphysiotherapie && <Tierphysiotherapie />}

            <TouchableOpacity onPress={() => setTierwirt(!tierwirt)}>
              <ArticleSubHeader>Tierwirt*in ▽</ArticleSubHeader>
            </TouchableOpacity>
            {tierwirt && <Tierwirt />}

            <TouchableOpacity onPress={() => setTrainee(!trainee)}>
              <ArticleSubHeader>Trainee ▽</ArticleSubHeader>
            </TouchableOpacity>
            {trainee && <Trainee />}

            <TouchableOpacity
              onPress={() => setVersicherungsmakler(!versicherungsmakler)}
            >
              <ArticleSubHeader>Versicherungsmakler*in ▽</ArticleSubHeader>
            </TouchableOpacity>
            {versicherungsmakler && <Versicherungsmakler />}

            <TouchableOpacity
              onPress={() => setZirkuspaedagoge(!zirkuspaedagoge)}
            >
              <ArticleSubHeader>Zirkuspädagog*in ▽</ArticleSubHeader>
            </TouchableOpacity>
            {zirkuspaedagoge && <Zirkuspaedagoge />}
          </Article>
        </View>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Berufsportraits;
