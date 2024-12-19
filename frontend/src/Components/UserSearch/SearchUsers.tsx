import { FaPlus } from 'react-icons/fa6';
import styles from './searchUser.module.css';
import { User } from '../Profile/UserInterface';

interface SearchUsersProp {
  user: User;
}

const SearchUsers: React.FC<SearchUsersProp> = ({ user }) => {
  return (
    <div className={styles.search}>
      <div className="w-[50px] h-[50px] rounded-full">
        {user.profilePicture === '' ? (
          <img
            src="/defaultImage.svg"
            alt={`${user.username}'s profile`}
            className={styles.profilePicture}
          />
        ) : (
          <img
            src={`https://localhost:7272${user.profilePicture}`} // Dynamic URL
            alt="Profile"
            className={styles.profilePicture}
          />
        )}
      </div>
      <div className="self-center">
        <p className="text-sm font-semibold">{user.username}</p>
        <p className="font-extralight text-sm text-gray-400">{user.name}</p>
      </div>
    </div>
  );
};
export default SearchUsers;
