import React from 'react';
import {Text} from 'react-native';

export default ({children, familia}) => {
  return (
    <>
      <Text>Membros da familia {familia}:</Text>
      {children}
    </>
  );
};
