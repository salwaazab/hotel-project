import React from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import './RoomsImg.css';



function RoomsImg(){
    return(
    
        <div className="rooms-img">
            
            <div className="slider">
                <figure>
                    <img src="../room-img-1.png" alt="room-img" width="1120px" height="500px"/>
                    <figcaption  className="room-figcaption">Single Room</figcaption>
                
                </figure>
            </div>

            <div className="room-detail">
                <div className="plus-div"><BsPlusCircleFill className="plus"/> <p className="view-more">VIEW ROOM DETAILS</p> </div>
                <button className="room-btn">$147 Avg/night</button>
            </div>
        </div>

    )
}

export default RoomsImg;