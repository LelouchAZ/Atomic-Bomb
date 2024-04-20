import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">AtomBomb</Link>
    

      <div className="navbar-nav">
        <Link className="nav-link active"  to="/Home">Home</Link>
        <Link className="nav-link" to="/Login">Sign IN</Link>
        <Link className="nav-link" to="/Register">Sign UP</Link>
        <Link  className="nav-link disabled" >Disabled</Link>
      </div>
    </div>
</nav>

        
        </>
    )
}