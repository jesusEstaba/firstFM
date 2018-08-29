import React from 'react'
import {Image} from 'react-native'

export default function ArtistImage(props) {
    let image = props.image[2]['#text']
        image = image ? image : 'https://www.indigenousmusicawards.com/img/placeholder-music.png'
    return (
        <Image source={ {uri:image, width:150, height:150} } />
    )
}