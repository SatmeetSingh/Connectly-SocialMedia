import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../../utils/search/SearchBar';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { clearSearch, searchUser, setSearch } from './SearchSlice';
import React, { useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SearchUsers from '../../Components/UserSearch/SearchUsers';
import styles from '../../Components/UserSearch/searchUser.module.css';

export default function () {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { input, userData, status, error } = useSelector(
    (state: RootState) => state.search
  );

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearch(value));
    await dispatch(searchUser({ url: '/users/search', Data: value }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [location.pathname, dispatch]);

  return (
    <div className="flex flex-col align-middle">
      <div className="flex w-[100%] align-middle justify-around ">
        <Link
          to="#"
          onClick={() => {
            dispatch(setSearch(''));
            window.history.back();
          }}
        >
          <IoIosArrowRoundBack size={50} className="self-center mt-2" />
        </Link>
        <div className="w-[100%] ">
          <SearchBar search={input} handleSearch={handleSearch} />
        </div>
      </div>
      <div></div>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'fulfilled' && userData.length === 0 && ''}
      {userData.length === 0 && ''}
      {status === 'failed' && (
        <p className="flex flex-col gap-3 align-middle justify-center w-[100%]">
          <div className={`${styles.search} self-center w-[90%]`}>
            <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-200 flex align-middle justify-center ">
              <IoSearchOutline size={30} className="mt-2" />
            </div>
            <div className="self-center">
              <p className="text-sm font-semibold">{error?.toString()}</p>
            </div>
          </div>
        </p>
      )}
      <div className="flex flex-col gap-3 align-middle justify-center w-[100%]">
        {status === 'fulfilled' && userData.length > 0
          ? userData.map((user, id) => (
              <div key={id} className="self-center w-[90%]">
                <Link
                  to={`${user.id}`}
                  onClick={() => {
                    dispatch(setSearch(''));
                  }}
                >
                  <SearchUsers user={user} />
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
