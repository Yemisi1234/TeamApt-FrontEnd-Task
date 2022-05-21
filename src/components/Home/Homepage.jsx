import React from 'react';
import './Homepage.css';

export const Homepage = () => {
    return (
        <div>
          <div className = "home_container" >
        <div className="top-stars"></div>
        <div className= "home-text animate-text"> 
         <span> Unlock to </span>  <span className="bold-text"> Power your dreams! </span>
         <div className="other-text animate-text" >
           <span> Stand a chance to win </span> <b>N3,000,000</b> everyday for the next 5 days
        </div>
        </div>
       
        <div class="bulb-card">
           <div className="title-text"> <span className="bulb-text">🚀 </span> How To Play </div>
           <div >
           <div className="list-text">
              <div>
                <div> 1. Guess the right combination of numbers</div>
                <div> 2. Win <b>N3,000,000</b> instantly </div>
              </div>
              <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
              </div>
              <div className="small-card">
                <span className="bulb-text">💡</span>
              <div>
               Think well before you guess. You have only <b>2</b>
               attempts per day and even after you wi, you can come 
               back the next day to try for another jackpot!
              </div>
              </div>
           </div>
        </div>

      </div>  
        </div>
    )
}
