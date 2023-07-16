// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/");
  }

  const registerHandler = () => {
    navigate("/register");
  }

  const loginHandler = () => {
    navigate("/login");
  }

  const settingHandler = () => {
    navigate("/settings");
  }

  const singleHandler = () => {
    navigate("/single");
  }

  const writeHandler = () => {
    navigate("/write");
  }

  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <ul className="topList">
        <li className="topListItem" onClick={homeHandler}>
          HOME
        </li>
        <li className="topListItem" onClick={singleHandler}>
          POPULAR POST
        </li>
        <li className="topListItem" onClick={writeHandler}>
          WRITE A BLOG
        </li>
        <li className="topListItem" onClick={loginHandler}>
          LOGIN
        </li>
        <li className="topListItem" onClick={registerHandler}>
          REGISTER
        </li>
        <li className="topListItem" onClick={settingHandler}>
          SETTINGS
        </li>
      </ul>
      {/* <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/">HOME</Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">ABOUT</Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/">CONTACT</Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/write">WRITE</Link>
        </li>
        <li className="topListItem">
          {user && "LOGOUT"}
        </li>
      </ul> */}
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="image\blogimgg.jpg" alt="" />
          ) : (
            <ul className="topList">
              
            </ul>
          )
        }

        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div> 

    </div>
  )
}

