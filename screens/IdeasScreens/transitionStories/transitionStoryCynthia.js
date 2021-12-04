import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const Cynthia_DE = (props) => {
  return (
    <Article>
      <Paragraph>
        Am Backofen steht Cynthia Barcomi schon lange nicht. Aber jeden Morgen
        lässt sie sich Aufnahmen des Gebäcks auf ihr Handy schicken. „Ich muss
        das immer kontrollieren“, erklärt sie frühmorgens im Deli. „Bei aller
        Routine schleichen sich da schnell Fehler ein.“ Das aber darf nicht
        sein, schließlich sind ihre Cookies Kult. Nein, als Babysitterin
        verstünde sie sich nicht. Auch besäßen ihre Mitarbeiter ein sicheres
        Qualitätsbewusstsein. „Aber weil ich meine Spezialitäten selbst
        entwickelt habe, erkenne ich Veränderungen früher.“
      </Paragraph>
      <Paragraph>
        Dass Cynthia Barcomi Tänzerin gewesen ist, merkt man ihr nicht auf
        Anhieb an. Sie spricht ein schnelles Deutsch mit einem leichten Akzent,
        der einen sofort aufhorchen lässt, und besitzt einen Sachverstand, den
        sie in Büchern und regelmäßigen Fernsehbeiträgen durchaus vergnüglich zu
        dokumentieren weiß. Eigentlich stammt sie aus Seattle, und dort erwachte
        auch ihr Interesse für den Tanz, das sie später erst in einem Internat,
        dann als Studentin der Philosophie und Theaterwissenschaften
        professionell vertiefen konnten.“Wir haben an der Columbia University
        zusammen mit Tänzern der José Limón Dance Company gearbeitet“, erinnert
        sie sich, „und beispielsweise Limóns 'Partita' einstudiert“ :
        Erfahrungen, die ihr ganz nebenbei das eigene Potenzial bewusst machen
        und sie in ihrer Überzeugung bestätigen, „dass man mit seinen Pfunden
        wuchern muss. Man muss aus den Gaben, die man hat, etwas machen.“
      </Paragraph>
      <Paragraph>
        In New York hat sie Gelegenheit, Pina Bausch zu sehen. „Ihre Art eines
        abstrakten Tanztheaters faszinierte mich.“ Und zum ersten Mal steht sie
        morgens auf und sagt sich: „Ich habe einen Plan. Ich ziehe nach Berlin.“
        Und das tut sie denn auch ohne Wenn und Aber und ohne ein Wort Deutsch
        zu können. Cynthia Barcomi tanzt bei Regina Baumgart, ist bei Projekten
        von Frauke Havemann und William Johnson dabei, wirkt auch mal bei Sasha
        Waltz im Rathaus Schöneberg mit.
      </Paragraph>
      <Paragraph>
        So hätte es eigentlich noch eine Zeitlang weitergehen können. Doch mit
        dreißig wird sie wieder Mutter. Sie weiß, welcher Kraftanstrengung es
        bedarf, wieder in Form zu kommen. „Aber ich habe nicht das Gefühl
        gehabt, dass ich das unbedingt machen muss, und das muss man als
        Künstler haben. Ich sagte mir: Nein, ich kann auch anderes.
        Beispielsweise Kaffeebohnen rösten; der Geruch hat etwas Sinnliches. Und
        ich wollte ein bisschen Gebäck dazu reichen, weil ich immer gern
        gebacken habe.“ Naiv, wie sie damals noch ist, will sie sich einfach
        umschulen lassen. „Doch der zuständige Beamte hat mich nur angeschaut
        und gesagt: 'Neee. Gastronomie ist Männersache. Das kriegen Sie nie hin.
        Vergessen Sie's.'“
      </Paragraph>
      <Paragraph>
        So etwas lässt sich eine Barcomy nicht zweimal sagen. Derart
        herausgefordert, leistet sie sich den Luxus, „lernen zu dürfen“, wie sie
        sagt, „ohne sich selbst dabei eine Blöße zu geben.“ Schließlich ist es
        nicht einfach, ganz und gar ungewöhnliche Ideen zu vermitteln und
        gleichzeitig Leute zu führen, die vielleicht über mehr Berufserfahrung
        verfügen als man selbst. Cynthia Barcomi hat es geschafft. Heute leitet
        sie sowohl Barcomi’s Café und Kaffeerösterei in Berlin-Kreuzberg und
        Barcomi’s Deli in den Sophie-Gips-Höfen. Und lässt sich zur Sicherheit
        jeden Morgen frühmorgens Fotos der frisch gebackenen Cakes and Cookies
        schicken.
      </Paragraph>
      <ArticleBy>Hartmut Regiz</ArticleBy>
    </Article>
  );
};

const Cynthia_EN = (props) => {
  return (
    <Article>
      <Paragraph>
        Cynthia Barcomi hasn't stood at the oven for a long time. But every
        morning, she has shots of the pastry sent to her cell phone. "I always
        have to check," she explains early in the morning at the deli. "With all
        the routine, it's easy for mistakes to creep in." But that can't happen;
        after all, her cookies are cult. No, she doesn't see herself as a
        babysitter. Her employees also have a keen awareness of quality. "But
        because I developed my specialties myself, I recognize changes earlier."
      </Paragraph>
      <Paragraph>
        That Cynthia Barcomi has been a dancer is not immediately apparent. She
        speaks a quick German with a slight accent that immediately makes you
        sit up and take notice, and has an expertise that she knows how to
        document in books and regular television features in a thoroughly
        enjoyable way. She is actually from Seattle, and it was there that she
        first became interested in dance, which she later deepened
        professionally, first at a boarding school and then as a student of
        philosophy and theater studies. "We worked at Columbia University
        together with dancers from the José Limón Dance Company," she recalls,
        "and rehearsed Limón's 'Partita,' for example": experiences that, quite
        incidentally, made her aware of her own potential and confirmed her
        conviction "that you have to grow with your pounds. You have to make
        something out of the gifts you have."
      </Paragraph>
      <Paragraph>
        In New York, she has the opportunity to see Pina Bausch. "Her kind of
        abstract dance theater fascinated me." And for the first time, she gets
        up in the morning and says to herself, "I have a plan. I'm moving to
        Berlin." And so she does, without any ifs or buts and without knowing a
        word of German. Cynthia Barcomi dances with Regina Baumgart,
        participates in projects by Frauke Havemann and William Johnson, and
        sometimes works with Sasha Waltz at Rathaus Schöneberg.
      </Paragraph>
      <Paragraph>
        It could have continued like this for a while. But at thirty she becomes
        a mother again. She knows how much effort it takes to get back into
        shape. "But I didn't feel that I absolutely had to do this, and you have
        to have that as an artist. I said to myself, no, I can do other things.
        For example, roasting coffee beans; there's something sensual about the
        smell. And I wanted to have some pastry to go with it, because I've
        always loved to bake." Naïve as she still is at the time, she simply
        wants to retrain. "But the officer in charge just looked at me and said,
        'Nah. Gastronomy is a man's job. You'll never get it right. Forget it.'"{' '}
      </Paragraph>
      <Paragraph>
        That's the kind of thing a Barcomy doesn't take twice. Thus challenged,
        she has the luxury of "being allowed to learn," she says, "without
        exposing herself." After all, it's not easy to communicate wholly
        unusual ideas while managing people who may have more professional
        experience than you do. Cynthia Barcomi has done it. Today she runs both
        Barcomi's Café & Kaffeerösterei in Berlin-Kreuzberg and Barcomi's Deli
        in the Sophie-Gips-Höfe. And has photos of the freshly baked Cakes and
        Cookies sent to her early every morning for good measure.
      </Paragraph>
      <ArticleBy>Hartmut Regiz</ArticleBy>
    </Article>
  );
};

const TransitionStoryCynthia = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <TransitionStoryModalHeader
          image={require('../../../assets/images/cynthiaBarcomi.jpg')}
          title={props.eng ? 'Pastry Chef' : 'Konditorin'}
        >
          Cynthia Barcomi
        </TransitionStoryModalHeader>
        {props.eng ? <Cynthia_EN /> : <Cynthia_DE />}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default TransitionStoryCynthia;
