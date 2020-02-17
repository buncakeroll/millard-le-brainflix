import React from "react"; 
import logo from "../../assets/logo/logo.svg"; 
import avatar from "../../assets/images/Mohan-muruge.jpg"; 
import searchIcon from "../../assets/icons/SVG/Icon-search.svg"; 
import uploadIcon from "../../assets/icons/SVG/Icon-upload.svg"; 

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a className="header__logo" href="./index.html"><img src={logo} alt="Brainflix logo"/></a>
                <div className="header__search-wrapper">
                    <div className="header__search-bar">
                        <span className="header__search-icon">
                            <img src={searchIcon} alt="Search icon"/>
                        </span>
                        <input className="header__search-input" type="text" id="search" placeholder="Search"></input>
                    </div>
                </div>
                <div className="header__user-info">
                    <button className="header__upload"><img className="header__upload-icon" src={uploadIcon} alt="Search icon"/>upload</button>
                    <div className="header__avatar-wrapper">
                        <img className="header__avatar-wrapper--avatar" src={avatar} alt="User avatar"/>
                    </div>
                </div>
            </div>
        </header>
    ); 
}