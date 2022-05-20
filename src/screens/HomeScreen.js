import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  const goToPage = () => {
    navigation.navigate('Setting');
  };
  return (
    <SafeAreaView>
      <Text>We are in HomeScreen</Text>
      <Button onPress={goToPage} title="Go to Setting" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
