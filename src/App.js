import React from 'react';
import {StyleSheet, View} from 'react-native';

import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';
//import Primeiro from './components/Primeiro';
//import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
  <View style={styles.App}>
      <Contador inicial={100} />

    {/*<MinMax min={3} max={20} />
      <Botao />
      <Titulo principal='Cadastro Produto' secundario='Tela de cadastro do produto'/>
    <MinMax min={1} max={94} />*/}

    { /*   <Aleatorio min={50} max={2} />
        <Aleatorio min={50} max={2} />
        <Aleatorio min={50} max={2} />
        <Aleatorio min={50} max={2} />
<Aleatorio min={50} max={2} />

     <CompPadrao />
    <Comp1 />
    <Comp2 />
  <Primeiro /> */}
  </View>
);

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
