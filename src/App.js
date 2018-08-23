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
    screen: <Home />
  }

  loadHomeScreen = () => {
    this.setState({ screen:<Home /> })
  }
  loadTopsScreen = () => {
    this.setState({ screen:<TopTracks /> })
  }
  loadArtistScreen = () => {
    this.setState({ screen:<Artist /> })
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
        <Button title='Home' onPress={this.loadHomeScreen} />
        <Button title='Tops' onPress={this.loadTopsScreen}  />
        <Button title='Artist' onPress={this.loadArtistScreen}  />
        <Button title='ArtistTrack' onPress={this.loadArtistTrackScreen}  />
      
        { this.state.screen }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
