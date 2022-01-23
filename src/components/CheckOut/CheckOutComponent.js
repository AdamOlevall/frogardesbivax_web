import * as React from 'react';
import * as Redux from 'react-redux';
import {useForm} from 'react-hook-form';
import { TextField, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { history } from '../../history';
import {getTotalCostForCart} from '../../store/selectors';
import {completePurchase} from '../../store/actions';

import './style.css';

const useStyles = makeStyles({
    heading: {
        fontSize: '32px'
    },
    textField: {
        width: '100%',
        marginBottom: '8px',
        fontSize: '20px',
    },
    radioWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    radioButtons: {
        display: 'flex',
        flexDirection: 'row',
    },
    formControl: {
        marginTop: '1rem',
    },
});


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mail: yup.string().email().required(),
    street: yup.string().required(),
    zipCode: yup.number().required(),
    city: yup.string().required(),
    phone: yup.number().transform((v, o) => o === '' ? null : v).nullable(true),
});


const CartComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = Redux.useDispatch();

    const cart = Redux.useSelector(state => state.cart);
    const totalCost = Redux.useSelector(getTotalCostForCart);
    const deliveryCost = totalCost > 449 ? 0 : 49;
    const shippingInfo = Redux.useSelector(state => state.shippingInfo);
    const classes = useStyles();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: shippingInfo.firstName,
            lastName: shippingInfo.lastName,
            mail: shippingInfo.mail,
            phone: shippingInfo.phone,
            city: shippingInfo.city,
            street: shippingInfo.street,
            zipCode: shippingInfo.zipCode,
        },
    });

    const onSubmit = (values) => {
       console.log(values);
       dispatch(completePurchase(values));
       history.push('/kvitto');

    };

    console.log(errors)
    const { ref: firstNameRef, ...firstNameRest } = register('firstName');
    const { ref: lastNameRef, ...lastNameRest } = register('lastName');
    const { ref: mailRef, ...mailRest } = register('mail');
    const { ref: phoneRef, ...phoneRest } = register('phone');
    const { ref: streetRef, ...streetRest } = register('street');
    const { ref: zipCodeRef, ...zipCodeRest } = register('zipCode');
    const { ref: cityRef, ...cityRest } = register('city');

    
    return (
        <div className="checkOut--container">
            <div className="checkOut--payment-container">
                <div className="first-section--checkOut--delivery">
                    <p className="page-title--checkOut--delivery">Leveransadress</p>
                </div>
                <div className="checkOut--form-wrapper">
                    <form className="checkOut--form" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl component="fieldset" className={classes.radioWrapper}>
                            <TextField
                                id="firstName"
                                label="Förnamn"
                                inputRef={firstNameRef}
                                {...firstNameRest}
                                name="firstName"
                                className={classes.textField}
                                error={!!errors.firstName}
                            />
                            <TextField
                                id="lastName"
                                label="Efternamn"
                                inputRef={lastNameRef}
                                {...lastNameRest}
                                name="lastName"
                                className={classes.textField}
                                error={!!errors.lastName}
                            />
                            <TextField
                                id="mail"
                                label="E-post"
                                inputRef={mailRef}
                                {...mailRest}
                                name="mail"
                                className={classes.textField}
                                error={!!errors.mail}
                            />
                            <TextField
                                id="phone"
                                label="Mobiltelefon (Valfri)"
                                inputRef={phoneRef}
                                {...phoneRest}
                                name="phone"
                                className={classes.textField}
                                type="tel"
                                error={!!errors.phone}
                            />
                            <TextField
                                id="street"
                                label="Gatuadress"
                                inputRef={streetRef}
                                {...streetRest}
                                name="street"
                                className={classes.textField}
                                error={!!errors.street}
                            />
                            <TextField
                                id="zipCode"
                                label="Postnummer"
                                inputRef={zipCodeRef}
                                {...zipCodeRest}
                                name="zipCode"
                                className={classes.textField}
                                error={!!errors.zipCode}
                            />
                            <TextField
                                id="city"
                                label="Stad"
                                inputRef={cityRef}
                                {...cityRest}
                                name="city"
                                className={classes.textField}
                                error={!!errors.city}
                            />
                        </FormControl>
                        <div className="checkOut--delivery-wrapper">
                            <p className="checkOut--delivery-header">Fraktinformation</p>
                            <p className="checkOut--delivery-text">Leveraras med PostNord till angiven adress inom 1-5 arbetsdagar 49 kr</p>
                            <p className="checkOut--delivery-text">Fraktavgift 49 kr (0 kr vid köp över 449 kr)</p>
                        </div>
                        <div className="checkOut--delivery-wrapper">
                            <p className="checkOut--delivery-header">Betalningsinformation</p>
                            <p className="checkOut--delivery-text">Ett integrerat betalningsystem är under utveckling. I dagsläget lägger ni er order nedan och swishar sedan separat. 
                            Den totala kostnaden hittar ni i orderöversikten till höger. När vi mottagit eran swish får ni en orderbekräftelse via mail.</p>
                            <p className="checkOut--delivery-text">Telefonnummer: <span>0725911222</span>. Mottagare: Matilda Odén</p>
                        </div>
                        
                            <button className="checkOut--submit-button" type="submit">Bekräfta order</button>
                       
                        
                    </form>
                </div>
            </div>
            <div className="checkOut--cart-container">
                <div className="first-section--checkOut">
                    <p className="page-title--checkOut">Orderöversikt</p>
                </div>
                <div className="second-section--checkOut">
                    <div className="checkOut--paper">
                        <div className="checkOut--item-list">
                                {cart.map(item => {
                                    return (
                                        <div className="checkOut--item-wrapper" key={item.id}>
                                                <div className="checkOut--item-info">
                                                    <div className="checkOut--item-info-left">
                                                        <p className="checkOut--quantity">{item.quantity} st</p>
                                                        <p className="checkOut--name">{item.name}</p>
                                                    </div>
                                                    <p className="checkOut--price">{item.price} kr</p>
                                                </div>
                                                <p className="checkOut--total-item-cost">Pris: <span>{item.quantity * Number(item.price)} kr</span></p>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className="checkOut--total-cart-cost">Ordersumma: <span>{totalCost} kr</span></p>
                            <p className="checkOut--total-cart-cost">Fraktkostnad: <span>{deliveryCost} kr</span></p>
                            <p className="checkOut--total-cart-cost">Totalt pris: <span>{totalCost + deliveryCost} kr</span></p>
                        </div>
                </div>
            </div>   
        </div>
    );
}
export default CartComponent;