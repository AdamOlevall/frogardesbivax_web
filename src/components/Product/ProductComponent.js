import * as React from 'react';
import * as Redux from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { toast } from "react-toastify";
import { addToCart } from '../../store/actions';
import { products } from '../../utils/products';
import {ReactComponent as ReactLogo} from '../../down-arrow.svg';
import "react-image-gallery/styles/css/image-gallery.css";
import './style.css';

const ProductComponent = () => {
    const {id} = useParams();
    const currentProduct = products.find(product => product.id === id);
    const [value, setValue] = React.useState(1);
    const [isColorDropdownOpen, setIsColorDropdownOpen] = React.useState(false);
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = React.useState(false);
    const [currentModel, setCurrentModel] = React.useState(currentProduct.models[0]);
    const [currentColor, setCurrentColor] = React.useState(currentProduct.models[0].color);
    const [currentSize, setCurrentSize] = React.useState(currentProduct.models[0].size);
    const dispatch = Redux.useDispatch();
    
    React.useEffect(() => {
       setCurrentModel(currentProduct.models.find(model => model.color === currentColor && model.size === currentSize))
    }, [currentColor, currentSize, currentProduct.models]);

    const handleDecrease = () => {
        setValue(value - 1);            
    }

    const handleAddToCart = () => {
        dispatch(addToCart({...currentModel, quantity: value}));
        toast.success("Tillagd i kundvagn");
    };  

    return ( currentProduct ?
    <>
        <div className="first-section--product">
            <p className="page-title--product">{currentProduct.name}</p>
        </div>
        <div className="second-section--product--wrapper">
            <div className="second-section--product">
                <div className="back-link">
                    <NavLink exact to="/produkter">Tillbaka till webbshopen</NavLink>
                </div>
                <div className="second-section--product-section">
                    <div className="image-carousel">
                    <ImageGallery items={currentModel.images} showPlayButton={false} />
                    </div>
                    <div className="product-wrapper">
                        <div className="product-info">
                            <p className="product_name--product">{currentModel.color}</p>
                            <p className="product_price--product">{currentModel.price} kr</p>
                            <p className="dropdown--title">Välj färg</p>
                            <div className="dropdown--container">
                                <button onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)} className="dropdown--closed">
                                    {currentModel.color}
                                    <ReactLogo fill="rgb(188, 76, 42)" className={`dropdown--icon ${isColorDropdownOpen ? 'open' : ''}`}/> 
                                </button>
                                {
                                    isColorDropdownOpen &&
                                    <div className="dropdown--open">
                                        {
                                            currentProduct.colors.map(color => (
                                                <button key={color} className="dropdown--item" onClick={() => {setCurrentColor(color); setIsColorDropdownOpen(false);}}>
                                                    {color}
                                                </button>
                                            ))
                                        }
                                    </div>
                                }
                                
                            </div>
                            {
                                currentProduct.id === '2' ?
                                <>
                                <p className="dropdown--title">Välj storlek</p>
                                    <div className="dropdown--container">
                                        <button onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)} className="dropdown--closed">
                                            {currentModel.size}
                                            <ReactLogo fill="rgb(188, 76, 42)" className={`dropdown--icon ${isSizeDropdownOpen ? 'open' : ''}`}/> 
                                        </button>
                                        {
                                            isSizeDropdownOpen &&
                                            <div className="dropdown--open">
                                                {
                                                    currentProduct.sizes.map(size => (
                                                        <button key={size} className="dropdown--item" onClick={() => {setCurrentSize(size); setIsSizeDropdownOpen(false);}}>
                                                            {size}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                        }
                                        
                                    </div>
                                </> :
                                null
                            }
                        
                            <div className="product-quantity--wrapper">
                                <button className={`product-quantity--button ${value === 1 ? 'disabled' : ''} subtract`} disabled={value === 1} onClick={() => handleDecrease()}>-</button>
                                <input className="product-quantity--input" disabled value={value} />
                                <button className="product-quantity--button add" onClick={() => setValue(value + 1)}>+</button>
                            </div>
                            <p className="product-total-cost">Totalt pris: <span>{value * Number(currentModel.price)} kr</span></p>
                            <button className="product-add-to-cart" onClick={() => handleAddToCart()}>Lägg till i kundvagn</button>
                            <p className="product_info--title">Produktinfo</p>
                            <p className="product_info--text">I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. 
                            This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
    : <p>Laddar</p>
)}

export default ProductComponent;