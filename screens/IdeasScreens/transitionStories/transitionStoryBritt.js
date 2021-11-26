import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';

const TransitionStoryBritt = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          image={require('../../../assets/images/brittFolk.jpeg')}
          title={'Physiotherapeutin'}
        >
          Britt Folk
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Manche Karrieren starten mit Hindernissen und nehmen dann doch Fahrt
            auf. Britt Folks Weg begann im heimischen Bernau nahe Berlin bei
            einer ambitionierten Ballettlehrerin im Kreiskulturhaus. Zweimal pro
            Woche ging die kleine Britt ab der zweiten Schulklasse dort in den
            Unterricht, hörte das Lob für den Spann einer Mitschülerin, fand
            ihren Spann eigentlich auch gut. In der Pionierzeitung „Trommel“ sah
            sie eine Annonce der Palucca-Schule Dresden, sandte den Antrag ab,
            reiste mit dem Vindobona-Express, für sie „ein tolles Erlebnis“, zur
            Eignungsprüfung. Alles lief gut, bis man ihre „Engelflügel“,
            herausstehende Schulterblätter, entdeckte. Unverrichtet ging es da
            mit dem Vindobona zurück.
          </Paragraph>
          <Paragraph>
            Einige Wochen später warb in der „Trommel“ nun die Staatliche
            Ballettschule Berlin. In einem mehrstufigen Test setzte sich Britt
            im Bewerberansturm durch, erhielt eine halbjährige Probezeit, mit
            der Auflage zum Anti-“Engelflügel“-Training bei der
            Physiotherapeutin der Schule. Strahlend, doch auch traurig wegen der
            Trennung von den Eltern zog sie 1976 „mit meinem karierten
            Luftkoffer“ ins Internat ein. Täglich ging sie im Schulgebäude an
            den Fotos der Starabsolventen vorüber, Steffi Scherzer, Jutta
            Deutschland, Angela Philipp - das spornte an. Bald fiel auch Britts
            Talent auf. Pädagoge Stefan Lux setzte sie solistisch in seinen
            Schulchoreografien ein: „Was haben sie mit dem Regen gemacht?“ um
            atomverseuchten Regen, „Kinderkreuzzug“ zu Musik von Benjamin
            Britten und nach dem Gedicht „Kinderkreuzzug 1939“ von Bertolt
            Brecht, „Konzert für die Jugend“ als sinfonische Umsetzung des 2.
            Klavierkonzerts von Dmitri Schostakowitsch. Aufnahme in die
            Förderklasse, Vorbereitung auf nationale und internationale
            Wettbewerbe, so Moskau und Varna, waren die logische Konsequenz.
          </Paragraph>
          <Paragraph>
            Manche Karrieren starten mit Hindernissen und nehmen dann doch Fahrt
            auf. Britt Folks Weg begann im heimischen Bernau nahe Berlin bei
            einer ambitionierten Ballettlehrerin im Kreiskulturhaus. Zweimal pro
            Woche ging die kleine Britt ab der zweiten Schulklasse dort in den
            Unterricht, hörte das Lob für den Spann einer Mitschülerin, fand
            ihren Spann eigentlich auch gut. In der Pionierzeitung „Trommel“ sah
            sie eine Annonce der Palucca-Schule Dresden, sandte den Antrag ab,
            reiste mit dem Vindobona-Express, für sie „ein tolles Erlebnis“, zur
            Eignungsprüfung. Alles lief gut, bis man ihre „Engelflügel“,
            herausstehende Schulterblätter, entdeckte. Unverrichtet ging es da
            mit dem Vindobona zurück. Einige Wochen später warb in der „Trommel“
            nun die Staatliche Ballettschule Berlin. In einem mehrstufigen Test
            setzte sich Britt im Bewerberansturm durch, erhielt eine halbjährige
            Probezeit, mit der Auflage zum Anti-“Engelflügel“-Training bei der
            Physiotherapeutin der Schule. Strahlend, doch auch traurig wegen der
            Trennung von den Eltern zog sie 1976 „mit meinem karierten
            Luftkoffer“ ins Internat ein. Täglich ging sie im Schulgebäude an
            den Fotos der Starabsolventen vorüber, Steffi Scherzer, Jutta
            Deutschland, Angela Philipp - das spornte an. Bald fiel auch Britts
            Talent auf. Pädagoge Stefan Lux setzte sie solistisch in seinen
            Schulchoreografien ein: „Was haben sie mit dem Regen gemacht?“ um
            atomverseuchten Regen, „Kinderkreuzzug“ zu Musik von Benjamin
            Britten und nach dem Gedicht „Kinderkreuzzug 1939“ von Bertolt
            Brecht, „Konzert für die Jugend“ als sinfonische Umsetzung des 2.
            Klavierkonzerts von Dmitri Schostakowitsch. Aufnahme in die
            Förderklasse, Vorbereitung auf nationale und internationale
            Wettbewerbe, so Moskau und Varna, waren die logische Konsequenz.
          </Paragraph>
          <ArticleBy>Volkmar Draeger</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryBritt;
