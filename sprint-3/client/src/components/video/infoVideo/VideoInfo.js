import React from "react"; 
import viewsIcon from "../../../assets/Icons/SVG/Icon-views.svg"; 
import likesIcon from "../../../assets/Icons/SVG/Icon-likes.svg"; 


export default function VideoInfo(props) {
    const data = props.data; 

    function convertMsEpoch(time) {
        let date = new Date(time); 
        return date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear()
    }

    let timestamp = convertMsEpoch(data.timestamp);

    return (
        <article className="vid-info">
            <div className="vid-info__wrapper">
                <div className="vid-info__title">{data.title}</div>
                <div className="vid-info__details-wrapper">
                    <div className="vid-info__channel-date">
                        <div className="vid-info__channel">By {data.channel}</div>
                        <div className="vid-info__date">{timestamp}</div>
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