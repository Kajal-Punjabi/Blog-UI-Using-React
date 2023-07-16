import "./post.css";

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src="image\summerskincare.png" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">
                Add to Favourites
            </span>
            <span className="postCat">
                Read More
            </span>
        </div>
        <span className="postTitle">Skincare in Summers</span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
    Everyone wants beautiful and glowing skin. Not only women but men also wants their skin to be clear and spots free. Because a clear and glowing skin makes us attractive and beautiful. We get so many compliments if our face is glowing and is acne free. 
The way we take of our skin in winters, same has to be done in summers. 
    </p>
    </div>
  )
}
