import React from 'react';

import {Linking, Modal} from 'react-native';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Article from '../../components/articleComponents/article';
import Link from '../../components/articleComponents/link';
import ScrollableScreenContainer from '../../components/scrollableScreen';
import CloseButton from '../../components/buttons/closeButton';
import Paragraph from '../../components/articleComponents/paragraph';
import colors from '../../assets/colors';
import {List, ListItem} from '../../components/articleComponents/list';

const WerBindIch = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Wer Bin Ich?</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/freedom.png')}
        />
        <Article>
          <ArticleSubHeader>
            Sich selbst neu entdecken und kennenlernen
          </ArticleSubHeader>
          <Paragraph>
            Der wichtigste Teil der ganzen Transition ist, zu erkennen wer ICH
            eigentlich bin und was alles in mir steckt, von dem ich bisher
            vielleicht noch nicht mal gewusst habe. Sich dabei selbst neu
            kennenlernen, das eigene ich neu zu denken und auszuprobieren. In
            einem Leben, in dem der Tanz immer an erster Stelle gestanden hat,
            sind all die anderen Seiten von jemanden meist stark in den
            Hintergrund getreten, wenn nicht gar aus den Augen verloren worden.
            Daher ist es wichtig sich die nötige Zeit zu nehmen, um
            herauszufinden, was für andere Welten noch in jemandem schlummern,
            welche verborgenen Träume, Ideen, Leidenschaften es da noch alles
            gibt. Denn jeder Mensch hat etwas, das ihn antreibt, etwas das mehr
            kennt als nur eine Form, eine Ausdrucksweise, und meist kommt jemand
            über noch nicht begangene Wege dahinter was er noch alles will, kann
            und träumt, was jemanden als individuellen Menschen ausmacht, wofür
            das eigene Leben stehen soll und was jemanden am Ende eines Tages
            mit Zufriedenheit und Sinngebung erfüllen kann. Bei dem Weg der
            Veränderung kommen meist essenzielle Fragen hervor wie: Was will
            ich? Wo möchte ich hin? Wie stelle ich mir ein erfülltes Leben vor?
            Wo liegen meine anderen, verborgenen Talente? Warum entscheide ich
            mich für diesen Weg? Welcher Teil meiner Selbst steckt dahinter?
            Welchen Sinn verleihe ich meinem Dasein damit? Werde ich es schaffen
            mir nochmal etwas ganz Neues aufzubauen? Was sind meine
            Möglichkeiten?
          </Paragraph>
          <ArticleSubHeader>Den neuen Weg beschreiten</ArticleSubHeader>
          <Paragraph>
            Wer einmal diesen wichtigen Prozess durchlebt und dann gefunden hat
            was ihn oder sie antreibt, und welchen Weg er gehen will, der wird
            dadurch auch die Kraft und die Zuversicht in sich selbst finden, um
            diesen neuen Lebensweg zu beschreiten. Denn der Wille, dieses
            „andere ich“ Wirklichkeit werden zu lassen, trägt jemanden durch
            diese Schwierigkeiten, die jede Veränderung mit sich bringt. Und das
            ist das Wichtigste was ein/e Tänzer*in im Transition Prozess
            erreichen kann, dass er oder sie eine eigene Vision für sich selbst
            und das eigene Leben entwickelt, eine Vision darüber wie das Leben
            aussehen soll und was einen glücklich machen wird. Denn das
            Wunderbare an jedem/r einzelnen Tänzer*in ist, dass sie diesen
            Willen etwas erreichen zu wollen und die nötige Disziplin auch einen
            schwierigen Weg dafür zu gehen, schon mitbringen, denn dies waren
            die Eigenschaften die sie auf ihrem Weg zur Tänzer*in schon getragen
            haben, und die sie auch diesmal tragen werden.
          </Paragraph>
          <Paragraph style={{color: colors.accentDark}}>
            Um herauszufinden wer du bist und was gut zu dir passt, könnte
            folgender Test hilfreich sein. Dieser ist aufgeteilt in 3
            Abschnitte. Fülle alle Fragen aus und schaue ob du ein Muster
            erkennst.
          </Paragraph>

          <Link
            onPress={() =>
              Linking.openURL('https://www.vernuenftig-leben.de/wer-bin-ich/')
            }
          >
            www.vernuenftig-leben.de/wer-bin-ich/
          </Link>
          <ArticleSubHeader>Abschnitt 1: Wer warst du?</ArticleSubHeader>
          <List>
            <ListItem>Was wolltest du früher mal werden?</ListItem>
            <ListItem>
              Für welche Träume oder Sehnsüchte wurdest du einmal ausgelacht
              oder belächelt?
            </ListItem>
            <ListItem>
              Welche Eigenarten zeichneten dich schon als Kind aus?
            </ListItem>
            <ListItem>Worin warst du in der Schule besonders gut?</ListItem>
            <ListItem>
              Zu welchen Zeitpunkten in deinem Leben warst du am glücklichsten?
              Was machte sie besonders? Was haben sie gemeinsam?
            </ListItem>
          </List>
          <ArticleSubHeader>Abschnitt 2: Wer bist du?</ArticleSubHeader>
          <List>
            <ListItem>
              Was macht dich glücklich, nur weil du es tun kannst?
            </ListItem>
            <ListItem>
              Bei welcher Tätigkeit erfüllt dich das Tun an sich mehr als das
              Ergebnis?
            </ListItem>
            <ListItem>Wobei vergisst du die Zeit?</ListItem>
            <ListItem>Wobei vergisst du auf dein Handy zu schauen?</ListItem>
            <ListItem>Wie sieht dein optimaler Tag aus?</ListItem>
            <ListItem>
              Auf welches Talent von dir bist du besonders stolz?
            </ListItem>
            <ListItem>
              Was würdest du gerade lieber tun, als das hier zu lesen?
            </ListItem>
          </List>
          <ArticleSubHeader>Abschnitt 3: Wer willst du sein?</ArticleSubHeader>
          <List>
            <ListItem>
              Was würdest du tun, wenn du wüsstest, dass du nicht scheitern
              kannst?
            </ListItem>
            <ListItem>Was würdest du tun, wenn du unsichtbar wärst?</ListItem>
            <ListItem>
              Was würdest du tun, wenn du deinen Tod vorgetäuscht hättest und
              nun ganz von vorne anfangen könntest?
            </ListItem>
            <ListItem>
              Was würdest du tun, wenn du finanziell ausgesorgt hättest?
            </ListItem>
            <ListItem>
              Was würdest du in der Welt verändern, wenn du könntest?
            </ListItem>
            <ListItem>
              Was würdest du tun, wenn du nur noch ein Jahr zu leben hättest?
            </ListItem>
            <ListItem>
              Ohne was würdest du in der Welt nicht leben wollen?
            </ListItem>
            <ListItem>
              Womit würdest du deine Zeit verbringen, wenn du der letzte Mensch
              auf der Welt wärst?
            </ListItem>
            <ListItem>
              Gibt es etwas in deinem Leben wofür du sterben würdest?
            </ListItem>
            <ListItem>Was würdest du tun, wenn du unsterblich wärst?</ListItem>
            <ListItem>
              Was sollte in deinem Nachruf über dich und dein Leben gesagt
              werden?
            </ListItem>
            <ListItem>
              Was würdest du tun, wenn du nur noch eine Sache in deinem Leben
              machen könntest?
            </ListItem>
            <ListItem>
              Was würdest du wirklich bereuen, nie getan zu haben?
            </ListItem>
          </List>
          <ArticleSubHeader
            textStyle={{backgroundColor: colors.secondaryLight}}
          >
            Auswertung
          </ArticleSubHeader>
          <Paragraph>
            Gehe deine Antworten in Ruhe nochmal durch. Was kristallisiert sich
            heraus? Was hast du ziemlich oft erwähnt? Wo gibt es Gemeinsamkeiten
            oder eine Verbindung? Markiere oder unterstreiche diese und ziehe
            dein Fazit.
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default WerBindIch;
