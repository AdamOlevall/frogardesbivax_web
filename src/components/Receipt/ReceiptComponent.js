import * as React from 'react';
import * as Redux from 'react-redux';
import {getTotalCostForReceipt} from '../../store/selectors';
import {resetShippingInfo} from '../../store/actions';
import './style.css';

const ReceiptComponent = () => {
    const dispatch = Redux.useDispatch();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        return () => dispatch(resetShippingInfo());
    }, [dispatch]);

    const receipt = Redux.useSelector(state => state.receipt);
    const totalCost = Redux.useSelector(getTotalCostForReceipt);
    const deliveryCost = totalCost > 449 ? 0 : 49;
    const shippingInfo = Redux.useSelector(state => state.shippingInfo);

    return (
        <>
        <div className="first-section--receipt">
            <p className="page-title--receipt">Orderbekräftelse</p>
        </div>
        <div className="receipt-wrapper">
            <p className="receipt--header">Tack <span>{shippingInfo.firstName}</span> för din order!</p>
            <p className="receipt--text"> När vi har mottagit din betalning kommer du få en orderbekräftelse skickad till <span>{shippingInfo.mail}</span>. Därefter kommer din beställning att skickas inom två arbetsdagar till <span>{shippingInfo.street}, {shippingInfo.zipCode}, {shippingInfo.city}</span></p>
            <p className="receipt--text"> Betalning sker via Swish till 0725911222, Matilda Odén. Vid frågor kontakta oss på frogardesbivax@gmail.com</p>
            <p className="receipt--text"> Tack för att du är med och minskar användningen av engångsplast.</p> 
            <div className="receipt--paper">
                        <div className="receipt--item-list">
                                {receipt.map(item => {
                                    return (
                                        <div className="receipt--item-wrapper" key={item.id}>
                                                <div className="receipt--item-info">
                                                    <div className="receipt--item-info-left">
                                                        <p className="receipt--quantity">{item.quantity} st</p>
                                                        <p className="receipt--name">{item.name}</p>
                                                    </div>
                                                    <p className="receipt--price">{item.price} kr</p>
                                                </div>
                                                <p className="receipt--total-item-cost">Pris: <span>{item.quantity * Number(item.price)} kr</span></p>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="receipt--total-cart-cost">Ordersumma: <span>{totalCost} kr</span></p>
                            <p className="receipt--total-cart-cost">Fraktkostnad: <span>{deliveryCost} kr</span></p>
                            <p className="receipt--total-cart-cost">Totalt pris: <span>{totalCost + deliveryCost} kr</span></p>
                        </div>
                
        </div>

    </>
    );
}

export default ReceiptComponent;