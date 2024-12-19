import { useNavigate } from 'react-router-dom';
import ConfirmLogout from './ConfirmLogout';
import { useState } from 'react';

export default function Logout() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState('false');

  const handleClick = () => {
    setShowModal('true');
  };

  const handleCancel = () => {
    setShowModal('false');
  };

  const handleConfirm = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId');

    let loggedIn = localStorage.getItem('loggedIn');
    let userId = localStorage.getItem('userId');
    if (!loggedIn && userId === null) {
      navigate('/');
    }
  };

  return (
    <div>
      <button
        className="mt-3 pl-3 text-lg font-semibold "
        onClick={handleClick}
      >
        Logout
      </button>

      {showModal === 'true' && (
        <ConfirmLogout onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}
