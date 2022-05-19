import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  const goToPage = () => {
    navigation.navigate('Setting');
  };
  return (
    <View>
      <Text>We are in HomeScreen</Text>
      <Button onPress={goToPage} title="Go to Setting" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
