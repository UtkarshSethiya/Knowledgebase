
import './calculator.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import quest from './images/quest.png';
import logo from './images/logo.png';


  
  

function Calculator(){
    
 
const[no,setno]=useState(1);
const[attend,setattend]=useState(200);
const[exhibitor,setexhibitor]=useState(3);
const[customhall,setcustomhall]=useState(2);
const[custombooth,setcustombooth]=useState(1);
const[whitelabel,setwhitelabel]=useState(0);
const[customlanding,setcustomlanding]=useState(0);
const[customlobby,setcustomlobby]=useState(0);
const[three,setthree]=useState(0);
const[auditorium,setauditorium]=useState(0);
const[games,setgames]=useState(1);
const[booth,setbooth]=useState(0);
const[hour,sethour]=useState(0);






function eventnumber(event){
    setno(event.target.value);
    document.getElementById("eventno").addEventListener("change",function(evt){
        if(document.getElementById("eventno").value>30){
            document.getElementById("eventno").value=30;
            
           event.preventDefault();
         }
         if(document.getElementById("eventno").value<1){
            document.getElementById("eventno").value=1;
            
           event.preventDefault();
         }
         setno(document.getElementById("eventno").value);
        })
      
    
    
}





/*radio button functions*/

function twohundred(){
    document.getElementById('plan').innerHTML='';
    document.getElementById('plan').innerHTML="Selected Plan : Small plan";
    document.getElementById('medium').style.display='none';
    document.getElementById('small').style.display='block';
    document.getElementById('custom').style.display='none';
}

function fivehundred(){
    document.getElementById('plan').innerHTML='';
    document.getElementById('plan').innerHTML="Selected Plan : Medium plan";
    document.getElementById('medium').style.display='block';
    document.getElementById('small').style.display='none';
    document.getElementById('custom').style.display='none';
}
function thousand(){
    document.getElementById('plan').innerHTML='';
    document.getElementById('plan').innerHTML="Selected Plan : Custom plan";
    document.getElementById('medium').style.display='none';
    document.getElementById('small').style.display='none';
    document.getElementById('custom').style.display='block';
   
}

/*Cost of all features*/

let attendcost=((attend-200)/25)*20;
let exhibitorcost=(exhibitor-3)*100;
let customhallcost=(customhall-2)*100;
let customboothcost=(custombooth)*100;
let whitelabelcost=whitelabel;
let customlandingcost=(customlanding)*200;
let threecost=three;
let customlobbycost=(customlobby)*200;
let auditoriumcost=(auditorium)*200;
let gamescost=(games-1)*50;
let boothcost=booth*100;
let hourcost=(hour)*75




/*let total=( parseInt((attend-200)/25)*20) + parseInt((exhibitor-3)*100)+ parseInt((customhall)*100) + parseInt((custombooth)*100)+  parseInt(whitelabel )+ parseInt((customlanding)*200)+ parseInt(three)+ parseInt((customlobby)*200)+parseInt((auditorium)*200)+ parseInt((games-1)*50)+ parseInt(booth*100)+  parseInt((hour)*75);*/
let total=attendcost+exhibitorcost +customhallcost+customboothcost+whitelabelcost+customlandingcost+threecost+customlobbycost+auditoriumcost+gamescost+boothcost+hourcost;   


return(

   
        <div className="row "> 
        <div className='row  bg-dark'>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid row">
    <div className='col-3  logo  '>
    <a class="navbar-brand" href="https://bizconnectevents.com/" ><img src={logo} height="50px" width="80px"></img>   </a>
    <Link class="navbar-brand home " to='/home'> Home</Link>
    
    </div>
    
<div className='col-6   '  > </div>

    <div className='col-2  subscribe'>
    
    <button className="btn btn2 btn-outline-light" type="submit"><i class="bi bi-cash-coin"></i> Pricing</button>
  
    
    <button className="btn btn1 " type="submit">Subscribe</button>
    </div>
    
  </div>
</nav></div>
    
        <div className='quest'><a href='https://www.google.com/'><img src={quest} height='40px' width='40px'></img></a></div>
  
       

            
            <pre></pre>
            <h1>Calculator</h1>
            <pre></pre> <pre></pre> <pre></pre>
            <div className="col-md-1"></div>
            
              
            
            
            
            
            
            
            <div className="col-md-10 calcontainer">
            

            <div className="row step ">
           <h3>Step1 : Customize Your Pricing</h3>
           <pre></pre>
           
           <h5>Number of Events <a title='Select number of Events required'><i class="bi bi-info-circle-fill"></i></a></h5>
                    <div className='col-6 ' >
                   
                    <label for="customRange1" class="form-label">Select the number of Events</label>
                    <pre></pre>
                    <div className='row'>
                    <span className='col-1'>1</span>
                    <div className='col-10'><input type="range" value={no} min="1" max="30" step="1" onChange={eventnumber}  class="form-range  " id="customRange1"/></div>
                    <span className='col-1'>30</span>
                        
                        </div>

                     </div>
                     <div className='col-2'></div>
                     <div className='col-3 '>
                     <div id='rangeValue'>
                        <input id='eventno' className='value' type='number' value={no} min="1" max="30" step="1" onChange={eventnumber} ></input>
                     </div>
                     </div>
                     <pre></pre>   <pre></pre>   
                    
            </div>


            <div className="row step ">
         
            <h5>Date <a title='Select your first event date'><i class="bi bi-info-circle-fill"></i></a> </h5>
            <div className='col-6'>
              
                
                <p>Define Your First Event Date</p>
            </div>
            <div className='col-2'></div>
            <div className='col-3'>
                <input type='date' className='value'></input>
            </div>
            <pre></pre>   <pre></pre>   
            </div>

            <div className="row step  ">
                <h3>Step 2 : Choose Your Plan </h3>
                <pre></pre>
                <h5>Select no of Attendees to get your plan <a title='Give us the number of Attendes in the event '><i class="bi bi-info-circle-fill"></i></a></h5>
                <div className='row' ><pre></pre>
                 <div class="form-check col-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={twohundred} ></input>
  <label class="form-check-label" for="flexRadioDefault1">
    200 to 500 
  </label>
</div>
<div class="form-check col-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={fivehundred} ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    500 to 1000 
  </label>
</div>
<div class="form-check col-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={thousand} ></input>
  <label class="form-check-label" for="flexRadioDefault2">
  1000+ 
  </label>
</div>
                 </div>
                 <pre></pre><pre></pre>
               <div id='plancont'><h6   id='plan'></h6><Link id='custom' to='/calculator_custom' className='  btn btn-outline-primary btn2'>Continue</Link> <Link id='small' to='/calculator_small' className='  btn btn-outline-primary btn2'>Continue</Link><Link id='medium' to='/calculator_medium' className='  btn btn-outline-primary btn2'>Continue</Link></div>
               
                </div>
                
              
                        
                
            </div>
            
            
            
            
            
            
            
            
            
            <div className="col-md-"></div>
            
          
        </div>
    );

}
export default Calculator;