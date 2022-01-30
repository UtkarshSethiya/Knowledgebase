import logo from './images/logo.png';
import './header.css';
import { Link } from "react-router-dom";


function Header(){


return(<div className='row main bg-light'>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid row">
    <div className='col-3  logo  '>
    <a class="navbar-brand" href="https://bizconnectevents.com/" ><img src={logo} height="50px" width="80px"></img>   </a>
    <Link class="navbar-brand home " to='/home'> Home</Link>
    
    </div>
    
<div className='col-4   '  > </div>

    <div className='col-5  subscribe'>
    <Link className="btn btn2 btn-outline-light"to="/request">Submit a Request</Link>
    <Link className="btn btn2 btn-outline-light" to="/pricing/pricing"><i class="bi bi-cash-coin"></i> Pricing</Link>
   <Link  className="btn btn2 btn-outline-light" to="/calculator"><i class="bi bi-calculator-fill"></i> Calculator</Link>
 
    <button className="btn btn1 " type="submit">Subscribe</button>
  
    </div>
    
  </div>
</nav>

<div className='row'>
<div className='col-3'></div>
  <div className='col-6'>
  <span className='searchbox'>
    <h2>How can we help you ?</h2>
    <pre></pre>
   <input class="fontAwesome" placeholder=' &#xF002;  Search Your Queries'>

</input>
</span>
<pre></pre>
<div className='faq' ><a className='faq' href='#'>FAQ's</a></div>

<pre></pre><br></br>
  </div>

</div>
 
 


    </div>
 );

}
export default Header;
