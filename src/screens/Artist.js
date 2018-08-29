import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Linking,
} from 'react-native';
import ArtistImage from '../components/artist/ArtistImage';

export default class Artist extends Component {
    render() {
        return (
            <View style={ {alignItems: 'center'} }>
                <TouchableHighlight onPress={()=>Linking.openURL(this.props.url)} >
                    <Text style={ {fontSize:35} }>{this.props.name}</Text>
                </TouchableHighlight>
                
                <Text style={ {fontSize:25} }>{this.props.listeners}</Text>
                <ArtistImage image={ this.props.image } />
            </View>
            
        )
    }
}