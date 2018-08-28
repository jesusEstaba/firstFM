import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight ,
} from 'react-native';


export default class SimpleArtist extends Component {
    render() {
        let image = this.props.image[2]['#text']
        image = image ? image : 'https://www.indigenousmusicawards.com/img/placeholder-music.png'

        return (
            <TouchableHighlight onPress={ () => alert(this.props.name) }>
                <View style={ {alignItems:'center'} }>
                    <Image source={ {uri:image, width:150, height:150} } />
                    <Text style={ {fontSize:20} }>{ this.props.name }</Text>
                </View>
            </TouchableHighlight>
        )
    }
}