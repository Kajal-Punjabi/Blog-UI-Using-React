import Header from "../../components/header/Header"
import Posts from "../../components/header/posts/Posts";
import Sidebar from "../../components/header/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <><Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div></>
  )
}
