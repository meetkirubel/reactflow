import React from 'react';
import MenuExtractionPanel from './MenuExtractionPanel'; // Assuming MenuExtractionPanel is a component

interface MenuExtractionPanelProps {
}

const Left: React.FC<MenuExtractionPanelProps> = () => {
  return (
    <div className='left relative h-screen'>
      <div className="container my-8 ">
      <MenuExtractionPanel />
      <div className='h-full absolute top-0 -right-4 w-[1px] bg-slate-500 '/>
      </div>

    </div>
  );
};

export default Left;
