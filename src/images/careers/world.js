import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgOne() {
  useEffect(() => {
    anime({
      targets: '.svg10-1, .svg10-2, .svg10-3, .svg10-4, .svg10-5',
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
      className='icon icon-tabler icon-tabler-world'
      width='60'
      height='60'
      viewBox='0 0 24 24'
      strokeWidth='0.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle className='svg10-1' cx='12' cy='12' r='9' />
      <line className='svg10-2' x1='3.6' y1='9' x2='20.4' y2='9' />
      <line className='svg10-3' x1='3.6' y1='15' x2='20.4' y2='15' />
      <path className='svg10-4' d='M11.5 3a17 17 0 0 0 0 18' />
      <path className='svg10-5' d='M12.5 3a17 17 0 0 1 0 18' />
    </svg>
  );
}
