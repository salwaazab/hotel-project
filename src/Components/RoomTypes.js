import React from 'react';
import './RoomTypes.css';

function RoomTypes(){
    return(

        <div className="room-types">
            
            <div className="desc">

                <div className ="desc-room">
                    <h3>Luxury redefined</h3>
                    <p className="room-desc">Our rooms are designed to transport you into an environment made for leisure. 
                        Take your mind off the day-to-day of home life and find a
                        private paradise for yourself.
                    </p>
                    <button className="explore">EXPLORE</button>

                </div>
            </div>



            <div className="room">
                <img className="room" src='./room-1.png' width="600px" height="500px"/>
            </div>
        </div>
            
       
    )
}
export default RoomTypes;