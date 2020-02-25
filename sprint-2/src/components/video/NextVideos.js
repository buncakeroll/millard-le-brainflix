import React from 'react'; 
import {Link} from 'react-router-dom'; 

export default function NextVideos({list, main}) {
    const next = list && list.map((video, index) => {
        if (video.id !== main.id) {
            return (
                <Link to={`/videos/${video.id}`}>
                    <div id="{video.id}" className="nextVideos__video">
                        <img className="nextVideos__thumbnail" src={video.image} alt="Video thumbnail"/>
                        <div className="nextVideos__info">
                            <div className="nextVideos__title">{video.title}</div>
                            <div className="nextVideos__channel">{video.channel}</div>
                        </div>
                    </div>
                </Link>
            )
        } 
        return true; 
    })
    return (
        <section className="nextVideos">
            <div className="nextVideos__header">Next Video</div>
            {next}
        </section>
    );
}