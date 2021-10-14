import React from 'react';
import Question from '../../components/berufsfragebogenComponents/question';

export const Question1 = (props) => {
  return (
    <Question
      element1={'In einer Werkstatt arbeiten'}
      element2={'Elektrische Geräte einbauen und bedienen'}
      element3={'Computer einrichten'}
      element4={'Im Garten arbeiten'}
      element5={'Handwerklich arbeiten'}
      element6={'Herausfinden, wie technische Geräte funktionieren'}
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
    >
      Meine Interessen sind...
    </Question>
  );
};

export const Question2 = (props) => {
  return (
    <Question
      element1={'Wissenschaftliche Bücher und Artikel lesen'}
      element2={'Ein Problem intensiv analysieren'}
      element3={'In einem Forschungsinstitut arbeiten'}
      element4={'Einen wissenschaftlichen Kongress besuchen'}
      element5={'Experimente durchführen'}
      element6={'Sich mit ungelösten Fragen beschäftigen'}
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
    >
      Meine Interessen sind...
    </Question>
  );
};
