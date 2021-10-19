import React from 'react';

import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const menu = (props) => {
  const navigateTo = (screen) => {
    props.navigation.navigate(screen);
    props.close();
  };

  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <ScrollView>
        <View style={styles.menuScreen}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Home')}
          >
            <Text style={styles.menuItemText}>Startseite</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text
              style={styles.menuItemText}
              onPress={() => navigateTo('Entscheidungsbaum')}
            >
              Entscheidungsbaum
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Psychology')}
          >
            <Text style={styles.menuItemText}>Psychologische Aspekte</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Ideas')}
          >
            <Text style={styles.menuItemText}>Ideen - Berufsfindung</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              Wie setze ich meine Ideen um?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Financial')}
          >
            <Text style={styles.menuItemText}>Finanzierung</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Insurance')}
          >
            <Text style={styles.menuItemText}>Versicherung</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Germany')}
          >
            <Text style={styles.menuItemText}>
              Leben und Arbeiten in Deutschland
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Selfemployment')}
          >
            <Text style={styles.menuItemText}>Selbstständigkeit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={props.close}>
        <Text style={styles.closeButtonText}>⨉</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default menu;

const styles = StyleSheet.create({
  menuScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    height: windowHeight,
    padding: 20
  },
  menuItem: {
    padding: 16
  },
  menuItemText: {
    fontSize: windowHeight > 600 ? 20 : 14,
    color: 'whitesmoke'
  },
  closeButton: {
    margin: 20,
    position: 'absolute',
    right: 10,
    top: 15,
    alignItems: 'center'
  },
  closeButtonText: {
    fontSize: 25,
    color: 'whitesmoke'
  }
});
