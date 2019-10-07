import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/Entypo'


export default class HistoriaPerfil extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'relative' }}>
                    <Image style={styles.historias} source={this.props.usuario.imagenPerfil} />
                    <View style={styles.mas}>
                        <Icon name="plus" color='white' />
                    </View>
                </View>
                <Text style={styles.nombre}>Tu historia</Text>
            </View>
        );
    }
}
const size = 60
const styles = StyleSheet.create({
    container: {
        width: 74,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 10,
        marginLeft: 5,
    },
    historias: {
        height: size,
        width: size,
        borderRadius: size / 2,
    },
    mas: {
        height: 16,
        width: 16,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: "#3897F0",
    },
    nombre: {
        fontSize: 12,
        marginTop: 11,
    }
});