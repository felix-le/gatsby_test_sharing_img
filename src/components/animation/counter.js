import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ target, title, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const counterData = [
    {
      id: 1,
      target: 147,
      title: 'Clients',
    },
    {
      id: 2,
      target: 2619,
      title: 'Projects',
    },
    {
      id: 3,
      target: 231,
      title: 'Brands',
    },
    {
      id: 4,
      target: 4,
      title: 'Awards',
    },
  ];

  return (
    <>
      {counterData.length > 0 && (
        <div
          className='counter-wrapper absolute z-10 flex flex-col items-center justify-center md:flex-row'
          ref={ref}
        >
          {counterData?.map((item) => {
            const { id, target, title } = item;
            return (
              <div className='w-full p-0 pb-[3rem] sm:w-1/4 sm:p-5' key={id}>
                <p className='pb-[1.2rem] text-center text-6xl text-primary'>
                  <CountUp
                    end={inView ? target : 0}
                    duration={5}
                    useEasing={true}
                  />
                </p>
                <h6 className='text-white'>{title}</h6>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Counter;
