import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Artist extends Component {
    render() {
        return (
            <Text style={ {fontSize:30} }>Esta es el artista</Text>
        )
    }
}