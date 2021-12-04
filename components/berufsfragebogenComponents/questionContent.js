import React from 'react';
import Question from '../../components/berufsfragebogenComponents/question';

export const Question1 = (props) => {
  return (
    <Question
      element1={
        props.eng ? 'Working in a workshop' : 'In einer Werkstatt arbeiten '
      }
      element2={
        props.eng
          ? 'Performing in front of an audience'
          : 'Vor anderen auftreten (tanzen, singen, etc.) '
      }
      element3={
        props.eng
          ? 'Helping someone to solve a personal problem'
          : 'Jemandem bei einem persönlichen Problem helfen'
      }
      element4={
        props.eng
          ? 'Attending a scientific congress'
          : 'Einen wissenschaftlichen Kongress besuchen '
      }
      element5={
        props.eng
          ? 'Conducting business negotiations'
          : 'Geschäftliche Verhandlungen führen '
      }
      element6={props.eng ? 'Working in an office' : 'In einem Büro arbeiten '}
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
      setF={props.setF}
      handleSubmit={props.handleSubmit}
      progress={props.progress}
      eng={props.eng}
    >
      {props.eng ? 'I could see myself...' : ' Meine Interessen sind...'}
    </Question>
  );
};

export const Question2 = (props) => {
  return (
    <Question
      element1={
        props.eng
          ? 'Working with children and youths'
          : 'Mit Kindern und Jugendlichen arbeiten'
      }
      element2={
        props.eng
          ? 'Setting up and running electronic equipment'
          : 'Elektrische Geräte einbauen und bedienen '
      }
      element3={
        props.eng
          ? 'Working at a research institute'
          : 'In einem Forschungsinstitut arbeiten '
      }
      element4={
        props.eng ? 'Writing a business plan' : 'Einen Geschäftsplan erstellen '
      }
      element5={props.eng ? 'Planning events' : 'Veranstaltungen planen '}
      element6={
        props.eng
          ? 'Designing the graphic layout of a publication'
          : 'Eine Zeitschrift grafisch gestalten '
      }
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
      setF={props.setF}
      handleSubmit={props.handleSubmit}
      progress={props.progress}
      eng={props.eng}
    >
      {props.eng ? 'I could see myself...' : ' Meine Interessen sind...'}
    </Question>
  );
};

export const Question3 = (props) => {
  return (
    <Question
      element1={
        props.eng
          ? 'Running an own store or business'
          : 'Ein eigenes Geschäft oder Unternehmen führen '
      }
      element2={
        props.eng
          ? 'Intensively analyzing a problem'
          : 'Ein Problem intensiv analysieren '
      }
      element3={props.eng ? 'Setting up a computer' : 'Computer einrichten '}
      element4={
        props.eng
          ? 'Doing the accounting for a business'
          : 'Die Buchhaltung für ein Geschäft erledigen '
      }
      element5={
        props.eng
          ? 'Working with photography'
          : 'Sich mit Fotografie beschäftigen '
      }
      element6={
        props.eng
          ? 'Supporting seniors in their day to day lifeprops.eng ? '
          : 'Ältere Menschen in ihrem Alltag unterstützen'
      }
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
      setF={props.setF}
      handleSubmit={props.handleSubmit}
      progress={props.progress}
      eng={props.eng}
    >
      {props.eng ? 'I could see myself...' : ' Meine Interessen sind...'}
    </Question>
  );
};

export const Question4 = (props) => {
  return (
    <Question
      element1={props.eng ? 'Drawing or painting' : 'Zeichnen oder malen'}
      element2={
        props.eng
          ? 'Guyding others in their work'
          : 'Andere in der Arbeit anleiten'
      }
      element3={
        props.eng
          ? 'Developing a system for organizing documents'
          : 'Ein Ordnungssystem für Dokumente entwickeln'
      }
      element4={props.eng ? 'Working in the garden' : 'Im Garten arbeiten'}
      element5={
        props.eng
          ? 'Settling disagreements between others'
          : 'Streits zwischen anderen schlichten'
      }
      element6={
        props.eng
          ? 'Thinking about unsolved questions'
          : 'Sich mit ungelösten Fragen beschäftigen'
      }
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
      setF={props.setF}
      handleSubmit={props.handleSubmit}
      progress={props.progress}
      eng={props.eng}
    >
      {props.eng ? 'I could see myself...' : ' Meine Interessen sind...'}
    </Question>
  );
};

export const Question5 = (props) => {
  return (
    <Question
      element1={props.eng ? 'Organizing appointments' : 'Termine organisieren'}
      element2={
        props.eng ? 'Taking care of sick people' : 'Kranke Menschen behandeln'
      }
      element3={
        props.eng
          ? 'Having responsibility in projects'
          : 'In Projekten Verantwortung tragen'
      }
      element4={
        props.eng
          ? 'Creatively designing interiors '
          : 'Innenräume kreativ gestalten'
      }
      element5={
        props.eng ? 'Conducting experiments' : 'Experimente durchführen '
      }
      element6={
        props.eng
          ? 'Finding out, how technical devices work'
          : 'Herausfinden, wie technische Geräte funktionieren'
      }
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
      setF={props.setF}
      handleSubmit={props.handleSubmit}
      progress={props.progress}
      eng={props.eng}
    >
      {props.eng ? 'I could see myself...' : ' Meine Interessen sind...'}
    </Question>
  );
};

export const Question6 = (props) => {
  return (
    <Question
      element1={
        props.eng
          ? 'Reading scientific books and articles'
          : 'Wissenschaftliche Bücher und Artikel lesen '
      }
      element2={
        props.eng
          ? 'Doing a lot of writing at a computer'
          : 'Schreibarbeiten am Computer durchführen'
      }
      element3={
        props.eng
          ? 'Processing photos and videos on a computer'
          : 'Videos und Bilder am Computer bearbeiten'
      }
      element4={
        props.eng
          ? 'Working at a councelling center'
          : 'In einer Beratungsstelle arbeiten'
      }
      element5={props.eng ? 'Working by hand' : 'Handwerklich arbeiten'}
      element6={props.eng ? 'Selling a product' : 'Ein Produkt verkaufen'}
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      setA={props.setA}
      setB={props.setB}
      setC={props.setC}
      setD={props.setD}
      setE={props.setE}
      setF={props.setF}
      handleSubmit={props.handleSubmit}
      progress={props.progress}
      eng={props.eng}
    >
      {props.eng ? 'I could see myself...' : ' Meine Interessen sind...'}
    </Question>
  );
};
