import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

type PassEye = {
  changePasswordType: () => void;
  isShown: boolean;
};

const PasswordEye: React.FC<PassEye> = ({ changePasswordType, isShown }) => {
  return (
    <div>
      {' '}
      <p
        onClick={changePasswordType}
        className="absolute right-2 top-4 opacity-50"
      >
        {!isShown ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
      </p>
    </div>
  );
};

export default PasswordEye;
