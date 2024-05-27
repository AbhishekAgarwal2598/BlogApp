import "./write.css"

export default function write() {
  return (
    <div className="write">
      <img className="writeimg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <form className="writeform">
           <div className="writeformgroup">
            <label htmlFor="fileinput">
            <i class="writeicon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display : "none"}} />
            <input type="text" placeholder="Title" className="writeinput"  autoFocus={true} />
           </div>
           <div className="writeformgroup">
            <textarea placeholder="Tell Your Story..." type="text" className="writeinput writetext"></textarea>
           </div>
           <button className="writesubmit">Publish</button>
        </form>
    </div>
  )
}
