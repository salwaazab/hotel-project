import React from 'react';
import './Footer.css';

import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';



function Footer (){
    return(
        <div className="footer">


            <div>
            <ul>
                <li>LUXURY</li>
                <li>497 Evergreen Rd. Roseville, CA 95673</li>
                <li>+44 345 678 903</li>
                <li>luxury_hotels@gmail.com</li>
                
            </ul>
            </div>
            <div>
            <ul>
                <li>About Us </li>
                <li>Contact</li>
                <li>Terms & Conditions</li>
            </ul>
            </div>

            <div>
            <ul>
                <li><FaFacebookF/>Facebook</li>
                <li><FaTwitter/>Twitter</li>
                <li><FaInstagram/>Instagram</li>
            </ul>
            </div>
            <div>
            <ul>
                <li>Subscribe to our newsletter</li>
                <li> 
                    
                    
                    <input type="text" name="textfield" id="textfield" value="Email Address" />
                    <input name="" type="button" id="button" value="OK"/>

                </li>
            </ul>
            </div>
        </div>
    )
}
export default Footer;