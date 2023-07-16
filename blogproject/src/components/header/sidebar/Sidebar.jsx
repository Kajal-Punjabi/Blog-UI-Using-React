import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="image\mypic_blog.jpg" alt="" />
            <p>
KAJAL PUNJABI
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">
                About Me
            </li>
            <li className="sidebarListItem">
                Contact Me
            </li>
            <li className="sidebarListItem">
                Privacy Policy
            </li>
            <li className="sidebarListItem">
                DMCA
            </li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-square-facebook"></i>
    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  )
}
