import React from 'react';
import {Text} from 'react-native';

const Greeting = ({firstname, lastname}) => {
  return (
    <Text>
      Hello {firstname} {lastname}
    </Text>
  );
};

Greeting.defaultProps = {
  firstname: 'David',
  lastname: 'Smith',
};

export default Greeting;
