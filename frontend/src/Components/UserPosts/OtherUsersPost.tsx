import { Suspense, useEffect } from 'react';
import styles from './userPost.module.css';
import PostSkeleton from '../../utils/LazyLoading/PostSkeleton/PostSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData, fetchPostsByUserId } from '../../Pages/HomePage/HomeSlice';
import PostBlock from '../Post/Post';
import { useParams } from 'react-router-dom';

export default function OtherUserPosts() {
  const dispatch = useDispatch<AppDispatch>();
  const { userid } = useParams();
  const { userData, postData } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userid}` }));
    dispatch(fetchPostsByUserId({ url: '/Posts/user', userId: `${userid}` }));
  }, [dispatch, userid]);
  const LazyLoad = () => {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  };
  return (
    <div className={styles.postpage}>
      <div className={styles.posts}>
        <Suspense fallback={<LazyLoad />}>
          {postData.map((post) => (
            <div key={post.id}>
              <PostBlock post={post} user={userData} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
