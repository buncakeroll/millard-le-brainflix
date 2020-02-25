/// *** React Imports
import React, {Component} from 'react'; 
import axios from 'axios'; 
import MainVideo from "../video/MainVideo"; 
import VideoInfo from "../video/VideoInfo"; 
import Comments from "../comments/Comments"; 
import NextVideos from "../video/NextVideos"; 

/// *** Axios Variables
const api = "https://project-2-api.herokuapp.com/"; 
const apiKey = "?api_key=ec287e5e-ff0a-4928-8bb7-50e6b2ec63f3"; 


export default class MainContent extends Component {  
    componentDidMount() {
        axios.get(api + "videos" + apiKey)
            .then(resp => {
                this.setState({nextVids:resp.data}); 
            })
        axios.get(api + "videos/1af0jruup5gu" + apiKey) 
            .then(resp => {
                this.setState({mainVideo:resp.data}); 
            })
    }

    state = {
        nextVids: [], 
        mainVideo: {}
    }

    componentDidUpdate() {
        if (this.props.match.params.id !== this.state.mainVideo.id) {
            axios.get(api + `videos/${this.props.match.params.id}` + apiKey) 
                .then(resp => {
                    this.setState({mainVideo:resp.data}); 
                })
        }
    }

    render() {        
        return (
            <main>
                <MainVideo main={this.state.mainVideo} />
                <div className="main__text-wrapper">
                    <div className="main__video-specific-wrapper">
                        <VideoInfo data={this.state.mainVideo} />
                        <Comments data={this.state.mainVideo} />
                    </div>
                    <NextVideos list={this.state.nextVids} main={this.state.mainVideo} />
                </div>
            </main>
        );
    }
}