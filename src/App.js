import React, { useState } from 'react';

import Facilities from './Components/Facilities/Facilities';


import Header from './Components/Header';
import Home from './Components/Home';
import Rooms from './Components/Rooms/Rooms';
import ContactUs from './Components/ContactUs/ContactUs';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import axios from 'axios';




function App(){

  async onSearchSubmit(term) {
   const response= await axios.get('https://api.unsplash.com/search/photos', {
      params: {query:term},
      headers:{
        Authorization: 'Client-ID j6XlnTR0pt7hmH92R93M7vIVemXCBYFkUOMFq22DBK4'
      }


    });
    console.log(response.data.results);
  }

   const [headerImg,changeHeaderImg]= useState([])
return(
    <div className="app">


<Home
>
        <Switch>

          <Route exact path='./'> <Home/></Route>
          <Route exact path='./Facilities'> <Facilities/></Route>
          <Route exact path='./Rooms'> <Rooms/></Route>
          <Route exact path='./Contact-Us'> <ContactUs/></Route>
        </Switch>
       
         
         </Home>
      

        {/* <Home/> */}
        {/* <Facilities/>  */}

        {/* <Rooms/> */}

        {/* <ContactUs/> */}
       </div>
    
)
}
export default App;