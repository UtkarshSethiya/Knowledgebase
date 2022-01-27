import { Link } from "react-router-dom";
import logo from './images/logo.png';

function Header2(){
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
    <button className="btn btn2 btn-outline-light" type="submit"><i class="bi bi-cash-coin"></i> Pricing</button>
   <Link  className="btn btn2 btn-outline-light" to="/calculator"><i class="bi bi-calculator-fill"></i> Calculator</Link>
    
    <button className="btn btn1 " type="submit">Subscribe</button>
    </div>
    
  </div>
</nav></div>);
}
export default Header2();