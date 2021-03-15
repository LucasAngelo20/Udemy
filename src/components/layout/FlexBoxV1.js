import React from 'react';
import {StyleSheet, View} from 'react-native';

import Quadrado from './Quadrado'

export default (props) => {
  return (
    <>
      <View style={styles.FlexV1}>
        <Quadrado />
        <Quadrado cor="#f00" />
        <Quadrado cor="#0f0" />
        <Quadrado cor="#00f" />
        <Quadrado cor="#00454f" />
        <Quadrado cor="#00ff67" />
      </View>
    </>
  );
};

const styles= StyleSheet.create({
    FlexV1:{
        backgroundColor:"yellow",
        flex:1,
    }
})
