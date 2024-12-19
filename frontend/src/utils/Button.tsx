import { ReactNode } from 'react';

interface ButtonProp {
  children: ReactNode;
}

const Button: React.FC<ButtonProp> = ({ children }) => {
  return (
    <button className="bg-[#4a90e2] text-white hover:bg-[#3a7bd5] ">
      {children}
    </button>
  );
};

export default Button;
