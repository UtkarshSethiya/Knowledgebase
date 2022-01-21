import './request.css'
function Request(){

return(

<div className='row '>
    <h1>Request Form</h1>
    <pre></pre><pre></pre>
    <div className='col-md-3'></div>
    <div className='col-md-6'>
    <form class="row g-3 form">
<div class="col-6">
  <label for="validationDefault01" class="form-label">First name</label>
  <input type="text" class="form-control" id="validationDefault01"  required/>
</div>
<div class="col-6">
  <label for="validationDefault02" class="form-label">Last name</label>
  <input type="text" class="form-control" id="validationDefault02"  required/>
</div>
<div class="col-12">
  <label for="validationDefault01" class="form-label">Email</label>
  <input type="email" class="form-control" id="validationDefault01" placeholder='Enter Your Email Adress' required/>
</div>

<div class="col-8">
<label for="validationDefault01" class="form-label">Query Type</label>
    <select class="form-select" required aria-label="select example">
  <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>
  <div class="col-4">
  <label for="validationDefault01" class="form-label">Contact Number</label>
  <input type="text" class="form-control" id="validationDefault01" placeholder='Enter Your Contact Number' required/>
</div>

<div class="col-md-6">
  <label for="validationDefault03" class="form-label">City</label>
  <input type="text" class="form-control" id="validationDefault03" required/>
</div>
<div class="col-md-3">
  <label for="validationDefault04" class="form-label">State</label>
  <select class="form-select" id="validationDefault04" required>
    <option selected disabled value="">Choose...</option>
    <option>...</option>
  </select>
</div>
<div class="col-md-3">
  <label for="validationDefault05" class="form-label">Zip</label>
  <input type="text" class="form-control" id="validationDefault05" required/>
</div>
<div class="col-12">
    <label for="validationTextarea" class="form-label">Description</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Please elaborate your query" required></textarea>
    
  </div>
<div class="col-12">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
    <label class="form-check-label" for="invalidCheck2">
      Agree to terms and conditions
    </label>
  </div>
</div>
<div class="col-12">
  <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>

    </div>
</div>

);


}

export default Request;