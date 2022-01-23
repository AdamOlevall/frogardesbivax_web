import * as React from "react";
import './style.css';

const DeliveryComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className="delivery--container">
            <p className="page-title--delivery">Frakt & Retur</p>
            <div className="delivery-policy--container">
                <div className="first-section--delivery">
                    <p className="second-page-title--delivery"> Frakt & returpolicy</p>
                    <p className="page-text--delivery">
                    Vid beställning över 449 kronor ingår frakt. Vid köp under 449 kronor tillkommer frakt om 49 kronor. Leveranstid är mellan 1-5 arbetsdagar. Du har alltid 14 dagars ångerrätt vid köp och vid retur står du för fraktkostnaden för returen.</p>
                    <p className="second-page-title--delivery margin-top"> Rättsligt meddelande</p>
                    <p className="page-text--delivery"> Eftersom alla våra varor är gjorda för hand kan produkterna variera marginellt. </p>
                </div>
                <div className="second-section--delivery">
                <p className="second-page-title--delivery">Återbetalningspolicy</p>
                <p className="page-text--delivery">
                Vid köp av våra varor får du alltid 14 dagars ångerrätt. Detta betyder att du har 14 dagar från att varan nått dig att ångra ditt köp genom att kontakta oss om detta. Vid återlämning av våra varor ska varorna vara oskadda, kompletta och i obruten förpackning.
                Vid retur betalar vi tillbaka det du betalar för dina returvaror inklusive standardleveransen. Vi betalar tillbaka genom banköverföring inom 14 arbetsdagar efter att varan kommit åter till oss i godkänt skick. Några avgifter tillkommer inte för dig vid återbetalning. 
</p>
                </div>
            </div>
        </div>
       
    </>
    )
};

export default DeliveryComponent;