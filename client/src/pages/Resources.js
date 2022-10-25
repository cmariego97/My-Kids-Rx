import React from "react"; 
import { useQuery } from '@apollo/client';
import { QUERY_FACTS, QUERY_DISEASES } from '../utils/queries';






const Resources = () => {
const { loading, data } = useQuery(QUERY_DISEASES)
// const disease =  data.diseases[Math.floor(Math.random()* data.diseases.length)];
//const response = data.diseases
console.log(data)

 return (
    <main>
        <div>
              <div>
                  <div ><h1 >Disease of the Day</h1><button type="button" id="disease-btn">Retrieve A Disease</button></div>
                  <div >
                    <h5 >Illnesss in Children:</h5>
                    <p >With so many little ones running around, it is important to stay informed on childhood illnesses!</p>
                    <div id="disease-container"></div>
                  </div>
                </div>
                <div>
                  <div><h1 >Fun Fact of the Day</h1>
                      <button type="button" id="fact-btn">Retrieve A Fact</button></div>
                  <div >
                    <h5 >Medical Fun Facts:</h5>
                    <p>We won't bore you with a long boring story about how the body works...but check out these fun facts!</p>
                    <div id="fact-container"><div>
                  </div>
                </div>
            </div>
            </div>
          </div>
      </main>
 )
} 


















export default Resources;