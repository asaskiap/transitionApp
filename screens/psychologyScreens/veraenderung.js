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
        <ArticleHeader>
          {props.english ? 'Change' : 'Veränderung'}
        </ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/path.png')}
        />
        {!props.english && (
          <Article>
            <Paragraph>
              Transition bedeutet definitionsgemäß „Übergang“. Es handelt sich
              dabei um einen Übergang von einer Phase in eine andere und geht
              unweigerlich mit Veränderung einher. Vor allem im beruflichen
              Kontext und insbesondere dann, wenn eine aktive Tanzkarriere
              beendet wird. Das Tanzen hat in den meisten Fällen das ganze Leben
              – oder zumindest den Großteil davon – bestimmt. Proben,
              Trainingseinheiten, Aufführungen, in der Regel zu fest
              vorgegebenen Zeiten. Fällt das weg, sind die Veränderungen, die
              sich daraus ergeben, enorm. Dennoch ist auch der Weg innerhalb der
              Tanzkarriere durch Übergänge gekennzeichnet. Der Wechsel zu einer
              anderen Kompanie, von einem Theater in die freie Szene, der Umzug
              in ein anderes Land. Und das oft bereits in einem sehr jungen
              Alter. Übergange, die alle bereits gemeistert wurden.
            </Paragraph>
            <Paragraph>
              Sucht man nach typischen Verbindungen, die sich zum Wort
              „Veränderung“ ergeben, stößt man schnell auf „einschneidend“,
              „dramatisch“, „tiefgreifend“ und „radikal“. Diese Begriffe können
              abschrecken. Betrachtet man den Transitionprozess von TänzerInnen,
              sind sie jedoch in den meisten Fällen auch zutreffend.
              Gleichzeitig findet man aber auch auf Worte wie „notwendig“,
              „positiv“ und „gestalten“. Da eine aktive Tanzkarriere nicht ewig
              dauern kann, ist ein Veränderungsprozess unbedingt notwendig. Ein
              besonderer Fokus sollte jedoch auf den beiden letzten Begriffen
              liegen. Eine solche Veränderung kann mit vielen positiven Aspekten
              einhergehen, auf die das Augenmerk gerichtet werden sollte. Zudem
              ist es nichts, das man über sich ergehen lassen muss, sondern
              etwas, das aktiv gestaltet werden kann. Und das ist besonders
              wichtig. Viele fühlen sich hilflos und überfordert, oft auch unter
              Druck gesetzt von der Veränderung, die vor ihnen liegt, und
              vergessen dabei, dass sie sie selbst in der Hand haben.
              Veränderungen und somit die Transition erfordern Zeit und Mut, da
              viele Ungewissheiten vor einem liegen. Der Fokus sollte dennoch
              stets auf den positiven Dingen liegen, die man im Moment
              vielleicht noch nicht sehen kann, die aber nur darauf warten,
              entdeckt zu werden.
            </Paragraph>
          </Article>
        )}

        {props.english && (
          <Article>
            <Paragraph>
              Transition, by definition, means "transformation and change." It
              is a transition from one phase to another and is inevitably
              accompanied by change. Especially in a professional context, and
              especially when an active dance career comes to an end. In most
              cases, dancing has defined one's entire life - or at least most of
              it. Rehearsals, training sessions, performances, usually at set
              times. If that falls away, the changes that ensue are enormous.
              Nevertheless, the path within a dance career is also marked by
              transitions. The change to another company, from a theater to the
              independent scene, the move to another country. And often at a
              very young age. Transitions that have all already been mastered.
            </Paragraph>
            <Paragraph>
              If you look for typical associations with the word "change," you
              quickly come across "drastic," "dramatic," "profound," and
              "radical." These terms can be off-putting. However, if one looks
              at the transition process of dancers, they are also applicable in
              most cases. At the same time, one also comes across words like
              "necessary," "positive," and "shaping." Since an active dance
              career cannot last forever, a process of change is absolutely
              necessary. However, a special focus should be on the last two
              terms. Such a change can be accompanied by many positive aspects
              on which attention should be focused. Moreover, it is not
              something that has to be endured, but something that can be
              actively shaped. And that is especially important. Many feel
              helpless and overwhelmed, often pressured by the change that lies
              ahead, forgetting that it is in their own hands. Change, and
              therefore transition, requires time and courage, as many
              uncertainties lie ahead. Nevertheless, the focus should always be
              on the positive things that you may not be able to see at the
              moment, but that are just waiting to be discovered.
            </Paragraph>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Veraenderung;
