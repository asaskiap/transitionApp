import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStoryYan = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/yanRevazov.jpg')}
          title={'Fotograf'}
        >
          Yan Revazov
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Nichts sei unsicherer als vermeintliche Sicherheit, sagt Yan
            Revazov. Den sicheren Weg hat er daher nicht gewählt. Begonnen hat
            der 1980 in Sewastopol auf der Halbinsel Krim - der Vater
            Staatsanwalt für Rechtsbrecher vom Politkriminellen bis zum
            Serienmörder, in der Umbruchszeit der 1990er ständig bedroht, die
            Mutter Chefin der Informatikabteilung im militärischen Schiffsbau.
            Von Yans vier Brüdern wurden vier Tänzer, er als Mittlerer fing spät
            an - im Schlepptau eines Bruders. Als der im Pionierhaus auftrat,
            Applaus und Blumen bekam, sah Yan ihn als Star wie Robbie Williams:
            „Das will ich auch!“ Parallel Akrobatik auf einer Sportschule,
            Tanzen im Pionierhaus und Schwimmen („todlangweilig, weil so
            allein“) folgten. Akrobatik liebte er, Folklore gefiel ihm. Die
            Lehrerin mit Mariinsky-Vergangenheit gab ihm ein Buch über Maris
            Liepa und eine DVD mit Sternen wie Plissezkaja, Stiefel und Simkin
            senior. Der Schock setzte sich in Wollen um.
          </Paragraph>
          <Paragraph>
            Mit 11 bewarb er sich in Woronesh, wurde abgelehnt, trainierte
            fleißig weiter und bestand die Prüfung für die Bolschoi-Schule in
            Moskau. Damals, 1997, die Ukraine hatte sich von Russland gelöst,
            mussten Ausländer das Studium teurer bezahlen. So ging er auf die
            preiswertere Filiale des Bolschoi, hatte dort einen guten Pädagogen
            („hat nie geschrien, wir mussten uns selbst bewerten“), erhielt zum
            Aufholen viel Extratraining und blieb auch, als er seinen russischen
            Pass bekam und hätte wechseln können. Bald lernte er dort gänzlich
            kostenlos und arbeitete dafür nachts in der Bibliothek („sortieren,
            kopieren, DVDs aller Stars ansehen, ein Traumjob“). Er tanzte
            bereits im Bolschoi, als er bei einer Gala das Jeune Ballet de
            France sah und begeistert war. So ging er vom „Museum“ Bolschoi mit
            seiner starren Hierarchie nach Paris und konnte auch modernes
            Repertoire tanzen, leider nur für ein Jahr, dann wurde die Compagnie
            mangels Geldes aufgelöst.
          </Paragraph>
          <Paragraph>
            Unter mehreren Angeboten, auch Bordeaux, Mulhouse, Straßburg,
            entschied er sich für Karlsruhe („eine sehr gute Compagnie, ich war
            der Jüngste“), mochte die abwechslungsreiche Arbeit mit Pierre Wyss,
            war als Solist in „Romeo und Julia“, „Lulu“ zu sehen. Um mit seiner
            zukünftigen Frau zusammenzusein, ging er nach einem Jahr. Nach einem
            weiteren Jahr in St. Pölten kam er 2003 zu Ralf Rossa nach Halle:
            „Er suchte bei Tänzern Persönlichkeit, Emotionen, Poesie.“ Aus der
            geplanten einen Spielzeit, dem Wunsch, nach Monaco zu gehen, und
            einem Angebot ans Staatsballett Berlin wurde „das Highlight meines
            Lebens“. Bei dem vielseitigen Ralf Rossa tanzte er in der
            Romanadaption „Schlafes Bruder“ den Peter, einen Jungen voll
            liebender Hingabe an den unerreichbar introvertierten Elias - Rossas
            opus magnus, nicht zuletzt wegen Yans ergreifender
            Charakterzeichnung. Romeo und Nijinsky, Parts in „Endstation
            Sehnsucht“ und „Sacre du printemps“ schlossen sich an, bis ein
            Bandscheibenvorfall in „die schlimmste Zeit meines Lebens“ führte.
            Operationen und Rehas folgten, leiteten eine Phase des Umdenkens
            ein: „Ich konnte wieder laufen, war überfroh. Als Tänzer war ich nie
            mit mir zufrieden.“ 2011 beendete er nach elf Jahren die
            Tanzkarriere, suchte einen Neuanfang, nachdem er bei einer Audition
            für Jan Fabre als zu alt eingestuft worden.
          </Paragraph>
          <Paragraph>
            Die Idee mit dem Fotografieren keimte. Fotografiert hatte er ja
            schon mit 14. Sein Bruder, Tänzer im FriedrichstadtPalast, gab ihm
            eine Digitalkamera. Licht, Atmosphäre, die schönsten Momente finden,
            ob im Sprung oder im Ausdruck, das lockte ihn. Nach einer Phase der
            teuer gemieteten Studios jeweils mit Auf- und Abbau besitzt er in
            Berlins Prenzlauer Berg endlich sein privates Studio mit kompletter
            Ausrüstung. Neben Werbung vom Kinderwagen bis zum Koffer realisiert
            er gern künstlerische Aufträge, auch draußen in der Natur. „Im
            Studio entstehen die Kreationen aus Licht, Farbe, Idee, Komposition,
            ob Porträts oder Theaterplakate.“ Nur Ballettfotograf sein, will er
            nicht: „Wo bleibe ich da als Kreativer?“ Tänzer, sagt er, sei der
            beste Job auf der Welt - und sei jetzt genauso glücklich: „Ich
            liebe, was ich mache, selbst wenn das mal 36 Stunden Arbeit
            bedeutet.“ Yan Revazov ist augenscheinlich zum zweiten Mal bei sich
            angekommen.
          </Paragraph>
          <ArticleBy>Volkmar Draeger</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryYan;
