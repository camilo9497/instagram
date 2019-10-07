import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ImagenPerfil from './ImagenPerfil'

export default class Historia extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImagenPerfil size={66} borde={3} borde2={4} imagen={this.props.imagen} />
                <Text style={styles.nombre}>{this.props.nombre}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: 74,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    nombre: {
        fontSize: 12,
        marginTop: 5,
    }
});
