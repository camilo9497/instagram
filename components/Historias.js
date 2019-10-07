import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'

import HistoriaPerfil from './HistoriaPerfil';
import Historia from "./Historia";

export default class Historias extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ alignItems: "center", height: 95 }} horizontal showsHorizontalScrollIndicator={false}>
                    <HistoriaPerfil key={0} usuario={this.props.datos[0]} />
                    {this.props.datos.map(usuario => <Historia key={usuario.id} imagen={usuario.imagenPerfil} nombre={usuario.usuario} />)}

                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        borderBottomColor: '#CCC',
        borderBottomWidth: 0.5,
    }
})