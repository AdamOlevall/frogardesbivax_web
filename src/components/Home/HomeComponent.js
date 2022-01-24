import * as React from "react";
import { Link} from 'react-router-dom';
import './style.css';

const HomeComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
    <>
    <div className="first-section">
        <div className="background-image-overlay"/>
        <div className="page-content">
            <p className="page-title">
            välkommen till <br />frögärdes bivaxdukar
            </p>
            <Link to={'/om-oss/'} className="page-link">
                Läs mer om oss!
            </Link>
        </div>
    </div>
    <div className="second-section">
        <div className="second-page-content">
            <p className="page-title page-title--second">
            plastbantning duk<br /> för duk!
            </p>
            <Link to={'/produkter/'} className="page-link page-link--second">
                Till alla produkter
            </Link>
        </div>
    </div>
    </>
)};

export default HomeComponent;