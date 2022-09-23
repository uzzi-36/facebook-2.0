import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
// import moment from 'moment';

let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
    <div className='post'>
      <div className='postHeader'>
        <img className='profilePhoto' src={profilePhoto} alt="profile" />
        <div>
          {name} <br />
          {moment(postDate).fromNow()}
        </div>
      </div>
  
      <div className='postText'>
        {postText}
      </div>
  
      <img className='postImage' src={postImage} alt="post" />
  
      <hr />
      <div className='postFooter'>
        <div><FaRegThumbsUp className="post-icon" />like </div>
        <div><FaRegCommentAlt className="post-icon" />comment</div>
        <div><FaShare className="post-icon" />share</div>
      </div>
      <hr />
  
    </div>
  );
  
  
  const content = () => {
    return (
      <div className='page'>
  
        <Post
          name=""
          profilePhoto=""
          postDate="16 sep 2022"
          postImage=""
          postText=""
        />
        <Post
          name=""
          profilePhoto=""
          postDate="15 sep 2022"
          postImage=""
          postText=""
        />
        <Post
          name=""
          profilePhoto=""
          postDate="11 sep 2022"
          postImage=""
          postText=""
        />
        <Post
          name=""
          profilePhoto=""
          postDate="14 Sep 2022"
          postImage=""
          postText=""
        />
  
  
      </div>
    );
  }
  export default content