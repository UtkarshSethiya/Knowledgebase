import './maincontent.css'
import { Link } from "react-router-dom";


function Content(){

return(
<div>

<div className='container ' >
    <div className='row'>
        <div className='col-2'></div>
        <div className='row'>
        <div className='col-2 book'> <i class="bi bi-book"></i></div>
       <div className='col-10 '>  <p className='topics'>Explore Topics</p>
       <p>We did our best to cover all topics related to our product. Each section have detailed info of topic in each category.</p>
       </div>
      
        </div>
        <div className='col-2'></div>
    </div>
    <pre></pre>  <pre></pre>
<div className='row  '>

<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

<div className='col-lg-1'></div>
<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

</div>



<div className='row  '>

<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

<div className='col-lg-1'></div>
<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

</div>





<div className='row  '>

<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

<div className='col-lg-1'></div>
<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

</div>








<div className='row  '>

<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

<div className='col-lg-1'></div>
<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

</div>








<div className='row  '>

<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

<div className='col-lg-1'></div>
<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

</div>







<div className='row  '>

<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

<div className='col-lg-1'></div>
<div className='col-lg cont_container'>
<h6><i class="bi bi-info-circle-fill"></i> Content Heading</h6>
<pre></pre>
<p>Content Details...Content Details.Content Details.Content Details.Content Details.Content Details.Content Details.</p>
</div>

</div>

<pre></pre><pre></pre>
<div class="row border contactcontainer ">

                <div class="col-2 env ">
                <i class="bi bi-envelope-open-fill"></i>
                </div>
                <div class="col-10 ">
                <p className='contact2'>Contact Us</p>
                <div className='row'>
                    <div className='col-9'> <p className='contact2content'>If you have question which is beyond this knowledgebase Kindly contact us</p></div>
                    <div className='col-3 '><Link to='/request' class="btn fg btn-outline-primary ">Write to Us Now</Link></div>
                
                </div>
                
                </div>
            
                
        </div>



</div>

</div>
);

}

export default Content;