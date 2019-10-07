import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


export default class ImagenPerfil extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <LinearGradient colors={['#A531C0', '#FFAE4D']} start={[1, 0]} end={[0, 1]} style={this.styles.borde}>
                <Image style={this.styles.historias} source={this.props.imagen} />
            </LinearGradient>
        )
    }

    size = this.props.size
    styles = StyleSheet.create({
        historias: {
            height: this.size - this.props.borde2,
            width: this.size - this.props.borde2,
            borderRadius: (this.size - this.props.borde2) / 2,
            borderColor: 'white',
            borderWidth: this.props.borde,
        },
        borde: {
            height: this.size,
            width: this.size,
            borderRadius: this.size / 2,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
}
