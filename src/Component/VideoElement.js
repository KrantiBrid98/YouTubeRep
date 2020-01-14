import React from 'react'
import './VideoElement.css'

class VideoElement extends React.Component {

    render() {
        return (
            <div className="ui card item" onClick={() => this.props.getSelectedVideo(this.props.videoObj)}>
                <div className="image">
                    <img src={this.props.videoObj.snippet.thumbnails.high.url} alt='' />
                </div>
                <div className="content">
                    <h1 className="header">{this.props.videoObj.snippet.title}</h1>
                    <div className="meta">
                        <span className="date">{this.props.videoObj.snippet.publishedAt}</span>
                    </div>
                    <div className="description">
                        {this.props.videoObj.snippet.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoElement;