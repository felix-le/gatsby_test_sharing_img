import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function SvgTwo() {
  useEffect(() => {
    anime({
      targets:
        '.st2-0, .st2-1, .st2-2, .st2-3, .st2-4, .st2-5, .st2-6, .st2-7, .st2-8, .st2-9, .st2-10, .st2-11',
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
      id='svg-icon-2'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='48px'
      height='48px'
      viewBox='0 0 64 64'
      enableBackground='new 0 0 64 64'
    >
      <path
        className='st2-0'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M16,24L38,24'
      ></path>
      <path
        className='st2-1'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M16,34L38,34'
      ></path>
      <path
        className='st2-2'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M16,44L38,44'
      ></path>
      <path
        className='st2-3'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M16,54L38,54'
      ></path>
      <path
        className='st2-4'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M12,24L8,24'
      ></path>
      <path
        className='st2-5'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M12,34L8,34'
      ></path>
      <path
        className='st2-6'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M12,44L8,44'
      ></path>
      <path
        className='st2-7'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M12,54L8,54'
      ></path>
      <path
        className='st2-8'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M14,8L1,8L1,63L45,63L45,8L32,8'
      ></path>
      <path
        className='st2-9'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M27,5L27,1L19,1L19,5L15,5L13,13L33,13L31,5Z'
      ></path>
      <path
        className='st2-10'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M55,1L55,54L59,62L63,54L63,1Z'
      ></path>
      <path
        className='st2-11'
        fill='none'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M55,11L63,11'
      ></path>
    </svg>
  );
}
