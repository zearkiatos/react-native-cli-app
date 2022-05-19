import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SettingScreen = ({navigation}) => {
  const goToPage = pageName => {
    navigation.navigate(pageName);
  };
  return (
    <View>
      <Text>We are in SettingScreen</Text>
      <Button onPress={() => goToPage('Home')} title="Go to Home" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingScreen;
