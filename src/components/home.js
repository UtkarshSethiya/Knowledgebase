import Content from "./maincontent";
import Header from "./header";
import React from 'react';


import './home.css';


function Home(){

    return(<div>
        <Header/>
    
<span className='help  '>
  
<a href='https://bizconnectevents.com/contact-us' className=' btnhelp  '> <i class="bi bi-person-fill"></i> Contact Us</a>
</span>
<br></br><br></br><br></br>
<h1> <span id='biz'>Biz</span><span id='connect'>Connect</span> Knowledgebase</h1>
<br></br><br></br><br></br>


<Content/>


<br></br><br></br><br></br>



    </div>);
}
export default Home;