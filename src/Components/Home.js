import React from 'react';
import './Home.css';
import Header from './Header';
import Testimonials from './Testimonials';

import RoomTypes from "./RoomTypes";
import Footer from "./Footer";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Facilities from '../Components/Facilities/Facilities';
import Rooms from '../Components/Rooms/Rooms';
import ContactUs from '../Components/ContactUs/ContactUs';

import  headerImg from '../imgs/header-img-1.png';




function Home(){
    return (
      <div>
        <div className="home">

       
        <Header>
        
         
         </Header>

        <RoomTypes/>
        <RoomTypes/>
        <Testimonials/>
        <Footer/>
     

           
        </div>



    </div>




    )
}
export default Home;