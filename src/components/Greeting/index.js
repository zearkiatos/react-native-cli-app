import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

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

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Greeting;
