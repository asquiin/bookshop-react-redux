import React from 'react';
import mainPhoto from '../../assets/main-photo.svg';

function Home() {
  return (

    <> 
    <div className="w-full h-[90%]"> 
      <img
        src={mainPhoto}
        alt="Main background"
        className="w-full h-full object-cover" 
      />
    </div>

    <div >
<div className='flex'> 
        <h1 className='text-[48px] font-bold'> Our Best Picks</h1>
        </div>
    </div>


    </>
  );
}

export default Home;
