import styles from './popularposts.module.css';

import React from 'react';

const photos = [
  'https://via.placeholder.com/150/1', // Replace with actual URLs
  'https://via.placeholder.com/150/2',
  'https://via.placeholder.com/150/3',
  'https://via.placeholder.com/150/4',
  'https://via.placeholder.com/150/5',
  'https://via.placeholder.com/150/6',
  'https://via.placeholder.com/150/1', // Replace with actual URLs
  'https://via.placeholder.com/150/2',
  'https://via.placeholder.com/150/3',
  'https://via.placeholder.com/150/4',
  'https://via.placeholder.com/150/5',
  'https://via.placeholder.com/150/6',
  'https://via.placeholder.com/150/1', // Replace with actual URLs
  'https://via.placeholder.com/150/2',
  'https://via.placeholder.com/150/3',
  'https://via.placeholder.com/150/4',
  'https://via.placeholder.com/150/5',
  'https://via.placeholder.com/150/6',
  'https://via.placeholder.com/150/6',
  'https://via.placeholder.com/150/1', // Replace with actual URLs
  'https://via.placeholder.com/150/2',
  'https://via.placeholder.com/150/3',
  'https://via.placeholder.com/150/4',
  'https://via.placeholder.com/150/5',
];

export default function () {
  return (
    <div className="self-center mb-24">
      <div className={styles.postsGrid}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.postItem}>
            <img
              src={photo}
              alt={`Post ${index + 1}`}
              className={styles.postImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
