import React from 'react';

import MenuPageButton from './buttons/menuPageButton';

export const MenuContentsDe = (props) => {
  const navigateTo = (screen) => {
    props.navigation.navigate(screen, {eng: false});
    props.close();
  };

  return (
    <>
      <MenuPageButton onPress={() => navigateTo('Home')}>
        Startseite
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Transition')}>
        Die Transition
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Entscheidungsbaum')}>
        Was brauche ich in meiner Situation?
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Psychology')}>
        Psychologische Aspekte
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Ideas')}>
        Ideen - Berufsfindung
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Umsetzung')}>
        Wie setze ich meine Ideen um?
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Financial')}>
        Finanzierung
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Insurance')}>
        Versicherung
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Germany')}>
        Leben und Arbeiten in Deutschland
      </MenuPageButton>
      <MenuPageButton onPress={() => navigateTo('Selfemployment')}>
        Selbstständigkeit
      </MenuPageButton>
    </>
  );
};

export const MenuContentsEng = (props) => {
  const navigateTo = (screen) => {
    props.navigation.navigate(screen, {eng: true});
    props.close();
  };

  return (
    <>
      <MenuPageButton onPress={() => navigateTo('Home')}>Home</MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Transition')}>
        The Transition Process
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Entscheidungsbaum')}>
        What do I need in my situation?
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Psychology')}>
        Psychological aspects
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Ideas')}>
        Carreer Ideas
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Umsetzung')}>
        How do I implement my ideas?
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Financial')}>
        Funding
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Insurance')}>
        Insurance
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Germany')}>
        Life and work in Germany
      </MenuPageButton>

      <MenuPageButton onPress={() => navigateTo('Selfemployment')}>
        Self employment
      </MenuPageButton>
    </>
  );
};
