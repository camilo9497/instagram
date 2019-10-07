import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import IconEntypo from '@expo/vector-icons/Entypo'
import IconAntDesign from '@expo/vector-icons/AntDesign'
import IconEvilIcons from '@expo/vector-icons/EvilIcons'
import IconFontAwesome from '@expo/vector-icons/FontAwesome'


import ImagenPerfil from './ImagenPerfil'
import Comentario from './Comentario'
import MiVideo from './MiVideo'

export default class Post extends React.Component {
    state = {
        liked: false,
        likes: this.props.post.megusta
    }
    constructor(props) {
        super(props)
    }
    likeClick = (e) => {
        this.setState(prevState => {
            return {
                liked: !prevState.liked,
                likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.postHeader}>
                    <View style={styles.containerUsuario}>
                        <ImagenPerfil size={37} borde={2} borde2={4} imagen={this.props.post.imagenPerfil} />
                        <Text style={styles.usuario}>{this.props.post.usuario}</Text>
                    </View>
                    <IconEntypo name='dots-three-horizontal' style={styles.puntos} />
                </View>
                {
                    this.props.post.tipo === "foto" ?
                        <Image style={styles.imagen} source={this.props.post.imagen} />
                        :
                        <MiVideo uri={this.props.post.imagen} />
                }
                <View style={styles.footer}>
                    <View style={styles.opciones}>
                        {
                            this.state.liked
                                ?
                                <IconAntDesign name='heart' style={{ ...styles.hearto, color: '#ED4956' }} onPress={this.likeClick} />
                                :
                                <IconAntDesign name='hearto' style={styles.hearto} onPress={this.likeClick} />
                        }
                        <IconEvilIcons name='comment' style={styles.comment} />
                        <IconEntypo name='direction' style={styles.direct} />
                    </View>
                    <IconFontAwesome name='bookmark-o' style={styles.bookmark} />
                </View>
                <Text style={styles.meGusta}>{this.state.likes} Me gusta</Text>
                <View style={styles.usuarioDescripcion}>
                    <Text style={styles.usuario}> {this.props.post.usuario} <Text style={styles.description}>{this.props.post.descripcion}</Text>
                    </Text>
                </View>
                <Text style={styles.verMas}>Ver los {this.props.post.comentarios.length} comentarios</Text>
                {
                    this.props.post.comentarios.map(comentario => <Comentario comentario={comentario} />)
                }
                <Text style={styles.tiempo}>Hace 12 minutos</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 4,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    usuario: {
        fontSize: 13,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    containerUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    puntos: {
        fontSize: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        marginTop: 10,
    },
    opciones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 105,
    },
    hearto: {
        fontSize: 25,
    },
    comment: {
        fontSize: 33,
    },
    direct: {
        fontSize: 25,
    },
    bookmark: {
        fontSize: 25,
    },
    meGusta: {
        fontWeight: 'bold',
        paddingHorizontal: 13,
        marginTop: 10,
    },
    usuarioDescripcion: {
        flexDirection: 'row',
        paddingLeft: 4,
        paddingRight: 13,
        marginTop: 4,
    },
    description: {
        fontWeight: '300',
        fontSize: 14,
    },
    verMas: {
        color: 'gray',
        fontSize: 14,
        paddingHorizontal: 13,
        marginTop: 4,
    },
    heartoCo: {
        fontSize: 12,
        color: 'gray',
    },

    tiempo: {
        color: 'gray',
        fontSize: 13,
        paddingHorizontal: 12,
        marginTop: 4,
    },
    imagen: {
        width: '100%'
    }
})