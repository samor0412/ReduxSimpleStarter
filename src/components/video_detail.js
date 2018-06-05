import React from 'react';


// 1.({video}) is same as (video)=>{ const video=video;
// 2.'abc${text}' is same as "abc"+ text   where text is a variable
const VideoDetail=({video})=>{

    if(!video){
        return <div>Loading</div>;
    }
    const videoId= video.id.videoId;
    const url=`https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
            <div vlassName="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;