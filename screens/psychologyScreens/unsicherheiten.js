import React from 'react';
import {Modal} from 'react-native';

import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';

import CloseButton from '../../components/buttons/closeButton';

const Unsicherheiten = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>
          {props.english ? 'Uncertainties' : 'Unsicherheiten'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/ladder.png')}
          imageContainerStyle={{marginVertical: 50, paddingBottom: 40}}
        />

        {!props.english && (
          <Article>
            <Paragraph>
              Transition bedeutet Übergang, Wandel und Veränderung. Gerade im
              Kontext einer Tanzkarriere und deren Ende kann diese Veränderung
              sehr groß und weitreichend sein, da der Tanzberuf nicht nur einen
              Job darstellt, sondern vollkommene Leidenschaft und Hingabe
              bedeutet. TänzerInnen werden nicht nur aus ihrem gewohnten Umfeld
              gerissen. Sie sind auch damit konfrontiert, dass sie den Beruf,
              den sie seit vielen Jahren – oft sogar Jahrzehnten – so lieben,
              aufgeben müssen. Da der Fokus während dieser Zeit oftmals einzig
              und allein auf dem Tanzen liegt, ist wenig Zeit, sich Gedanken
              darüber zu machen, wie es danach weitergehen kann. Aus diesem
              Grund geht eine solche Veränderung häufig mit Unsicherheit und
              großen Zweifeln einher. Wie kann es weitergehen? Wer bin ich
              eigentlich, wenn ich nicht tanze? Wie kann ich etwas Neues für
              mich finden? Das sind nur ein paar Fragen von vielen, die während
              der Phase des Übergangs aufkommen können und deren Beantwortung
              oft eine große Herausforderung darstellt.
            </Paragraph>
            <Paragraph>
              Unsicherheit bedeutet aber auch, eine Wahl zu haben. Sie gibt
              einem die Chance, etwas Neues zu probieren, sich selbst
              kennenzulernen und auch das Leben aus einer anderen Perspektive zu
              entdecken. Auch wenn der Tanzberuf ebenfalls mit großen
              Unsicherheiten einhergehen kann – insbesondere in der freien Szene
              – ist er häufig durch strikte Vorgaben und wenig Flexibilität
              gekennzeichnet. Während der Spielzeit mit festen
              Trainingseinheiten und Aufführungen bleibt wenig Raum, sich
              anderen Dingen zu widmen. Gleichzeitig gibt dieser enge Rahmen
              Sicherheit. Sicherheit, die wegfällt, wenn man sich dazu
              entschließt, diesen Rahmen zu verlassen und die aktive Karriere zu
              beenden. Gleichzeitig bedeutet es, nicht mehr daran gebunden zu
              sein und selbst entscheiden zu können, wie es weitergeht. Und auch
              wenn diese Entscheidung keine leichte ist und mit Angst,
              Unsicherheit und Zweifeln verbunden sein kann, ist es eine
              wertvolle Freiheit, sie zu haben. Eine Freiheit, auf die man sich
              freuen kann.
            </Paragraph>
            <ArticleSubHeader>Umgang mit Zweifeln</ArticleSubHeader>
            <Paragraph>
              Meist geht der Beginn des neuen Wegs gepaart mit aufkeimenden
              Zweifeln und Unsicherheiten; ob ich es schaffen werde und ob es
              wirklich der richtige Weg ist. Dies ist ein normaler, wenn nicht
              sogar notwendiger emotionaler Schritt bei einer großen Veränderung
              im Leben. Dies geht oft gepaart mit Selbstzweifeln; bin ich in der
              Lage dies bis zum Ende durchzuziehen? Was wenn ich da gar nicht
              gut drin bin und versage? Was ist, wenn es mir gar nicht gefällt?
              Was, wenn ich damit nicht glücklich werde? Auch diese wichtigen
              Fragen sind Teil des Veränderungsprozesses. Den Mut aufzubringen
              sich in unbekanntes Terrain zu begeben ist eine enorme Leistung.
              Dass sich, nachdem sich der Trubel der Veränderung und das Finden
              eines Weges erstmal gelegt haben und die erste Ruhe eingekehrt
              ist, Zweifel einstellen und man sich mit diesen Fragen beschäftigt
              ist ganz verständlich. Und das ist auch gut so. Denn wir fangen
              dann unbewusst an den neuen Weg zu prüfen auf seine Tauglichkeit,
              und uns ihm emotional anzunähern und ihn damit Schritt für Schritt
              und zu eigen zu machen. Der Prozess des Zweifelns ist ein
              wichtiger Prozess. Dadurch dass wir etwas gut hinterfragen,
              überprüfen wir unbewusst diesen neuen Weg darauf ob er auch
              wirklich zu uns passt und richtig für uns ist. Mit jedem Zweifel,
              der sich meldet, meldet sich ein Teil von uns der sich adaptiert
              an das Neue. Und somit ist der Prozess des Zweifelns ein
              essenziell wichtiger Prozess, denn er hilft dabei den neuen Weg,
              zu dem eigenen Weg zu machen.
            </Paragraph>
          </Article>
        )}

        {props.english && (
          <Article>
            <Paragraph>
              Transition means change and transformation. Especially in the
              context of a dance career coming to an end, this change can be
              very big and far-reaching, as the dance profession is not just a
              job, but something you have poured all your passion and dedication
              into. Dancers are not only torn from their familiar environment,
              they are also confronted with having to give up the profession
              they have loved so much for many years - often even decades. Since
              the focus during this time is often solely on dancing, there is
              little time to think about how to continue afterwards. For this
              reason, such a change is often accompanied by uncertainty and
              great doubt. How can I go on? Who am I if I don't dance? How can I
              find something new for myself? These are just a few questions of
              many that can arise during this phase of transition, and answering
              them is often a challenge.
            </Paragraph>
            <Paragraph>
              However, uncertainty also means that you have a choice. It gives
              one the chance to try something new, to get to know oneself, and
              also to discover life from a different perspective. Even though
              the dance profession can also be accompanied by great uncertainty
              - especially in the independent scene - it is often characterized
              by strict guidelines and not a lot of flexibility. During the
              season with fixed training sessions and performances, there is
              little room to devote oneself to other things. At the same time,
              this tight framework provides security. Security that disappears
              when one decides to leave this framework and end one's active
              career. At the same time, it means no longer being tied to it and
              being able to decide for yourself what to do next. And even if
              this decision is not an easy one and can be associated with fear,
              uncertainty and doubt, it is a valuable freedom to have. A freedom
              to look forward to.
            </Paragraph>
            <ArticleSubHeader>Dealing with doubts</ArticleSubHeader>
            <Paragraph>
              Most of the time, the beginning of a new path is paired with
              doubts and uncertainties; whether one will make it and whether it
              is really the right path. This is a normal, if not necessary,
              emotional step in a major life change. This often goes coupled
              with self-doubt; am I capable of seeing this through to the end?
              What if I'm not good at it at all and fail? What if I don't like
              it at all? What if I'm not happy with it? These important
              questions are also part of the change process. Having the courage
              to enter unknown territory is an enormous achievement. It is quite
              understandable that after the first excitement of change has
              passed, doubts set in and you have to deal with these questions.
              And that is also a good thing. Because we then unconsciously begin
              to test the new path for its suitability, and to approach it
              emotionally and thus step by step and make it our own. The process
              of doubting is an important process. By questioning something
              well, we unconsciously check this new way to see if it really fits
              us and is right for us. With every doubt that comes up, a part of
              us comes up that adapts to the new. And therefore the process of
              doubt is an essential process, because it helps to make the new
              way to our own way.
            </Paragraph>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Unsicherheiten;
