import "./TopBar.css"
import {Link} from "react-router-dom"
export default function TopBar() {
  const user =false;
  return (
    <div className='Top'>
      <div className='topleft'>
      <i className="topicon fa-brands fa-square-facebook"></i>
      <i className="topicon fa-brands fa-square-youtube"></i>
      <i className="topicon fa-brands fa-square-pinterest"></i>
      <i className="topicon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topcenter'>
       <ul className="toplist">
        <li className="toplistitem">
          <Link className="link" to="/">
          HOME
        </Link></li>
        <li className="toplistitem"> <Link className="link" to="/about">
          ABOUT
        </Link></li>
        <li className="toplistitem"><Link className="link" to="/contact">
          CONTACT
        </Link></li>
        <li className="toplistitem"><Link className="link" to="/write">
          WRITE
        </Link></li>
        <li className="toplistitem">
          {user && "LOGOUT"}
        </li>
       </ul>
      </div>
      <div className='topright'>
        {
          user ? ( <img className="topimg" src="https://images.pexels.com/photos/1858175/
          pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />)
          : (
            <ul className="toplist">
              <li className="toplistitem">
                 <Link className="link" to="/login">Login</Link>
                 </li>
                 <li className="toplistitem">
                 <Link className="link" to="/register">Register</Link>
                 </li>
                 </ul>
          )
        }
     
      <i className="topsearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
