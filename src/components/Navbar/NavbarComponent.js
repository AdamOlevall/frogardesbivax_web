import * as React from "react";
import * as Redux from "react-redux";
import { NavLink } from 'react-router-dom';
import { getNumberOfItemsInCart } from "../../store/selectors";
import {ReactComponent as ReactLogo} from '../../shopping-cart2.svg';
import './style.css';

const NavbarComponent = () => {
    const numberOfItems = Redux.useSelector(getNumberOfItemsInCart);
    return (
        <div className="nav-bar">
            <NavLink exact to="/">Hem</NavLink>
            <NavLink exact to="/produkter">Webbshop</NavLink>
            <NavLink exact to="/om-oss">Om Oss</NavLink>
            <NavLink exact to="/kontakt">Kontakt</NavLink>
            <NavLink exact to="/kundvagn">
                <div className="shopping-cart">
                    <ReactLogo width="35px"/>          
                  {numberOfItems > 0 && <p className={`number-of-items ${numberOfItems >= 10 ? 'wide' : ''}`}>{numberOfItems}</p> }
                </div>
            </NavLink>
        </div>
    )
};

export default NavbarComponent;