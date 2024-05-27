import './sidebar.css'

export default function sidebar() {
  return (
    <div className="sidebar">
     <div className='sidebaritem'>
      <span className='sidebartitle'>About Me</span>
      <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil mollitia et voluptas nam quo dicta numquam pariatur aut. Atque fugiat rem esse reprehenderit quibusdam, tempore amet? Odio, eligendi officia.
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem cum asperiores facilis placeat neque, beatae quos libero hic officiis consectetur itaque enim magni nesciunt vero quibusdam eum temporibus commodi.
        </p>
     </div>
     <div className='sidebaritem'>
      <span className='sidebartitle'>Categories</span>
       <ul className='sidebarlist'>
        <li className='sidebarlistitem'>Life</li>
        <li className='sidebarlistitem'>Music</li>
        <li className='sidebarlistitem'>Style</li>
        <li className='sidebarlistitem'>Sports</li>
        <li className='sidebarlistitem'>Tech</li>
        <li className='sidebarlistitem'>Cinema</li>
       </ul>
    </div>
    <div className='sidebaritem'>
      <span className='sidebartitle'>Follow Us</span>
      <div className='sidebarsocial'>
      <i className="sidebaricon fa-brands fa-square-facebook"></i>
      <i className="sidebaricon fa-brands fa-square-youtube"></i>
      <i className="sidebaricon fa-brands fa-square-pinterest"></i>
      <i className="sidebaricon fa-brands fa-square-instagram"></i>
      </div>
    </div>
   
    </div>
  )
}
