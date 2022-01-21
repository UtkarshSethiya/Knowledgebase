
import './App.css';
import Header from './components/header';
import Request from './components/request';
import Calculator from './components/calculator';
import Home from './components/home';
import Footer from './components/footer';
import Content from './components/maincontent';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  
 

  return (
    <div className="App">


<Header/>

<br></br><br></br><br></br>
<h1> <span id='biz'>Biz</span><span id='connect'>Connect</span> Knowledgebase</h1>
<br></br><br></br><br></br>

<Routes>

      <Route path="home"  element={<Home/>}  />
      <Route path="calculator" element={<Calculator />} />
     <Route path="request" element={<Request/>} />
    </Routes>

   
    <Footer/>

</div>






 
    );
  
}

export default App;
