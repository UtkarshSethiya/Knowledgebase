
import './calculator.css'
import React, { useState } from 'react';
import whitelabel from './images/whitelabel.png'
import dedciated from './images/dedciated.png'
import onsite from './images/onsite.png'
function Calculator(){
    
 
const[no,setno]=useState(1);
const[attend,setattend]=useState(200);
const[exhibitor,setexhibitor]=useState(3);
const[customhall,setcustomhall]=useState(0);
const[custombooth,setcustombooth]=useState(0);
const[whitelabel,setwhitelabel]=useState(0);
const[customlanding,setcustomlanding]=useState(0);
const[customlobby,setcustomlobby]=useState(0);
const[three,setthree]=useState(0);
const[auditorium,setauditorium]=useState(0);
const[games,setgames]=useState(1);
const[booth,setbooth]=useState(0);
const[hour,sethour]=useState(0);





function eventnumber(event){
    setno(event.target.value)
    
}



function attendenumber(event){
    setattend(event.target.value)
}

function exhibitornumber(event){
    setexhibitor(event.target.value);
}
function customhallnumber(event){
    setcustomhall(event.target.value);
}
function customboothnumber(event){
    setcustombooth(event.target.value);
}

function whitelabelnumber(){
    if(document.getElementById("flexCheckChecked").checked==false){
        setwhitelabel(0)
      };
      if(document.getElementById("flexCheckChecked").checked==true){
       setwhitelabel(no*250);
      }
}
function customlandingnumber(event){
    setcustomlanding(event.target.value);
}
function customlobbynumber(event){
    setcustomlobby(event.target.value);
}

function setthreenumber(){
    if(document.getElementById("three").checked==false){
        setthree(0)
      };
      if(document.getElementById("three").checked==true){
       setthree(no*300);
      }
}
function gamesnumber(event){
    setgames(event.target.value)
}
function boothnumber(event){
    setbooth(event.target.value);
}
function auditoriumnumber(event){
    setauditorium(event.target.value)
}

function hournumber(event){
    sethour(event.target.value)
}


let total=( parseInt((attend-200)/25)*20) + parseInt((exhibitor-3)*100)+ parseInt((customhall)*100) + parseInt((custombooth)*100)+  parseInt(whitelabel )+ parseInt((customlanding)*200)+ parseInt(three)+ parseInt((customlobby)*200)+parseInt((auditorium)*200)+ parseInt((games-1)*50)+ parseInt(booth*100)+  parseInt((hour)*75);
    return(
        <div className="row">
            
            <pre></pre>
            <h1>Calculator</h1>
            <pre></pre> <pre></pre> <pre></pre>
            <div className="col-md-1"></div>
            
              
            
            
            
            
            
            
            <div className="col-md-10 calcontainer">
            <div className="row step ">
            <h3>Step1 : Choose Your Plan</h3>
           <pre></pre><pre></pre>
            <select class="form-select" aria-label="Default select example">
            <option selected>Choose Your Plan</option>
  <option value="1">Tester</option>
  <option value="2">Small</option>
  <option value="3">Medium</option>
  <option value="4">Large</option>
</select> <pre></pre> <pre></pre></div>
            <div className="row step ">
           <h3>Step2 : Customize Your Pricing</h3>
           <pre></pre>
           
           <h5>Number of Events</h5>
                    <div className='col-6 ' >
                   
                    <label for="customRange1" class="form-label">Define the number of Events</label>
                    <pre></pre>
                    <div className='row'>
                    <span className='col-1'>1</span>
                    <div className='col-10'><input type="range" min="1" max="100" step="1" onChange={eventnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>100</span>
                        
                        </div>

                     </div>
                     <div className='col-2'></div>
                     <div className='col-3 '>
                     <div id='rangeValue'>
                        <input className='value' value={no} ></input>
                     </div>
                     </div>
                     <pre></pre>   <pre></pre>   
                    
            </div>


            <div className="row step ">
         
            <h5>Date</h5>
            <div className='col-6'>
              
                
                <p>Define Your First Event Date</p>
            </div>
            <div className='col-2'></div>
            <div className='col-3'>
                <input type='date' className='value'></input>
            </div>
            <pre></pre>   <pre></pre>   
            </div>

            <div className="row step ">
                <h3>Step 3 : Select your volume</h3>
                <pre></pre>
                <h5>Attendees Volume</h5>
                <div className='col-6'>
                 
                 <p>Define the volume of attendees for all your events</p>
                   <div className='row'>
                    <span className='col-1'>200</span>
                    <div className='col-10'><input type="range" min="200" max="10000" step="25"  onChange={attendenumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>10000</span>
                    
                        
                        </div>
                       
                </div>
                <div className='col-2'></div>
                <div className='col-3 '>
                    <input className='value' value={attend}></input> <pre></pre>
                    <h6>Cost: ${((attend-200)/25)*20}</h6>
                </div>
                </div>

                <div className="row step  ">
                <pre></pre> <pre></pre>
                <h5>Exhibitors Volume</h5>
                <div className='col-12'>
                 
                 <p>Extra Booth($100/booth)</p>
                   <div className='row'>
                  
                    <div className='col-1  zero'>3</div>
                    <div className='col-5'><input type="range" min="3" max="100" step="1" onChange={exhibitornumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>100</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={exhibitor}></input><pre></pre>
                    <h6>Cost: ${(exhibitor-3)*100}</h6>
                </div>
                   <pre></pre>
                    
                    <p>Buy Custom Hall Template </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="50" step="1" onChange={customhallnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={customhall} ></input><pre></pre>
                    <h6>Cost: ${(customhall)*100}</h6>
                    </div>

                    <pre></pre>
                    
                    <p>Buy Custom Booth Template  </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="50" step="1" onChange={customboothnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={custombooth} ></input><pre></pre>
                    <h6>Cost: ${(custombooth)*100}</h6>
                    </div>
                        
                        </div>
                       
                </div>
               
                
                </div>

                <div className="row step "><pre></pre>
                <h3>Step 4 : Select your Module</h3>
                <pre></pre><pre></pre>
                   <div className='col-3'><img src={whitelabel} height='100px' width='200px' ></img></div>
                   <div className='col-7   '>
                       <h5>White Label ($250/event)</h5>
                       <p>
                       Showcase your brand! Create a white-label platform using your brand name, font, colours etc for an exclusive experience.
                       </p>
                       
                   </div>
                  <div className='col-2'><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={whitelabelnumber}></input><pre></pre>  <h6>Cost: ${whitelabel }</h6>
 
 </div>
                  
                   
                    </div>

                    <div className="  row step ">
                        <h3> Step 5: Landing/Event Microsite</h3>
                        <p>Buy Custom Landing Template  </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="50" step="1" onChange={customlandingnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={customlanding} ></input><pre></pre>
                    <h6>Cost: ${(customlanding)*200}</h6></div>
                         </div>

                         <div className="  row step ">
                        <h3>Step 6: 3D and 360° Walkthrus </h3>
                        
                        <div className='col-4'><p>Branded Lobby Walkthrough ( Max to 3 doors ) ($300/event) </p></div>
                    <div className='col-4'></div>
                
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked  " id="three" onChange={setthreenumber}></input><pre></pre>
                    <h6>Cost: ${three}</h6></div>
                         </div>



                         <div className="  row step ">
                        <h3>Step 7: Lobby</h3>
                        <p>Buy Custom Lobby Template   </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="50" step="1" onChange={customlobbynumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={customlobby} ></input><pre></pre>
                    <h6>Cost: ${(customlobby)*200}</h6></div>
                         </div>


                         <div className="  row step ">
                        <h3>Step 8: Auditorium </h3>
                        <p>Buy Custom Auditorium Template  </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="50" step="1" onChange={auditoriumnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={auditorium} ></input><pre></pre>
                    <h6>Cost: ${(auditorium)*200}</h6></div>
                         </div>


                         <div className="  row step ">
                        <h3>Step 9: Engagement </h3>
                        <p>Games with Leaderboard ($50/game) </p>
                        
                        <span className='col-1 zero'>1</span>
                    <div className='col-5'><input type="range" min="1" max="50" step="1" onChange={gamesnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={games} ></input><pre></pre>
                    <h6>Cost: ${(games-1)*50}</h6></div>

 
               <p>Photo Booth ($100/month) </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="10" step="1" onChange={boothnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>10</span>
                   <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={booth} ></input><pre></pre>
                    <h6>Cost: ${booth*100}</h6></div>

                         </div>


                         <div className="  row step ">
                        <h3>Step 10: Support </h3>
                        <p>Onboarding Executive (Tech Support, 1st Event Free Tech Support 
Post 1st Event - Per hr $ 75) </p>
                    <span className='col-1 zero'>0</span>
                    <div className='col-5'><input type="range" min="0" max="50" step="1" onChange={hournumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>50 hours</span>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    <input className='value' value={hour} ></input><pre></pre>
                    <h6>Cost: ${(hour)*75}</h6></div>
                         </div>

                    
               
               
                         <h2><pre></pre>Total:-${total} </h2>
                
            </div>
            
            
            
            
            
            
            
            
            
            <div className="col-md-"></div>
            
          
        </div>
    );

}
export default Calculator;