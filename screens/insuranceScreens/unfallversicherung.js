import React from 'react';

import {Linking, Modal} from 'react-native';
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

const Unfallversicherung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader
          textStyle={{letterSpacing: 2, fontSize: 32, textAlign: 'center'}}
        >
          Berufsunfähigkeits- und Unfallversicherung
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/CatCup.png')}
        />
        <Article>
          <ArticleSubHeader>
            Was tun bei Berufsaufgabe aus gesundheitlichen Gründen?
          </ArticleSubHeader>
          <Paragraph>
            Voraussetzungen für den Erhalt von Leistungen zur Teilhabe am
            Arbeitsleben (LTA) wie Umschulungen, Maßnahmen zur
            Weiterqualifizierung bzw. Integrationshilfen oder Gründungszuschuss
            über die Deutsche Rentenversicherung (DRV, den Begriff BfA gibt es
            nicht mehr!) sind:
          </Paragraph>
          <List>
            <ListItem>
              ohne diese Leistungen wäre eine Rente wegen verminderter
              Erwerbsfähigkeit fällig
            </ListItem>
            <ListItem>
              LTA werden unmittelbar im Anschluss an die medizinische
              Rehabilitation erforderlich, damit die Rehabilitation erfolgreich
              beendet werden kann, oder
            </ListItem>
            <ListItem>
              eine Wartezeit von 15 Jahren ist erfüllt (= z. B. die Zeit, in der
              Beiträge gezahlt wurden bzw. Zeiten, in denen Rentenanwartschaften
              erworben wurden, z.B. Kindererziehungszeiten)
            </ListItem>
          </List>
          <Paragraph>
            Fazit: Im Anschluss an eine medizinische Rehabilitation stehen
            Tänzern bei entsprechender medizinischer Begutachtung die Türen zum
            Empfang von Leistungen zur Teilhabe offen. Das bedeutet im Klartext:
            Tänzer mit Umschulungswunsch bzw. -vorhaben, die über einen vom
            behandelnden Arzt gestellten Rehaantrag eine medizinische Reha von
            der DRV bewilligt bekommen oder die Reha vom medizinischen Dienst
            der Krankenkassen in Auftrag gegeben wird, sollten diese
            in arbeitsunfähigem Zustand beginnen. So haben die Ärzte der
            Rehabilitationseinrichtung bei der abschließenden
            sozialmedizinischen Beurteilung die Möglichkeit, den Beruf des
            Tänzers künftig für nicht mehr leidensgerecht bzw. unter 3 h
            zumutbar zu beurteilen. Gleichzeitig werden im Entlassungsbericht
            Leistungen zur Teilhabe am Arbeitsleben angeregt, für die dann die
            DRV zuständig ist.
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
            http://www.deutsche-rentenversicherung-bund.de
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
          <Link onPress={() => Linking.openURL('www.tamed.de')}>
            www.tamed.de
          </Link>

          <ArticleSubHeader>
            Weiterbildung und Rehabilitation über die Unfallkasse/
            Berufsgenossenschaften
          </ArticleSubHeader>
          <Paragraph>
            Kann der Versicherte aufgrund der Unfall- bzw. Erkrankungsfolgen
            seinen Beruf nicht mehr oder nur erschwert ausüben, übernimmt die
            Unfallkasse die Maßnahmen zur beruflichen Rehabilitation. Dadurch
            soll der Versicherte in die Lage versetzt werden, seinen früheren
            Beruf oder, wenn dies nicht möglich ist, einen neuen Beruf
            auszuüben. Ziel ist, den Versicherten auf Dauer wieder ins
            Berufsleben einzugliedern.
          </Paragraph>
          <Paragraph>
            Kann der Versicherte nicht ohne theoretische und praktische Schulung
            ins Berufsleben wiedereingegliedert werden, kommen Maßnahmen der
            beruflichen Anpassung, Fortbildung, Ausbildung und Umschulung in
            Betracht. Bei beruflicher Anpassung, häufig auch Anlernung genannt,
            wird der Versicherte meist in eine Tätigkeit eingeführt, deren
            Ausübung gewisse Fertigkeiten und Kenntnisse voraussetzt. In der
            Regel wird die Anlernung betriebsnah durchgeführt und nicht in einer
            besonderen Ausbildungsstätte. Die berufliche Fortbildung baut auf
            einem bereits ausgeübten Beruf auf. Sie soll dem Versicherten den
            Übergang von einer manuellen Beschäftigung, die er wegen der
            Verletzungsfolgen nicht mehr oder nur unter sehr erschwerten
            Umständen ausüben kann, zu einer leitenden oder aufsichtführenden
            Tätigkeit ermöglichen.
          </Paragraph>
          <Paragraph>
            Hat der Versicherte vor seinem Arbeitsunfall noch keinen Beruf
            ausgeübt, so fördert die Unfallkasse unter Umständen eine Ausbildung
            zu einem Beruf nach einer Ausbildungsverordnung. Voraussetzung
            hierfür ist, dass der Versicherte wegen der Unfallfolgen nur durch
            diese Ausbildung in das Erwerbsleben eingegliedert werden kann. Die
            Ausbildung wird z.B. in einem Berufsbildungswerk oder in einem
            Betrieb durchgeführt.
          </Paragraph>
          <Paragraph>
            Kann der Versicherte seine bisherige berufliche Tätigkeit wegen der
            Unfall- oder Erkrankungsfolgen nicht mehr ausüben, so kann unter
            Umständen eine Umschulung in einen anderen Beruf angestrebt werden.
            Die Umschulung erfolgt bei ganztägigem Unterricht und dauert in der
            Regel bis zu zwei Jahren.
          </Paragraph>
          <ArticleSubHeader textStyle={{color: colors.accentDark}}>
            Unfallkasse Bund
          </ArticleSubHeader>
          <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
            04421/407-407
          </Paragraph>
          <Link onPress={() => Linking.openURL('www.uk-bund.de')}>
            www.uk-bund.de
          </Link>
          <ArticleSubHeader textStyle={{color: colors.accentDark}}>
            Unfallkasse Berlin
          </ArticleSubHeader>
          <Paragraph style={{fontWeight: 'bold', color: colors.primary}}>
            030/ 76 24 – 0
          </Paragraph>
          <Link onPress={() => Linking.openURL('www.unfallkasse-berlin.de')}>
            www.unfallkasse-berlin.de
          </Link>
          <Paragraph>sowie in allen Bundesländern, bitte googeln.</Paragraph>
        </Article>
        <CloseButton close={props.close} />
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Unfallversicherung;
