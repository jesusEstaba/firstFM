import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import LastFMService from '../api/LastFMService';
import SimpleArtist from '../components/artist/SimpleArtist'

export default class Home extends Component {
    state = {
        textInput: '',
        artists: []
    }
    input = (textInput) => {
        this.setState({ textInput })
    }
    search = () => {
        let lastfm = new LastFMService();
        
        lastfm.searchArtists(this.state.textInput, (artists) => {
            console.log(artists)
            this.setState({ artists })
        })
    }
    render() {
        return (
            <View>
                <Text style={ {fontSize:30, color:'#333'} }>Esta es la Home</Text>
                <TextInput style={ {fontSize:20} } onChangeText={ this.input } placeholder="Nombre del artista" />
                <Button title="Buscar" onPress={ this.search } />
                <FlatList 
                    keyExtractor={ (item, index) => item.mbid }
                    data = {this.state.artists}
                    renderItem = { ({item}) => <SimpleArtist artistScreen={this.props.artistScreen}  {...item} /> }
                />
            </View>
        )
    }
}