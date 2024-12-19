import styles from './profile.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
type Props = {
  username: string;
};

const ProfileNav: React.FC<Props> = ({ username }) => {
  return (
    <nav className={styles.profilenav}>
      <div className={styles.profilenavleft}>
        <Link to="">
          <FaChevronLeft size={25} />
        </Link>
        <div>{username}</div>
      </div>
      <div>
        <Link to="settings" className="flex gap-2">
          <BsThreeDotsVertical size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default ProfileNav;
