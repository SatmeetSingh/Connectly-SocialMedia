import { TfiSearch } from 'react-icons/tfi';
import PopularPosts from '../../Components/Popularposts/PopularPosts';

import styles from './popularPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { setSearch } from '../SearchPage/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function PopularPage() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  return (
    <div className="flex  flex-col gap-3">
      <div
        className={`relative self-center  rounded-lg w-[90%] mt-3 max-w-[500px] text-sm ${styles.scrool}`}
      >
        <TfiSearch
          size={15}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
        />
        <Link
          to={`/${userId}/search`}
          onClick={() => {
            dispatch(setSearch(''));
          }}
        >
          <p className="pl-8 p-2 w-full outline-none rounded-lg bg-[rgba(100,211,193,0.2)]">
            Search
          </p>
        </Link>
      </div>
      <PopularPosts />
    </div>
  );
}
