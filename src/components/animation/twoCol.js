import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function AboutUs({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '20%',
  });

  let delay = 0;
  let duration = 1;
  return (
    <>
      <ul className='row'>
        {data?.map((item) => {
          const { id, svg, title, desc } = item;

          delay += 0.2;
          duration += 0.5;
          return (
            <li className='flex w-full p-10 md:w-1/2' key={id}>
              <motion.div
                ref={ref}
                className='about-icon'
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: delay, duration: duration }}
              >
                {svg}
              </motion.div>
              <motion.div
                ref={ref}
                className='pl-[5rem]'
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: delay + 1, duration: duration + 1 }}
              >
                <h5 className='pb-[2rem] text-left'>{title}</h5>
                <p>{desc}</p>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
