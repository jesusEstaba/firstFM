import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight ,
} from 'react-native';

import ArtistImage from './ArtistImage'

export default class SimpleArtist extends Component {
    tap = () => {
        this.props.artistScreen(this.props)
    }

    render() {
        return (
            <TouchableHighlight onPress={ this.tap }>
                <View style={ {alignItems:'center'} }>
                    <ArtistImage image={ this.props.image } />
                    <Text style={ {fontSize:20} }>{ this.props.name }</Text>
                </View>
            </TouchableHighlight>
        )
    }
}