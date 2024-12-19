import React from 'react';
import styles from './profile.module.css';
import { Post } from '../../Pages/HomePage/PostInterface';
import { ErrorObject } from '../../Pages/HomePage/HomeSlice';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

interface ProfilePageProps {
  post: Post[];
  status: string;
  error: null | ErrorObject;
}

const PostGrid: React.FC<ProfilePageProps> = ({ post, status, error }) => {
  return (
    <>
      {status === 'failed' && (
        <div className="flex justify-center align-middle flex-col mt-4 gap-3">
          <p className=" font-semibold text-pretty text-center  text-sm">
            {error?.message}
          </p>
          <p className=" font-semibold text-blue-700 text-center text-sm">
            Create new post
          </p>
        </div>
      )}
      <div className={styles.postsGrid}>
        {status === 'fulfilled' &&
          post.map((photo, index) => (
            <NavLink to="posts" key={photo.id}>
              <div className={styles.postItem}>
                <img
                  src={`https://localhost:7272${photo.imageUrl}`}
                  alt={`Post ${index + 1}`}
                  className={styles.postImage}
                />
              </div>
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default PostGrid;
