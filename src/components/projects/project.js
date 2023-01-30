import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
export default function Project({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  let delayImg = 0.1;
  return (
    <div ref={ref}>
      <div>
        {data?.map((project, i) => {
          const {
            id,
            images,
            typeJob,
            name,
            duties,
            authors,
            isTextFirst,
            link,
          } = project;
          const isRight = i % 2 === 1;
          return (
            <div
              className={`row ${isRight ? 'flex-row-reverse' : ''} px-6 `}
              key={id}
              ref={ref}
            >
              <div className='w-full md:w-2/5'>
                <div className='relative w-full'>
                  {images?.map((img) => {
                    delayImg += 0.2;
                    return (
                      <motion.div
                        animate={{
                          opacity: inView ? 1 : 0,
                          y: inView ? 0 : 150,
                        }}
                        transition={{ delay: delayImg, duration: 1 }}
                        key={img}
                      >
                        <img src={img} alt={name} className='w-full' />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <motion.div
                ref={ref}
                className='w-full md:w-3/5'
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className='max-w-full'>
                  <div
                    className={`relative z-10 mt-[1rem] block bg-primary-light pl-0 pt-[1rem] pb-[4.5rem] text-left  tracking-[1px] md:mt-[13rem]  md:px-[3rem] md:pt-[3rem] ${
                      isRight
                        ? ' md:translate-x-[120px] md:text-right  '
                        : ' md:translate-x-[-120px]'
                    }`}
                  >
                    <div className='relative w-full pb-[3rem]'>
                      <p className='relative font-display text-xs font-normal '>
                        {typeJob}
                        <span className='before:content:none relative pl-[8rem] before:absolute before:top-[1rem] before:left-[1.4rem] before:h-[0.05rem] before:w-[4rem] before:bg-gray-400'>
                          {name}
                        </span>
                      </p>
                    </div>
                    <div className='relative w-full'>
                      <h6
                        className={`color-secondary w-full text-left font-normal italic text-secondary ${
                          isRight ? 'md:text-right' : ''
                        }`}
                      >
                        {duties}
                      </h6>
                      {authors && (
                        <p className='w-full pt-[0.5rem] pb-[3rem] font-title text-[14px] '>
                          author:{' '}
                          <span className='text-primary'>{authors}</span>
                        </p>
                      )}
                      {link && (
                        <h6 className='mt-8 text-left italic'>
                          <Link to={link} className='text-primary'>
                            {' '}
                            learn more
                          </Link>
                        </h6>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
