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
            <TouchableOpacity onPress={() => setAugenoptikerIn(true)}>
              {!augenoptikerIn && (
                <ArticleSubHeader>AugenoptikerIn ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {augenoptikerIn && (
              <Augenoptiker
                close={() => setAugenoptikerIn(false)}
              ></Augenoptiker>
            )}

            <TouchableOpacity onPress={() => setAutomobilverkäuferin(true)}>
              {!automobilverkäuferIn && (
                <ArticleSubHeader>Automobilverkäufer*In ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {automobilverkäuferIn && (
              <Automobilverkäufer
                close={() => setAutomobilverkäuferin(false)}
              />
            )}

            <TouchableOpacity onPress={() => setAuswertigesAmt(true)}>
              {!auswertigesAmt && (
                <ArticleSubHeader>
                  Beamte*r im Mittleren Dienst des Auswärtigen Amtes ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {auswertigesAmt && (
              <AuswertigesAmt close={() => setAuswertigesAmt(false)} />
            )}

            <TouchableOpacity onPress={() => setBekleidungstechniker(true)}>
              {!bekleidungstechniker && (
                <ArticleSubHeader>
                  BekleidungstechnikerIn (BA) ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {bekleidungstechniker && (
              <Bekleidungstechniker
                close={() => setBekleidungstechniker(false)}
              />
            )}

            <TouchableOpacity onPress={() => setGesundheitsmanager(true)}>
              {!gesundheitsmanager && (
                <ArticleSubHeader>
                  Betriebliche/r Gesundheits- manager/in ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {gesundheitsmanager && (
              <Gesundheitsmanager close={() => setGesundheitsmanager(false)} />
            )}

            <TouchableOpacity onPress={() => setBiologe(true)}>
              {!biologe && (
                <ArticleSubHeader>Biologe/in M.Sc. ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {biologe && <Biologie close={() => setBiologe(false)} />}

            <TouchableOpacity onPress={() => setBlingenpaedagoge(true)}>
              {!blindenpaedagoge && (
                <ArticleSubHeader>Blindenpädagog*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {blindenpaedagoge && (
              <Blindenpädagoge close={() => setBlingenpaedagoge(false)} />
            )}

            <TouchableOpacity onPress={() => setBuchbinder(true)}>
              {!buchbinder && (
                <ArticleSubHeader>Buchbinder*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {buchbinder && <Buchbinder close={() => setBuchbinder(false)} />}

            <TouchableOpacity onPress={() => setClown(true)}>
              {!clown && <ArticleSubHeader>Clown ▽</ArticleSubHeader>}
            </TouchableOpacity>
            {clown && <Clown close={() => setClown(false)} />}

            <TouchableOpacity onPress={() => setCruise(true)}>
              {!cruise && (
                <ArticleSubHeader>Cruise Tourism Manager*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {cruise && <Cruise close={() => setCruise(false)} />}

            <TouchableOpacity onPress={() => setErnaehrung(true)}>
              {!ernaehrung && (
                <ArticleSubHeader>Ernährungsberatung ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {ernaehrung && (
              <Ernaehrungsberatung close={() => setErnaehrung(false)} />
            )}

            <TouchableOpacity onPress={() => setEurythmist(true)}>
              {eurythmist && (
                <ArticleSubHeader>EurythmistIn ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {eurythmist && <Eurythmist close={() => setEurythmist(false)} />}

            <TouchableOpacity onPress={() => setErzieher(true)}>
              {!erzieher && (
                <ArticleSubHeader>
                  Erzieher*in sowie Facherzieher*in ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {erzieher && <Erzieher close={() => setErzieher(false)} />}

            <TouchableOpacity onPress={() => setGoethe(true)}>
              {!goethe && (
                <ArticleSubHeader>
                  Fach- und Führungskraft beim Goethe-Institut ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {goethe && <Goethe close={() => setGoethe(false)} />}

            <TouchableOpacity onPress={() => setFreizeit(true)}>
              {!freizeit && (
                <ArticleSubHeader>
                  Freizeitwissenschaftler*in ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {freizeit && <Freizeit close={() => setFreizeit(false)} />}

            <TouchableOpacity onPress={() => setGesundheitsfoerderung(true)}>
              {!gesundheitsfoerderung && (
                <ArticleSubHeader>
                  Berufe in der Gesundheitsförderung ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {gesundheitsfoerderung && (
              <Gesundheitsfoerderung
                close={() => setGesundheitsfoerderung(false)}
              />
            )}

            <TouchableOpacity onPress={() => setHoerakustiker(true)}>
              {!hoerakustiker && (
                <ArticleSubHeader>Hörakustiker*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {hoerakustiker && (
              <Hoerakustiker close={() => setHoerakustiker(false)} />
            )}

            <TouchableOpacity onPress={() => setHoergeraeteakustiker(true)}>
              {!hoergeraeteaktustiker && (
                <ArticleSubHeader>Hörgeräteakustiker*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {hoergeraeteaktustiker && (
              <Hoergeraeteaktustiker
                close={() => setHoergeraeteakustiker(false)}
              />
            )}

            <TouchableOpacity onPress={() => setKosmetik(true)}>
              {!kosmetik && (
                <ArticleSubHeader>
                  Kosmetik, Maskenbild, Tätowierer*in ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {kosmetik && <Kosmetik close={() => setKosmetik(false)} />}

            <TouchableOpacity onPress={() => setKulturvermittler(true)}>
              {!kulturvermittler && (
                <ArticleSubHeader>
                  Kultur- und Kunstvermittler*in ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {kulturvermittler && (
              <Kulturvermittler close={() => setKulturvermittler(false)} />
            )}

            <TouchableOpacity onPress={() => setKunstgeragoge(true)}>
              {!kunstgeragoge && (
                <ArticleSubHeader>Kunstgeragog*Innen ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {kunstgeragoge && (
              <Kunstgeragoge close={() => setKunstgeragoge(false)} />
            )}

            <TouchableOpacity onPress={() => setLehrer(true)}>
              {!lehrer && (
                <ArticleSubHeader>
                  Lehrer*in an staatlichen Schulen ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {lehrer && <Lehrer close={() => setLehrer(false)} />}

            <TouchableOpacity onPress={() => setLogopaede(true)}>
              {!logopaede && <ArticleSubHeader>Logopäde*in ▽</ArticleSubHeader>}
            </TouchableOpacity>
            {logopaede && <Logopaede close={() => setLogopaede(false)} />}

            <TouchableOpacity onPress={() => setLuftverkehr(true)}>
              {luftverkehr && (
                <ArticleSubHeader>Luftverkehrskaufleute ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {luftverkehr && <Luftverkehr close={() => setLuftverkehr(false)} />}

            <TouchableOpacity onPress={() => setMediengestalter(true)}>
              {!mediengestalter && (
                <ArticleSubHeader>
                  Mediengestalter_in digital und print bzw. Webdesign ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {mediengestalter && (
              <Mediengestalter close={() => setMediengestalter(false)} />
            )}

            <TouchableOpacity onPress={() => setOsteopathie(true)}>
              {!osteopathie && (
                <ArticleSubHeader>Osteopathie ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {osteopathie && <Osteopathie close={() => setOsteopathie(false)} />}

            <TouchableOpacity onPress={() => setPTA(true)}>
              {!pta && (
                <ArticleSubHeader>
                  Pharmazeutisch-technischen Assistentin (PTA) ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {pta && <PTA close={() => setPTA(false)} />}

            <TouchableOpacity onPress={() => setRaumausstatter(true)}>
              {!raumausstatter && (
                <ArticleSubHeader>Raumausstatter*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {raumausstatter && (
              <Raumausstatter close={() => setRaumausstatter(true)} />
            )}

            <TouchableOpacity onPress={() => setReiseleiter(true)}>
              {!reiseleiter && (
                <ArticleSubHeader>Reiseleiter*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {reiseleiter && <Reiseleiter close={() => setReiseleiter(false)} />}

            <TouchableOpacity onPress={() => setSozialeArbeitBA(true)}>
              {!sozialeArbeitBA && (
                <ArticleSubHeader>Soziale Arbeit BA ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sozialeArbeitBA && (
              <SozialeArbeitBA close={() => setSozialeArbeitBA(false)} />
            )}

            <TouchableOpacity onPress={() => setSozialeArbeitStudium(true)}>
              {!sozialeArbeitStudium && (
                <ArticleSubHeader>Studium Soziale Arbeit ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sozialeArbeitStudium && (
              <SozialeArbeitStudium
                close={() => setSozialeArbeitStudium(false)}
              />
            )}

            <TouchableOpacity
              onPress={() => setSozialversicherungsangestellter(true)}
            >
              {!sozialversicherungsangestellter && (
                <ArticleSubHeader>
                  Sozialversicherungs- fachangestellte*r ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sozialversicherungsangestellter && (
              <Sozialversicherungsangestellter
                close={() => setSozialversicherungsangestellter(false)}
              />
            )}

            <TouchableOpacity onPress={() => setSportkaufmann(true)}>
              {!sportkaufmann && (
                <ArticleSubHeader>
                  Sport- und Fitnesskaufmann/Sport- und Fitnesskauffrau ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sportkaufmann && (
              <Sportkaufmann close={() => setSportkaufmann(false)} />
            )}

            <TouchableOpacity onPress={() => setVeranstaltungstechnik(true)}>
              {!veranstaltungstechnik && (
                <ArticleSubHeader>
                  Theater- bzw. Veranstaltungstechnik ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {veranstaltungstechnik && (
              <Veranstaltungstechnik
                close={() => setVeranstaltungstechnik(false)}
              />
            )}

            <TouchableOpacity onPress={() => setTierphysiotherapie(true)}>
              {!tierphysiotherapie && (
                <ArticleSubHeader>Tierphysiotherapie ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {tierphysiotherapie && (
              <Tierphysiotherapie close={() => setTierphysiotherapie(false)} />
            )}

            <TouchableOpacity onPress={() => setTierwirt(true)}>
              {!tierwirt && <ArticleSubHeader>Tierwirt*in ▽</ArticleSubHeader>}
            </TouchableOpacity>
            {tierwirt && <Tierwirt close={() => setTierwirt(false)} />}

            <TouchableOpacity onPress={() => setTrainee(true)}>
              {!trainee && <ArticleSubHeader>Trainee ▽</ArticleSubHeader>}
            </TouchableOpacity>
            {trainee && <Trainee close={() => setTrainee(false)} />}

            <TouchableOpacity onPress={() => setVersicherungsmakler(true)}>
              {!versicherungsmakler && (
                <ArticleSubHeader>Versicherungsmakler*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {versicherungsmakler && (
              <Versicherungsmakler
                close={() => setVersicherungsmakler(false)}
              />
            )}

            <TouchableOpacity onPress={() => setZirkuspaedagoge(true)}>
              {!zirkuspaedagoge && (
                <ArticleSubHeader>Zirkuspädagog*in ▽</ArticleSubHeader>
              )}
            </TouchableOpacity>
            {zirkuspaedagoge && (
              <Zirkuspaedagoge close={() => setZirkuspaedagoge(false)} />
            )}
          </Article>
        </View>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Berufsportraits;
