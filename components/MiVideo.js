import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'

import IconOcticons from '@expo/vector-icons/Octicons'


export default class MiVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            muted: true,
        }
    }
    clickMute = (e) => {
        console.log('click')
        this.setState(prevState => {
            return {
                muted: !prevState.muted
            }
        })
    }
    render() {
        return (
            <TouchableWithoutFeedback style={styles.contenedor} onPress={this.clickMute}>
                <View>
                    <Video source={{ uri: this.props.uri }}
                        resizeMode="cover"
                        shouldPlay
                        isMuted={this.state.muted}
                        isLooping
                        style={{ width: '100%', height: 400 }}
                    />
                    <View style={styles.containerSound} >
                        {
                            this.state.muted ?
                                <IconOcticons name='mute' color='white' size={14} />
                                :
                                <IconOcticons name='unmute' color='white' size={14} />
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    contenedor: {
        position: 'relative',
    },
    containerSound: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.6)',
        borderRadius: 12,
        height: 24,
        width: 24,
    }
})