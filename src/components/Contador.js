import React from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'

export default props => {
    let numero = props.inicial

    const inc = () => numero++
    const dec = () => numero--

    return(
        <>
        <Text style={Estilo.fontG}>{numero}</Text>
        <Button title='Mais' onPress={inc} />
        <Button title='Menos'onPress={inc} />
        </>
    )
}

