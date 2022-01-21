import Content from "./maincontent";
import Header from "./header";
import './home.css';
import Footer from "./footer";

function Home(){

    return(<div>
      
<span className='help border '>
  
<a href='https://bizconnectevents.com/contact-us' className=' btnhelp  '> <i class="bi bi-person-fill"></i> Contact Us</a>
</span>



<Content/>


<br></br><br></br><br></br>



    </div>);
}
export default Home;