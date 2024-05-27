import "./settings.css"
import Sidebar from "../../sidebar/sidebar"
export default function settings() {
  return (
    <div className="setting">
        <div className="settingwrapper">
          <div className="settingtitle">
          <span className="settingupdatetitle">Update Your Account</span>
          <span className="settingdeletetitle">Delete Account</span>
        </div>
        <form action="" className="settingform">
          <label> Profile Picture</label>
          <div className="settingspp">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <label htmlFor="fileInput">
            <i class="settingsppicon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput"  style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="text" placeholder="Safak@gmail.com" />
          <label>Password </label>
          <input type="password" />
           <button className="settingsubmit">
            Update
           </button>
        </form>
        </div>
        <Sidebar />
    </div>
  )
}
