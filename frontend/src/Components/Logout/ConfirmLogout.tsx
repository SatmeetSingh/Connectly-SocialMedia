import styles from './logout.module.css';

interface ConfirmLogoutProp {
  onConfirm: () => void;
  onCancel: () => void;
}
const ConfirmLogout: React.FC<ConfirmLogoutProp> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className="font-semibold text-xl">
          Log out of <br /> your account?
        </h2>
        <div className={styles.modalActions}>
          <button onClick={onConfirm}>Logout</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
