import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgFour() {
  useEffect(() => {
    anime({
      targets: '.st4-0, .st4-1',
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
      id='svg-icon-4'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='48px'
      height='48px'
      viewBox='0 0 64 64'
      enableBackground='new 0 0 64 64'
    >
      <path
        className='st4-0'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M26,49.042L54.963,49.042L54.963,11.042L
        1,11.042L1,49.042L14,49.042L14,59.486Z'
      ></path>
      <path
        className='st4-1'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M57,41.042L62.963,41.042L62.963,3.042L
        9,3.042L9,9'
      ></path>
    </svg>
  );
}
