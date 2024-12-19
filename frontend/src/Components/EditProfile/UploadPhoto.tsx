import styles from './EditProfile.module.css';

export default function UploadPhoto() {
  return (
    <div>
      <input type="file" id="profilePicture" className="hidden" />
      <label htmlFor="profilePicture" className={styles.picture}>
        Change Profile
      </label>
    </div>
  );
}
