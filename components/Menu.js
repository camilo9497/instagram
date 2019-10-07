import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconFoundation from '@expo/vector-icons/Foundation'
import IconEvilIcons from '@expo/vector-icons/EvilIcons'
import IconFontAwesome from '@expo/vector-icons/FontAwesome'
import IconAntDesign from '@expo/vector-icons/AntDesign'

import ImagenPerfil from './ImagenPerfil'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <IconFoundation name='home' style={styles.home} />
                <IconEvilIcons name='search' style={styles.search} />
                <IconFontAwesome name='plus-square-o' style={styles.plus} />
                <IconAntDesign name='hearto' style={styles.heart} />
                {/* <IconFoundation name='home' style={styles.home} /> */}
                <ImagenPerfil size={25} borde={0} borde2={0} imagen={this.props.usuario.imagenPerfil} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 48,
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    home: {
        fontSize: 30,
    },
    search: {
        fontSize: 33,
    },
    plus: {
        fontSize: 30,
    },
    heart: {
        fontSize: 23,
    }
}
)