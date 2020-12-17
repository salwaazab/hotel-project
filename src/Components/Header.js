import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import './Header.css';
import  headerImg from '../imgs/header-img-1.png';
import  headerImg2 from '../imgs/header-img-2.png';
import Logo from './Logo';
import Navbar from './Navbar';



    {/* <div className="header" style={{ backgroundImage:{imageHeader} }}> */}

function Header(){
    // const [headerImg, changeHeaderImg]= useState ({headerImg})

    return(
        
        <div className="header" style={{ backgroundImage:`url(${headerImg})` }}>
    
            <div className="top-header" >

                <Logo/>
                <Navbar/>
            </div>
            <div className="header-paragraph">
                <p className ="welcome">WELCOME TO</p>
                <p className="luxury-1">LUXURY </p>
                <p className="hotels-1">HOTELS</p>
                <p className="header-pra">Book your stay and enjoy Luxury redefined at the most affordable rates</p>
            </div>
            <button className="book-now">
                <img src='./book-vec.png'/>
                
                BOOK NOW 
            </button>
            <p className ="scroll">Scroll</p>
            <img className="scroll-icon" src="./scroll.png"/>
        </div>
        

        
    )
}
export default Header;