import React from 'react';
import VideoElement from './VideoElement'

const VideoList = (props) => {
    return (
        <div>
            {
                props.videos.map((videoObj, i) =>
                    <VideoElement videoObj={videoObj} key={i} getSelectedVideo={props.getSelectedVideo} />
                )
            }
        </div>
    )
}

export default VideoList;