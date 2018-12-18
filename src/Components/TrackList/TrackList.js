/****************************************/
/** Reviewable project:  Jammming       */
/** Component:           TrackList.js   */
/****************************************/
import React from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';

class TrackList extends React.Component {

    render() {
        return (
            <div className="TrackList">
    			{this.props.tracks.map(track => <Track 
    				key={track.id}
    				track={track}
    				name={track.name}
    				artist={track.artist}
					album={track.album}
					onAdd={this.props.onAdd}
					onRemove={this.props.onRemove}
					isRemoval={this.props.isRemoval}
				/>
    		)}
			</div>
		);
	}
}

export default TrackList;

        /*preview={track.preview}					*/
