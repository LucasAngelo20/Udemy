import React from 'react';
import { StyleSheet, View } from 'react-native';

import Quadrado from './Quadrado';

export default (props) => {
  return (
    <>
      <View style={styles.FlexV3}>
        <Quadrado lado={20} />
        <Quadrado cor="#f00" lado={30} />
        <Quadrado cor="#0f0" lado={40} />
        <Quadrado cor="#00f" lado={50} />
        <Quadrado cor="#00454f" lado={60} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
