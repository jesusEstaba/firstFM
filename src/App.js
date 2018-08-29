import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Home from './screens/Home';
import TopTracks from './screens/TopTracks';
import Artist from './screens/Artist';
import ArtistTrack from './screens/ArtistTrack';

export default class App extends Component {
  
  state = {
  }

  loadHomeScreen = () => {
    this.setState({ screen:<Home artistScreen = {this.loadArtistScreen} /> })
  }
  loadTopsScreen = () => {
    this.setState({ screen:<TopTracks /> })
  }
  loadArtistScreen = (props) => {
    this.setState({ screen:<Artist {...props} /> })
  }
  loadArtistTrackScreen = () => {
    this.setState({ screen:<ArtistTrack /> })
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to first.FM!
        </Text>
        <Button title='Home' color="#07fff4" onPress={this.loadHomeScreen} />
        <Button title='Tops'  color="#e91e63" onPress={this.loadTopsScreen}  />
        <Button title='ArtistTrack' color="#333333" onPress={this.loadArtistTrackScreen}  />
      
        { this.state.screen }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
