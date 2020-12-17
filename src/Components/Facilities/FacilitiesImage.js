import React from 'react';
import './FacilitiesImage.css';



function FacilitiesImage (){

    return(
        <div className="facilities-img">
            <figure>
                <img className="fac-img" src="../fac-img-1.png" alt="fac-img"/>
                <figcaption className="fig-cap">THE GYM</figcaption>
            </figure>
        </div>
    )
}

export default FacilitiesImage;