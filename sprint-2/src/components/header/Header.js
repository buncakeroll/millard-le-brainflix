import React from "react"; 
import {Link} from "react-router-dom"; 
import logo from "../../assets/Logo/Logo-brainflix.svg"; 
import avatar from "../../assets/Images/Mohan-muruge.jpg"; 
import searchIcon from "../../assets/Icons/SVG/Icon-search.svg"; 
import uploadIcon from "../../assets/Icons/SVG/Icon-upload.svg"; 


export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <a className="header__logo" href="/"><img src={logo} alt="Brainflix logo"/></a>
                <div className="header__search-wrapper">
                    <div className="header__search-bar">
                        <span className="header__search-icon">
                            <img src={searchIcon} alt="Search icon"/>
                        </span>
                        <input className="header__search-field" type="text" id="search" placeholder="Search"></input>
                    </div>
                </div>
                <div className="header__user-tools">
                    <Link className="header__cta" to="/upload">
                        <button className="header__cta"><img className="header__cta-icon" src={uploadIcon} alt="Search icon"/>upload</button>
                    </Link>
                    <div className="header__avatar-wrapper">
                        <img className="header__avatar" src={avatar} alt="User avatar"/>
                    </div>
                </div>
            </div>
        </header>
    ); 
}