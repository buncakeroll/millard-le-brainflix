import React, { Component } from 'react';
import axios from 'axios';
import MainVideo from '../video/mainVideo/MainVideo';
import VideoInfo from '../video/infoVideo/VideoInfo';
import Comments from '../../components/comments/Comments';
import NextVideos from '../video/nextVideo/NextVideos';

const api = 'http://localhost:8080/';

export default class MainContent extends Component {
	componentDidMount() {
		axios.get(api + 'videos').then((resp) => {
			this.setState({ nextVids: resp.data });
		});
		axios.get(api + 'videos/1af0jruup5gu').then((resp) => {
			this.setState({ mainVideo: resp.data[0] });
		});
	}

	state = {
		nextVids: [],
		mainVideo: {}
	};

	componentDidUpdate() {
		if (this.props.match.params.id !== this.state.mainVideo.id) {
			axios.get(api + `videos/${this.props.match.params.id}`).then((resp) => {
				this.setState({ mainVideo: resp.data[0] });
			});
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
