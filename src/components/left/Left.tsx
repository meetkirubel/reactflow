import React from 'react';
import MenuExtractionPanel from './MenuExtractionPanel';


const Left = () => {
  return (
    <div className=' left relative h-full'>
      <div>
      <MenuExtractionPanel />
      <div className='div h-screen absolute top-0 -right-4 w-[1px] bg-slate-500 '/>
      </div>
    </div>
  );
};

export default Left;
