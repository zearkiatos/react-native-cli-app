/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginForm from './components/LoginForm';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello World! 👋🌎</Text>
        <LoginForm />
        <Greeting firstname="Pedro" lastname="Capriles" />
        <Greeting firstname="Luis" lastname="Perez" />
        <Greeting firstname="Maria" lastname="Rojas" />
        <Greeting />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
