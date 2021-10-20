import React from 'react';

import {Modal} from 'react-native';

import CloseButton from '../../components/buttons/closeButton';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';
const Veraenderung = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <ArticleHeader>Veränderung</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/path.png')}
        />
        <Article>
          <Paragraph>
            Transition bedeutet definitionsgemäß „Übergang“. Es handelt sich
            dabei um einen Übergang von einer Phase in eine andere und geht
            unweigerlich mit Veränderung einher. Vor allem im beruflichen
            Kontext und insbesondere dann, wenn eine aktive Tanzkarriere beendet
            wird. Das Tanzen hat in den meisten Fällen das ganze Leben – oder
            zumindest den Großteil davon – bestimmt. Proben, Trainingseinheiten,
            Aufführungen, in der Regel zu fest vorgegebenen Zeiten. Fällt das
            weg, sind die Veränderungen, die sich daraus ergeben, enorm. Dennoch
            ist auch der Weg innerhalb der Tanzkarriere durch Übergänge
            gekennzeichnet. Der Wechsel zu einer anderen Kompanie, von einem
            Theater in die freie Szene, der Umzug in ein anderes Land. Und das
            oft bereits in einem sehr jungen Alter. Übergange, die alle bereits
            gemeistert wurden.
          </Paragraph>
          <Paragraph>
            Sucht man nach typischen Verbindungen, die sich zum Wort
            „Veränderung“ ergeben, stößt man schnell auf „einschneidend“,
            „dramatisch“, „tiefgreifend“ und „radikal“. Diese Begriffe können
            abschrecken. Betrachtet man den Transitionprozess von Tänzer*innen,
            sind sie jedoch in den meisten Fällen auch zutreffend. Gleichzeitig
            findet man aber auch auf Worte wie „notwendig“, „positiv“ und
            „gestalten“. Da eine aktive Tanzkarriere nicht ewig dauern kann, ist
            ein Veränderungsprozess unbedingt notwendig. Ein besonderer Fokus
            sollte jedoch auf den beiden letzten Begriffen liegen. Eine solche
            Veränderung kann mit vielen positiven Aspekten einhergehen, auf die
            das Augenmerk gerichtet werden sollte. Zudem ist es nichts, das man
            über sich ergehen lassen muss, sondern etwas, das aktiv gestaltet
            werden kann. Und das ist besonders wichtig. Viele fühlen sich
            hilflos und überfordert, oft auch unter Druck gesetzt von der
            Veränderung, die vor ihnen liegt, und vergessen dabei, dass sie sie
            selbst in der Hand haben. Veränderungen und somit die Transition
            erfordern Zeit und Mut, da viele Ungewissheiten vor einem liegen.
            Der Fokus sollte dennoch stets auf den positiven Dingen liegen, die
            man im Moment vielleicht noch nicht sehen kann, die aber nur darauf
            warten, entdeckt zu werden.{' '}
          </Paragraph>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default Veraenderung;
