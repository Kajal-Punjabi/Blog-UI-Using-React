import Post from "../post/Post";
import Post2 from "../post2/Post2";
import Post3 from "../post3/Post3";
import Post4 from "../post4/Post4";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
        <Post/>
        <Post2/>
        <Post3/>
        <Post4/>
    </div>
  )
}
