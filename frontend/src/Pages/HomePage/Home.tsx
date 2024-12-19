// import Post from '../../Components/Post/Post';
import { AboveNavBar } from '../../Components/Navbar/Navbar';
import styles from './Home.module.css';
import { useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
const Post = lazy(() => import('../../Components/Post/Post'));
import { StorySection } from '../../Components/Profile/ProfileHeader';
import PostSkeleton from '../../utils/LazyLoading/PostSkeleton/PostSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData } from './HomeSlice';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.home);
  const { userId } = useParams();

  const LazyLoad = () => {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  };
  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userId}` }));
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className="min-[750px]:hidden">
        <AboveNavBar />
      </div>

      <div className=" h-[95px] w-[100vw] place-items-start bg-white mb-1">
        <div className=" max-w-[500px]  flex justify-start ">
          <StorySection user={userData} />
        </div>
      </div>

      {/* <div className={styles.posts}>
        <Suspense fallback={<LazyLoad />}>
          <Post />
          <Post />
          <Post />
        </Suspense>
      </div> */}
    </div>
  );
}
