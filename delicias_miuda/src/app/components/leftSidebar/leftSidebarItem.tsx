import React from 'react';

interface LeftSidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isExpanded: boolean;
}

const LeftSidebarItem: React.FC<LeftSidebarItemProps> = ({ icon, text, isExpanded }) => {
  return (
    <li className={`flex text-lg pl-6 gap-2 items-center cursor-pointer hover:underline underline-offset-2`}>
      {icon}
      {isExpanded && <span className='whitespace-nowrap text-sm ' >{text}</span>}
    </li>
  );
};

export default LeftSidebarItem;
