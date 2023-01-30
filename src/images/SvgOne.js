import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgOne() {
  useEffect(() => {
    anime({
      targets: '.svg1-0, .svg1-1, .svg1-2, .svg1-3',
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
      version='1.1'
      id='svg-icon-1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='48px'
      height='48px'
      viewBox='0 0 64 64'
      enableBackground='new 0 0 64 64'
    >
      <g>
        <path
          className='svg1-3'
          fill='none'
          stroke='#000000'
          strokeWidth='2'
          strokeMiterlimit='10'
          width='52'
          height='40'
          d='M1 16 L53 16 L53 56 L1 56 Z'
        ></path>
      </g>
      <path
        className='svg1-0'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M10,14L10,8L63,8L63,48L55,48'
      ></path>
      <path
        className='svg1-1'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M1,46L15,32L29,48L39,42L53,54'
      ></path>
      <path
        className='svg1-2'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M35,29A5,5 0,1,1 45,29A5,5 0,1,1 35,29'
      ></path>
    </svg>
  );
}
