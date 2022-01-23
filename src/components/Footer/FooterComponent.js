import * as React from "react";
import { NavLink } from 'react-router-dom';
import './style.css';

const FooterComponent = () => {

    return (
        <div className="footer">
            <div className="footer--section">
                <img className="footer--image" src={require("../../images/1.png")} alt="logo" />
                <p className="footer--text"> <NavLink exact to="/frakt">Frakt & Returer</NavLink></p>
            </div>
            <div className="footer--section">
                <a className="footer--instagram" target="_blank" rel="noopener noreferrer" href="http://instagram.com/_u/frogardesbivax/">Följ oss på Instagram</a>
                <img className="footer--instagram_image" src={require("../../images/instagram.png")} alt="instagram" />
            </div>  
        </div>
       
    )
};

export default FooterComponent;