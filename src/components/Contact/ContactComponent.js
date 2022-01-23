import * as React from "react";
import './style.css';

const ContactComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className="first-section--contact">
            <p className="page-title--contact">Kontakta Oss</p>
        </div>
        <div className="second-section--contact">
            <p className="second-page-title--contact">Vi svarar gärna på era frågor och funderingar</p>
            <p className="second-page-text--contact">
                Skicka ett mail till frogardesbivax@gmail.com
            </p>
        </div>
        <div className="third-section--contact">
            <img className="contact--image" src={require("../../images/1.png")} alt="logo" />
        </div>
    </>
    )
};

export default ContactComponent;