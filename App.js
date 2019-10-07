import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';


import Historias from './components/Historias'
import Header from './components/Header'

import Post from './components/Post'
import Menu from './components/Menu'
import datos from './api/api'

export default class App extends React.Component {
  constructor() {
    super()
    posts = []
    for (let i = 0; i < datos.length; i++) {
      for (let j = 0; j < datos[i].posts.length; j++) {
        let post = {
          ...datos[i].posts[j],
          usuario: datos[i].usuario,
          imagenPerfil: datos[i].imagenPerfil
        }
        posts.push(post)
        console.log(post.id)
      }
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <ScrollView>
          <Historias datos={datos} key='mi-historia' />
          {posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
        <Menu usuario={datos[0]} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
