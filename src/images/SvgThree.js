import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgThree() {
  useEffect(() => {
    anime({
      targets:
        '.st3-0, .st3-1, .st3-2, .st3-3, .st3-4, .st3-5, .st3-6, .st3-7, .st3-8',
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
      id='svg-icon-3'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='48px'
      height='48px'
      viewBox='0 0 64 64'
      enableBackground='new 0 0 64 64'
    >
      <path
        className='st3-0'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        width='62'
        height='50'
        d='M1 7 L63 7 L63 57 L1 57 Z'
      ></path>
      <path
        className='st3-1'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M1,15L63,15'
      ></path>
      <path
        className='st3-2'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M10,11L6,11'
      ></path>
      <path
        className='st3-3'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M18,11L14,11'
      ></path>
      <path
        className='st3-4'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M26,11L22,11'
      ></path>
      <path
        className='st3-5'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M6,25L33,25'
      ></path>
      <path
        className='st3-6'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M6,33L33,33'
      ></path>
      <path
        className='st3-7'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M6,41L33,41'
      ></path>
      <path
        className='st3-8'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        width='19'
        height='16'
        d='M38 25 L57 25 L57 41 L38 41 Z'
      ></path>
    </svg>
  );
}
