import "./post4.css";

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" src="image\skinicing.png" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">
                Add to Favourites
            </span>
            <span className="postCat">
                Read More
            </span>
        </div>
        <span className="postTitle">Incredible benefits of skin icing</span>
        <hr />
        <span className="postDate">6 hours ago</span>
    </div>
    <p className="postDesc">
    Have you ever tried skin icing or ice packs on face ? How does it feel ? Doesn't it feels so cool, refreshing and full of activeness ...!? If you haven't tried an ice pack on face yet, then just try it once and notice the energetic, refreshing feeling you will get after that. Rubbing ice cubes on face have some incredible benefits that might surprise you. 
    </p>
    </div>
  )
}