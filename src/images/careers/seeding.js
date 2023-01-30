import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgOne() {
  useEffect(() => {
    anime({
      targets: '.svg20-1, .svg20-2, .svg20-3',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 2000,
      loop: false,
      direction: 'alternate',
      delay: function (el, i) {
        return i * 250;
      },
    });
  }, []);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-seeding'
      width='60'
      height='60'
      viewBox='0 0 24 24'
      strokeWidth='0.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        className='svg20-1'
        d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'
      />
      <path
        className='svg20-2'
        d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'
      />
      <line className='svg20-3' x1='12' y1='20' x2='12' y2='10' />
    </svg>
  );
}
