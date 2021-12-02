import React from 'react';

import {Modal} from 'react-native';

import CloseButton from '../../components/buttons/closeButton';

import ScrollableScreenContainer from '../../components/scrollableScreen';
import Article from './../../components/articleComponents/article';
import MenuScreenHeader from '../../components/articleComponents/menuScreenHeader';
import ArticleSubHeader from '../../components/articleComponents/articleSubHeader';
import Paragraph from '../../components/articleComponents/paragraph';
import ArticleImage from '../../components/articleComponents/articleImage';
import ArticleHeader from '../../components/articleComponents/articleHeader';
import ArticleIllustration from '../../components/articleComponents/articleIllustration';

const Abschied = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <ArticleHeader>{props.english ? 'Farewell' : 'Abschied'}</ArticleHeader>
        <ArticleIllustration
          image={require('../../assets/illustrations/psychologyIllustrations/ship.png')}
        />
        {!props.english && (
          <Article>
            <ArticleSubHeader>Abschied nehmen</ArticleSubHeader>
            <Paragraph>
              Das Leben eines Menschen ist geprägt von einer Reihe an
              Veränderungen, Abschieden und Neuanfängen. Sich von wichtigen
              Dingen, Menschen, Orten, Gewohnheiten zu trennen ist nicht leicht
              und kann ein ähnlich intensives Gefühl mit sich bringen wie ein
              körperlicher Schmerz. Das Loslassen müssen wir von Kindheit an
              lernen, wir geben liebgewonnene Freundschaften auf, müssen Orte
              verlassen, verändern unsere Größe und Aussehen, jedoch wachsen und
              entwickeln wir uns gerade aufgrund der ständigen Veränderung. Jede
              Veränderung ist ein Neuanfang, jeder neuer Lebensabschnitt bringt
              neue Möglichkeiten, neue Hoffnungen und neue Erlebnisse mit sich.
              Jedoch ist Veränderung für uns ein schwerer Prozess, bedeutet es
              doch, dass wir orientierungslos und unwissend sind und viele neue
              Eindrücke verarbeiten müssen. Dies benötigt Zeit und Ruhe. In
              dieser Zeit werden wir konfrontiert mit lebenswichtigen Fragen;
              Wie soll mein Leben weitergehen? Was wird jetzt auf mich zukommen?
              Welche Bedeutung hat der Verlust für mein Leben? Und wie werde ich
              mit den Gefühlen der Trauer, der Leere oder der Angst umgehen
              können?
            </Paragraph>
            <Paragraph>
              Etwas geht zu Ende, aber etwas Neues beginnt. Jeder Abschied ist
              ein Neuanfang. Denn erst wenn etwa zu Ende gegangen ist, kann das
              Neue zum Vorschein kommen. Dies können wir meist erst sehen, wenn
              wir nicht mehr mit unserer Aufmerksamkeit bei dem Verlust sind und
              uns nicht mehr auf das Verlorene konzentrieren. Wir müssen das was
              wir verlassen auch hinter uns gelassen haben um den Blick frei zu
              bekommen für die Zukunft und ihre Möglichkeiten. Um davon frei zu
              werden bedarf es einen Prozess des Abschieds nehmen und lernen mit
              dem Verlust zu leben. Wenn wir das schaffen, geschieht das was
              jedes Mal in unserem Leben geschieht wenn wir eine Veränderung
              durchlaufen; wir wachsen, wir entwickeln uns und wir entdecken die
              Möglichkeiten die die Zukunft für uns bereit hält. Dann sind wir
              bereit für den Neuanfang.
            </Paragraph>

            <ArticleSubHeader>
              Abschied und Neubeginn im Leben eines/er Tänzers*in
            </ArticleSubHeader>
            <Paragraph>
              Der Übergang in einem Leben von der einen Phase in eine andere ist
              nie leicht. Aber bei einem/er Tänzer*in können sich da große,
              existentielle Sinnfragen ergeben: Wer bin ich eigentlich, wenn ich
              nicht tanze? Kann ich überhaupt etwas anderes als tanzen? Gibt es
              überhaupt irgendetwas, das mich so ausfüllen kann wie das Tanzen?
              Werde ich noch Teil der Tanzcommunity sein? Wie soll ich den
              Abschied von der Bühne schaffen? Wie soll ich mit der Trauer
              umgehen, dass der Weg als Tänzer*in irgendwann vorbei ist? Werde
              ich immer ein/e Tänzer*in bleiben können? Da die
              Auseinandersetzung mit diesen Fragen essenziell ist um danach
              überhaupt offen zu sein für den Transitionprozess, wird sich im
              Gespräch mit den Tänzer*innen zuerst diesen Fragen gewidmet. Um
              den Kopf überhaupt frei zu haben für etwas Neues, etwas Anderes,
              etwas Unbekanntes, ist der Prozess des Abschiedes nehmen und der
              Auseinandersetzung mit der eigenen (Tänzer*innne-) Identität sehr
              wichtig. Denn erst wenn man sich mental von einer alten Liebe
              verabschieden konnte und mit dieser emotional abschließen kann,
              erst dann eröffnen sich im eigenen Sichtfeld überhaupt die
              Möglichkeiten für eine neue Liebe, für einen neuen Weg, für eine
              neuen Lebensabschnitt. Daher geht es am Anfang meist um Abschied,
              Trauer, Loslösen und sich öffnen können für etwas Neues.
            </Paragraph>
          </Article>
        )}

        {props.english && (
          <Article>
            <ArticleSubHeader>Saying goodbye</ArticleSubHeader>
            <Paragraph>
              A person's life is characterized by a series of changes, farewells
              and new beginnings. Parting with important things, people, places,
              habits is not easy and can bring a similar intense feeling as a
              physical pain. Letting go is something we have to learn from
              childhood, we give up dear friendships, have to leave places,
              change our size and appearance, yet we grow and develop precisely
              because of constant change. Every change is a new beginning, every
              new stage of life brings new opportunities, new hopes and new
              experiences. However, change is a difficult process for us, it
              means that we are disoriented and ignorant and have to process
              many new impressions. This requires time and rest. During this
              time we are confronted with vital questions; How should my life go
              on? What will happen to me now? What meaning does the loss have
              for my life? And how will I be able to deal with the feelings of
              grief, emptiness or fear?
            </Paragraph>
            <Paragraph>
              Something comes to an end, but something new begins. Every parting
              is a new beginning. For only when something has come to an end can
              the new apppear. We can usually only see this when our attention
              is no longer on the loss and we no longer focus on what we have
              lost. We have to leave behind what we have left behind to be able
              to see the future and its possibilities. To be free of this
              requires a process of saying goodbye and learning to live with the
              loss. If we can do that, what happens every time we go through a
              change in our lives happens; we grow, we develop and we discover
              the possibilities that the future holds for us. Then we are ready
              for the new beginning.
            </Paragraph>
            <ArticleSubHeader>
              Farewell and new beginning in the life of a dancer
            </ArticleSubHeader>
            <Paragraph>
              A transition in a life from one phase to another is never easy.
              But for a dancer, it can raise big, existential questions of
              meaning: Who am I if I'm not dancing? Can I do anything other than
              dance? Is there anything that can fill me as much as dancing? Will
              I still be part of the dance community? How will I be able to say
              goodbye to the stage? How will I deal with the sadness that my
              path as a dancer will eventually be over? Will I always be able to
              remain a dancer? Since it is essential to deal with these
              questions in order to be open to the transition process, these
              questions are addressed first in the conversation with the
              dancers. In order to have a clear head for something new,
              something different, something unknown, the process of saying
              goodbye and coming to terms with one's own (dancer) identity is
              very important. For only when one has been able to mentally say
              goodbye to an old love and to come to an emotional closure with
              it, only then do the possibilities for a new love, for a new path,
              for a new stage of life open up in one's own field of vision.
              Therefore, in the beginning it is mostly about saying goodbye,
              mourning, detachment and being able to open up for something new.
            </Paragraph>
          </Article>
        )}
      </ScrollableScreenContainer>
      <CloseButton close={props.close} />
    </Modal>
  );
};

export default Abschied;
