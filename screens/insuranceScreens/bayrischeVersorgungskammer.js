import React from 'react';

import {Modal, Text, Dimensions, Linking} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import CloseButton from '../../components/buttons/closeButton';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import Paragraph from '../../components/articleComponents/paragraph';
import Link from '../../components/articleComponents/link';
import Article from '../../components/articleComponents/article';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import {ListItem} from '../../components/articleComponents/list';
import colors from '../../assets/colors';

const windowHeight = Dimensions.get('window').height;

const Bayerische_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Die Versorgungsanstalt der deutschen Bühnen ist eine berufsständische
        Pflichtversorgungseinrichtung. Sie hat die Aufgabe, den an deutschen
        Theatern abhängig beschäftigten Bühnenangehörigen im Wege der
        Pflichtversicherung eine zusätzliche Alters-, Berufsunfähigkeits- und
        Hinterbliebenenversorgung zu gewähren. Die Versorgungsanstalt bietet für
        Tänzer und Tänzerinnen, die den Bühnenberuf aufgeben folgende
        Möglichkeiten: die Inanspruchnahme einer sog. Tänzerabfindung, die
        Weiterversicherung oder die teilweise Inanspruchnahme einer
        Tänzerabfindung gekoppelt an eine Weiterversicherung bei der
        Versorgungsanstalt der deutschen Bühnen.
      </Paragraph>
      <ArticleSubHeader>
        Sonderregelung für Tänzer und Tänzerinnen
      </ArticleSubHeader>
      <Paragraph>
        Die Sonderregel der Tänzerabfindung gilt für auftretende Tänzer und
        Tänzerinnen, dazu gehören
      </Paragraph>
      <ListItem>Solo-, Gruppen- und Musicaltänzer.</ListItem>
      <Paragraph>
        Eine Abfindung kann dann in Anspruch genommen werden, wenn der Tänzer
        oder die Tänzerin den Bühnenberuf spätestens mit dem Ende der Spielzeit,
        in der sie das 44. Lebensjahr vollenden, global aufgeben sowie eine
        Umschulung, Fortbildung oder Existenzgründung glaubhaft nachweisen.
        Zudem müssen für mindestens 60 Monate Beiträge entrichtet und es dürfen
        keine Versorgungsleistungen (Ruhegeld wegen Berufs- oder
        Erwerbsunfähigkeit) in Anspruch genommen worden sein.
      </Paragraph>
      <Paragraph>
        Tanzgruppenmitglieder, die bereits vor dem Jahr 2011 pflichtversichert
        waren, können die Abfindung noch nach der alten Sonderregelung
        beanspruchen, wenn sie den Bühnenberuf im Anstaltsbereich bis zum Ende
        der Spielzeit, in der sie das 40. Lebensjahr vollenden, spätestens aber
        bis zum 31. August 2016, endgültig aufgegeben haben. Der Antrag auf
        Abfindung muss bis zur Vollendung des 42. Lebensjahres gestellt werden.
      </Paragraph>
      <Paragraph>
        Die Abfindung wird nur einmalig und auf Antrag ausbezahlt. Als Abfindung
        werden alle eingezahlten Beiträge gezahlt, also auch die
        Arbeitgeberanteile. Dazu erhalten die Tänzer und Tänzerinnen Zinsen von
        jährlich 4 % für Beiträge, die bis 2005 entrichtet, von jährlich 3,25 %
        für Beiträge, die von 2006 bis einschließlich 2010 entrichtet, von
        jährlich 2 % für Beiträge, die ab 2011 entrichtet wurden und von 0,9 %
        für Beiträge, die ab 2021 entrichtet wurden. Für ab 2011 gezahlte
        Beiträge wird zusätzlich der Wert der gegebenenfalls vom Verwaltungsrat
        im Wege der Überschussverteilung beschlossenen
        Anwartschaftsdynamisierungen erstattet.
      </Paragraph>
      <Paragraph>
        Nach Inanspruchnahme der vollen Abfindung erlöschen alle Anwartschaften
        auf eine Versorgung bei der Versorgungsanstalt der deutschen Bühnen.
      </Paragraph>
      <Paragraph>
        Beitragspflichtig versicherte Tänzer oder Tänzerinnen haben einen
        Anspruch auf ein befristetes Ruhegeld wegen Berufsunfähigkeit, wenn die
        Berufsunfähigkeit vor Vollendung des 35. Lebensjahres eingetreten ist
        und der Tänzer bzw. die Tänzerin für 36 Monate Beiträge entrichtet hat
        oder der Versicherungsfall durch einen Arbeitsunfall bedingt ist. Eine
        Tänzerabfindung ist anschließend ausgeschlossen. Die Ansprüche auf die
        Alters- und Hinterbliebenenversorgung bleiben aber voll erhalten.
      </Paragraph>
      <Paragraph>
        Stets besteht anstelle der Tänzerabfindung ein Anspruch auf ein Ruhegeld
        wegen Erwerbsunfähigkeit bei sonst gegebenen Voraussetzungen.
      </Paragraph>
      <Paragraph>
        Die Sonderregelung für die Tänzerabfindung gilt nicht, wenn der Tänzer
        oder die Tänzerin nach dem Ende der Spielzeit, in welcher dieser oder
        diese das 44. Lebensjahr vollendet hat, durch ein Theater versichert
        ist. In diesem Fall finden ausschließlich die allgemeinen
        Satzungsbestimmungen Anwendung.
      </Paragraph>
      <ArticleSubHeader>Möglichkeit der Weiterversicherung</ArticleSubHeader>

      <Paragraph>
        Statt der Inanspruchnahme einer Abfindung kann sich ein Tänzer oder eine
        Tänzerin nach Aufgabe des Bühnenberufs alternativ weiterversichern. Eine
        Weiterversicherung hat den Vorteil, dass dadurch ggf. die Wartezeit für
        das Altersruhegeld erreicht wird und dadurch ein Anspruch auf
        Altersruhegeld, flexibles Altersruhegeld oder auf
        Hinterbliebenenversorgung entsteht.
      </Paragraph>
      <Paragraph>
        Ohne Weiterversicherung wird die Versicherung als beitragsfreie
        Versicherung fortgeführt. Während der beitragsfreien Versicherung werden
        keine Versicherungszeiten zurückgelegt und es besteht kein
        Versicherungsschutz bei Berufs- oder Erwerbsunfähigkeit. Außerdem wächst
        die Rentenanwartschaft nicht.
      </Paragraph>
      <Paragraph>
        Die Weiterversicherung ist zulässig im unmittelbaren Anschluss an die
        Beschäftigung bei einem Theater, die Zahlung eines Ruhegeldes wegen
        Berufs- oder Erwerbsunfähigkeit oder den Wegfall der Erwerbsunfähigkeit,
        wenn unmittelbar vor deren Eintritt eine beitragspflichtige Versicherung
        bestand.
      </Paragraph>
      <Paragraph>
        Sie ist ausgeschlossen bei Erwerbs- oder Berufsunfähigkeit, solange von
        der Versorgungsanstalt der deutschen Bühnen ein Ruhegeld gezahlt wird.
      </Paragraph>
      <Paragraph>
        Die Weiterversicherung ist innerhalb eines Jahres nach Ende der
        Beschäftigung am Theater oder dem Eintritt der anderen Voraussetzungen
        schriftlich zu erklären. Der Grundbeitrag beträgt monatlich 12,50 Euro
        und ist jeweils am Monatsersten fällig. Wahlweise kann zum Grundbeitrag
        ein Zusatzbeitrag bis zum Höchstbeitrag (16 % der
        Beitragsbemessungsgrenze der allgemeinen Rentenversicherung) entrichtet
        werden.
      </Paragraph>
      <Paragraph>
        Einmalig ist auch eine betragsmäßig teilweise Abfindung möglich, bei der
        die Versicherung in Höhe der verbleibenden Anwartschaften fortbesteht.
      </Paragraph>
      <Paragraph>
        Detaillierte Ausführungen zur Tänzerabfindung, der Weiterversicherung
        und der beitragsfreien Versicherung können – auch auf Englisch – unter{' '}
      </Paragraph>
      <Link
        onPress={() => Linking.openURL('https://www.buehnenversorgung.de/')}
      >
        www.buehnenversorgung.de 
      </Link>

      <Paragraph> nachgelesen werden.</Paragraph>
    </Article>
  );
};

const Bayerische_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        The Versorgungsanstalt der deutschen Bühnen is a compulsory professional
        pension institution. Its purpose is to provide additional retirement,
        disability and survivors' benefits to stage employees of German theaters
        by means of mandatory insurance. It offers the following options for
        dancers who give up their stage profession: claiming a so-called
        dancer's severance pay, continued insurance or partial claiming of a
        dancer's severance pay coupled with continued insurance with the
        Versorgungsanstalt der deutschen Bühnen.
      </Paragraph>
      <ArticleSubHeader>Special rule for dancers</ArticleSubHeader>
      <Paragraph>
        The special rule for dancers' severance pay applies to performing
        dancers, which includes
      </Paragraph>
      <ListItem>Solo, group and musical dancers.</ListItem>
      <Paragraph>
        A severance payment can be claimed if the dancer globally gives up the
        stage profession at the latest at the end of the season in which he or
        she reaches the age of 44 and can credibly prove that he or she has
        retrained, received further training or established his or her own
        business. In addition, contributions must have been paid for at least 60
        months and no pension benefits (retirement benefits due to occupational
        disability or incapacity to work) must have been claimed..
      </Paragraph>
      <Paragraph>
        Dance group members who were already compulsorily insured before 2011
        can still claim severance pay under the old special regulations if they
        have definitively given up the stage profession in the institutional
        sector by the end of the season in which they reach the age of 40, but
        no later than August 31, 2016. The application for severance pay must be
        submitted by the time the employee reaches the age of 42.
      </Paragraph>
      <Paragraph>
        Severance pay is paid out only once and upon application. All
        contributions paid in, i.e. including the employer's contributions, are
        paid out as severance pay. In addition, dancers receive interest of 4%
        per annum on contributions paid up to 2005, 3.25% per annum on
        contributions paid from 2006 to 2010 inclusive, 2% per annum on
        contributions paid from 2011 and 0.9% per annum on contributions paid
        from 2021. For contributions paid from 2011 onwards, the value of any
        projected benefit increases decided by the Board of Directors by way of
        surplus distribution is also refunded.
      </Paragraph>
      <Paragraph>
        Once the full settlement has been claimed, all entitlements to a pension
        from the Versorgungsanstalt der deutschen Bühnen expire.
      </Paragraph>
      <Paragraph>
        Dancers who are subject to compulsory insurance contributions are
        entitled to a temporary pension due to occupational disability if the
        occupational disability occurred before the dancer reached the age of 35
        and the dancer has paid contributions for 36 months or the insured event
        is due to an accident at work. Dancer compensation is subsequently
        excluded. However, the entitlements to retirement and survivors'
        benefits remain fully intact.
      </Paragraph>
      <Paragraph>
        Instead of the dancer's severance pay, there is always an entitlement to
        a pension due to incapacity to work, provided the other conditions are
        met.
      </Paragraph>
      <Paragraph>
        The special regulation for the dancer's severance pay does not apply if
        the dancer is insured by a theater after the end of the season in which
        he or she reaches the age of 44. In this case, only the general
        provisions of the statutes apply.
      </Paragraph>
      <ArticleSubHeader>Possibility of continued insurance</ArticleSubHeader>
      <Paragraph>
        Instead of claiming severance pay, a dancer may alternatively continue
        to insure himself or herself after giving up the stage profession.
        Continued insurance has the advantage that, if applicable, the waiting
        period for the old-age pension is reached and thus an entitlement to
        old-age pension, flexible old-age pension or survivor's pension arises.
      </Paragraph>
      <Paragraph>
        Without continued insurance, the insurance is continued as a
        non-contributory insurance. During the period of non-contributory
        insurance, no insurance periods are accrued and there is no insurance
        cover in the event of occupational disability or incapacity for work. In
        addition, the pension entitlement does not grow.
      </Paragraph>
      <Paragraph>
        Continued insurance is permissible immediately following employment at a
        theater, payment of a pension due to occupational or occupational
        disability, or the cessation of occupational disability, if insurance
        subject to contributions existed immediately prior to its occurrence.It
        is excluded in the case of disability or occupational incapacity as long
        as a pension is paid by the Versor-gungsanstalt der deutschen Bühnen.
      </Paragraph>
      <Paragraph>
        Continued insurance must be declared in writing within one year of the
        end of employment at the theater or the occurrence of the other
        conditions. The basic contribution is 12.50 euros per month and is due
        on the first day of each month. Optionally, an additional contribution
        up to the maximum contribution (16% of the income threshold for the
        general pension insurance) can be paid in addition to the basic
        contribution.
      </Paragraph>
      <Paragraph>
        A one-time partial settlement is also possible, in which case the
        insurance continues in the amount of the remaining entitlements.
      </Paragraph>
      <Paragraph>
        Detailed information on the dancer's severance pay, continued insurance
        and non-contributory insurance can be found - also in English - at
      </Paragraph>
      <Link
        onPress={() => Linking.openURL(' https://www.buehnenversorgung.de ')}
      >
        www.buehnenversorgung.de 
      </Link>
    </Article>
  );
};

const Bayerische = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english
            ? 'Pension Institution of the German Theaters'
            : 'Die Versorgungsanstalt der Deutschen Bühnenangehörigen'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/insuranceIllustrations/Friends.png')}
        />
        {props.english ? <Bayerische_EN /> : <Bayerische_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Bayerische;
