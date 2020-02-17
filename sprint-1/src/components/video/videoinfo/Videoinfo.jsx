import React from "react"; 
import viewsIcon from "../../../assets/icons/SVG/Icon-views.svg"; 
import likesIcon from "../../../assets/icons/SVG/Icon-likes.svg"; 


export default function VideoInfo(props) {
    const data = props.data; 

    return (
        <article className="vid-info">
            <div className="vid-info__wrapper">
                <div className="vid-info__title">{data.title}</div>
                <div className="vid-info__details-wrapper">
                    <div className="vid-info__channel-date">
                        <div className="vid-info__channel">By {data.channel}</div>
                        <div className="vid-info__date">{data.timestamp}</div>
                    </div>
                    <div className="vid-info__stats">
                        <div className="vid-info__views">
                            <img className="vid-info__stat-icon" src={viewsIcon} alt="Views icon"/>{data.views}
                        </div>
                        <div className="vid-info__likes">
                            <img className="vid-info__stat-icon" src={likesIcon} alt="Likes icon"/>{data.likes}
                        </div>
                    </div>
                </div>
                <div className="vid-info__description">{data.description}</div>
            </div>
        </article>
    ); 
}