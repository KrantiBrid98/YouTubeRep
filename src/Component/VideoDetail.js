import React from 'react';

const VideoDetail = (props) => {
    if (props.selectedVideo === '') {
        return <div>Loading..</div>
    }
    const url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={url} title={props.selectedVideo.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
            <br/>
        </div>
    )
}

export default VideoDetail;