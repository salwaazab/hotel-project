import React from 'react';

import Header from '../Header';
import './Facilities.css';
import FacilitiesImage from './FacilitiesImage';
import Testimonials from '../Testimonials';

import Footer from '../Footer';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';





function Facilities (){
    return(
        <div>

      

      <div className="facilities-pra">
          <h2> FACILITIES</h2>
          <p className="facility-pra">We want your stay at our lush hotel to be truly unforgettable. That is why we give special
               attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers
                the perfect setting with stunning views for leisure 
              and our modern luxury resort facilities will help you enjoy the best of all.</p>
      </div>

      <FacilitiesImage/>
      <FacilitiesImage/>
      <FacilitiesImage/>
      <FacilitiesImage/>
      <FacilitiesImage/>
      <FacilitiesImage/>


        <Testimonials/>

        <Footer/>
        </div>
    )
}

export default Facilities;