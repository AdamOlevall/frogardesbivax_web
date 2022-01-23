import * as React from "react";
import './style.css';

const AboutComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
    <>
    <div className="first-section--about">
        <p className="page-title--about">Om oss</p>
    </div>
    <div className="second-section--about">
        <div className="second-section--left">
            <p className="second-page-title--about">Frögärdes gård</p>
            <p className="second-page-text--about">
            Frögärde gård har bedrivits av familjen Johansson sedan år 1899 och är idag inne på sjätte generationen. Idag är det främst skogs-och jordbruk som bedrivs på gården tillsammans med nötkreatur. 
            Spannmålsodlingen på Frögärde har sedan år 1999 bedrivits ekologiskt. Frögärde gård har även under år 2021 utvecklats med produktion av bivaxdukar, det är på gården vi håller till och tillverkar våra bivaxdukar.
            </p>
        </div>
        <div className="second-section--right" />
    </div>
    <div className="third-section--about">
        <div className="second-section--left">
            <p className="second-page-title--about">Vilka är vi?</p>
            <p className="second-page-text--about">
            Vi är två unga tjejer i 25 årsåldern som valde att starta Frögärdes bivax med visionen om att skapa ett hållbart och miljövänligt alternativ till plastfolie.
            Vi värnar om vår miljö och ville därför hitta en lösning för minskandet av engångsplast, därav startades Frögärdes bivax år 2021 med ett mål om att minska plastkonsumtionen med en hållbar och snygg lösning. 
            </p>
        </div>
        <div className="second-section--right" />
    </div>
    <div className="second-section--about">
        <div className="second-section--left">
            <p className="second-page-title--about">Våra bivaxdukar</p>
            <p className="second-page-text--about second-page-text--about--long second-page-text--about--long">
            Bivaxdukar är ett miljövänligt och hållbart alternativ till plastfolie. Vi behöver hjälpas åt att minska konsumtionen av engångsplast. Ett både enkelt och bra alternativ till detta är att börja använda bivaxdukar i så stor utsträckning som möjligt. 
            </p>
            <p className="second-page-text--about second-page-text--about--second second-page-text--about--long">
            En bivaxduk har en väldigt bra hållbarhet. Bivaxdukarna är vattentåliga och har även antibakteriella egenskaper vilket bidrar till att maten håller sig fräsch längre. Våra bivaxdukar tillverkas av miljöcertifierade tyger, tallkåda, kokosnötsolja samt bivax som i första hand kommer från egen biodling. Vi köper även in bivax från lokala biodlare i närområdet. 
            </p>
        </div>
        <div className="second-section--right" />
    </div>
    </>
)};

export default AboutComponent;