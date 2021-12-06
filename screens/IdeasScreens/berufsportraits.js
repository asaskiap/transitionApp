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
        <ArticleHeader>
          {props.english ? 'Job Portraits' : 'Berufsportraits'}
        </ArticleHeader>
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
          {props.english
            ? 'You can find lists of various jobs at the following links: '
            : 'Eine Auflistung mit den verschiedensten Berufen gibt es auf folgenden Webseiten:'}
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
            {props.english
              ? 'Portraits of a few jobs'
              : 'Ein Paar Berufe im Portrait:'}
          </Paragraph>

          <Article>
            <TouchableOpacity onPress={() => setAugenoptikerIn(true)}>
              {!augenoptikerIn && (
                <ArticleSubHeader>
                  {props.english ? 'Optician ▽' : 'AugenoptikerIn ▽'}
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {augenoptikerIn && (
              <Augenoptiker
                close={() => setAugenoptikerIn(false)}
                eng={props.english}
              ></Augenoptiker>
            )}

            <TouchableOpacity onPress={() => setAutomobilverkäuferin(true)}>
              {!automobilverkäuferIn && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Automotive Salesperson ▽'
                    : 'Automobilverkäufer*In ▽'}
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {automobilverkäuferIn && (
              <Automobilverkäufer
                eng={props.english}
                close={() => setAutomobilverkäuferin(false)}
              />
            )}

            <TouchableOpacity onPress={() => setAuswertigesAmt(true)}>
              {!auswertigesAmt && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Civil servant in the intermediate service of the Federal Foreign Office ▽'
                    : 'Beamte*r im Mittleren Dienst des Auswärtigen Amtes ▽'}
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {auswertigesAmt && (
              <AuswertigesAmt
                close={() => setAuswertigesAmt(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setBekleidungstechniker(true)}>
              {!bekleidungstechniker && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Clothing Technician (BA)'
                    : 'BekleidungstechnikerIn (BA)'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {bekleidungstechniker && (
              <Bekleidungstechniker
                eng={props.english}
                close={() => setBekleidungstechniker(false)}
              />
            )}

            <TouchableOpacity onPress={() => setGesundheitsmanager(true)}>
              {!gesundheitsmanager && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Corporate Health Manager'
                    : 'Betriebliche/r Gesundheits- manager/in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {gesundheitsmanager && (
              <Gesundheitsmanager
                close={() => setGesundheitsmanager(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setBiologe(true)}>
              {!biologe && (
                <ArticleSubHeader>
                  {props.english ? 'Biologist M.Sc.' : 'Biologe/in M.Sc.'} ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {biologe && (
              <Biologie close={() => setBiologe(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setBlingenpaedagoge(true)}>
              {!blindenpaedagoge && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Pedagogue for the blind'
                    : 'Blindenpädagog*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {blindenpaedagoge && (
              <Blindenpädagoge
                close={() => setBlingenpaedagoge(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setBuchbinder(true)}>
              {!buchbinder && (
                <ArticleSubHeader>
                  {props.english ? 'Book binder' : 'Buchbinder*in'} ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {buchbinder && (
              <Buchbinder
                close={() => setBuchbinder(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setClown(true)}>
              {!clown && <ArticleSubHeader>Clown ▽</ArticleSubHeader>}
            </TouchableOpacity>
            {clown && (
              <Clown close={() => setClown(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setCruise(true)}>
              {!cruise && (
                <ArticleSubHeader>
                  Cruise Tourism Manager{props.english ? '' : '*in'} ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {cruise && (
              <Cruise close={() => setCruise(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setErnaehrung(true)}>
              {!ernaehrung && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Nutritional counseling'
                    : 'Ernährungsberatung'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {ernaehrung && (
              <Ernaehrungsberatung
                close={() => setErnaehrung(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setEurythmist(true)}>
              {!eurythmist && (
                <ArticleSubHeader>
                  Eurythmist{props.english ? '' : '*In'} ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {eurythmist && (
              <Eurythmist
                close={() => setEurythmist(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setErzieher(true)}>
              {!erzieher && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Educator'
                    : 'Erzieher*in sowie Facherzieher*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {erzieher && (
              <Erzieher close={() => setErzieher(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setGoethe(true)}>
              {!goethe && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Professional and managerial staff at the Goethe-Institut'
                    : 'Fach- und Führungskraft beim Goethe-Institut'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {goethe && (
              <Goethe close={() => setGoethe(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setFreizeit(true)}>
              {!freizeit && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Leisure Scientist'
                    : 'Freizeitwissenschaftler*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {freizeit && (
              <Freizeit close={() => setFreizeit(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setGesundheitsfoerderung(true)}>
              {!gesundheitsfoerderung && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Professions in health promotion'
                    : 'Berufe in der Gesundheitsförderung'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {gesundheitsfoerderung && (
              <Gesundheitsfoerderung
                close={() => setGesundheitsfoerderung(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setHoerakustiker(true)}>
              {!hoerakustiker && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Hearing Care Professional'
                    : 'Hörakustiker*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {hoerakustiker && (
              <Hoerakustiker
                close={() => setHoerakustiker(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setHoergeraeteakustiker(true)}>
              {!hoergeraeteaktustiker && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Hearing aid acoustician'
                    : 'Hörgeräteakustiker*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {hoergeraeteaktustiker && (
              <Hoergeraeteaktustiker
                close={() => setHoergeraeteakustiker(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setKosmetik(true)}>
              {!kosmetik && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Cosmetics, make-up artist, tattoo artist'
                    : 'Kosmetik, Maskenbild, Tätowierer*in '}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {kosmetik && (
              <Kosmetik close={() => setKosmetik(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setKulturvermittler(true)}>
              {!kulturvermittler && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Culture and art mediator'
                    : 'Kultur- und Kunstvermittler*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {kulturvermittler && (
              <Kulturvermittler
                close={() => setKulturvermittler(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setKunstgeragoge(true)}>
              {!kunstgeragoge && (
                <ArticleSubHeader>
                  {props.english ? 'Art Geragogues' : 'Kunstgeragog*Innen'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {kunstgeragoge && (
              <Kunstgeragoge
                close={() => setKunstgeragoge(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setLehrer(true)}>
              {!lehrer && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Teacher at state schools'
                    : 'Lehrer*in an staatlichen Schulen'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {lehrer && (
              <Lehrer close={() => setLehrer(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setLogopaede(true)}>
              {!logopaede && (
                <ArticleSubHeader>
                  {props.english ? 'Speech therapist' : 'Logopäde*in'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {logopaede && (
              <Logopaede
                close={() => setLogopaede(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setLuftverkehr(true)}>
              {luftverkehr && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Air transport specialists'
                    : 'Luftverkehrskaufleute'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {luftverkehr && (
              <Luftverkehr
                close={() => setLuftverkehr(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setMediengestalter(true)}>
              {!mediengestalter && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Media designer digital & print or web design'
                    : 'Mediengestalter_in digital und print bzw. Webdesign'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {mediengestalter && (
              <Mediengestalter
                close={() => setMediengestalter(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setOsteopathie(true)}>
              {!osteopathie && (
                <ArticleSubHeader>
                  {props.english ? 'Ostheopathy' : 'Osteopathie'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {osteopathie && (
              <Osteopathie
                close={() => setOsteopathie(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setPTA(true)}>
              {!pta && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Pharmaceutical Technical Assistant (PTA)'
                    : 'Pharmazeutisch-technischen Assistentin (PTA)'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {pta && <PTA close={() => setPTA(false)} eng={props.english} />}

            <TouchableOpacity onPress={() => setRaumausstatter(true)}>
              {!raumausstatter && (
                <ArticleSubHeader>
                  {props.english ? 'Interior decorator' : 'Raumausstatter*in'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {raumausstatter && (
              <Raumausstatter
                close={() => setRaumausstatter(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setReiseleiter(true)}>
              {!reiseleiter && (
                <ArticleSubHeader>
                  {props.english ? 'Tour guide' : 'Reiseleiter*in'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {reiseleiter && (
              <Reiseleiter
                close={() => setReiseleiter(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setSozialeArbeitBA(true)}>
              {!sozialeArbeitBA && (
                <ArticleSubHeader>
                  {props.english ? 'Social Work BA' : 'Soziale Arbeit BA '}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sozialeArbeitBA && (
              <SozialeArbeitBA
                close={() => setSozialeArbeitBA(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setSozialeArbeitStudium(true)}>
              {!sozialeArbeitStudium && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Social work studies'
                    : 'Studium Soziale Arbeit'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sozialeArbeitStudium && (
              <SozialeArbeitStudium
                close={() => setSozialeArbeitStudium(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity
              onPress={() => setSozialversicherungsangestellter(true)}
            >
              {!sozialversicherungsangestellter && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Social insurance clerk'
                    : 'Sozialversicherungs- fachangestellte*r '}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sozialversicherungsangestellter && (
              <Sozialversicherungsangestellter
                close={() => setSozialversicherungsangestellter(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setSportkaufmann(true)}>
              {!sportkaufmann && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Sports and fitness management assistant'
                    : 'Sport- und Fitnesskaufmann/Sport- und Fitnesskauffrau'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {sportkaufmann && (
              <Sportkaufmann
                close={() => setSportkaufmann(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setVeranstaltungstechnik(true)}>
              {!veranstaltungstechnik && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Theater or event technician'
                    : 'Theater- bzw. Veranstaltungstechnik'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {veranstaltungstechnik && (
              <Veranstaltungstechnik
                close={() => setVeranstaltungstechnik(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setTierphysiotherapie(true)}>
              {!tierphysiotherapie && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Animal physiotherapy '
                    : 'Tierphysiotherapie'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {tierphysiotherapie && (
              <Tierphysiotherapie
                close={() => setTierphysiotherapie(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setTierwirt(true)}>
              {!tierwirt && (
                <ArticleSubHeader>
                  {props.english ? 'Animal farmer' : 'Tierwirt*in'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {tierwirt && (
              <Tierwirt close={() => setTierwirt(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setTrainee(true)}>
              {!trainee && <ArticleSubHeader>Trainee ▽</ArticleSubHeader>}
            </TouchableOpacity>
            {trainee && (
              <Trainee close={() => setTrainee(false)} eng={props.english} />
            )}

            <TouchableOpacity onPress={() => setVersicherungsmakler(true)}>
              {!versicherungsmakler && (
                <ArticleSubHeader>
                  {props.english
                    ? 'Insurance broker'
                    : 'Versicherungsmakler*in'}
                  ▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {versicherungsmakler && (
              <Versicherungsmakler
                close={() => setVersicherungsmakler(false)}
                eng={props.english}
              />
            )}

            <TouchableOpacity onPress={() => setZirkuspaedagoge(true)}>
              {!zirkuspaedagoge && (
                <ArticleSubHeader>
                  {props.english ? 'Circus educator' : 'Zirkuspädagog*in'}▽
                </ArticleSubHeader>
              )}
            </TouchableOpacity>
            {zirkuspaedagoge && (
              <Zirkuspaedagoge
                close={() => setZirkuspaedagoge(false)}
                eng={props.english}
              />
            )}
          </Article>
        </View>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Berufsportraits;
