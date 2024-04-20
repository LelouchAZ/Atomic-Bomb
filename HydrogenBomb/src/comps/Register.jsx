import { useEffect, useState } from "react"
import axios from "axios"


export default function Register() {

    const [data,setData] = useState({
      fname:'',
      lname:'',
      email:'',
      password:''
    })

    function handleChange(e) {
      const {name,value} = e.target;
      setData({...data,[name]:value});
    }

    const submission = async (e) => {
      e.prevetDefault();
      try {
        const res = await axios.post("http://localhost:3000/signup",data)
        console.log(res);
      } catch(err) {
        console.log(err)
      }
    }
  

    return(
        <>
        
        <form className="row g-3 mt-2" onSubmit={submission}>
        
  <div class="col-md-6">
  <label forhtml="inputEmail4"  className="form-label">First Name</label>
    <input type="text" className="form-control" name="fname" vlaue={data.fname} placeholder="Ramesh" onChange={handleChange} aria-label="First name"/>
  </div>
  <div class="col-md-6">
  <label forhtml="inputEmail4" className="form-label">Last Name</label>
    <input type="text" className="form-control" name="lname" vlaue={data.lname} placeholder="Suthar" onChange={handleChange} aria-label="Last name"/>
  </div>

  <div className="col-md-6">
    <label forhtml="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" name="email" value={data.email} onChange={handleChange} id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label forhtml="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={data.password} onChange={handleChange} id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label forhtml="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label forhtml="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label forhtml="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  

  <div className="col-md-2">
    <label forhtml="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" forhtml="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign UP</button>
  </div>
</form>

        </>
    )
}