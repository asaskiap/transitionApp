import React from 'react';

import {Modal} from 'react-native';
import Article from '../../../components/articleComponents/article';
import Paragraph from '../../../components/articleComponents/paragraph';
import CloseButton from '../../../components/buttons/closeButton';
import {ArticleBy} from '../../../components/littleTextComponents';
import ScrollableScreenContainer from '../../../components/scrollableScreen';
import TransitionStoryModalHeader from '../../../components/transitionStoriesComponents/transitionStoryModalHeader';
const TransitionStoryTobias = (props) => {
  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollableScreenContainer>
        <CloseButton close={props.close} />
        <TransitionStoryModalHeader
          title={'Medizin Studium'}
          image={require('../../../assets/images/TobiasAlmasi.jpg')}
        >
          Tobias Almasi
        </TransitionStoryModalHeader>
        <Article>
          <Paragraph>
            Sein Großvater kam aus Ungarn. Seinen Nachnamen, Almasi, müsse man
            eigentlich Olmaschi aussprechen. Macht aber keiner. Der 35-Jährige
            wuchs in der Nähe von Siegen auf, wo der Ex-Solist Hans Carrasz eine
            private Tanzschule betrieb. Auch dessen Name klang ungarisch. In
            Wahrheit stammte der Gründer des Siegener Jugendtanztheaters aus
            Holland. Selbst die Bezeichnung Jugendtanztheater ist irreführend.
            Tobias Almasi, Sohn einer Tänzerin und eines Architekten, lernte
            ganz klassisch Ballett, neben seiner Zeit am Gymnasium.
          </Paragraph>
          <Paragraph>
            Das hieß: Spießrutenlauf vor Mitschülern, und unter Tänzer nur als
            Amateur zu gelten, weil ohne staatliche Ausbildung. Er aber wollte
            wirklich zur Bühne, ohne das übliche Ballettinternat, das so gern
            dafür sorgt, dass sich die Tänzer „in the box“ wähnen: in
            Sicherheit. Heute hat auch Tobias Almasi diese eine Sehnsucht: nach
            Sicherheit. Weil er nie gelernt hat, die Dinge leicht zu nehmen,
            studiert er heute das Schwerste: Humanmedizin an der Berliner
            Charité, ein sechs-jähriges Studium. Es ginge wahrlich einfacher.
            Doch er hat sich gegen die Klassiker unter den Transition-Berufen
            entscheiden: Nicht Physiotherapie, Osteopathie oder Heilpraktiker.
            Er will die Sache richtig anpacken, zumal es sich, Stichwort
            Sicherheit, auch in finanzieller Hinsicht lohnt. Er studiert nun
            Orthopädie, Chirurgie, Fachrichtung Tanzmedizin.
          </Paragraph>
          <Paragraph>
            Nach seiner ersten Ausbildung damals tanzte der frisch gebackene
            Abiturient bei Vladimir Malakhov in Berlin vor, flog erst „in
            vorletzter Runde raus“. Er konnte also tanzen, ging nach Schwerin,
            wurde dort Kompaniesprecher. In der nächsten Station, in Halle an
            der Saale unter Ralf Rossa, hatte er als Tänzer den zusätzlichen Job
            eines Sicherheitsbeauftragten. Das ist einer, der in nicht immer
            deutschsprachigen Kompanien den Kollegen dabei hilft, Arztbesuche zu
            begleiten und Reha-Anträge zu stellen, etwa bei der Deutschen
            Rentenversicherung. Anträge auf stationäre Klinik sind dort kein
            Problem. Aber eine der besten Kliniken für Tänzer ist eine
            ambulante: medicos.AufSchalke in Gelsenkirchen. Die Orthopädie dort
            verantwortet Elisabeth Exner-Grave, eine Tanzmedizinerin. Sie ist
            Mitschuld daran, dass er nun selbst Mediziner werden will.{' '}
          </Paragraph>
          <Paragraph>
            Hartes Brot. Denn als Tobias Almasi 2014 den Tanzberuf aufgab, war
            er dreißig. BaföG gibt es nur bis zum Alter von 29 Jahren. Das
            bedeutet: Studieren ohne Mittel, sechs Jahre lang. Er lebt von
            Wohngeld, heißt: von der vollständigen Offenlegung aller
            Kontobewegungen, und von einem Stipendium der Stiftung TANZ. Ein
            Jahr vor der Promotion bedeutet das ein äußerst bescheidenes Leben
            mit viel Paukerei. Als Tänzer hatte er Schritte schnell gelernt. In
            der Medizin hilft ihm eher die Logik, um die komplexen Zusammenhänge
            zu erfassen. Seine Doktormutter ist Eileen Wanke in Frankfurt/Main,
            Gründungsmitglied von „Tamed“, dem Verband der deutschen
            Tanzmedizin. Thema seiner Promotion: Medizinische Daten von
            Studierenden an staatlichen Tanzhochschulen auszuwerten, um Methoden
            der Früherkennung zu erforschen. Niemand soll Tanz studieren, der
            körperlich nicht dazu geeignet ist. „Sollte es medizinische Bedenken
            zur Eignung als Tänzer geben, dann tut das nur einmal weh, sonst ein
            Leben lang“, sagt Tobias Almasi, und lacht: „Wer trotzdem tanzen
            will, macht es wie ich. Und geht an eine private Ballettschule.“{' '}
          </Paragraph>
          <ArticleBy>Arnd Wesemann</ArticleBy>
        </Article>
      </ScrollableScreenContainer>
    </Modal>
  );
};

export default TransitionStoryTobias;
