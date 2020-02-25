import React from "react"; 

// Forced imports on poster and video --> problem loading in data from props
// import poster from "../assets/Images/video-list-0.jpg"; 
// import video from "../assets/Video/BrainStation-Sample-Video.mp4"; 


export default function MainVideo(props) {
    return (
        <section className="main-video">
            <figure className="main-video__wrapper">
                <video className="main-video__player" poster={props.main.image} controls > 
                    <source src = {props.main.video}></source>
                </video>
            </figure>
        </section>
    ); 
}