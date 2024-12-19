import { useEffect, useState } from 'react';
import styles from './suspense.module.css';

export default function SuspenseLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.logo}>
        <h1>Connectly</h1>
      </div>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          {' '}
          <div className={styles.spinnerBlue}></div>
        </div>
      </div>
      <p className={styles.loadingText}>Connecting you to the world...</p>
    </div>
  );
}
