import React from 'react';
import { Link} from 'react-router-dom';
import { products } from '../../utils/products';
import './style.css';

const ProductComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className="first-section--products">
            <p className="page-title--products">Webbshop</p>
        </div>
        <div className="products">
            {
                products.map(product => (
                        <Link to={'/produkter/' + product.id} key={product.id} className="product">
                           
                                <img className="product_image" src={product.image}  alt="image_1" />
                                <p className="product_name">{product.name}</p>
                                <p className="product_price">{product.id === '2' ? 'Från ' : ''}{product.price} kr</p>
             
                        </Link>
                 ))
            }
        </div>
    </>
    );
}

export default ProductComponent;