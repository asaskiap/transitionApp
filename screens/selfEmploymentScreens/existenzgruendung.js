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

const Existenzgruendung_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Einige TänzerInnen wollen nach ihrer Tanzkarriere als Selbständige
        arbeiten. Dies betrifft sowohl diejenigen, die vom Festengagement in die
        freie Szene wechseln als auch diejenigen, die in einem neuen Feld (z.B.
        als Tanzpädagoge oder Yogalehrer) freiberuflich arbeiten wollen. Sie
        gelten sowohl als Selbständiger, wenn Sie ein eigenes Studio haben als
        auch wenn Sie gegen Honorar für andere Studios arbeiten. In jedem Fall
        brauchen Sie eine Steuernummer für Selbständige. Wenn Sie die
        Arbeitslosigkeit durch Aufnahme einer hauptberuflichen selbständigen
        Tätigkeit beenden und einen Anspruch auf Arbeitslosengeld I von
        mindestens 150 Tagen haben, können Sie
        einen Gründungszuschuss erhalten. Dafür muss ein inhaltliches Konzept
        und ein Businessplan vorgelegt werden (Hilfe dafür kann man sich bei
        regionalen Gründungsberatungen geben lassen). Die Selbständigkeit kann
        auch aus mehreren Standbeinen bestehen (z.B. 50% Yogaunterricht +
        50%Tanzpädagogik). Der Gründungszuschuss ist eine Ermessensleistung der
        aktiven Arbeitsförderung nach dem SGB III, auf die kein Rechtsanspruch
        besteht. Eine fachkundige Stelle (IHK – Industrie- und Handelskammer
        u.a.) muss das Existenzgründungsvorhaben begutachten und die
        Tragfähigkeit der Existenzgründung bestätigen. Der Gründungszuschuss
        wird in zwei Phasen geleistet: Für sechs Monate wird der Zuschuss in
        Höhe des zuletzt bezogenen Arbeitslosengeldes zur Sicherung des
        Lebensunterhalts und 300 € zur sozialen Absicherung gewährt. Für weitere
        neun Monate können 300 € pro Monat zur sozialen Absicherung gewährt
        werden, wenn eine intensive Geschäftstätigkeit und hauptberufliche
        unternehmerische Aktivitäten dargelegt werden. In der gesamten Laufzeit
        des Existenzgründungszuschusses kann man unbegrenzt Geld verdienen, muss
        sich aber selbst versichern. Die Dauer des Anspruchs auf
        Arbeitslosengeld mindert sich um die Anzahl von Tagen, für die ein
        Gründungszuschuss in Höhe des zuletzt bezogenen Arbeitslosengeldes
        gezahlt wurde. Der Antrag ist vor der Aufnahme einer selbständigen
        Tätigkeit bei der für Ih- ren Wohnsitz zuständigen Agentur für Arbeit zu
        stellen, die auch den Antragsvordruck ausgibt.
      </Paragraph>
      <Paragraph>
        Ein Anspruch auf Gründungszuschuss besteht nicht, wenn der Anspruch auf
        Arbeitslosengeld und die Anspruchsdauer auf- grund einer „kurzen“
        Anwartschaftszeit entstanden ist. Arbeitslose Gründungswillige, die
        erwerbsfähig und hilfebedürftig nach dem SGB II sind und beim Jobcenter
        gemeldet sind, können für den Aufbau ihrer
        Selbständigkeit Einstiegsgeld nach § 16b SGB II beantragen. Das
        Einstiegsgeld ist ein zusätzlicher finanzieller Anreiz zur Aufnahme u.a.
        einer selbständigen Tätigkeit. Die Höhe des Einstiegsgeldes wird
        individuell bemessen und richtet sich nach der Höhe des
        Arbeitslosengeldes II, nach der Größe der Bedarfsgemeinschaft und der
        Dauer der Arbeitslosigkeit. Höchstens allerdings kann sich das
        Einstiegsgeld nur auf den jeweils aktuellen Regelbedarf nach dem SGB II
        belaufen. Es kann für maximal 24 Monate bewilligt werden. Auf diese
        Eingliederungsleistung besteht kein Rechtsanspruch.
      </Paragraph>
      <Paragraph>
        Wer Arbeitslosengeld II bezieht, kann über das Einstiegsgeld hinaus
        auch „Leistungen zur Eingliederung von Selbständigen“ nach § 16c SGB II
        beantragen. Dabei handelt es sich um Darlehen oder Zuschüsse für
        Sachmittel, die für den Aufbau oder Erhalt der Selbständigkeit benötigt
        werden. Zuschüsse sind auf einen Maximalbetrag von 5.000 Euro begrenzt.
        Auch diese Leistungen sind Ermessensleistungen.
      </Paragraph>
      <Paragraph>
        Vor der Bewilligung von Einstiegsgeld und den „Leistungen zur
        Eingliederung Selbständiger“ wird geprüft, ob die finanzielle Förderung
        dazu beiträgt, die Hilfebedürftigkeit zu verringern oder zu beenden.
        Der/die Gründungswillige muss nachweisen, dass er/ sie für die
        angestrebte Tätigkeit geeignet, dass sein/ihr Businessplan
        erfolgsversprechend und das Unternehmen tragfähig ist und damit die
        Hilfebedürftigkeit überwunden werden kann.
      </Paragraph>
      <Paragraph>Mehr unter:</Paragraph>
      <Link onPress={() => Linking.openURL('https://www.existenzgruender.de')}>
        www.existenzgruender.de
      </Link>
      <Link
        onPress={() => Linking.openURL('https://www.existenzgruenderhilfe.de')}
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
  );
};

const Existenzgruendung_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        Some dancers want to work as self-employed after their dance career.
        This applies both to those who move from permanent to freelance work and
        to those who want to work freelance in a new field (e.g. as a dance
        teacher or yoga instructor).
      </Paragraph>
      <Paragraph>
        You are considered self-employed both if you have your own studio and if
        you work for other studios for a fee. In either case, you will need a
        self-employment tax number. If you end unemployment by taking up
        full-time self-employment and have a claim to unemployment benefit of at
        least 150 days, you can receive a start-up grant. For this purpose, you
        must submit a concept and a business plan (you can get help with this
        from regional start-up advisors). The self-employment can also consist
        of several pillars (e.g. 50% yoga instruction + 50% dance pedagogy). The
        start-up subsidy is a discretionary benefit of active employment
        promotion according to SGB III, to which there is no legal entitlement.
        An expert body (IHK - Chamber of Industry and Commerce, etc.) must
        assess the business start-up project and confirm the viability of the
        business start-up. The start-up grant is paid in two phases: For six
        months, the subsidy is granted in the amount of the last unemployment
        benefit received to ensure subsistence and €300 for social security. For
        a further nine months, 300 € per month can be granted for social
        security if intensive business activity and full-time entrepreneurial
        activities are demonstrated. During the entire period of the business
        start-up grant, one can earn unlimited amounts of money, but must be
        self-insured. The duration of the entitlement to unemployment benefits
        is reduced by the number of days for which a start-up grant was paid in
        the amount of the last unemployment benefit received. Before taking up
        self-employment, the application must be submitted to the employment
        agency responsible for your place of residence, which will also issue
        the application form.
      </Paragraph>
      <Paragraph>
        There is no entitlement to start-up allowance if the entitlement to
        unemployment benefit and the period of entitlement is due to a "short"
        qualifying period. Unemployed persons who are willing to start a
        business, who are capable of working and in need of assistance according
        to SGB II and who are registered with the job center, can apply for
        start-up allowance according to § 16b SGB II to build up their
        independence. The starter allowance is an additional financial incentive
        to take up self-employment, among other things. The amount of the
        starter allowance is assessed individually and depends on the amount of
        unemployment benefit II, the size of the community in need and the
        duration of unemployment. However, the maximum amount of the starter
        allowance can only be the current standard requirement according to SGB
        II. It can be granted for a maximum of 24 months. There is no legal
        entitlement to this integration benefit.
      </Paragraph>
      <Paragraph>
        Those who receive unemployment benefit II can also apply for "benefits
        for the integration of self-employed persons" according to § 16c SGB II.
        These are loans or grants for material resources that are needed to set
        up or maintain self-employment. Grants are limited to a maximum amount
        of 5,000 euros. These benefits are also discretionary.
      </Paragraph>
      <Paragraph>
        Before granting the "Einstiegsgeld" and the "Leistungen zur
        Eingliederung Selb-ständiger" (benefits for the integration of the
        self-employed), it is checked whether the financial support contributes
        to reducing or ending the need for assistance. The person wishing to set
        up a business must prove that he or she is suitable for the desired
        activity, that his or her business plan promises success and that the
        company is viable, so that the need for assistance can be overcome.
      </Paragraph>
      <Paragraph>More at:</Paragraph>
      <Link onPress={() => Linking.openURL('https://www.existenzgruender.de')}>
        www.existenzgruender.de
      </Link>
      <Link
        onPress={() => Linking.openURL('https://www.existenzgruenderhilfe.de')}
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
  );
};

const Existenzgruendung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Starting a business' : 'Existenzgründung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/selfemploymentIllustrations/existenz.png')}
        />
        {props.english ? <Existenzgruendung_EN /> : <Existenzgruendung_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Existenzgruendung;
