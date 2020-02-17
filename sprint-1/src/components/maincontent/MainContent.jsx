import React, {Component} from 'react'; 
import VideoPlayer from "../video/videoplayer/VideoPlayer"; 
import VideoInfo from "../video/videoinfo/VideoInfo"; 
import Comments from "../comments/Comments"; 
import VideoSuggested from "../video//videosuggested/VideoSuggested"; 

import video0 from "../../assets/images/video-list-0.jpg"; 
import video1 from "../../assets/images/video-list-1.jpg"; 
import video2 from "../../assets/images/video-list-2.jpg"; 
import video3 from "../../assets/images/video-list-3.jpg"; 
import video4 from "../../assets/images/video-list-4.jpg"; 
import video5 from "../../assets/images/video-list-5.jpg"; 
import video6 from "../../assets/images/video-list-6.jpg"; 
import video7 from "../../assets/images/video-list-7.jpg"; 
import video8 from "../../assets/images/video-list-8.jpg"; 

export default class MainContent extends Component {  
    state = {
        VideoPlayer: {
            id: "0", 
            image: "../assets/Images/video-list-0.jpg",
            clip: "../assets/Video/BrainStation-Sample-Video.mp4",
            duration: "00:00:20", 
            title: "BMX Rampage 2018 Highlights", 
            channel: "Red Cow", 
            timestamp: "12/18/2018",
            views: "1,001,023", 
            likes: "110,985",
            description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title", 
            comments: [            
            {name: "Theodore Duncan", 
            timestamp: 1573011133123, 
            msg: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favourite ever!"
            }, 
            {name: "Gary Wong", 
            timestamp: 1574011133123, 
            msg: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself."
            },  
            {name: "Micheal Lyons", 
            timestamp: 1575021143123, 
            msg: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
            }]
        },

        suggested: [
            {id: "0", 
            title: "BMX Rampage: 2018 Highlights", 
            channel: "Red Cow", 
            image: video0}, 

            {id: "1", 
            title: "Become A Travel Pro In One Easy Lesson", 
            channel: "Todd Welch", 
            image: video1},

            {id: "2", 
            title: "Les Houches The Hidden Gem Of The...", 
            channel: "Cornelia Blair", 
            image: video2},  

            {id: "3", 
            title: "Travel Health Useful Medical Information...", 
            channel: "Glen Harper", 
            image: video3}, 

            {id: "4", 
            title: "Cheap Airline Tickets Great Ways To Save", 
            channel: "Emily Harper", 
            image: video4}, 

            {id: "5", 
            title: "Take A Romantic Break In A Boutique Hotel", 
            channel: "Ethan Owen", 
            image: video5}, 

            {id: "6", 
            title: "Choose The Perfect Accommodations", 
            channel: "Lydia Perez", 
            image: video6}, 

            {id: "7", 
            title: "Cruising Destination Ideas", 
            channel: "Timothy Austin", 
            image: video7}, 

            {id: "8", 
            title: "Train Travel On Track For Safety", 
            channel: "Scotty Crammer", 
            image: video8}, 
        ]
    }

    render() {        
        return (
            <main>
                <VideoPlayer />
                <div className="main__text-wrapper">
                    <div className="main__video-specific-wrapper">
                        <VideoInfo data={this.state.VideoPlayer} />
                        <Comments data={this.state.VideoPlayer} />
                    </div>
                    <VideoSuggested list={this.state.suggested} main={this.state.VideoPlayer} />
                </div>
            </main>
        );
    }
}