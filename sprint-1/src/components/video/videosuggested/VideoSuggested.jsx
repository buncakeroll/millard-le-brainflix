import React from 'react'; 

export default function SuggestedVideos({list, main}) {
    const suggested = list.map((video, index) => {
        if (video.id !== main.id) {
            return (
                <div key={index} id="{video.id}" className="suggested__video">
                    <img className="suggested__thumbnail" src={video.image} alt="Video thumbnail"/>
                    <div className="suggested__info">
                        <div className="suggested__title">{video.title}</div>
                        <div className="suggested__channel">{video.channel}</div>
                    </div>
                </div>
            )
        } 
        return true; 
    })
    return (
        <section className="suggested">
            <div className="suggested__header">Next Video</div>
            {suggested}
        </section>
    );
}