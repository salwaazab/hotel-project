import React from 'react';
import {FcPrevious} from 'react-icons/fc';
import {FcNext} from 'react-icons/fc';
import './Testimonials.css';


function Testimonials(){
    return(

        <div className="testimonials">

            <h1>Testimonials</h1>
            <p className="clam">"Calm, Serene, Retro – What a way to relax and enjoy"</p>
            <p className="mr"> Mr. and Mrs. Baxter, UK</p>
            
            
            <div className="pre-and-next-buttons">
                <button className="pre-and-next"> <FcPrevious/> </button>
                <button className="pre-and-next"><FcNext/></button>
            </div>
        </div>
    )
}
export default Testimonials;