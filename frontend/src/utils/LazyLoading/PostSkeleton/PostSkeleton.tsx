import React from 'react';
import styles from './postSkeleton.module.css';

export default function PostSkeleton() {
  return (
    <div>
      <div className={styles.postSkeleton}>
        <div className={styles.skeletonHeader}>
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.skeletonName}></div>
        </div>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonCaption}></div>
        <div className={styles.skeletonLikes}></div>
      </div>
    </div>
  );
}
