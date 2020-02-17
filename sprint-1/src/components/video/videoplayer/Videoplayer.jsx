import React from "react"; 

import poster from "../../../assets/images/video-list-0.jpg"; 
import video from "../../../assets/video/BrainStation-Sample-Video.mp4"; 


export default function VideoPlayer(props) {
    return (
        <section className="main-video">
            <figure className="main-video__wrapper">
                <video className="main-video__player" poster={poster} controls> 
                    <source src={video}></source>
                    <div className="video__controls">
                        <div className="video__controls-play"></div>
                        <div className="video__controls-progress"></div>
                        <div className="video__controls-option"></div>
                    </div>
                </video>
            </figure>
        </section>
    ); 
}