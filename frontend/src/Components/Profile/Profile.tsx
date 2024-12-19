import React, { useEffect } from 'react';
import ProfileNav from './ProfileNav';
import styles from './profile.module.css';
import PostGrid from './PostGrid';
import Button from '@mui/material/Button';
import CustomBorderIcon from '../../icons/CustomBorderIcon';
import ReelsIcon from '../../icons/CustomReelsIcon';
import SavedIcon from '../../icons/CustomSavedIcon';
import { LuUserPlus2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData, fetchPostsByUserId } from '../../Pages/HomePage/HomeSlice';

interface ProfileProp {
  userId: string | null;
}

const Profile: React.FC<ProfileProp> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userData, postData, status, error } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userId}` }));
    dispatch(fetchPostsByUserId({ url: '/Posts/user', userId: `${userId}` }));
  }, [dispatch]);

  return (
    <div className={styles.profilePage}>
      <ProfileNav username={userData.username} />
      <div className={styles.profileHeader}>
        <ProfileHeader user={userData} />
        <p className={styles.bio}>{userData.bio}</p>
        <div className="grid grid-flow-col w-[100%] gap-2 mt-3 ">
          <Button variant="contained" size="small" className="col-span-10 ">
            <Link to="editProfile" className="max-sm:text-[11px]">
              Edit Profile
            </Link>
          </Button>
          <Button variant="outlined" size="small" className="col-span-10 ">
            <Link to="editProfile" className="max-sm:text-[11px]">
              Share Profile
            </Link>
          </Button>
          <Button variant="outlined" size="small" className="col-span-1 ">
            <Link to="editProfile" className="max-sm:text-[11px]">
              <LuUserPlus2 size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.customicons}>
        <div className={styles.cusIcon}>
          <CustomBorderIcon />
        </div>
        <div className={styles.cusIcon}>
          <ReelsIcon />
        </div>
        <div className={`${styles.cusIcon} `}>
          <SavedIcon />
        </div>
      </div>
      {/* Posts Grid */}
      <div className="border-t-[1px] py-[2px] border-black">
        <PostGrid post={postData} status={status} error={error} />
      </div>
    </div>
  );
};

export default Profile;
