import React from 'react';
import styles from './notificationpage.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import SearchBar from '../../utils/search/SearchBar';

export default function NotificationPage() {
  return (
    <div className={styles.arrow}>
      <Link
        to="#"
        onClick={() => window.history.back()}
        className={styles.transition}
      >
        <IoIosArrowRoundBack size={35} />
      </Link>
      <p className="font-semibold text-xl">Notifications</p>
    </div>
  );
}
