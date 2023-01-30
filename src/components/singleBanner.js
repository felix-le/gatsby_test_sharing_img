import React from 'react';

function SingleBanner({ singleImage }) {
  return (
    <div className='pt-[67px]'>
      <div
        className='g-no-repeat flex h-[50vh] w-full overflow-hidden bg-cover bg-center'
        style={{ background: `url(${singleImage})` }}
      />
    </div>
  );
}

export default SingleBanner;
