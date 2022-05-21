import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const SettingScreen = ({navigation}) => {
  const goToPage = pageName => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <Text>We are in SettingScreen</Text>
      <Button onPress={() => goToPage('Home')} title="Go to Home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SettingScreen;
