export default class LastFMService {
    searchArtists = (name, callback) => {
        let url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=52c2b0ddb9459bc5576f12e551a5c3ad&format=json`
        fetch(url)
            .then( request => request.json() )
            .then(data => {
                callback(data.results.artistmatches.artist)
            })
    }
}