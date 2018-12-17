import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList tracks={this.props.playlistTracks} />
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>            
        );
    }
}
export default Playlist;