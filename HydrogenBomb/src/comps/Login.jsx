import { useState } from "react"
import axios from "axios"

export default function Login() {

    const [info,setinfo] = useState({
        email:'',
        password:''
    })
    function handleChange(e) {
        const {name,value} = e.target;
        setinfo({...info,[name]:value});
      }

    const signing = async (e) => {
        e.preventDefault() 
        try {
            const res = await axios.post("http://localhost:3000/login",data)
            console.log(res)
          } catch(err) {
            console.log(err)
          }
    }


    return(
        <>
        
        <form onSubmit={signing}>
  <div className="row mb-3">
    <label forhtml="inputEmail3" className="col-sm-2 col-form-label" >Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" name='email' value={info.email} onChange={handleChange} id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label forhtml="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" name="password" value={info.password} onChange={handleChange} id="inputPassword3"/>
    </div>
  </div>
  
  /
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
        
        </>
    )
}