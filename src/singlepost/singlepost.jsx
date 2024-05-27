import "./singlepost.css"

export default function singlepost() {
  return (
    <div className="singlepost">
        <div className="singlepostwrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlepostimg">

            </img>
            <h1 className="singleposttitle">
                Lorem ipsum dolor sit amet.
                <div className="singlepostedit">
                <i class="singleposticon fa-solid fa-pen-to-square"></i>
                <i class="singleposticon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlepostinfo">
                <span className="singlepostauthor">
                    Author : <b>Safak</b>
                </span>
                <span className="singleostdate">1 hour ago</span>
            </div>
            <p className="singlepostdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos quam accusantium, harum pariatur sed blanditiis neque maiores numquam atque veniam doloremque ea, ipsa eum ut nostrum modi ullam ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro facere similique laborum, dolor commodi accusamus ipsum expedita, architecto ipsam quas unde ullam quod accusantium repudiandae veniam deleniti, reiciendis aperiam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus dicta porro ipsa doloribus sit voluptas voluptate placeat officiis maiores non iusto mollitia facilis aliquam, pariatur adipisci commodi, ullam inventore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, accusantium consequuntur ab excepturi, assumenda omnis quibusdam dolore maxime vel neque, consequatur rem maiores dolor voluptatem minus? Mollitia recusandae laboriosam nam!
            </p>
        </div>
    </div>
  )
}
