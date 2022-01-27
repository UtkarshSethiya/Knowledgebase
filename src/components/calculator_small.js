
import './calculator.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import quest from './images/quest.png';
import logo from './images/logo.png';
function Small(){
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
        setno(event.target.value)
        
    }
    
    
    
    function attendenumber(event){
        setattend(event.target.value);
     document.getElementById("attend").addEventListener("change",function(evt){
       
        if(document.getElementById("attend").value<200){
            document.getElementById("attend").value=200;
            
           event.preventDefault();
         }
         if(document.getElementById("attend").value>500){
            document.getElementById("attend").value=500;
            
           event.preventDefault();
         }
         if((document.getElementById("attend").value%25)!=0){
            document.getElementById("attend").value=document.getElementById("attend").value-(document.getElementById("attend").value%25)+25;
         }
         setattend(document.getElementById("attend").value);
     })
     
    }
    
    
    function exhibitornumber(event){
        setexhibitor(event.target.value);
        document.getElementById("exhibitor").addEventListener("change",function(evt){
            if(document.getElementById("exhibitor").value<3){
                document.getElementById("exhibitor").value=3;
                
               event.preventDefault();
             }
             if(document.getElementById("exhibitor").value>100){
                document.getElementById("exhibitor").value=100;
                
               event.preventDefault();
             }
             if((document.getElementById("exhibitor").value%3)!=0){
                document.getElementById("exhibitor").value=document.getElementById("exhibitor").value-(document.getElementById("exhibitor").value%3)+1;
             }
    
             setexhibitor(document.getElementById("exhibitor").value);
    
        })
    }
    function customhallnumber(event){
        setcustomhall(event.target.value);
        document.getElementById("customhall").addEventListener("change",function(evt){
            if(document.getElementById("customhall").value<=2){
                document.getElementById("customhall").value=2;
                customhallcost=0;
               event.preventDefault();
             }
             if(document.getElementById("customhall").value>50){
                document.getElementById("customhall").value=50;
                
               event.preventDefault();
             }
             
              
             setcustomhall(document.getElementById("customhall").value);
    
        })
        
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
        setgames(event.target.value);
        document.getElementById("game").addEventListener("change",function(evt){
            if(document.getElementById("game").value<=1){
                document.getElementById("game").value=1;
                customhallcost=0;
               event.preventDefault();
             }
             if(document.getElementById("game").value>50){
                document.getElementById("game").value=50;
                
               event.preventDefault();
             }
             
              
             setgames(document.getElementById("game").value);
            })
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
    
    /*radio button functions*/
    
  
    
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
<div className='quest'><Link to='/pricing/pricing'><img src={quest} height='40px' width='40px'></img></Link></div>
      
           
    
                
                <pre></pre>
                <h1>Calculator</h1>
                <pre></pre> <pre></pre> <pre></pre>
                <div className="col-md-1"></div>
                
                  
                
                
                
                
                
                
                <div className="col-md-10 calcontainer">
                
    
                <div className="row step  ">
                    <p id='plantype'>Small Plan</p>
                    <h3>Step 3 : Select your volume </h3>
                    <pre></pre>
                    <h5>Attendees Volume <a title='Give us the number of Attendes in the event '><i class="bi bi-info-circle-fill"></i></a></h5>
                   
                   <div id='plancont'><h6   id='plan'></h6> <Link id='medium' to='/calculator_medium' className='  btn btn-outline-primary btn2'>Continue</Link></div>
                   
                    </div>
                    
                    <div className="  row step ">
                            
                            <p>Define the volume of attendees per month for all your events <a title='For Small Plan Attendes upto 200 are free beyond that, every additional 1-25 users $20 wil be charged    '><i class="bi bi-info-circle-fill"></i></a> </p>
                        <span className='col-1 zero'>200</span>
                        <div className='col-5'><input type="range" min="200" max="500" step="25" value={attend} onkeydown="return false" onChange={attendenumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>500</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value' id='attend'  type='number'min="200" max="500" step="25" value={attend} onkeydown="return false" onChange={attendenumber} ></input><pre></pre>
                        <h6>Cost: ${attendcost}</h6></div>
                             </div>
                     
                    <div className="row step  ">
                    <pre></pre> <pre></pre>
                    <h5>Exhibitors Volume </h5>
                    <div className='col-12'>
                     
                     <p>Extra Booth($100/booth) <a title='For Small plan Booths upto 3 are free above 3 you will be charged'><i class="bi bi-info-circle-fill"></i></a></p>
                       <div className='row'>
                      
                        <div className='col-1  zero'>3</div>
                        <div className='col-5'><input type="range" min="3" max="100" step="1" value={exhibitor} onChange={exhibitornumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>100</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input id='exhibitor'  type='number' className='value'  min="3" max="100" step="1" value={exhibitor} onChange={exhibitornumber} ></input><pre></pre>
                        <h6>Cost: ${exhibitorcost}</h6>
                    </div>
                       <pre></pre>
                        
                        <p>Buy Custom Hall Template ($100/hall) <a title='For medium plan Halls upto 2 are free above 2 you will be charged'><i class="bi bi-info-circle-fill"></i></a> </p>
                        <span className='col-1 zero'>2</span>
                        <div className='col-5'><input type="range" value={customhall} min="2" max="50" step="1" onChange={customhallnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input id='customhall'  type='number' className='value' min="2" max="50" step="1" value={customhall}  onChange={customhallnumber} ></input><pre></pre>
                        <h6>Cost: ${customhallcost}</h6>
                        </div>
    
                        <pre></pre>
                        
                        <p>Buy Custom Booth Template ($100/template) <a title='Select no of custom booths'><i class="bi bi-info-circle-fill"></i></a> </p>
                        <span className='col-1 zero'>1</span>
                        <div className='col-5'><input type="range" min="1" max="50" step="1" value={custombooth} onChange={customboothnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number'  value={custombooth} min="1" max="50" step="1" onChange={customboothnumber}   ></input><pre></pre>
                        <h6>Cost: ${customboothcost}</h6>
                        </div>
                            
                            </div>
                           
                    </div>
                   
                    
                    </div>
    
                    <div className="row step "><pre></pre>
                    <h3>Step 4 : Select your Module</h3>
                    <pre></pre><pre></pre>
                      
                       <div className='col   '>
                           <h5>White Label ($250/event) <a title='Depending on no of events white label will be charged'><i class="bi bi-info-circle-fill"></i></a></h5>
                           <p>
                           Showcase your brand! Create a white-label platform using your brand name, font, colours etc for an exclusive experience.
                           </p>
                           
                       </div>
                      <div className='col-3'><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={whitelabelnumber}></input><pre></pre>  <h6>Cost: ${ whitelabelcost}</h6>
     
     </div>
                      
                       
                        </div>
    
                        <div className="  row step ">
                            <h3> Step 5: Landing/Event Microsite</h3><pre></pre><pre></pre>
                            <p>Buy Custom Landing Template ($200/template) <a title='You will be charged $200 per template '><i class="bi bi-info-circle-fill"></i></a> </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={customlanding} min="0" max="50" step="1" onChange={customlandingnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={customlanding} min="0" max="50" step="1" onChange={customlandingnumber} ></input><pre></pre>
                        <h6>Cost: ${customlandingcost}</h6></div>
                             </div>
    
                             <div className="  row step ">
                            <h3>Step 6: 3D and 360° Walkthrus  </h3>
                            <pre></pre>
                            <div className='col'><h5>Branded Lobby Walkthrough ($300/event) <a title='Depending on no of events 3D and 360° Walkthrus will be charged Max to 3 doors'><i class="bi bi-info-circle-fill"></i></a> </h5></div>
                     
                    
                        <div className='col-3'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked  " id="three" onChange={setthreenumber}></input><pre></pre>
                        <h6>Cost: ${threecost}</h6></div>
                             </div>
    
    
    
                             <div className="  row step ">
                            <h3>Step 7: Lobby</h3><pre></pre>
                            <p>Buy Custom Lobby Template ($200/template) <a title='You will be charged $200 per template '><i class="bi bi-info-circle-fill"></i></a>  </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  ></input><pre></pre>
                        <h6>Cost: ${customlobbycost}</h6></div>
                             </div>
    
    
                             <div className="  row step ">
                            <h3>Step 8: Auditorium </h3><pre></pre>
                            <p>Buy Custom Auditorium Template ($200/template) <a title='You will be charged $200 per template '><i class="bi bi-info-circle-fill"></i></a></p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range"   value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber} ></input><pre></pre>
                        <h6>Cost: ${auditoriumcost}</h6></div>
                             </div>
    
    
                             <div className="  row step ">
                            <h3>Step 9: Engagement </h3>
                            <p>Games with Leaderboard ($50/game) <a title='For small plan games upto 1 are free above 1 you will be charged'><i class="bi bi-info-circle-fill"></i></a> </p>
                            
                            <span className='col-1 zero'>1</span>
                        <div className='col-5'><input type="range" value={games } min="1" max="50" step="1" onChange={gamesnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value' id='game'  type='number' value={games } min="1" max="50" step="1" onChange={gamesnumber} ></input><pre></pre>
                        <h6>Cost: ${gamescost}</h6></div>
    
     
                   <p>Photo Booth ($100/month) <a title='You will be charged $100 per month '><i class="bi bi-info-circle-fill"></i></a> </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={booth} min="0" max="10" step="1" onChange={boothnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>10</span>
                       <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={booth} min="0" max="10" step="1" onChange={boothnumber}  ></input><pre></pre>
                        <h6>Cost: ${boothcost}</h6></div>
    
                             </div>
    
    
                             <div className="  row step ">
                            <h3>Step 10: Support </h3>
                            <p>Onboarding Executive (Tech support $75/hour) <a title='Tech Support, 1st Event Free Tech Support 
    Post 1st Event - Per hr $ 75'><i class="bi bi-info-circle-fill"></i></a>  </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={hour} min="0" max="50" step="1" onChange={hournumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50 hours</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value' type='number' value={hour}min="0" max="50" step="1" onChange={hournumber}  ></input><pre></pre>
                        <h6>Cost: ${hourcost}</h6></div>
                             </div>
    
                        
                   
                   
                             <h2 className='total'><pre></pre>Total:-${total} </h2>
                             <h5 id='message'>Great,You are eligible for Small Plan!</h5>
                            
                    
                </div>
                
                
                
                
                
                
                
                
                
                <div className="col-md-"></div>
                
              
            </div>
        );
}
export default Small;
