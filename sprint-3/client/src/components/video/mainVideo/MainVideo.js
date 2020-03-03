import React from "react"; 

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