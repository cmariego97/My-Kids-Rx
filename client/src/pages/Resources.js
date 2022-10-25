import React, {useState} from "react"; 
import { ExternalLink } from 'react-external-link';
import { useQuery } from '@apollo/client';
import { QUERY_RESOURCES } from '../utils/queries';

const Resources = () => {
const { loading, data } = useQuery(QUERY_RESOURCES);
// const disease =  data.diseases[Math.floor(Math.random()* data.diseases.length)];
if (!loading) {
  var randomNum = Math.floor(Math.random()* data.diseases.length);
  var randomNum2 = Math.floor(Math.random()* data.facts.length);
  var disease = data.diseases[randomNum]
  var fact = data.facts[randomNum2]
  console.log(disease)
  console.log(fact)
}

 return (
    <main>
        <div>
              <div>
                  <div><h1 >Disease of the Day</h1><button type="button" id="disease-btn" >Retrieve A Disease</button></div>
                  <div >
                    <h5>Illnesss in Children:</h5>
                    <p >With so many little ones running around, it is important to stay informed on childhood illnesses!</p>
                    <div id="disease-container">
                      <h3>{disease.name}</h3>
                      <li>{`Affected ages: ${disease.ageGroup}`}</li>
                      <li>{`Symptoms include: ${disease.symptoms}`}</li>
                      <li>{`Prevention methods: ${disease.prevention}`}</li>
                      {/* TODO: make link functional */}
                        <li>
                        <ExternalLink href={disease.link}>
                          <span>Click here for more information!</span>
                        </ExternalLink>
                      </li> 
                    </div>
                  </div>
                </div>
                <div>
                  <div><h1 >Fun Fact of the Day</h1>
                      <button type="button" id="fact-btn">Retrieve A Fact</button></div>
                  <div >
                    <h5 >Medical Fun Facts:</h5>
                    <p>We won't bore you with a long boring story about how the body works...but check out these fun facts!</p>
                    <div id="fact-container">
                      <p>{fact.fact}</p>
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