import styles from './storySkeleton.module.css';

export default function StorySkeleton() {
  return (
    <div>
      <div className={styles.postSkeleton}>
        <div className={styles.skeletonHeader}>
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.skeletonCaption}></div>
        </div>
      </div>
    </div>
  );
}
