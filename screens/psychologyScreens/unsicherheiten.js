import React from 'react';
import Article from '../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ScrollableScreenContainer from '../../components/scrollableScreen';

const Unsicherheiten = (props) => {
  return (
    <ScrollableScreenContainer>
      <ArticleHeader>Unsicherheiten</ArticleHeader>
      <ArticleIllustration
        image={require('../../assets/illustrations/psychologyIllustrations/ladder.png')}
        imageContainerStyle={{marginVertical: 50, paddingBottom: 40}}
      />
      <Article>
        <Paragraph>
          Transition bedeutet Übergang, Wandel und Veränderung. Gerade im
          Kontext einer Tanzkarriere und deren Ende kann diese Veränderung sehr
          groß und weitreichend sein, da der Tanzberuf nicht nur einen Job
          darstellt, sondern vollkommene Leidenschaft und Hingabe bedeutet.
          Tänzer*innen werden nicht nur aus ihrem gewohnten Umfeld gerissen. Sie
          sind auch damit konfrontiert, dass sie den Beruf, den sie seit vielen
          Jahren – oft sogar Jahrzehnten – so lieben, aufgeben müssen. Da der
          Fokus während dieser Zeit oftmals einzig und allein auf dem Tanzen
          liegt, ist wenig Zeit, sich Gedanken darüber zu machen, wie es danach
          weitergehen kann. Aus diesem Grund geht eine solche Veränderung häufig
          mit Unsicherheit und großen Zweifeln einher. Wie kann es weitergehen?
          Wer bin ich eigentlich, wenn ich nicht tanze? Wie kann ich etwas Neues
          für mich finden? Das sind nur ein paar Fragen von vielen, die während
          der Phase des Übergangs aufkommen können und deren Beantwortung oft
          eine große Herausforderung darstellt.
        </Paragraph>
        <Paragraph>
          Unsicherheit bedeutet aber auch, eine Wahl zu haben. Sie gibt einem
          die Chance, etwas Neues zu probieren, sich selbst kennenzulernen und
          auch das Leben aus einer anderen Perspektive zu entdecken. Auch wenn
          der Tanzberuf ebenfalls mit großen Unsicherheiten einhergehen kann –
          insbesondere in der freien Szene – ist er häufig durch strikte
          Vorgaben und wenig Flexibilität gekennzeichnet. Während der Spielzeit
          mit festen Trainingseinheiten und Aufführungen bleibt wenig Raum, sich
          anderen Dingen zu widmen. Gleichzeitig gibt dieser enge Rahmen
          Sicherheit. Sicherheit, die wegfällt, wenn man sich dazu entschließt,
          diesen Rahmen zu verlassen und die aktive Karriere zu beenden.
          Gleichzeitig bedeutet es, nicht mehr daran gebunden zu sein und selbst
          entscheiden zu können, wie es weitergeht. Und auch wenn diese
          Entscheidung keine leichte ist und mit Angst, Unsicherheit und
          Zweifeln verbunden sein kann, ist es eine wertvolle Freiheit, sie zu
          haben. Eine Freiheit, auf die man sich freuen kann.
        </Paragraph>
        <ArticleSubHeader>Umgang mit Zweifeln</ArticleSubHeader>
        <Paragraph>
          Meist geht der Beginn des neuen Wegs gepaart mit aufkeimenden Zweifeln
          und Unsicherheiten; ob ich es schaffen werde und ob es wirklich der
          richtige Weg ist. Dies ist ein normaler, wenn nicht sogar notwendiger
          emotionaler Schritt bei einer großen Veränderung im Leben. Dies geht
          oft gepaart mit Selbstzweifeln; bin ich in der Lage dies bis zum Ende
          durchzuziehen? Was wenn ich da gar nicht gut drin bin und versage? Was
          ist, wenn es mir gar nicht gefällt? Was, wenn ich damit nicht
          glücklich werde? Auch diese wichtigen Fragen sind Teil des
          Veränderungsprozesses. Den Mut aufzubringen sich in unbekanntes
          Terrain zu begeben ist eine enorme Leistung. Dass sich, nachdem sich
          der Trubel der Veränderung und das Finden eines Weges erstmal gelegt
          haben und die erste Ruhe eingekehrt ist, Zweifel einstellen und man
          sich mit diesen Fragen beschäftigt ist ganz verständlich. Und das ist
          auch gut so. Denn wir fangen dann unbewusst an den neuen Weg zu prüfen
          auf seine Tauglichkeit, und uns ihm emotional anzunähern und ihn damit
          Schritt für Schritt und zu eigen zu machen. Der Prozess des Zweifelns
          ist ein wichtiger Prozess. Dadurch dass wir etwas gut hinterfragen,
          überprüfen wir unbewusst diesen neuen Weg darauf ob er auch wirklich
          zu uns passt und richtig für uns ist. Mit jedem Zweifel, der sich
          meldet, meldet sich ein Teil von uns der sich adaptiert an das Neue.
          Und somit ist der Prozess des Zweifelns ein essenziell wichtiger
          Prozess, denn er hilft dabei den neuen Weg, zu dem eigenen Weg zu
          machen.
        </Paragraph>
      </Article>
    </ScrollableScreenContainer>
  );
};

export default Unsicherheiten;
