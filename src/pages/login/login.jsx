import "./login.css"
import {Link} from "react-router-dom"
export default function login() {
  return (
    <div className="login">
      <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input type="text" className="loginipnut" placeholder="Enter Your Email"></input>
        <label>Password</label>
        <input type="password"  className="loginipnut" placeholder="Enter Your Password"></input>
        <button className="loginbutton">Login</button>
      </form>
      <button className="loginregisterbutton">
        <Link className = "link" to ="/register">Register</Link></button>
      </div>
  )
}
