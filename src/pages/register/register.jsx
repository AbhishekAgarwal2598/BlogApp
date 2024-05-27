import "./register.css"
import {Link} from "react-router-dom"
export default function register() {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input type="text" className="registeripnut" placeholder="Enter Your username"></input>
        <label>Email</label>
        <input type="text" className="registeripnut" placeholder="Enter Your email"></input>
        <label>Password</label>
        <input type="password"  className="registeripnut" placeholder="Enter Your Password"></input>
        <button className="registerbutton">Register</button>
      </form>
      <button className="registerloginbutton">
      <Link className = "link" to ="/login">Login</Link>
        </button>
      </div>
  )
}
