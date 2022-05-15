import React from 'react';
import { TextInput, Button, View} from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Send" />
    </View>
  );
};

export default LoginForm;
