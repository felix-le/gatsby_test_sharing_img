import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgOne() {
  useEffect(() => {
    anime({
      targets: '.svg30-0, .svg30-1, .svg30-2, .svg30-3',
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
      className='icon icon-tabler icon-tabler-writing'
      width='55'
      height='55'
      viewBox='0 0 24 24'
      strokeWidth='0.5'
      stroke='#2c3e50'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path className='svg30-0' stroke='none' fill='none' />
      <path
        className='svg30-1'
        d='M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z'
      />
      <path className='svg30-2' d='M16 7h4' />
      <path
        className='svg30-3'
        d='M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3'
      />
    </svg>
  );
}
