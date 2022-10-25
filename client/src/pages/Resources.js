import React, {useState} from "react"; 
//import components
import Fact from '../components/Fact';
import Disease from '../components/Disease';

const Resources = () => {

 return (
    <main>
        <div>
              <div>
                  <div><h1 >Disease of the Day</h1></div>
                  <div >
                    <h5>Illnesss in Children:</h5>
                    <p >With so many little ones running around, it is important to stay informed on childhood illnesses!</p>
                  <Disease />
                  </div>
                </div>
                <div>
                  <div><h1 >Fun Fact of the Day</h1>
                      </div>
                  <div >
                    <h5 >Medical Fun Facts:</h5>
                    <p>We won't bore you with a long boring story about how the body works...but check out this fun fact!</p>
                    <div>
                      <Fact />
                      <div>
                  </div>
                </div>
            </div>
            </div>
          </div>
      </main>
 )
} 

export default Resources;