import "./single.css"
import Sidebar from "../../components/header/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
    <SinglePost/>
    <Sidebar/></div>
  )
}
