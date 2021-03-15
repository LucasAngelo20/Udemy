import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Estilo from '../estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default (props) => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Text style={Estilo.fontG}>Contador</Text>
        <ContadorDisplay num={num} />
        <View>
          <ContadorBotoes inc={inc} dec={dec} />
        </View>
      </View>
    </>
  );
};
