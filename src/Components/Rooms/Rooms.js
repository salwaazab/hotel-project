import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Header from '../Header';
import RoomsImg from './RoomsImg';
import Testimonials from '../Testimonials';
import Footer from '../Footer';
import './Rooms.css';




function Rooms (){

    return(

        <div>
            <Router>
        <Header/>
        <Switch>
          
        <Route exact path='/' />

        <Route exact path='/Facilities' />

        <Route exact path='/Rooms' />

        <Route exact path='/Contact-Us' />


        </Switch>
       
      </Router>

      <div className="rooms-pra">
          <h2 id="rooms-and-rates">ROOMS AND RATES</h2>
          <p className="rooms-and-rates-pra">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay.
               And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing 
              complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
            </p>
      </div>

      <RoomsImg/>
      <RoomsImg/>
      <RoomsImg/>

      <Testimonials/>
      <Footer/>
      
        </div>
    )
}

export default Rooms;