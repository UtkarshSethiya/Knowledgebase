import './pricing.css';
import pricetag from './img/price-tag.png'
import coffee from './img/coffee-cup.png'
import cookie from './img/cookies.png'
import pizza from './img/pizza.png'
import fast from './img/fast-food.png'
import { Link } from "react-router-dom";
import logo from '../images/logo.png';


function Pricing(){


    function subscription (){
    
        document.getElementById("monthly").innerHTML="Annual Subscription Cost";
        if (document.getElementById("flexSwitchCheckDefault").checked==false){
            document.getElementById("monthly").innerHTML="Monthly Subscription Cost";
        }
     

    }


    return(<div>
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
        <pre></pre>  <pre></pre>  <pre></pre>
           
           <h1  id="monthly">Monthly Subscription Cost</h1>
           <h5 id='twentypercent' >Get 20% discount for Annual Subscription</h5>
           <pre></pre><pre></pre>
           <div className="billcontainer"><span className="form-check form-switch billcontainer_span " ><input  onClick= {subscription} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />  </span><span id='billanually' >Bill Annually - </span><span id='billanuallychild' >Save 20%</span> </div> 
           <pre></pre><pre></pre>
           <div id='facont' className="container-sm border" >
    
    <div  className="row border-bottom">
        
    <div className="col-lg border-end">
        <div className="pricerow"><div className="row coffe border-end border-bottom pricerow">.</div></div>
        <div className="row coffe no_of_sing border-end border-bottom" id='pricecont' ><span className="pricerow"><img height="35px" width="40px" src={pricetag}></img> Price </span></div>
        <h2 id="Features" ><i className="bi bi-star-fill"></i>Features</h2></div>
    <div className="col-lg border-end ">
        <div className='mug' className="row coffe border-end border-bottom" > Coffee Cup / Mug</div>
        <div className='tester' className="row coffe border-end border-bottom  tester"><span><img height="35px" width="40px" src={coffee} ></img> Tester </span> </div>
        <div className="colchild ">
       
        <p className="childheading" ><i className="bi bi-hand-thumbs-up-fill"></i> Free</p>
        <p className="childcontent">For small conferences and workshops with 50 attendees per month with a Auditorium and booth included along with the choice of your event name in bizconnect URL.</p>
        <pre></pre><pre></pre>
        <p className="childprice">Starting at <pre></pre> <h5>$0/month</h5></p>
        <span  className="span " >SUBSCRIBE</span>
      </div>  
    </div>
    <div className="col-lg border-end">
        <div className="row coffe border-end border-bottom mug" > Coffee Cup / Mug</div>
        <div className="row coffe border-end border-bottom tester "><span><img height="35px" width="40px" src={cookie} ></img> Small </span> </div>
        <div className="colchild ">
           
            <p className="childheading" ><i className="bi bi-mortarboard-fill"></i> Regular  </p></div>
        <p className="childcontent">For small interactive events and webinars with 200 attendees per month. Engage with your audience and host them on the platform in any language of your choice. </p>
        <pre></pre><pre></pre>
        <div className="responsive">
            <p className="childprice ">Starting at <pre></pre> <h5>$700/month</h5></p>
        <span className="span  ">SUBSCRIBE</span>
        </div>
    </div>
    <div className="col-lg border-end ">
        <div className="row coffe border-end border-bottom mug" > Coffee Cup / Mug</div>
        <div className="row coffe border-end border-bottom tester "><span><img height="35px" width="40px" src={pizza}></img> Medium </span> </div>
        <div className="colchild "><p className="childheading perfectx" ><i className="bi bi-award-fill"></i> Perfect  </p>
        <p className="childcontent"> For regular events and fairs with 500 attendees per month. Expand your connections by networking with attendees that match your interests.        </p>
        <pre></pre><pre></pre>
        <div className="responsive">
            <p className="childprice ">Starting at <pre></pre> <h5>$1000/month</h5></p>
        <span className="span  " >SUBSCRIBE</span>
        </div>
        
    </div>
    </div>
    <div className="col border-right">
        <div className="row coffe  border-bottom mug" > Coffee Cup / Mug</div>
        <div className="row coffe  border-bottom tester "><span><img height="35px" width="40px" src={fast}></img> Large </span> </div>
        <div className="colchild "><p className="childheading" ><i className="bi bi-trophy-fill"></i>  Custom   </p>
            <p className="childcontentlast mb-4"> For large events, expos and summits with 1000 attendees per month. Build the most visually striking event with moving banners and customize it in any way you want. Talk to us to explore the unlimited possibilities!             </p>
           
            <p className="childprice" >Starting at <pre></pre> <h5>$$</h5></p>
            <span className="spanlast" >TALK WITH US</span>
        </div>
        <pre></pre> <pre></pre>
    </div>

      

    </div>
    <div class="hide">
        <div class="row">
            <div class="col heading heading border-end border-bottom"><i class="bi bi-star-fill"></i> Features </div>
            <div class="col heading border-end border-bottom"><i class="bi bi-hand-thumbs-up-fill"></i><pre></pre> Free</div>
            <div class="col heading border-end border-bottom"><i class="bi bi-mortarboard-fill"></i> Regular</div>
            <div class="col heading border-end border-bottom"><i class="bi bi-award-fill"></i> Perfect</div>
            <div class="col heading border-end border-bottom"><i class="bi bi-trophy-fill"></i>  Custom  </div>
        </div>
   
    
        <div class="row "  >
            <div class="col-12 section" >
                <i class="bi bi-person-video3"></i>  Event and Attandees 
            </div>
          
        </div>
        
        <div class="row">
            <div class="col  no_of_sing border-end border-bottom">Number of Single day event </div>
            <div class="col no_of_sing border-end border-bottom">Unlimited</div>
            <div class="col no_of_sing border-end border-bottom">Unlimited</div>
            <div class="col no_of_sing border-end border-bottom">Unlimited</div>
            <div class="col no_of_sing border-end border-bottom">Talk with us </div>
        </div>
        <div class="row">
            <div class="col no_of_sing border-end border-bottom">Number of  attendees </div>
            <div class="col no_of_sing border-end border-bottom">50 / Month</div>
            <div class="col no_of_sing border-end border-bottom">200 /Month</div>
            <div class="col no_of_sing border-end border-bottom"> 500 /Month</div>
            <div class="col no_of_sing border-end border-bottom">1000 /Month </div>
        </div>
        <div class="row">
            <div class="col no_of_sing border-end border-bottom">Additional attendees not per day (it should no be per month) </div>
            <div class="col no_of_sing border-end border-bottom"></div>
            <div class="col no_of_sing  border-end border-bottom">Every additional 1-25 users $20  </div>
            <div class="col no_of_sing border-end border-bottom"> Every additional 1-25 users $20  </div>
            <div class="col no_of_sing border-end border-bottom">Every additional 1-25 users $20 </div>
        </div>
        <div class="row">
            <div class="col no_of_sing border-end border-bottom">Max no. of Event Days</div>
            <div class="col no_of_sing border-end border-bottom">2</div>
            <div class="col no_of_sing border-end border-bottom">5</div>
            <div class="col no_of_sing border-end border-bottom"> 10</div>
            <div class="col no_of_sing border-end border-bottom">Custom</div>
        </div>
        
        <div class="row">
            <div class="col no_of_sing border-end border-bottom">Language Transcript / Translation (terms applied) </div>
            <div class="col no_of_sing border-end border-bottom"><i class="bi bi-check" ></i> </div>
            <div class="col no_of_sing border-end border-bottom"><i class="bi bi-check"></i> </div>
            <div class="col no_of_sing border-end border-bottom"><i class="bi bi-check"></i> </div>
            <div class="col no_of_sing border-end border-bottom"> <i class="bi bi-check"></i> </div>
            </div>


            <div class="row section "  >
                <div class="col-12   "  >
                    <i class="bi bi-globe2"></i> URL and Whitelabels Section
                </div>
              
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom"  >URL </div>
                <div class="col no_of_sing border-end border-bottom" >bizconnect.events<pre></pre>/youreventname </div>
                <div class="col no_of_sing border-end border-bottom" >bizconnect.events<pre></pre>/youreventname </div>
                <div class="col no_of_sing border-end border-bottom" >bizconnect.events<pre></pre>/youreventname </div>
                <div class="col no_of_sing border-end border-bottom" >bizconnect.events<pre></pre>/youreventname</div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Whitelabel URL<pre></pre> per event  (eventname.yourdomain.com)</div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" >$200/Event </div>
                <div class="col no_of_sing border-end border-bottom" >$200/Event </div>
                <div class="col no_of_sing border-end border-bottom" >$200/Event </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" id='url' >One Time Whitelabel URL <pre></pre> (chooseyourname.yourdomain.com<pre></pre>/youreventname)</div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" >$500/Event  </div>
                <div class="col no_of_sing border-end border-bottom" >$500/Event </div>
            </div>

           
            <div class="row section "  >
                <div class="col-12 " >
                    <i class="bi bi-badge-3d-fill"></i>  3D & 360° Walkthrus 
                </div>
              
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Walkthrough (Exterior - Entrance)</div>
                <div class="col no_of_sing border-end border-bottom" >Default  </div>
                <div class="col no_of_sing border-end border-bottom" >Default Free / Branded $ 100 </div>
                <div class="col no_of_sing border-end border-bottom" >Default Free / Branded $ 100 </div>
                <div class="col no_of_sing border-end border-bottom" >Default Free / Branded $ 100 </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Walkthrough (Exterior - Entrance) (Add Yours)</div>
                <div class="col no_of_sing border-end border-bottom" ></div>
                <div class="col no_of_sing border-end border-bottom" > Cost  </div>
                <div class="col no_of_sing border-end border-bottom" > Cost  </div>
                <div class="col no_of_sing border-end border-bottom" > Cost  </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Branded Lobby Walkthrough ( Max to 3 doors )</div>
                <div class="col no_of_sing border-end border-bottom" ></div>
                <div class="col no_of_sing border-end border-bottom" >$100/Event </div>
                <div class="col no_of_sing border-end border-bottom" >$100/Event  </div>
                <div class="col no_of_sing border-end border-bottom" >$100/Event </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >360 degree</div>
                <div class="col no_of_sing border-end border-bottom" >-</div>
                <div class="col no_of_sing border-end border-bottom" >-</div>
                <div class="col no_of_sing border-end border-bottom" >-</div>
                <div class="col no_of_sing border-end border-bottom" >Talk with us </div>
            </div>
      
            <div class="row section "  >
                <div class="col-12 " >
                    <i class="bi bi-telephone-fill"></i> Calls (Video & Audio) & <i class="bi bi-chat-dots-fill"></i> Chat 
                </div>
              
            </div>
            
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Chat (Single) (Built in or add third party (embed iFrame)</div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Video Call (Single) (Built in or add third party URL)</div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >One2One Chat (Built in or add third party embed iFrame)</div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" > </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Group Chat (emoji & GIF expressions) (Built in or add third party embed iFrame))</div>
                <div class="col no_of_sing border-end border-bottom" ></div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
            </div>

   
            <div class="row section "  >
                <div class="col-12 " >
                    <i class="bi bi-speaker-fill"></i>    Lobby
                </div>
              
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Templates</div>
                <div class="col no_of_sing border-end border-bottom" >2</div>
                <div class="col no_of_sing border-end border-bottom" >3 </div>
                <div class="col no_of_sing border-end border-bottom" >5 </div>
                <div class="col no_of_sing border-end border-bottom" >Special Templates </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Static </div>
                <div class="col no_of_sing border-end border-bottom" >Default Templates</div>
                <div class="col no_of_sing border-end border-bottom" >Default Templates</div>
                <div class="col no_of_sing border-end border-bottom" >Default Templates</div>
                <div class="col no_of_sing border-end border-bottom" >Default Templates</div>
            </div>
            <div class="row">
                <div  class="col no_of_sing border-end border-bottom" >Zoom Out Hanging Banner </div>
                <div class="col no_of_sing border-end border-bottom" >Yes Based on Template Chosen</div>
                <div class="col no_of_sing border-end border-bottom" >Yes Based on Template Chosen</div>
                <div class="col no_of_sing border-end border-bottom" >Yes Based on Template Chosen</div>
                <div class="col no_of_sing border-end border-bottom" >Yes Based on Template Chosen</div>
               
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Static/GIF Hanging Banner</div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i>  </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i>  </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i>  </div>
                <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i>  </div>
            </div>
            <div class="row">
                <div class="col no_of_sing border-end border-bottom" >Buy Custom Landing Template </div>
                <div class="col no_of_sing border-end border-bottom" >$100 </div>
                <div class="col no_of_sing border-end border-bottom" >$100 </div>
                <div class="col no_of_sing border-end border-bottom" >$100 </div>
                <div class="col no_of_sing border-end border-bottom" >Special template </div>
            </div>


<div class="row section "  >
    <div class="col-12 " >
        <i class="bi bi-easel2-fill"></i> Auditorium 
    </div>
  
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Number of Auditoriums (Multiple Tracks) (Select your live streaming - YouTube, Vimeo (Add URL player) or request ) </div>
    <div class="col no_of_sing border-end border-bottom" >1 </div>
    <div class="col no_of_sing border-end border-bottom" >Multiple</div>
    <div class="col no_of_sing border-end border-bottom" >Multiple</div>
    <div class="col no_of_sing border-end border-bottom" >Multiple</div>
</div>

<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Banner</div>
    <div class="col no_of_sing border-end border-bottom" >   </div>
    <div class="col no_of_sing border-end border-bottom" >As per template</div>
    <div class="col no_of_sing border-end border-bottom" >As per template</div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Banner GIF</div>
    <div class="col no_of_sing border-end border-bottom" >   </div>
    <div class="col no_of_sing border-end border-bottom" >As per template</div>
    <div class="col no_of_sing border-end border-bottom" >As per template</div>
    <div class="col no_of_sing border-end border-bottom" ></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >DIY Speakers/Session Management/Agenda</div>
    <div class="col no_of_sing border-end border-bottom" >   </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Speakers Lounge </div>
    <div class="col no_of_sing border-end border-bottom" >   </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Language Interpreter - (English + Your choice) (Interpreter cost not included) </div>
    <div class="col no_of_sing border-end border-bottom" >   </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" >$200/Event </div>
    <div class="col no_of_sing border-end border-bottom" >$200/Event </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Q&A (Text Form) </div>
    <div class="col no_of_sing border-end border-bottom" >   </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i>  </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i>  </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Buy Custom Auditorium Template </div>
    <div class="col no_of_sing border-end border-bottom" >  $75 </div>
    <div class="col no_of_sing border-end border-bottom" >$75</div>
    <div class="col no_of_sing border-end border-bottom" >$75</div>
    <div class="col no_of_sing border-end border-bottom" >Special Template  </div>
</div>


<div class="row section "  >
    <div class="col-12 "  >
        <i class="bi bi-ticket-fill"></i> Exhibition 
    </div>
  
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Halls </div>
    <div class="col no_of_sing border-end border-bottom" >  1 </div>
    <div class="col no_of_sing border-end border-bottom" >2</div>
    <div class="col no_of_sing border-end border-bottom" >5</div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Exhibition Booth  </div>
    <div class="col no_of_sing border-end border-bottom" >  1 </div>
    <div class="col no_of_sing border-end border-bottom" >3</div>
    <div class="col no_of_sing border-end border-bottom" >5</div>
    <div class="col no_of_sing border-end border-bottom" > Talk with Us </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Extra Booth </div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
    <div class="col no_of_sing border-end border-bottom" >$100/Event </div>
    <div class="col no_of_sing border-end border-bottom" >$100/Event </div>
    <div class="col no_of_sing border-end border-bottom" > Talk with Us </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Per Chat </div>
    <div class="col no_of_sing border-end border-bottom" >  $25</div>
    <div class="col no_of_sing border-end border-bottom" >$8 </div>
    <div class="col no_of_sing border-end border-bottom" >$8</div>
    <div class="col no_of_sing border-end border-bottom" > $8 </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Per Video </div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" >$10</div>
    <div class="col no_of_sing border-end border-bottom" > $10 </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Buy Custom Hall Template </div>
    <div class="col no_of_sing border-end border-bottom" >  $75</div>
    <div class="col no_of_sing border-end border-bottom" >$75 </div>
    <div class="col no_of_sing border-end border-bottom" >$75</div>
    <div class="col no_of_sing border-end border-bottom" > Special template</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Buy Custom Booth Template </div>
    <div class="col no_of_sing border-end border-bottom" >  $100</div>
    <div class="col no_of_sing border-end border-bottom" >$100</div>
    <div class="col no_of_sing border-end border-bottom" >$100</div>
    <div class="col no_of_sing border-end border-bottom" > Special template</div>
</div>

<div class="row section "  >
    <div class="col-12 "  >
        <i class="bi bi-people-fill"></i><i class="bi bi-people-fill"></i> Engagement 
    </div>
  
</div>

<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Leaderboard </div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" > <i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Business card exchange </div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" > <i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Free Games (From Deafult) </div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
    <div class="col no_of_sing border-end border-bottom" >1</div>
    <div class="col no_of_sing border-end border-bottom" >2</div>
    <div class="col no_of_sing border-end border-bottom" > 3</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Games with Leaderboard</div>
    <div class="col no_of_sing border-end border-bottom" >  </div>
    <div class="col no_of_sing border-end border-bottom" >$50/Event </div>
    <div class="col no_of_sing border-end border-bottom" >$50/Event </div>
    <div class="col no_of_sing border-end border-bottom" >Talk with us </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Photo Booth</div>
    <div class="col no_of_sing border-end border-bottom" >$100/Month</div>
    <div class="col no_of_sing border-end border-bottom" >$100/Month</div>
    <div class="col no_of_sing border-end border-bottom" >$100/Month</div>
    <div class="col no_of_sing border-end border-bottom" >$100/Month</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Photo Gallery </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Announcement</div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Download (event Briefcase)</div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>

<div class="row section "  >
    <div class="col-12 "  >
        <i class="bi bi-people-fill"></i> Networking
    </div>
  
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Templates </div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" >2</div>
    <div class="col no_of_sing border-end border-bottom" >Talk to Us</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Business card exchange</div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >User profile </div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i> </div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Networking Room </div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" >1</div>
    <div class="col no_of_sing border-end border-bottom" >2</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Buy Custom Networking Template </div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" >$75</div>
    <div class="col no_of_sing border-end border-bottom" >Special template</div>
</div>


<div class="row section "  >
    <div class="col-12 "  >
        <i class="bi bi-person-lines-fill"></i>  Support 
    </div>
  
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Onboarding Executive (Tech Support) </div>
    <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" >"1st Event Free Tech Support 
        Post 1st Event - Per hr $ 75"</div>
    <div class="col no_of_sing border-end border-bottom" >"1st Event Free Tech Support 
        Post 1st Event - Per hr $ 75"</div>
    <div class="col no_of_sing border-end border-bottom" >Talk to us</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Mails </div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Chat  </div>
    <div class="col no_of_sing border-end border-bottom" ></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
    <div class="col no_of_sing border-end border-bottom" ><i class="bi bi-check"></i></div>
</div>

<div class="row section "  >
    <div class="col-12 "  >
        <i class="bi bi-ticket-fill"></i> Event Production
    </div>
  
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Video Player  </div>
    <div class="col no_of_sing border-end border-bottom" >Integrate Yours</div>
    <div class="col no_of_sing border-end border-bottom" >Integrate Yours</div>
    <div class="col no_of_sing border-end border-bottom" >Integrate Yours</div>
    <div class="col no_of_sing border-end border-bottom" >Integrate Yours</div>
</div>
<div class="row">
    <div class="col no_of_sing border-end border-bottom" >Show Running  </div>
    <div class="col no_of_sing border-end border-bottom" >DIY</div>
    <div class="col no_of_sing border-end border-bottom" >DIY</div>
    <div class="col no_of_sing border-end border-bottom" >DIY</div>
    <div class="col no_of_sing border-end border-bottom" >DIY</div>
    
</div>



<div class="row cost_section "  >
    <div class="col " id='cost2'  >
        <i class="bi bi-currency-dollar"></i>Cost</div>
        <div class="col no_of_sing border-end border-bottom" > </div>
    <div class="col no_of_sing border-end border-bottom" >$700</div>
    <div class="col no_of_sing border-end border-bottom" >$1000</div>
    <div class="col no_of_sing border-end border-bottom" >$$</div>
    </div>
   
    <h6>**NOTE:<pre></pre>	
        ** More free Templates will be added every month<pre></pre>		
        ** Buy special templates with additional cost		</h6>
    
    </div>
</div> 
</div>
   );
}

export default Pricing;