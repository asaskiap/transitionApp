import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStoryPeter = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/portrait9.jpg')}
          title={'Aufnahmeleiter'}
        >
          Peter Ulbrich
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Peter Ulbrichs Anfänge liegen bei Hoyerswerda. Dort wurde er 1964
            geboren. „Wir lebten auf einem Dorf, unsere Familie hat viel
            musiziert, Klavier und Schlagzeug“, erzählt er. Weil er talentiert
            in Bewegung war, stellte er sich auf eine Annonce hin dem
            Eignungstest an der Staatlichen Ballettschule Berlin - und bestand
            ihn. „Mit zehn hat man keinerlei Vorstellung, was einen da erwartet,
            ich war nie vorher im Theater, kannte nur das Fernsehballett“,
            erinnert er sich. Als 1978 die Ausbildung von sieben auf acht Jahre
            erweitert wurde, war er einer von den vier Jungen in der Klasse, die
            jenes Zusatzjahr erhielten, „hat Spaß gemacht“. Nahtlos ging er
            danach, 1982, ans Ballett der Staatsoper Unter den Linden, tanzte
            dort elf Spielzeiten, bis 1993. „Damals wechselte man ungern“, sagt
            er und hätte es dank seinem Gruppe-mit-Solo-Vertrag auch nicht nötig
            gehabt. Bauern-Pas de deux in „Giselle“, Parts in Balanchines
            „Sinfonie in C“, in „Nussknacker“ und „Dornröschen“ erfüllten ihn.
            Er möchte diese Zeit nicht missen, hatte nette Kollegen, die ihm das
            Leben gezeigt haben, ihm halfen, sich zu orientieren. Von
            Ballettchef Egon Bischoff wurde er gefördert. Als der ging, fühlte
            auch Peter Ulbrich seinen Abschied nahen. Michaël Denard als
            nachfolgender Leiter hatte andere Pläne. So wurde der Erzengel in
            Maurice Béjarts „Verklärte Nacht“ seine letzte Rolle. „Außerdem“, so
            fügt er an, „lässt der Körper mit Ende 20 etwas nach, da hat man
            dann schon lauter unverbraucht 18-jährige Neuzugänge um sich.“
          </Paragraph>
          <Paragraph>
            Es galt, Scheuklappen abzulegen, Interessen rechts und links des
            bisherigen Weges zu finden, andere Qualitäten in sich zu entdecken,
            sich nicht mehr „nur“ Choreografien zu merken. Sein Freundeskreis
            aus der künstlerischen Untergrundszene half ihm, knüpfte Kontakte
            zum Film und zu Medien. So ergaben sich kurze Einsätze, auch in zwei
            Filmen hat er mitgespielt. Das gefiel ihm, aber er mochte lieber
            hinter der Kamera sein als davor. Ein Freund von der Ufa ließ ihn
            wissen, dass ein Praktikant am Set gesucht wurde. Statt der
            geplanten Weltreise wurde er mit Ende 20 „ältester Praktikant der
            Welt“, lacht er. Die in der einst DDR hart erkämpfte „Tänzerrente“
            war damit zwar futsch, trotzdem freute er sich über die glückliche
            Fügung. Denn seine Chefin am Set war eine ehemalige Tänzerin der
            Deutschen Oper Berlin, kannte Peters Problematik also bestens. Sie
            zog ihn mit, lehrte ihn, was wichtig ist beim Film. Unten fing er
            an, musste rechtzeitig am Drehort sein, half aufbauen, schleppte
            Kostüme, Requisiten, holte Kaffee für Iris Berben. Zwei dieser
            TV-Produktionen machte er ohne Geld, dann wurde er Aufnahmeleiter,
            jener, der am Set umsetzt, was sich das Büro ausdenkt. Nach zwölf
            Filmen gelang ihm 1997 der Sprung zum 1. Aufnahmeleiter. Seither
            arbeitet der einst festangestellte Tänzer Peter Ulbrich als
            Freelancer. Diesen Status genießt er heute durchaus, viel unterwegs
            zu sein, interessante Menschen zu treffen und teils skurrile
            Drehorte kennenzulernen, „von der Leichenhalle bis zum Archiv des
            Naturkundemuseums, von der Millionärsvilla bis zum Bordell“. Der
            Abschied vom Tanz war für ihn nicht schmerzlich, das Neue liegt ihm,
            er gehe selten ins Ballett, und wenn, „habe ich mich darin nicht
            vermisst“. Hundertfaches Glück habe er gehabt: an die Schule
            delegiert von den Eltern, durch den Ballettchef entwickelt, im
            Einklang mit dem zweiten Beruf. Offen, neugierig zu sein, rät er
            jungen Tänzern. Inzwischen sammelt er Kunst, Fotos, Malerei,
            Objekte, Collagen - und bleibt selbst neugierig, was die Zukunft
            noch so bringen mag.
          </Paragraph>
          <ArticleBy>Volkmar Draeger</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryPeter;
