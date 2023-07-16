import "./header.css"

export default function Header() {
  return (
    <div className="Header">
        <div className="headerTitles">
          <span className="headerTitleSm">
            Health, Skincare and Lifetips
          </span>
          <span className="headerTitleLg">
            Blog
          </span>
        </div>
        <img className="headerImg" src="image\scenery.jpg" alt="" />
        <div className="recentBlogsDiv">
        <span className="recentBlogsHeading">Recent Blogs</span>
        </div>
    </div>
           
           

  )
}
