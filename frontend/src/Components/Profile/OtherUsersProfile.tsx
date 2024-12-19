import React, { useEffect } from 'react';
import ProfileNav from './ProfileNav';
import styles from './profile.module.css';
import PostGrid from './PostGrid';
import Button from '@mui/material/Button';
import CustomBorderIcon from '../../icons/CustomBorderIcon';
import ReelsIcon from '../../icons/CustomReelsIcon';
import SavedIcon from '../../icons/CustomSavedIcon';
import { LuUserPlus2 } from 'react-icons/lu';
import { Link, useParams } from 'react-router-dom';
import ProfileHeader, { StorySection } from './ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData, fetchPostsByUserId } from '../../Pages/HomePage/HomeSlice';

const OtherUserProfile = () => {
  const { userid } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { userData, postData, status, error } = useSelector(
    (state: RootState) => state.home
  );
  console.log(userid);
  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userid}` }));
    dispatch(fetchPostsByUserId({ url: '/Posts/user', userId: `${userid}` }));
  }, [dispatch, userid]);
  console.log(postData, status);

  return (
    <div className={styles.profilePage}>
      <ProfileNav username={userData.username} />
      <div className={styles.profileHeader}>
        <div className={styles.fix}>
          <div className="flex flex-col self-center">
            <StorySection user={userData} />
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.stats}>
              <span>
                {userData.posts?.length} <p>posts</p>
              </span>
              <span>
                {userData.followersCount}
                <p>followers</p>
              </span>
              <span>
                {userData.followingCount}
                <p>following</p>
              </span>
            </div>
          </div>
        </div>
        <p className={styles.bio}>{userData.bio}</p>
        <div className="grid grid-flow-col w-[100%] gap-2 mt-3 ">
          <Button
            variant="contained"
            size="small"
            className="col-span-10 max-sm:text-[11px]"
          >
            Follow
          </Button>
          <Button variant="outlined" size="small" className="col-span-10 ">
            Share Profile
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
      <div className="border-t-[1px] py-1 border-black">
        <PostGrid post={postData} status={status} error={error} />
      </div>
    </div>
  );
};

export default OtherUserProfile;
