import React from 'react';

import {Linking, Modal} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Link from '../../components/articleComponents/link';

const Nebenjobs = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Part time jobs' : 'Nebenjobs'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/financialIllustrations/failure.png')}
        />
        <Article>
          {props.english ? (
            <Paragraph>
              Some degree programs or continuing education programs are
              structured in such a way that it is quite possible to earn money
              with a part-time job while studying. This can sometimes be a
              challenge, but with a little organization and structure it can be
              managed very well. You can think of classic part-time jobs, e.g.
              in gastronomy or retail, but also of one of the many other
              possibilities, e.g. as a research assistant at the university, as
              a flight attendant, receptionist, office worker in, for example, a
              doctor's office or a law firm, etc. Most of the time, these jobs
              can be found through advertisements on bulletin boards or the
              Internet. As under the common providers such as:
            </Paragraph>
          ) : (
            <Paragraph>
              Einige Studiengänge oder Weiterbildungsmaßnahmen sind so
              strukturiert, dass man auch durchaus neben dem Studium sein Geld
              mit einem Nebenjob verdienen kann. Das ist zwar manchmal eine
              Herausforderung, aber mit etwas Organisation und Strukturiertheit
              auch sehr gut zu bewältigen. Dabei kann man an klassischen
              Nebenjobs z.B. in der Gastronomie oder dem Einzelhandel denken,
              aber auch an eine der vielen anderen Möglichkeiten wie z. B. als
              wissenschaftliche Hilfskraft an der Universität, als
              FlugbegleiterIn, RezeptionistIn, Bürokraft in beispielsweise einer
              Arztpraxis oder Anwaltskanzlei, etc. Meist sind diese Jobs über
              Anzeigen am schwarzen Brett oder im Internet zu finden. Wie unter
              den gängigen Anbietern wie zum Beispiel:
            </Paragraph>
          )}

          <Link
            onPress={() =>
              Linking.openURL('https://www.studentjob.de/nebenjob/berlin')
            }
          >
            www.studentjob.de
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.gelegenheitsjobs.de/nebenjob/nebenjobs-berlin.php'
              )
            }
          >
            www.gelegenheitsjobs.de
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://de.indeed.com/Nebenjob-Jobs-in-Berlin?vjk=29967bb404044079'
              )
            }
          >
            www.indeed.com
          </Link>
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.monster.de/jobs/q-minijob-jobs?WT.srch=1&WT.mc_n=olm_sk_srch_ggl_perf-max_de&gclid=CjwKCAjwoP6LBhBlEiwAvCcthAdJHPORb4e-izYD_DAiJp4Oxmx1OaWVp1vCPb_2T8fhaXLbdVkT4hoCy9kQAvD_BwE'
              )
            }
          >
            www.monster.de
          </Link>
        </Article>
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Nebenjobs;
