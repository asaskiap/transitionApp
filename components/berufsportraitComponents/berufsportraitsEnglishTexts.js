import React from 'react';
import Paragraph from '../articleComponents/paragraph';
import Link from '../articleComponents/link';
import {Linking, TouchableOpacity} from 'react-native';
import {List, ListItem} from '../articleComponents/list';
import ArticleSubHeader from '../articleComponents/articleSubHeader';
import Quote from '../../components/articleComponents/quote';

import {sendEmail} from '../../utilities/sendEmail';
import Article from '../articleComponents/article';

import {
  AutomotiveSalesperson,
  Optician,
  CivilServant,
  ClothingTechnician,
  CorporateHealthManager,
  Biologist,
  BlindPedagogue,
  BookBinder,
  Clown,
  CruiseManager,
  NutritionalCouncelling,
  Eurythmist,
  Educator,
  LeisureScientist,
  HealtPromotion,
  HearingCareProfessional,
  HearingAidAccustitcian,
  MakeUpArtist,
  CultureMediator
} from './berufsportraitsEnglishContent';

export const OpticianEnglish = (props) => {
  return (
    <Article>
      {Optician.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
    </Article>
  );
};

export const AutomotiveEnglish = (props) => {
  return (
    <Article>
      {AutomotiveSalesperson.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}

      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.mercedes-benz-berlin.de/de/desktop/passenger-cars/about-us/career/vacancies/nachwuchsverkauf-pkw.html'
          )
        }
      >
        www.mercedes-benz-berlin.de/de/desktop/passenger-cars/about-us/career/vacancies/nachwuchsverkauf-pkw.html
      </Link>
      <Link onPress={() => Linking.openURL('https://www.volkswagen.de')}>
        www.volkswagen.de
      </Link>
      <Link onPress={() => Linking.openURL('https://www.mercedes-benz.de')}>
        www.mercedes-benz.de
      </Link>
      <Link onPress={() => Linking.openURL('https://www.bmw.de')}>
        www.bmw.de
      </Link>
      <Link onPress={() => Linking.openURL('https://www.porsche.de')}>
        www.porsche.de
      </Link>
    </Article>
  );
};

export const CivilServantEnglish = (props) => {
  return (
    <Article>
      {CivilServant.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
    </Article>
  );
};

export const ClothingTechnicianEnglish = (props) => {
  return (
    <Article>
      {ClothingTechnician.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
    </Article>
  );
};

export const CorporateHealthManagerEnglish = (props) => {
  return (
    <Article>
      {CorporateHealthManager.paragraphs1.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <TouchableOpacity
        onPress={() =>
          sendEmail('alannapfeiffer@gmail.com', 'Enquiry', '').then(() => {
            console.log('Your message was successfully sent!');
          })
        }
      >
        <ArticleSubHeader textStyle={{fontWeight: 'bold', fontSize: 14}}>
          info@stiftung-tanz.com.
        </ArticleSubHeader>
      </TouchableOpacity>
      {CorporateHealthManager.paragraphs2.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link onPress={() => Linking.openURL('http://www.bgm-bv.de/')}>
        www.bgm-bv.de
      </Link>
    </Article>
  );
};

export const BiologistEnglish = (props) => {
  return (
    <Article>
      {Biologist.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Paragraph style={{fontSize: 11, fontStyle: 'italic'}}>
        written by Jonas Schwickert, Biologe M.Sc.
      </Paragraph>
    </Article>
  );
};
export const BlindPedagogueEnglish = (props) => {
  return (
    <Article>
      {BlindPedagogue.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.uni-marburg.de/fb21/studium/studiengaenge/wb-bsp'
          )
        }
      >
        www.uni-marburg.de/fb21/studium/studiengaenge/wb-bsp
      </Link>
      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.uni-marburg.de/fb21/studium/studiengaenge/grip-bs'
          )
        }
      >
        www.uni-marburg.de/fb21/studium/studiengaenge/grip-bs
      </Link>
      <Link
        onPress={() => Linking.openURL('http:// www.blindenmuseum-berlin.de/')}
      >
        www.blindenmuseum-berlin.de/
      </Link>
    </Article>
  );
};

export const BookBinderEnglish = (props) => {
  return (
    <Article>
      {BookBinder.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Quote>
        "The restoration of historical book bindings has gained in importance.
        There is more emphasis again on restoring the originals. Therefore, the
        craft training as a bookbinder is not infrequently the basis for a
        [further qualification] as a restorer."
      </Quote>
      <Paragraph>Further information:</Paragraph>
      <Link onPress={() => Linking.openURL('http://www.zfamedien.de/berufe/')}>
        www.zfamedien.de/berufe/
      </Link>
      <Link
        onPress={() => Linking.openURL('http://www.bdbi.org/startseite.html')}
      >
        www.bdbi.org/startseite.html
      </Link>
    </Article>
  );
};

export const ClownEnglish = (props) => {
  return (
    <Article>
      {Clown.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link onPress={() => Linking.openURL('http://www.clownlabor.de')}>
        www.clownlabor.de
      </Link>
    </Article>
  );
};

export const CruiseManagerEnglish = (props) => {
  return (
    <Article>
      {CruiseManager.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link onPress={() => Linking.openURL('http://www.hs-bremerhaven.de/')}>
        www.hs-bremerhaven.de
      </Link>
    </Article>
  );
};

export const NutritionalCouncellingEnglish = (props) => {
  return (
    <Article>
      {NutritionalCouncelling.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
    </Article>
  );
};

export const EurythmistEnglish = (props) => {
  return (
    <Article>
      {Eurythmist.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link onPress={() => Linking.openURL('http://www.eurythmie-info.de/')}>
        www.eurythmie-info.de/
      </Link>
    </Article>
  );
};
export const EducatorEnglish = (props) => {
  return (
    <Article>
      {Educator.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link
        onPress={() => Linking.openURL('https://www.erzieherin-ausbildung.de/')}
      >
        www.erzieherin-ausbildung.de/
      </Link>
      <Link
        onPress={() => Linking.openURL('https://www.fachkraeftebarometer.de/')}
      >
        www.fachkraeftebarometer.de
      </Link>
    </Article>
  );
};

export const LeisureScientistEnglish = (props) => {
  return (
    <Article>
      {LeisureScientist.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 100}>{contents}</Paragraph>
      ))}
      <Link
        onPress={() =>
          Linking.openURL(
            'http://www.hs-bremen.de/internet/de/studium/stg/isaf/'
          )
        }
      >
        www.hs-bremen.de/internet/de/studium/stg/isaf/
      </Link>
    </Article>
  );
};

export const HealtPromotionEnglish = (props) => {
  return (
    <Article>
      {HealtPromotion.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 1000}>{contents}</Paragraph>
      ))}
    </Article>
  );
};

export const HearingCareProfessionalEnglish = (props) => {
  return (
    <Article>
      {HearingCareProfessional.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 1000}>{contents}</Paragraph>
      ))}
      <Link
        onPress={() => Linking.openURL('https://www.der-hoerakustiker.de/')}
      >
        www.der-hoerakustiker.de/
      </Link>
    </Article>
  );
};

export const HearingAidAccustitcianEnglish = (props) => {
  return (
    <Article>
      {HearingAidAccustitcian.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 1000}>{contents}</Paragraph>
      ))}
    </Article>
  );
};

export const MakeUpArtistEnglish = (props) => {
  return (
    <Article>
      {MakeUpArtist.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 1000}>{contents}</Paragraph>
      ))}
      <Link
        onPress={() => Linking.openURL('http://www.maskenbildner-werden.info')}
      >
        www.maskenbildner-werden.info
      </Link>
    </Article>
  );
};

export const ArtGeragogueEnglish = (props) => {
  return (
    <Article>
      {CultureMediator.paragraphs.map((contents) => (
        <Paragraph key={Math.random() * 1000}>{contents}</Paragraph>
      ))}
      <Link onPress={() => Linking.openURL('http://www.kunstgeragogik.net/')}>
        www.kunstgeragogik.net/
      </Link>
    </Article>
  );
};
