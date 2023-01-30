import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Dot from '../images/dot.png';
// import Logo from '../images/logos/logo-top.png';

const navbarData = [
  {
    id: 1,
    name: 'Home',
    href: '/#home',
  },
  {
    id: 2,
    name: 'About',
    href: '/#about',
  },
  {
    id: 3,
    name: 'Team',
    href: '/#team',
  },
  {
    id: 4,
    name: 'The Work',
    href: '/#work',
  },
  {
    id: 5,
    name: 'Services',
    href: '/#services',
  },
  {
    id: 8,
    name: 'Careers',
    href: '/careers',
  },
  {
    id: 6,
    name: 'Articles',
    href: '/#articles',
  },
  {
    id: 7,
    name: 'Say hello',
    href: '/#contact',
  },
];

export default function Navbar() {
  return (
    <Disclosure as='nav' className='fixed  z-30 h-[67px] w-full bg-[#212121]'>
      {({ open }) => (
        <>
          <div className='container flex h-full items-center justify-between'>
            <div className='logo-wrapper flex w-2/12  items-center '>
              <a href='/#home' className='logo-top navbar-brand' />
            </div>
            {/* destop navbar */}
            <ul className=' hidden  w-10/12 items-center pt-4 pr-10 xl:flex'>
              {navbarData.map((item) => {
                const { id, name, href } = item;
                return (
                  <li
                    key={id}
                    className='relative whitespace-nowrap   bg-[length:15px_10px] bg-left bg-no-repeat pl-8 first:bg-none'
                    style={{ background: `url(${Dot})` }}
                  >
                    <a
                      href={href}
                      className='mx-5 my-0 block cursor-pointer p-4 font-title text-xs font-normal uppercase tracking-[2px] text-white transition-all duration-300 ease-linear hover:text-primary'
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* mobile navbar */}

            {/* Mobile menu button */}
            <div className='mx-auto flex h-full w-full items-center justify-end px-4 lg:px-8 xl:hidden'>
              <div className='flex h-16 items-center justify-between'>
                <div className=' flex '>
                  <Disclosure.Button className='hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className='block h-12 w-12'
                        aria-hidden='true'
                      />
                    ) : (
                      <Bars3Icon
                        className='block h-12 w-12'
                        aria-hidden='true'
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile nav */}
            <Disclosure.Panel className='absolute top-0 left-0 mt-[67px] w-full bg-[#212121] pb-8 xl:hidden'>
              <div className='container'>
                <ul className='w-full xl:flex'>
                  {navbarData.map((item) => {
                    const { id, name, href } = item;
                    return (
                      <li
                        key={id}
                        className='relative whitespace-nowrap bg-[length:15px_10px] bg-left bg-no-repeat pl-8 first:bg-none'
                      >
                        <Disclosure.Button
                          as='a'
                          href={href}
                          className='bg-gray-900 block rounded-md px-3 py-3 font-title text-base font-medium text-white'
                        >
                          {name}
                        </Disclosure.Button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
