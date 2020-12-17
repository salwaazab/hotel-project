import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './ContactUs.css';

import Header from '../Header';
import Footer from '../Footer';




function ContactUs(){
    return(

        <div className="contact-us">
             <Router>
        <Header/>
        <Switch>
          
        <Route exact path='/' />

        <Route exact path='/Facilities' />

        <Route exact path='/Rooms' />

        <Route exact path='/Contact-Us' />


        </Switch>
       
      </Router>

      <div className="body-contact-us">
            <div>
                <h4>WE ARE HERE FOR YOU</h4>
                <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                    please forward it to our support desk and we will get back to you as soon as possible.
                    
                    </p>

            </div>
            <div className="contact-us-details">
                <div>
                        
                    <p className="address"> 497 Evergreen Rd. Roseville, CA 95673 </p>
                    <p className="view-map"> view map   -></p>

                    <p className ="email-and-phone">Phone: +44 345 678 903 <br/> Email: luxury_hotels@gmail.com</p>
                </div>
                
                <div>
                    <form>
                        <label>Name</label>
                        <input type="text"style={{width:500}}/>

                        <label> Email</label>
                        <input type="text" style={{width:500}}/>

                        <label>Message</label>
                        <input  className="input-msg" type="text"/>

                        <button className="submit"> Submit</button>
                    </form>
                </div>
            </div>
      </div>

      <Footer/>
        </div>
    )
}

export default ContactUs;