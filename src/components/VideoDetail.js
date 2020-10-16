import React from 'react';

const VideoDetail = (props) => {

    //Initially it takes some time for api to get response in that time there are no videos to display
    // to avoid that error we wrote this
    if (!props.video){
        return(
            <div>
                Loading
            </div>
        );
    }

    //we write this after 'if' block because the response time of api
    const videoSRC = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return(
        <div>
            <div className = "ui embed">
                <iframe title = "Video title" src = {videoSRC} />
                
            </div>
            <div className = "ui segment">
                <h4 className = "ui header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;