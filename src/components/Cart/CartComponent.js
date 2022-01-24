import * as React from 'react';
import * as Redux from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link} from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../../trash-bin.svg';
import {increaseItem, decreaseItem, removeItem} from '../../store/actions';
import {getTotalCostForCart} from '../../store/selectors';
import './style.css';

const CartComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = Redux.useDispatch();

    const cart = Redux.useSelector(state => state.cart);
    const totalCost = Redux.useSelector(getTotalCostForCart);

    const handleDecrease = (id) => {
        dispatch(decreaseItem(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseItem(id));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <>
        <div className="first-section--cart">
            <p className="page-title--cart">Din kundvagn</p>
        </div>
        <div className="second-section--cart">
        {
                cart.length > 0 ?
                <div className="cart--item-list">
                    {cart.map(item => {
                        return (
                            <div className="cart--item-wrapper" key={item.id}>
                                    <img className="cart--image" src={item.checkoutImage}  alt="item_image" />
                                    <div className="cart--item-info">
                                        <p className="cart--name">{item.name}</p>
                                        <p className="cart--price">{item.price} kr</p>
                                        <div className="cart--settings">
                                            <div className="product-quantity--wrapper">
                                                <button className={`product-quantity--button ${item.quantity === 1 ? 'disabled' : ''} subtract`} disabled={item.quantity === 1} onClick={() => handleDecrease(item.id)}>-</button>
                                                <input className="product-quantity--input" disabled value={item.quantity} />
                                                <button className="product-quantity--button add" onClick={() => handleIncrease(item.id)}>+</button>
                                            </div>
                                            <button className="cart--remove-button" onClick={() => handleRemoveItem(item.id)}>
                                                <ReactLogo width="20px" fill="rgb(188, 76, 42)" className="cart--bin-icon"/>   
                                            </button>
                                        </div>
                                        <p className="cart--total-item-cost">Pris: <span>{item.quantity * Number(item.price)} kr</span></p>
                                    </div>
                            </div>
                        )
                    })}
                    <div className="cart--button-wrapper">
                        <p className="cart--total-cart-cost">Totalt pris: <span>{totalCost} kr</span></p>
                    <NavLink exact to="/check-out"><button className="cart--to-checkout-button">Till utcheckning</button></NavLink>
                    </div>
                </div> :
                    <div className="cart--empty--cart-wrapper">
                        <p className="cart--empty-cart">Din kundvagn är tom!</p>
                        <Link to={'/produkter/'} className="cart--page-link">
                        Till alla produkter
                        </Link>
                    </div>
            }
        </div>
    </>
    );
}
export default CartComponent;