import "./post3.css";

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src="image\confidence.png" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">
                Add to Favourites
            </span>
            <span className="postCat">
                Read More
            </span>
        </div>
        <span className="postTitle">Tips to build confidence</span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
    Whenever participating in any debates, talks or the other activities, you would possibly have heard this recommendation from your elders that - "Be more confident while performing!" And basically most of the time, this is often what you think that once you hear it: "If only it were that simple and straightforward."
     But actually what is confidence? 
    </p>
    </div>
  )
}