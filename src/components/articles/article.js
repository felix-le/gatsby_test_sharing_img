import React from 'react';
import { Link } from 'gatsby';

const article = ({ title, slug, bgStyle }) => {
  return (
    <div className='flex flex-col items-center justify-center md:block'>
      <span className='pr-4 pb-4 font-icon text-primary'>&#xe049;</span>
      <h5 className='pb-8 text-left lowercase md:min-h-[64px]'>{title}.</h5>
      <div className='content' style={bgStyle}>
        <Link to={`/${slug}`} className=''>
          <div className='content-overlay'></div>
          <div className='content-details fadeIn-bottom'>
            <h5 className='content-title'>read article</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default article;
