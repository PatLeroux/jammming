/****************************************/
/** Reviewable project:  Jammming       */
/** By: Patrick Leroux                  */
/****************************************/

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Playlist from '../Playlist/Playlist.js';
import SearchResults from '../SearchResults/SearchResults.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults : [ { name: 'Purple Rain', artist: 'Prince', album: 'Purple Rain', id: 0 } ],
            playlistName : 'My Playlist',
            playlistTracks : [ { name: 'Thunder', artist: 'Prince', album: 'Purple Rain', id: 0 } ]
        }
		this.addTrack = this.addTrack.bind(this);

    }

    addTrack(track){
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        const newPlaylistTracks = this.state.playlistTracks.push(track);
        this.setState({playlistTracks: newPlaylistTracks});
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    {'Add a SearchBar component '}
                    <div className="App-playlist">
                    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                    <Playlist playlistName = {this.state.SearchResults} playlistTracks = {this.state.playlistTracks} />
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
