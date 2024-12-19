import styles from './post.module.css';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa6';
import { TbLocationShare } from 'react-icons/tb';
import { VscChromeRestore } from 'react-icons/vsc';
import { useState } from 'react';
import { Post } from '../../Pages/HomePage/PostInterface';
import { User } from '../Profile/UserInterface';

interface PostProp {
  post: Post;
  user: User;
}

const PostBlock: React.FC<PostProp> = ({ post, user }) => {
  const maxlength = 70;
  const [isExpamded, setIsExpended] = useState(false);
  function ToggleText() {
    setIsExpended(!isExpamded);
  }
  return (
    <div className={styles.post}>
      <div className={styles.postbox}>
        <div className={styles.header}>
          <div className={styles.headerleft}>
            <img
              src={`https://localhost:7272${user.profilePicture}`}
              alt="ProfileImage"
              className={styles.profileCircle}
            />
            <p>{user.username}</p>
          </div>
          <p>
            <FaEllipsisVertical size={25} />
          </p>
        </div>
        <div className={styles.imagesection}>
          <img
            src={`https://localhost:7272${post.imageUrl}`}
            alt="flowerImage"
            className={styles.img}
          />
        </div>

        <div className={styles.userclick}>
          <ul>
            <li>
              <AiFillHeart size={25} />
              <span>{post.likesCount}</span>
            </li>
            <li>
              <FaRegComment size={25} />
              <span>{post.commentCount}</span>
            </li>
            <li>
              <TbLocationShare size={25} />
              <span>{post.shareCount}</span>
            </li>
          </ul>
          <div>
            <VscChromeRestore size={25} />
          </div>
        </div>
        <div className={styles.datatext}>
          <span>{user.username}</span>
          {isExpamded ? post.content : post.content.slice(0, 50).trimEnd()}
          <button className={styles.readMoreBtn} onClick={ToggleText}>
            {!isExpamded && '... more'}
          </button>
        </div>
        <div>View all comments</div>
      </div>
    </div>
  );
};

export default PostBlock;
