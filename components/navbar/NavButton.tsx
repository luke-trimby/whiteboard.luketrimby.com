import { useRef } from 'react';

interface NavButtonProps {
  onClick: (el: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  top?: boolean;
  btm?: boolean;
}

const NavButton = ({ onClick, children, top = false, btm = false }: NavButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`navBtn py-3 px-2 inline-flex justify-center items-center gap-2 ${top && "rounded-t-md"} ${btm && "rounded-b-md"} border font-medium bg-white text-gray-700 align-middle hover:border-gray-500 transition-all text-sm`}>
      {children}
    </button>
  );
}

export default NavButton;