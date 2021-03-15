import React from 'react';
import {Text} from 'react-native';

import styles from './estilo';

export default (props) => {
  const delta = props.min - props.max + 1;
  const aleatorio = parseInt(Math.random() * delta) + props.min;
  return <Text style={styles.fontG}>O valor aleatorio é {aleatorio}</Text>;
};
