import React from 'react';

function Seperate({ newClasses = '' }) {
  return (
    <span
      className={`my-0 mx-auto block w-full border-t-[1px] border-solid border-primary ${newClasses}`}
    ></span>
  );
}

export default Seperate;
