import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-b from-white/30 to-white/10 hover:bg-white/30"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
