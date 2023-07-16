import "./post2.css";

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src="image\morningbreakfast.png" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">
                Add to Favourites
            </span>
            <span className="postCat">
                Read More
            </span>
        </div>
        <span className="postTitle">Foods to eat for a healthy morning breakfast</span>
        <hr />
        <span className="postDate">3 hours ago</span>
    </div>
    <p className="postDesc">
    Numerous people think that morning breakfast is the most significant meal of the day, as it breaks the whole nighttime fast and launches an individual's digestion. 
    Regardless of what you may have heard, having breakfast isn't important for everybody.
    </p>
    </div>
  )
}