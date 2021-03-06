import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Mega from './components/mega/Mega';
// import QuadradosV4 from './components/layout/FlexBoxV4';
// import QuadradosV3 from './components/layout/FlexBoxV3';
// import QuadradosV2 from './components/layout/FlexBoxV2'
// import Quadrados from './components/layout/FlexBoxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
  <SafeAreaView style={styles.App}>
    <Mega qtdeNumeros={12}/>
    {/*
    <QuadradosV4 />
    <QuadradosV3 />
    <QuadradosV2 />
    <Quadrados />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{nome: 'Lucas', email:'lucas@gmail.com'}} />
    <Familia familia="Angelo">
      <Membro nome="Isabelle" sobrenome="Angelo" />
      <Membro nome="Lucas" sobrenome="Angelo" />
    </Familia>
    <Familia familia="Gomes">
      <Membro nome="Milena" sobrenome="Gomes" />
      <Membro nome="Miguel" sobrenome="Gomes" />
    </Familia>
    <ParImpar num={3} />
    <MinMax min={3} max={20} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo principal='Cadastro Produto' secundario='Tela de cadastro do produto'/>
    <MinMax min={1} max={94} />
    <Aleatorio min={50} max={2} />
    <Aleatorio min={50} max={2} />
    <Aleatorio min={50} max={2} />
    <Aleatorio min={50} max={2} />
    <Aleatorio min={50} max={2} />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />
     */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
