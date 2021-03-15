import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';

import produtos from './produtos';

const produtoRender = ({ item: p }) => { 
    return <Text style={{fontSize:20}}>{p.id}) {p.nome} - R${p.preco}</Text>
}

export default (props) => {
  return (
    <>
      <Text style={Estilo.fontG}>Lista de produtosV2:</Text>
      <FlatList 
        data={produtos}
        keyExtractor={i =>`${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
