import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
    }
    addTrack() {
        this.props.onAdd(this.props.track);

    }
    renderAction() {
		if(this.props.isRemoval) {
			this.removeTrack();
		} else {
			this.addTrack();
		}
    }
    render() {
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>{this.props.name}</h3>
                <p>{this.props.artist} | {this.props.album}</p>
            </div>
            <a className="Track-action" onClick={this.renderAction}>+</a>
            </div>            
        );
    }
}
export default Track;
