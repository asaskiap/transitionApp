import React from 'react';

import {Linking, Modal, Dimensions} from 'react-native';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import Paragraph from '../../components/articleComponents/paragraph';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Link from '../../components/articleComponents/link';

const windowHeight = Dimensions.get('window').height;

const Existenzgruendung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader textStyle={{letterSpacing: 1}}>
          Existenzgründung
        </ArticleHeader>
        <ArticleIllustration
          imageStyle={{maxHeight: windowHeight > 600 ? 400 : 300}}
          image={require('../../assets/illustrations/selfemploymentIllustrations/business.png')}
        />
        <Article>
          <Paragraph>
            Einige TänzerInnen wollen nach ihrer Tanzkarriere als Selbständige
            arbeiten. Dies betrifft sowohl diejenigen, die vom Festengagement in
            die freie Szene wechseln als auch diejenigen, die in einem neuen
            Feld (z.B. als Tanzpädagoge oder Yogalehrer) freiberuflich arbeiten
            wollen. Sie gelten sowohl als Selbständiger, wenn Sie ein eigenes
            Studio haben als auch wenn Sie gegen Honorar für andere Studios
            arbeiten. In jedem Fall brauchen Sie eine Steuernummer für
            Selbständige. Wenn Sie die Arbeitslosigkeit durch Aufnahme einer
            hauptberuflichen selbständigen Tätigkeit beenden und einen Anspruch
            auf Arbeitslosengeld I von mindestens 150 Tagen haben, können Sie
            einen Gründungszuschuss erhalten. Dafür muss ein inhaltliches
            Konzept und ein Businessplan vorgelegt werden (Hilfe dafür kann man
            sich bei regionalen Gründungsberatungen geben lassen). Die
            Selbständigkeit kann auch aus mehreren Standbeinen bestehen (z.B.
            50% Yogaunterricht + 50%Tanzpädagogik). Der Gründungszuschuss ist
            eine Ermessensleistung der aktiven Arbeitsförderung nach dem SGB
            III, auf die kein Rechtsanspruch besteht. Eine fachkundige Stelle
            (IHK – Industrie- und Handelskammer u.a.) muss das
            Existenzgründungsvorhaben begutachten und die Tragfähigkeit der
            Existenzgründung bestätigen. Der Gründungszuschuss wird in zwei
            Phasen geleistet: Für sechs Monate wird der Zuschuss in Höhe des
            zuletzt bezogenen Arbeitslosengeldes zur Sicherung des
            Lebensunterhalts und 300 € zur sozialen Absicherung gewährt. Für
            weitere neun Monate können 300 € pro Monat zur sozialen Absicherung
            gewährt werden, wenn eine intensive Geschäftstätigkeit und
            hauptberufliche unternehmerische Aktivitäten dargelegt werden. In
            der gesamten Laufzeit des Existenzgründungszuschusses kann man
            unbegrenzt Geld verdienen, muss sich aber selbst versichern. Die
            Dauer des Anspruchs auf Arbeitslosengeld mindert sich um die Anzahl
            von Tagen, für die ein Gründungszuschuss in Höhe des zuletzt
            bezogenen Arbeitslosengeldes gezahlt wurde. Der Antrag ist vor der
            Aufnahme einer selbständigen Tätigkeit bei der für Ih- ren Wohnsitz
            zuständigen Agentur für Arbeit zu stellen, die auch den
            Antragsvordruck ausgibt.
          </Paragraph>
          <Paragraph>
            Ein Anspruch auf Gründungszuschuss besteht nicht, wenn der Anspruch
            auf Arbeitslosengeld und die Anspruchsdauer auf- grund einer
            „kurzen“ Anwartschaftszeit entstanden ist. Arbeitslose
            Gründungswillige, die erwerbsfähig und hilfebedürftig nach dem SGB
            II sind und beim Jobcenter gemeldet sind, können für den Aufbau
            ihrer Selbständigkeit Einstiegsgeld nach § 16b SGB II beantragen.
            Das Einstiegsgeld ist ein zusätzlicher finanzieller Anreiz zur
            Aufnahme u.a. einer selbständigen Tätigkeit. Die Höhe des
            Einstiegsgeldes wird individuell bemessen und richtet sich nach der
            Höhe des Arbeitslosengeldes II, nach der Größe der
            Bedarfsgemeinschaft und der Dauer der Arbeitslosigkeit. Höchstens
            allerdings kann sich das Einstiegsgeld nur auf den jeweils aktuellen
            Regelbedarf nach dem SGB II belaufen. Es kann für maximal 24 Monate
            bewilligt werden. Auf diese Eingliederungsleistung besteht kein
            Rechtsanspruch.
          </Paragraph>
          <Paragraph>
            Wer Arbeitslosengeld II bezieht, kann über das Einstiegsgeld hinaus
            auch „Leistungen zur Eingliederung von Selbständigen“ nach § 16c SGB
            II beantragen. Dabei handelt es sich um Darlehen oder Zuschüsse für
            Sachmittel, die für den Aufbau oder Erhalt der Selbständigkeit
            benötigt werden. Zuschüsse sind auf einen Maximalbetrag von 5.000
            Euro begrenzt. Auch diese Leistungen sind Ermessensleistungen.
          </Paragraph>
          <Paragraph>
            Vor der Bewilligung von Einstiegsgeld und den „Leistungen zur
            Eingliederung Selbständiger“ wird geprüft, ob die finanzielle
            Förderung dazu beiträgt, die Hilfebedürftigkeit zu verringern oder
            zu beenden. Der/die Gründungswillige muss nachweisen, dass er/ sie
            für die angestrebte Tätigkeit geeignet, dass sein/ihr Businessplan
            erfolgsversprechend und das Unternehmen tragfähig ist und damit die
            Hilfebedürftigkeit überwunden werden kann.
          </Paragraph>
          <Paragraph>Mehr unter:</Paragraph>
          <Link
            onPress={() => Linking.openURL('https://www.existenzgruender.de')}
          >
            www.existenzgruender.de
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('https://www.existenzgruenderhilfe.de')
            }
          >
            www.existenzgruenderhilfe.de
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('https://www.kultur-kreativ-wirtschaft.de')
            }
          >
            www.kultur-kreativ-wirtschaft.de
          </Link>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
  vv;
};

export default Existenzgruendung;
