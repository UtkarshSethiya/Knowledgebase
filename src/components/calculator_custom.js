
import './calculator.css'
import React, { useState } from 'react';
import './pdf.css'
import { Link } from "react-router-dom";
import quest from './images/quest.png';
import logo from './images/logo.png';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { jsPDF } from "jspdf";


function Custom(){
    const[no,setno]=useState(1);
    const[attend,setattend]=useState(1000);
    const[exhibitor,setexhibitor]=useState(0);
    const[customhall,setcustomhall]=useState(0);
    const[custombooth,setcustombooth]=useState(0);
    const[whitelabel,setwhitelabel]=useState(0);
    const[customlanding,setcustomlanding]=useState(0);
    const[customlobby,setcustomlobby]=useState(0);
    const[three,setthree]=useState(0);
    const[auditorium,setauditorium]=useState(0);
    const[games,setgames]=useState(0);
    const[booth,setbooth]=useState(0);
    const[hour,sethour]=useState(0);
    
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
    
    
    
    
    function eventnumber(event){
        setno(event.target.value)
        
    }
    
    
    
    function attendenumber(event){
        setattend(event.target.value);
     document.getElementById("attend").addEventListener("change",function(evt){
       
        if(document.getElementById("attend").value<1000){
            document.getElementById("attend").value=1000;
            
           event.preventDefault();
         }
         if(document.getElementById("attend").value>10000){
            document.getElementById("attend").value=10000;
            
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
           setwhitelabel(1);
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
           setthree(1);
          }
    }
    function gamesnumber(event){
        setgames(event.target.value);
        document.getElementById("game").addEventListener("change",function(evt){
            if(document.getElementById("game").value<=3){
                document.getElementById("game").value=3;
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
    
    let attendcost=((attend-1000)/25)*10;
    let exhibitorcost=(exhibitor)*100;
    let customhallcost=(customhall)*100;
    let customboothcost=(custombooth)*100;
    let whitelabelcost=whitelabel*250;
    let customlandingcost=(customlanding)*200;
    let threecost=three*300;
    let customlobbycost=(customlobby)*200;
    let auditoriumcost=(auditorium)*200;
    let gamescost=(games)*50;
    let boothcost=booth*100;
    let hourcost=(hour)*75
    
    function disappear(){
        document.getElementById('qotation').style.display='none'
        
    }
    function disapppearbutton(){
        document.getElementById('buttn').style.display='block'
        document.getElementById('spiner').style.display='none'
    }
    const pdfDownload = e => {
        
        e.preventDefault()
        document.getElementById('buttn').style.display='none'
        document.getElementById('spiner').style.display='block'
        document.getElementById('qotation').style.display='block'
        document.getElementById('qotation').style.marginLeft='50px'
        let doc = new jsPDF("landscape", 'pt', 'A4',true);
        
        doc.html(document.getElementById('qotation'), {
          callback: () => {
          
            doc.save('Bizonnect_Quotation.pdf');
          }
        });
        setTimeout(disappear,1);
        setTimeout(disapppearbutton,3000)
      
       
    }

 
    
    /*let total=( parseInt((attend-200)/25)*20) + parseInt((exhibitor-3)*100)+ parseInt((customhall)*100) + parseInt((custombooth)*100)+  parseInt(whitelabel )+ parseInt((customlanding)*200)+ parseInt(three)+ parseInt((customlobby)*200)+parseInt((auditorium)*200)+ parseInt((games-1)*50)+ parseInt(booth*100)+  parseInt((hour)*75);*/
    let total= attendcost+exhibitorcost +customhallcost+customboothcost+whitelabelcost+customlandingcost+threecost+customlobbycost+auditoriumcost+gamescost+boothcost+hourcost;   
    
    
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
                <h1>Calculator</h1><div className='col-1 '><Link to='/calculator' className='back'><i class="bi bi-arrow-left-square"></i></Link></div>
                <pre></pre> <pre></pre> <pre></pre>
                <div className="col-md-1"></div>
                
                  
                
                
                
                
                
                
                <div  className="col-md-10 calcontainer">
                
    
                <div className="row step  ">
                    <p id='plantype'> Custom Plan</p>
                    <h3>Step 3 : Select your volume </h3>
                    <pre></pre>
                    <h5>Attendees Volume <Tippy className='tippy' content="Give us the number of Attendes in the event "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy></h5>
                   
                   <div id='plancont'><h6   id='plan'></h6> <Link id='medium' to='/calculator_medium' className='  btn btn-outline-primary btn2'>Continue</Link></div>
                   
                    </div>
                    
                    <div className="  row step ">
                            
                            <p>Define the volume of attendees per month for all your events <Tippy className='tippy' content="For Custom Plan Attendes upto 1000 are free beyond that, every additional 1-25 users $10 wil be charged "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>1000</span>
                        <div className='col-5'><input type="range" min="1000" max="10000" step="25" value={attend} onkeydown="return false" onChange={attendenumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>10000</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value' id='attend'  type='number'min="1000" max="10000" step="25" value={attend} onkeydown="return false" onChange={attendenumber} ></input><pre></pre>
                        <h6>Cost: ${attendcost}</h6></div>
                             </div>
                     
                    <div className="row step  ">
                    <pre></pre> <pre></pre>
                    <h5>Exhibitors Volume </h5><pre></pre><pre></pre><pre></pre>
                    <div className='col-12'>
                     
                     <p>Extra Booth($100/booth) <Tippy className='tippy' content=" For Custom plan you will be charged $100 per booth"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                       <div className='row'>
                      
                        <div className='col-1  zero'>0</div>
                        <div className='col-5'><input type="range" min="0" max="100" step="1" value={exhibitor} onChange={exhibitornumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>100</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input id='exhibitor'  type='number' className='value'  min="0" max="100" step="1" value={exhibitor} onChange={exhibitornumber} ></input><pre></pre>
                        <h6>Cost: ${exhibitorcost}</h6>
                    </div>
                       <pre></pre>
                        
                        <p>Buy Custom Hall Template ($100/hall) <Tippy className='tippy' content=" For Custom plan you will be charged $100 per hall"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>   </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={customhall} min="0" max="50" step="1" onChange={customhallnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input id='customhall'  type='number' className='value' min="0" max="50" step="1" value={customhall}  onChange={customhallnumber} ></input><pre></pre>
                        <h6>Cost: ${customhallcost}</h6>
                        </div>
    
                        <pre></pre>
                        
                        <p>Buy Custom Booth Template ($100/template) <Tippy className='tippy' content=" Select no of custom booths"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>  </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" min="0" max="50" step="1" value={custombooth} onChange={customboothnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number'  value={custombooth} min="0" max="50" step="1" onChange={customboothnumber}   ></input><pre></pre>
                        <h6>Cost: ${customboothcost}</h6>
                        </div>
                            
                            </div>
                           
                    </div>
                   
                    
                    </div>
    
                    <div className="row step "><pre></pre>
                    <h3>Step 4 : Select your Module</h3>
                    <pre></pre><pre></pre>
                       
                       <div className='col-9   '>
                           <h5>White Label ($250/event)  <Tippy className='tippy' content=" Depending on no of events white label will be charged"><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>   </h5>
                           <p>
                           Showcase your brand! Create a white-label platform using your brand name, font, colours etc for an exclusive experience.
                           </p>
                           
                       </div>
                      <div className='col-3'><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={whitelabelnumber}></input><pre></pre>  <h6>Cost: ${ whitelabelcost}</h6>
     
     </div>
                      
                       
                        </div>
    
                        <div className="  row step ">
                            <h3> Step 5: Landing/Event Microsite</h3><pre></pre><pre></pre>
                            <p>Buy Custom Landing Template ($200/template)  <Tippy className='tippy' content=" You will be charged $200 per template "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>    </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={customlanding} min="0" max="50" step="1" onChange={customlandingnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={customlanding} min="0" max="50" step="1" onChange={customlandingnumber} ></input><pre></pre>
                        <h6>Cost: ${customlandingcost}</h6></div>
                             </div>
    
                             <div className="  row step ">
                            <h3>Step 6: 3D and 360° Walkthrus  </h3><pre></pre><pre></pre><pre></pre>
                            <pre></pre>
                            <div className='col-9'><p>Branded Lobby Walkthrough ($300/event) <Tippy className='tippy' content=" Depending on no of events 3D and 360° Walkthrus will be charged Max to 3 doors "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>      </p></div>
                       
                        <div className='col-3'>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked  " id="three" onChange={setthreenumber}></input><pre></pre>
                        <h6>Cost: ${threecost}</h6></div>
                             </div>
    
    
    
                             <div className="  row step ">
                            <h3>Step 7: Lobby</h3><pre></pre><pre></pre><pre></pre>
                            <p>Buy Custom Lobby Template ($200/template)  <Tippy className='tippy' content=" You will be charged $200 per template  "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>     </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={customlobby} min="0" max="50" step="1" onChange={customlobbynumber}  ></input><pre></pre>
                        <h6>Cost: ${customlobbycost}</h6></div>
                             </div>
    
    
                             <div className="  row step ">
                            <h3>Step 8: Auditorium </h3><pre></pre><pre></pre><pre></pre>
                            <p>Buy Custom Auditorium Template ($200/template) <Tippy className='tippy' content=" You will be charged $200 per template  "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy>   </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range"   value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={auditorium} min="0" max="50" step="1" onChange={auditoriumnumber} ></input><pre></pre>
                        <h6>Cost: ${auditoriumcost}</h6></div>
                             </div>
    
    
                             <div className="  row step ">
                            <h3>Step 9: Engagement </h3><pre></pre><pre></pre><pre></pre>
                            <p>Games with Leaderboard ($50/game)  <Tippy className='tippy' content=" For Custom Plan  games are charged for $100 "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                            
                            <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={games } min="0" max="50" step="1" onChange={gamesnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value' id='game' type='number' value={games } min="0" max="50" step="1" onChange={gamesnumber} ></input><pre></pre>
                        <h6>Cost: ${gamescost}</h6></div>
    
     
                   <p>Photo Booth ($100/month)<Tippy className='tippy' content=" For Custom Plan you will be charged $100 per Photo Booth  "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={booth} min="0" max="10" step="1" onChange={boothnumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>10</span>
                       <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value'  type='number' value={booth} min="0" max="10" step="1" onChange={boothnumber}  ></input><pre></pre>
                        <h6>Cost: ${boothcost}</h6></div>
    
                             </div>
    
    
                             <div className="  row step ">
                            <h3>Step 10: Support </h3><pre></pre><pre></pre><pre></pre>
                            <p>Onboarding Executive (Tech support $75/hour) <Tippy className='tippy' content=" Tech Support, 1st Event Free Tech Support 
    Post 1st Event - Per hr $ 75 "><button className='poper'><i class="bi bi-info-circle-fill"></i></button></Tippy> </p>
                        <span className='col-1 zero'>0</span>
                        <div className='col-5'><input type="range" value={hour} min="0" max="50" step="1" onChange={hournumber}  class="form-range  " id="customRange1"/></div>
                        <span className='col-1'>50 hours</span>
                        <div className='col-2'></div>
                        <div className='col-2'>
                        <input className='value' type='number' value={hour}min="0" max="50" step="1" onChange={hournumber}  ></input><pre></pre>
                        <h6>Cost: ${hourcost}</h6></div>
                             </div>
    
                        
                   
                   
                             <h2  className='total'><pre></pre>Total:-${total}   </h2>
                             <h5 id='message'>Great,You are eligible for Custom Plan! Talk with us.</h5>
                            <pre></pre>
                            
                             <button id='buttn' className='qotationbutton' onClick={pdfDownload}>Get My Quotation</button>
                             <div id='spiner' class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

		
                </div>
                
                
                
                
                
                
                
                
                
                <div className="col-md-"></div>
                
              
                
                 <div id='qotation' className='row  invoice2 '>
                   
                     <div className='row '>
                         <div className='col-2 '><img className='logo'  src={logo} height='80px' ></img>
                         
                          <p className='adress'> #338,5th Block Rajajinagar Bangalore 560010<br></br> Email-contact@bizconnectevents.com </p></div>
                         <div className='col-4 bf'>  <p> Date: {today} <br></br> Plantype: <span className='total2'>Custom </span> </p> </div>
                          
                        
                          </div>
                    
                   <div className='col-1'></div>
                   <div className='col-7  ' >
                    <div className='row '>
                       <div className='col-4  top '>Features</div>
                       <div className='col-3  top ' >Quantity</div>
                       <div className='col-3  top '>Cost</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>Attendees Volume</div>
                       <div className='col-3 features' >{attend}</div>
                       <div className='col-3 features '>${attendcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>Extra Booth</div>
                       <div className='col-3 features' >{exhibitor}</div>
                       <div className='col-3 features'>${exhibitorcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>Custom Hall Template </div>
                       <div className='col-3 features' >{customhall}</div>
                       <div className='col-3 features '>${customhallcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>Custom Booth Template </div>
                       <div className='col-3 features' >{custombooth}</div>
                       <div className='col-3  features'>${customboothcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>White Label </div>
                       <div className='col-3 features' >{whitelabel}</div>
                       <div className='col-3 features '>${whitelabelcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'> Custom Landing Template </div>
                       <div className='col-3 features' >{customlanding}</div>
                       <div className='col-3 features '>${customlandingcost}</div>
                    </div>
                  
                    <div className='row'>
                       <div className='col-4 features'>   Branded Lobby Walkthrough </div>
                       <div className='col-3 features' >{three}</div>
                       <div className='col-3 features '>${threecost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>  Custom Lobby Template </div>
                       <div className='col-3 features' >{customlobby}</div>
                       <div className='col-3 features '>${customlobbycost}</div>
                    </div>

                    <div className='row'>
                       <div className='col-4 features'>  Auditorium  </div>
                       <div className='col-3 features' >{auditorium}</div>
                       <div className='col-3  features'>${auditoriumcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'>  Games with Leaderboard  </div>
                       <div className='col-3 features' >{games}</div>
                       <div className='col-3 features'>${gamescost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'> Photo Booth   </div>
                       <div className='col-3 features' >{booth}</div>
                       <div className='col-3 features'>${boothcost}</div>
                    </div>
                    <div className='row'>
                       <div className='col-4 features'> Onboarding Executive Support   </div>
                       <div className='col-3 features' >{hour}</div>
                       <div className='col-3 features'>${hourcost}</div>
                    </div>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-3'></div>
                        <div className='col-3 total2 cost'> Total- ${total}</div>
                       
                    </div>
                    </div>
                  
                 </div>











                </div>
              
          
        );
}
export default Custom;
