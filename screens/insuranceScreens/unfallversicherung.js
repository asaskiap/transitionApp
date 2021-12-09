import React from 'react';

import {Linking, Modal, Dimensions} from 'react-native';
import colors from '../../assets/colors';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Link from '../../components/articleComponents/link';
import {List, ListItem} from '../../components/articleComponents/list';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const windowHeight = Dimensions.get('window').height;

const Unfallversicherung_DE = (props) => {
  return (
    <Article>
      <ArticleSubHeader>
        Was tun bei Berufsaufgabe aus gesundheitlichen Gründen?
      </ArticleSubHeader>
      <Paragraph>
        Voraussetzungen für den Erhalt von Leistungen zur Teilhabe am
        Arbeitsleben (LTA) wie Umschulungen, Maßnahmen zur Weiterqualifizierung
        bzw. Integrationshilfen oder Gründungszuschuss über die Deutsche
        Rentenversicherung (DRV, den Begriff BfA gibt es nicht mehr!) sind:
      </Paragraph>
      <List>
        <ListItem>
          ohne diese Leistungen wäre eine Rente wegen verminderter
          Erwerbsfähigkeit fällig
        </ListItem>
        <ListItem>
          LTA werden unmittelbar im Anschluss an die medizinische Rehabilitation
          erforderlich, damit die Rehabilitation erfolgreich beendet werden
          kann, oder
        </ListItem>
        <ListItem>
          eine Wartezeit von 15 Jahren ist erfüllt (= z. B. die Zeit, in der
          Beiträge gezahlt wurden bzw. Zeiten, in denen Rentenanwartschaften
          erworben wurden, z.B. Kindererziehungszeiten)
        </ListItem>
      </List>
      <Paragraph>
        Fazit: Im Anschluss an eine medizinische Rehabilitation stehen
        TänzerInnen bei entsprechender medizinischer Begutachtung die Türen zum
        Empfang von Leistungen zur Teilhabe offen. Das bedeutet im Klartext:
        TänzerIn mit Umschulungswunsch bzw. -vorhaben, die über einen vom
        behandelnden Arzt gestellten Rehaantrag eine medizinische Reha von der
        DRV bewilligt bekommen oder die Reha vom medizinischen Dienst der
        Krankenkassen in Auftrag gegeben wird, sollten diese
        in arbeitsunfähigem Zustand beginnen. So haben die Ärzte der
        Rehabilitationseinrichtung bei der abschließenden sozialmedizinischen
        Beurteilung die Möglichkeit, den Beruf des/der Tänzers/in künftig für
        nicht mehr leidensgerecht bzw. unter 3 h zumutbar zu beurteilen.
        Gleichzeitig werden im Entlassungsbericht Leistungen zur Teilhabe am
        Arbeitsleben angeregt, für die dann die DRV zuständig ist.
      </Paragraph>
      <Paragraph>Mehr unter:</Paragraph>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        Tel. 0800 10 00 480 70
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('http://www.deutsche-rentenversicherung-bund.de')
        }
      >
        www.deutsche-rentenversicherung-bund.de
      </Link>
      <Paragraph>
        Wichtiger Kontakt zum Verein tamed e.V., die spezifisch beraten und
        unterstützen: 
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Tanzmedizin tamed e.V.
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        06151 – 3917 601
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.tamed.de')}>
        www.tamed.de
      </Link>

      <ArticleSubHeader>
        Weiterbildung und Rehabilitation über die Unfallkasse/
        Berufsgenossenschaften
      </ArticleSubHeader>
      <Paragraph>
        Kann der Versicherte aufgrund der Unfall- bzw. Erkrankungsfolgen seinen
        Beruf nicht mehr oder nur erschwert ausüben, übernimmt die Unfallkasse
        die Maßnahmen zur beruflichen Rehabilitation. Dadurch soll der
        Versicherte in die Lage versetzt werden, seinen früheren Beruf oder,
        wenn dies nicht möglich ist, einen neuen Beruf auszuüben. Ziel ist, den
        Versicherten auf Dauer wieder ins Berufsleben einzugliedern.
      </Paragraph>
      <Paragraph>
        Kann der Versicherte nicht ohne theoretische und praktische Schulung ins
        Berufsleben wiedereingegliedert werden, kommen Maßnahmen der beruflichen
        Anpassung, Fortbildung, Ausbildung und Umschulung in Betracht. Bei
        beruflicher Anpassung, häufig auch Anlernung genannt, wird der
        Versicherte meist in eine Tätigkeit eingeführt, deren Ausübung gewisse
        Fertigkeiten und Kenntnisse voraussetzt. In der Regel wird die Anlernung
        betriebsnah durchgeführt und nicht in einer besonderen
        Ausbildungsstätte. Die berufliche Fortbildung baut auf einem bereits
        ausgeübten Beruf auf. Sie soll dem Versicherten den Übergang von einer
        manuellen Beschäftigung, die er wegen der Verletzungsfolgen nicht mehr
        oder nur unter sehr erschwerten Umständen ausüben kann, zu einer
        leitenden oder aufsichtführenden Tätigkeit ermöglichen.
      </Paragraph>
      <Paragraph>
        Hat der Versicherte vor seinem Arbeitsunfall noch keinen Beruf ausgeübt,
        so fördert die Unfallkasse unter Umständen eine Ausbildung zu einem
        Beruf nach einer Ausbildungsverordnung. Voraussetzung hierfür ist, dass
        der Versicherte wegen der Unfallfolgen nur durch diese Ausbildung in das
        Erwerbsleben eingegliedert werden kann. Die Ausbildung wird z.B. in
        einem Berufsbildungswerk oder in einem Betrieb durchgeführt.
      </Paragraph>
      <Paragraph>
        Kann der Versicherte seine bisherige berufliche Tätigkeit wegen der
        Unfall- oder Erkrankungsfolgen nicht mehr ausüben, so kann unter
        Umständen eine Umschulung in einen anderen Beruf angestrebt werden. Die
        Umschulung erfolgt bei ganztägigem Unterricht und dauert in der Regel
        bis zu zwei Jahren.
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Unfallkasse Bund
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        04421/407-407
      </Paragraph>
      <Link onPress={() => Linking.openURL('https://www.uv-bund-bahn.de/')}>
        www.uv-bund-bahn.de
      </Link>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Unfallkasse Berlin
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        030/ 76 24 – 0
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.unfallkasse-berlin.de')}>
        www.unfallkasse-berlin.de
      </Link>
      <Paragraph>sowie in allen Bundesländern, bitte googeln.</Paragraph>
    </Article>
  );
};

const Unfallversicherung_EN = (props) => {
  return (
    <Article>
      <ArticleSubHeader>
        What to do if I give up my job for health reasons?{' '}
      </ArticleSubHeader>
      <Paragraph>
        Prerequisites for receiving benefits for participation in working life
        (LTA) such as retraining, measures for further qualification or
        integration assistance or start-up subsidy via the German Pension
        Insurance (DRV, the term BfA no longer exists!) are:
      </Paragraph>
      <List>
        <ListItem>
          without these benefits a pension due to reduced earning capacity would
          be due
        </ListItem>
        <ListItem>
          LTA is required immediately after the medical rehabilitation, so that
          the rehabilitation can be successfully completed, or
        </ListItem>
        <ListItem>
          a waiting period of 15 years is fulfilled (= e.g. the time in which
          contributions were paid or periods in which pension entitlements were
          acquired, e.g. child-raising periods).
        </ListItem>
      </List>
      <Paragraph>
        Conclusion: Following medical rehabilitation, the doors to receiving
        benefits for participation are open to dancers with the appropriate
        medical assessment. This means in plain language: Dancers who wish to
        retrain or have plans to retrain, and who are granted medical
        rehabilitation by the DRV on the basis of an application for
        rehabilitation submitted by the attending physician, or if the
        rehabilitation is commissioned by the medical service of the health
        insurance funds, should begin this rehabilitation in a state of
        incapacity for work. Thus the physicians of the rehabilitation facility
        have the possibility with the final social-medical evaluation to judge
        the occupation of the dancer in the future for no more suffering-fair
        and/or under 3 h reasonable. At the same time, services for
        participation in working life are suggested in the discharge report, for
        which the DRV is then responsible.
      </Paragraph>
      <Paragraph>More under:</Paragraph>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        Tel. 0800 10 00 480 70
      </Paragraph>
      <Link
        onPress={() =>
          Linking.openURL('http://www.deutsche-rentenversicherung-bund.de')
        }
      >
        www.deutsche-rentenversicherung-bund.de
      </Link>
      <Paragraph>
        Important contact to the association tamed e.V., who give specific
        advice and support:
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Tanzmedizin tamed e.V.
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        06151 – 3917 601
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.tamed.de')}>
        www.tamed.de
      </Link>

      <ArticleSubHeader>
        Further training and rehabilitation via the accident insurance fund /
        employers' liability insurance association.
      </ArticleSubHeader>
      <Paragraph>
        If the insured person is no longer able to carry out his or her
        occupation, or is only able to do so with difficulty, due to the
        consequences of the accident or illness, the accident insurance fund
        will take over the measures for occupational rehabilitation. The aim is
        to enable the insured person to return to his or her former occupation
        or, if this is not possible, to take up a new occupation. The aim is to
        reintegrate the insured person permanently into working life.
      </Paragraph>
      <Paragraph>
        If the insured person cannot be reintegrated into working life without
        theoretical and practical training, measures of occupational adaptation,
        further education, training and retraining can be considered.
      </Paragraph>
      <Paragraph>
        In the case of occupational adaptation, often also called training, the
        insured person is usually introduced to an activity that requires
        certain skills and knowledge. As a rule, training is carried out close
        to the workplace and not in a special training center.
      </Paragraph>
      <Paragraph>
        Continuing vocational training builds on an occupation already
        practiced. It is intended to enable the insured person to make the
        transition from a manual occupation, which he or she can no longer
        perform due to the consequences of the injury, or only under very
        difficult circumstances, to a managerial or supervisory occupation.
      </Paragraph>
      <Paragraph>
        If the insured person was not yet working in an occupation before his or
        her occupational accident, the accident insurance fund may support
        training for an occupation in accordance with a training regulation. The
        prerequisite for this is that the insured person can only be
        reintegrated into working life through this training due to the
        consequences of the accident. The training is carried out e.g. in a
        vocational training center or in a company.
      </Paragraph>
      <Paragraph>
        If the insured person can no longer perform his or her previous
        occupation due to the consequences of the accident or illness,
        retraining in another occupation may be sought under certain
        circumstances. The retraining takes place in full-time classes and
        usually lasts up to two years.
      </Paragraph>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Unfallkasse Bund
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        04421/407-407
      </Paragraph>
      <Link onPress={() => Linking.openURL('https://www.uv-bund-bahn.de/')}>
        www.uv-bund-bahn.de
      </Link>
      <ArticleSubHeader textStyle={{color: colors.accentDark}}>
        Unfallkasse Berlin
      </ArticleSubHeader>
      <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
        030/ 76 24 – 0
      </Paragraph>
      <Link onPress={() => Linking.openURL('http://www.unfallkasse-berlin.de')}>
        www.unfallkasse-berlin.de
      </Link>
      <Paragraph>as well as in all federal states, please google.</Paragraph>
    </Article>
  );
};

const Unfallversicherung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english
            ? 'Occupational disability insurance & accident insurance'
            : 'Berufsunfähigkeits- und Unfallversicherung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/CatCup.png')}
        />
        {props.english ? <Unfallversicherung_EN /> : <Unfallversicherung_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Unfallversicherung;
