
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';



import  headerImg from '../imgs/header-img-1.png';
import  headerImg2 from '../imgs/header-img-2.png';
import  headerImg3 from '../imgs/header-img-3.png';



import Header from '../Components/Header';
import Home from '../Components/Home';
import Rooms from '../Components/Rooms/Rooms';
import Facilities from '../Components/Facilities/Facilities';
import ContactUs from '../Components/ContactUs/ContactUs';









function Navbar(){
    // const [imageHeader,changeHeaderImg]=useState(headerImg);

    return(
    <div  id="navbar">


        <Router>
        <div>
            <div className= "navbar" >
            <ul>
                <li>
                    <NavLink to='/' 
                        className="Nav_link"
                        activeClassName="activeRoute"
                        // onClick={() => changeHeaderImg({headerImg})}
                        
                    >
                        Home
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to='/Facilities' 
                        className="Nav_link"
                        activeClassName="activeRoute"
                        // onClick={() => changeHeaderImg({headerImg2})}
                        
                    >
                        Facilities
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to='/Rooms' 
                        className="Nav_link"
                        activeClassName="activeRoute"
                        // onClick={() => changeHeaderImg({headerImg3})}
                        
                    >
                        Rooms
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to='/Contact-Us' 
                        className="Nav_link"
                        activeClassName="activeRoute"
                        // onClick={() => changeHeaderImg({headerImg2})}
                        
                    >
                        Contact-Us
                    </NavLink>
                    
                </li>
            </ul>
            </div>
            <Switch>

<Route exact path='./'> <Home/></Route>
<Route exact path='./Facilities'> <Facilities/></Route>
<Route exact path='./Rooms'> <Rooms/></Route>
<Route exact path='./Contact-Us'> <ContactUs/></Route>
</Switch>

         
        </div>


        </Router>
        </div>
    )
}
   export default Navbar;