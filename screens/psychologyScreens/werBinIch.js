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
        <ArticleHeader>
          {props.english ? 'Who am I?' : 'Wer Bin Ich?'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/freedom.png')}
        />

        {!props.english && (
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
              Hintergrund getreten, wenn nicht gar aus den Augen verloren
              worden. Daher ist es wichtig sich die nötige Zeit zu nehmen, um
              herauszufinden, was für andere Welten noch in jemandem schlummern,
              welche verborgenen Träume, Ideen, Leidenschaften es da noch alles
              gibt. Denn jeder Mensch hat etwas, das ihn antreibt, etwas das
              mehr kennt als nur eine Form, eine Ausdrucksweise, und meist kommt
              jemand über noch nicht begangene Wege dahinter was er noch alles
              will, kann und träumt, was jemanden als individuellen Menschen
              ausmacht, wofür das eigene Leben stehen soll und was jemanden am
              Ende eines Tages mit Zufriedenheit und Sinngebung erfüllen kann.
              Bei dem Weg der Veränderung kommen meist essenzielle Fragen hervor
              wie: Was will ich? Wo möchte ich hin? Wie stelle ich mir ein
              erfülltes Leben vor? Wo liegen meine anderen, verborgenen Talente?
              Warum entscheide ich mich für diesen Weg? Welcher Teil meiner
              Selbst steckt dahinter? Welchen Sinn verleihe ich meinem Dasein
              damit? Werde ich es schaffen mir nochmal etwas ganz Neues
              aufzubauen? Was sind meine Möglichkeiten?
            </Paragraph>
            <ArticleSubHeader>Den neuen Weg beschreiten</ArticleSubHeader>
            <Paragraph>
              Wer einmal diesen wichtigen Prozess durchlebt und dann gefunden
              hat was ihn oder sie antreibt, und welchen Weg er gehen will, der
              wird dadurch auch die Kraft und die Zuversicht in sich selbst
              finden, um diesen neuen Lebensweg zu beschreiten. Denn der Wille,
              dieses „andere ich“ Wirklichkeit werden zu lassen, trägt jemanden
              durch diese Schwierigkeiten, die jede Veränderung mit sich bringt.
              Und das ist das Wichtigste was ein/e TänzerIn im Transition
              Prozess erreichen kann, dass er oder sie eine eigene Vision für
              sich selbst und das eigene Leben entwickelt, eine Vision darüber
              wie das Leben aussehen soll und was einen glücklich machen wird.
              Denn das Wunderbare an jedem/r einzelnen TänzerIn ist, dass sie
              diesen Willen etwas erreichen zu wollen und die nötige Disziplin
              auch einen schwierigen Weg dafür zu gehen, schon mitbringen, denn
              dies waren die Eigenschaften die sie auf ihrem Weg zur TänzerIn
              schon getragen haben, und die sie auch diesmal tragen werden.
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
                Zu welchen Zeitpunkten in deinem Leben warst du am
                glücklichsten? Was machte sie besonders? Was haben sie
                gemeinsam?
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
            <ArticleSubHeader>
              Abschnitt 3: Wer willst du sein?
            </ArticleSubHeader>
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
                Womit würdest du deine Zeit verbringen, wenn du der letzte
                Mensch auf der Welt wärst?
              </ListItem>
              <ListItem>
                Gibt es etwas in deinem Leben wofür du sterben würdest?
              </ListItem>
              <ListItem>
                Was würdest du tun, wenn du unsterblich wärst?
              </ListItem>
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
              Gehe deine Antworten in Ruhe nochmal durch. Was kristallisiert
              sich heraus? Was hast du ziemlich oft erwähnt? Wo gibt es
              Gemeinsamkeiten oder eine Verbindung? Markiere oder unterstreiche
              diese und ziehe dein Fazit.
            </Paragraph>
          </Article>
        )}

        {props.english && (
          <Article>
            <ArticleSubHeader>
              Rediscovering and getting to know yourself
            </ArticleSubHeader>
            <Paragraph>
              The most important part of the whole transition is to recognize
              who I actually am and what I have inside of me that I may not have
              even known about before. Getting to know myself in a new way,
              rethinking and trying out my own self. In a life in which dance
              has always been in the first place, all the other sides of someone
              have usually faded into the background, if not lost sight of.
              Therefore it is important to take the necessary time to find out
              what other worlds are still slumbering in someone, what hidden
              dreams, ideas, passions there are. Because every person has
              something that drives him, something that knows more than just a
              form, a way of expression, and usually someone comes through paths
              not yet taken to discover what he still wants, can and dreams,
              what defines someone as an individual person, what his own life
              should stand for and what can fill someone at the end of the day
              with satisfaction and meaning. On the path of change, essential
              questions usually arise such as: What do I want? Where do I want
              to go? How do I imagine a fulfilled life? Where are my other
              hidden talents? Why do I choose this path? What part of myself is
              behind it? What meaning do I give to my existence? Will I be able
              to build something completely new for myself? What are my
              possibilities?
            </Paragraph>
            <ArticleSubHeader>Walking the new path</ArticleSubHeader>
            <Paragraph>
              Once you have gone through this important process and found what
              drives you and what path you want to take, you will find the
              strength and confidence within yourself to take this new path in
              life. Because the will to let this "other me" become reality
              carries someone through these difficulties that every change
              brings with it. And that is the most important thing a dancer can
              achieve in the transition process, that he or she develops his or
              her own vision for oneself and one's own life, a vision of what
              life should look like and what will make one happy. Because the
              wonderful thing about each dancer is that they already have this
              will to achieve something and the necessary discipline to go even
              a difficult way for it, because these were the qualities that they
              have already carried on their way to become a dancer, and which
              they will also carry this time.
            </Paragraph>
            <Paragraph style={{color: colors.accentDark}}>
              To find out who you are and what suits you well, the following
              test might be helpful. It is divided into 3 sections. Fill out all
              the questions and see if you see a pattern. found at:
            </Paragraph>

            <Link
              onPress={() =>
                Linking.openURL('https://www.vernuenftig-leben.de/wer-bin-ich/')
              }
            >
              www.vernuenftig-leben.de/wer-bin-ich/
            </Link>
            <ArticleSubHeader>Section 1: Who were you?</ArticleSubHeader>
            <List>
              <ListItem>
                What did you want to be when you were younger?
              </ListItem>
              <ListItem>
                What dreams or aspirations were you once laughed at or ridiculed
                for?
              </ListItem>
              <ListItem>
                What peculiarities distinguished you as a child?
              </ListItem>
              <ListItem>What were you particularly good at in school?</ListItem>
              <ListItem>
                At what times in your life were you happiest? What made them
                special? What do they have in common?
              </ListItem>
            </List>
            <ArticleSubHeader>Section 2: Who are you?</ArticleSubHeader>
            <List>
              <ListItem>
                What makes you happy just because you can do it?
              </ListItem>
              <ListItem>
                In what activity do you find the doing itself more fulfilling
                than the result?
              </ListItem>
              <ListItem>Where do you forget the time?</ListItem>
              <ListItem>
                Where do you forget to look at your cell phone?
              </ListItem>
              <ListItem>What does your ideal day look like?</ListItem>
              <ListItem>What talent of yours are you most proud of?</ListItem>
              <ListItem>
                What would you rather be doing right now than reading this?
              </ListItem>
            </List>
            <ArticleSubHeader>
              Section 3: Who do you want to be?
            </ArticleSubHeader>
            <List>
              <ListItem>
                What would you do if you knew you couldn't fail?
              </ListItem>
              <ListItem>What would you do if you were invisible?</ListItem>
              <ListItem>
                What would you do if you faked your death and could now start
                all over again?
              </ListItem>
              <ListItem>
                What would you do if you were financially secure?
              </ListItem>
              <ListItem>
                What would you change in the world if you could?
              </ListItem>
              <ListItem>
                What would you do if you had only one year to live?
              </ListItem>
              <ListItem>
                What would you not want to live without in the world?
              </ListItem>
              <ListItem>
                What would you spend your time doing if you were the last person
                in the world?
              </ListItem>
              <ListItem>
                Is there anything in your life you would die for?
              </ListItem>
              <ListItem>What would you do if you were immortal?</ListItem>
              <ListItem>
                What should your obituary say about you and your life?
              </ListItem>
              <ListItem>
                What would you do if you could only do one more thing in your
                life?
              </ListItem>
              <ListItem>What would you really regret never doing?</ListItem>
            </List>
            <ArticleSubHeader
              textStyle={{backgroundColor: colors.secondaryLight}}
            >
              Evaluation
            </ArticleSubHeader>
            <Paragraph>
              Review your answers at your leisure. What stands out? What did you
              mention quite a bit? Where are there commonalities or a
              connection? Mark or underline these and draw your conclusion.
            </Paragraph>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default WerBindIch;
