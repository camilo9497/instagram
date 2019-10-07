import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import IconSimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import IconFeather from '@expo/vector-icons/Feather'
import IconEntypo from '@expo/vector-icons/Entypo'


export default class Titulo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCamara}>
                    <IconSimpleLineIcons name='camera' style={styles.camera} />
                </View>
                <Image style={styles.logo} source={require('../assets/logoTitulo.png')} resizeMode='cover' />
                <View style={styles.tvDirect}>
                    <IconFeather name='tv' style={styles.tv} />
                    <IconEntypo name='direction' style={styles.direct} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingHorizontal: 10,
    },
    containerCamara: {
        width: 62,
    },
    camera: {
        fontSize: 25,
        color: 'black',
    },
    logo: {
        width: 106,
        aspectRatio: 3.55,
    },
    tvDirect: {
        width: 62,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    direct: {
        fontSize: 25,
    },
    tv: {
        fontSize: 22,
    },
})