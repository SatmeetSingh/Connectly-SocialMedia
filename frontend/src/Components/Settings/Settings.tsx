import SearchBar from '../../utils/search/SearchBar';
import Logout from '../Logout/Logout';
import styles from './settings.module.css';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className={styles.settings}>
      <div className={styles.arrow}>
        <Link
          to="#"
          onClick={() => window.history.back()}
          className={styles.transition}
        >
          <IoIosArrowRoundBack size={35} />
        </Link>
        <p className="font-semibold text-xl">Settings and activity</p>
      </div>
      <div className=" flex justify-center w-[100%]">
        <SearchBar />
      </div>
      <div className="border-t-2 mt-4 border-gray-300">
        <Logout />
      </div>
    </div>
  );
}
