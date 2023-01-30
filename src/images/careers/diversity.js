import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgOne() {
  useEffect(() => {
    anime({
      targets: '.svg40-1, .svg40-2, .svg40-3. .svg40-4',
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
      className='icon icon-tabler icon-tabler-lego'
      width='55'
      height='55'
      viewBox='0 0 24 24'
      strokeWidth='0.5'
      stroke='#2c3e50'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line className='svg40-1' x1='9.5' y1='11' x2='9.51' y2='11' />
      <line className='svg40-2' x1='14.5' y1='11' x2='14.51' y2='11' />
      <path className='svg40-3' d='M9.5 15a3.5 3.5 0 0 0 5 0' />
      <path
        className='svg40-4'
        d='M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3'
      />
    </svg>
  );
}
