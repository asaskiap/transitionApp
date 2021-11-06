import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStoryCynthia = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/portrait5.jpg')}
          title={'Konditorin'}
        >
          Cynthia Barcomi
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Am Backofen steht Cynthia Barcomi schon lange nicht. Aber jeden
            Morgen lässt sie sich Aufnahmen des Gebäcks auf ihr Handy schicken.
            „Ich muss das immer kontrollieren“, erklärt sie frühmorgens im Deli.
            „Bei aller Routine schleichen sich da schnell Fehler ein.“ Das aber
            darf nicht sein, schließlich sind ihre Cookies Kult. Nein, als
            Babysitterin verstünde sie sich nicht. Auch besäßen ihre Mitarbeiter
            ein sicheres Qualitätsbewusstsein. „Aber weil ich meine
            Spezialitäten selbst entwickelt habe, erkenne ich Veränderungen
            früher.“
          </Paragraph>
          <Paragraph>
            Dass Cynthia Barcomi Tänzerin gewesen ist, merkt man ihr nicht auf
            Anhieb an. Sie spricht ein schnelles Deutsch mit einem leichten
            Akzent, der einen sofort aufhorchen lässt, und besitzt einen
            Sachverstand, den sie in Büchern und regelmäßigen Fernsehbeiträgen
            durchaus vergnüglich zu dokumentieren weiß. Eigentlich stammt sie
            aus Seattle, und dort erwachte auch ihr Interesse für den Tanz, das
            sie später erst in einem Internat, dann als Studentin der
            Philosophie und Theaterwissenschaften professionell vertiefen
            konnten.“Wir haben an der Columbia University zusammen mit Tänzern
            der José Limón Dance Company gearbeitet“, erinnert sie sich, „und
            beispielsweise Limóns 'Partita' einstudiert“ : Erfahrungen, die ihr
            ganz nebenbei das eigene Potenzial bewusst machen und sie in ihrer
            Überzeugung bestätigen, „dass man mit seinen Pfunden wuchern muss.
            Man muss aus den Gaben, die man hat, etwas machen.“
          </Paragraph>
          <Paragraph>
            In New York hat sie Gelegenheit, Pina Bausch zu sehen. „Ihre Art
            eines abstrakten Tanztheaters faszinierte mich.“ Und zum ersten Mal
            steht sie morgens auf und sagt sich: „Ich habe einen Plan. Ich ziehe
            nach Berlin.“ Und das tut sie denn auch ohne Wenn und Aber und ohne
            ein Wort Deutsch zu können. Cynthia Barcomi tanzt bei Regina
            Baumgart, ist bei Projekten von Frauke Havemann und William Johnson
            dabei, wirkt auch mal bei Sasha Waltz im Rathaus Schöneberg mit.
          </Paragraph>
          <Paragraph>
            So hätte es eigentlich noch eine Zeitlang weitergehen können. Doch
            mit dreißig wird sie wieder Mutter. Sie weiß, welcher
            Kraftanstrengung es bedarf, wieder in Form zu kommen. „Aber ich habe
            nicht das Gefühl gehabt, dass ich das unbedingt machen muss, und das
            muss man als Künstler haben. Ich sagte mir: Nein, ich kann auch
            anderes. Beispielsweise Kaffeebohnen rösten; der Geruch hat etwas
            Sinnliches. Und ich wollte ein bisschen Gebäck dazu reichen, weil
            ich immer gern gebacken habe.“ Naiv, wie sie damals noch ist, will
            sie sich einfach umschulen lassen. „Doch der zuständige Beamte hat
            mich nur angeschaut und gesagt: 'Neee. Gastronomie ist Männersache.
            Das kriegen Sie nie hin. Vergessen Sie's.'“
          </Paragraph>
          <Paragraph>
            So etwas lässt sich eine Barcomy nicht zweimal sagen. Derart
            herausgefordert, leistet sie sich den Luxus, „lernen zu dürfen“, wie
            sie sagt, „ohne sich selbst dabei eine Blöße zu geben.“ Schließlich
            ist es nicht einfach, ganz und gar ungewöhnliche Ideen zu vermitteln
            und gleichzeitig Leute zu führen, die vielleicht über mehr
            Berufserfahrung verfügen als man selbst. Cynthia Barcomi hat es
            geschafft. Heute leitet sie sowohl Barcomi’s Café und Kaffeerösterei
            in Berlin-Kreuzberg und Barcomi’s Deli in den Sophie-Gips-Höfen. Und
            lässt sich zur Sicherheit jeden Morgen frühmorgens Fotos der frisch
            gebackenen Cakes and Cookies schicken.
          </Paragraph>
          <ArticleBy>Hartmut Regiz</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryCynthia;
