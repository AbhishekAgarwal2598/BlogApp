import './post.css'

export default function post() {
  return (
    <div className='post'>
      <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
       <div className='postinfo'>
       <div className='postcats'>
        <span className='postcat'>Music</span>
        <span className='postcat'>Life</span>
       </div>
       <span className='posttitle'>
        Lorem ipsum dolor sit amet.
       </span>
       <hr/>
       <span className='postdate'>
       1 Hour Ago
       </span>
       </div>
       <p className="postdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum in illo doloribus accusantium voluptatum ut odit velit perferendis alias libero, magni nobis expedita esse. Eos consequuntur nisi doloribus iusto?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum in illo doloribus accusantium voluptatum ut odit velit perferendis alias libero, magni nobis expedita esse. Eos consequuntur nisi doloribus iusto?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum in illo doloribus accusantium voluptatum ut odit velit perferendis alias libero, magni nobis expedita esse. Eos consequuntur nisi doloribus iusto?       
       </p>
    </div>
  )
}
