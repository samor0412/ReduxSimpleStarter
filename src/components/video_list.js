import React from 'react';
import VideoListItem from './video_list_item';

const VideoList= (props)=>{
    const videoItems=props.videos.map((video)=>{
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
        {videoItems}          
        </ul>                   // as <VideoList videos="props"/>, so call back function has one argument
    );
}

export default VideoList