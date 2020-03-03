import React, {Component} from 'react';
import axios from 'axios'; 
import defaultThumbnail from '../../../assets/Images/Upload-video-preview.jpg'; 

const api = 'http://localhost:8080/';


export default class Upload extends Component {
    uploadHandle = (event) => {
        event.preventDefault(); 
        axios({
            method: "post",
            url: (api + "upload"),
            data: {
                title: event.target.title.value,
                image: {defaultThumbnail}, 
                description: event.target.description.value
            }
        })
    }

    render() {
        return (
            <main>
                <section className="upload">
                    <h1 className="upload__header">Upload Video</h1>
                    <form className="upload__form" id="upload__form" onSubmit={this.uploadHandle}>
                        <div className="upload__form-inputs">
                            <div className="upload__thumbnail-wrapper">
                                <label className="upload__input-label" htmlFor="thumbnail">Video Thumbnail</label>
                                <img className="upload__thumbnail" src={defaultThumbnail} name="image" alt="Upload your video here!" />
                            </div>
                            <div className="upload__field-wrapper">
                                <div className="upload__title-wrapper">
                                    <label className="upload__input-label" htmlFor="title">Title your video</label>
                                    <input className="upload__title" type="text" id="title" name="title" placeholder="Add a title to your video" />
                                </div>
                                <div className="upload__desc-wrapper">
                                    <label className="upload__input-label" htmlFor="description">Add a video description</label>
                                    <textarea className="upload__desc" type="text" id="description" name="description" placeholder="Add a description of your video" />
                                </div>
                            </div>
                        </div>
                        <div className="upload__btn-wrapper">
                            <button className="upload__btn">Cancel</button>
                            <button className="upload__cta" type="submit">Publish</button> 
                        </div>
                    </form>
                </section>
            </main>
        )
    }
}
