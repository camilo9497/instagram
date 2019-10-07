import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconAntDesign from '@expo/vector-icons/AntDesign'



export default class Comentario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }
    likeClick = (e) => {
        this.setState(prevState => {
            return {
                liked: !prevState.liked
            }
        })
    }
    render() {
        return (
            <View style={styles.containerComentarios} key={new Date().getTime().toString()}>
                <Text style={styles.usuario}> {this.props.comentario.usuario} <Text style={styles.description}>{this.props.comentario.contenido}</Text> </Text>
                {
                    this.state.liked
                        ?
                        <IconAntDesign name='heart' style={{ ...styles.heartoCo, color: '#ED4956' }} onPress={this.likeClick} />
                        :
                        <IconAntDesign name='hearto' style={styles.heartoCo} onPress={this.likeClick} />
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({
    containerComentarios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 13,
        marginTop: 5,
    },
    usuario: {
        fontSize: 13,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    description: {
        fontWeight: '300',
        fontSize: 14,
    },
})