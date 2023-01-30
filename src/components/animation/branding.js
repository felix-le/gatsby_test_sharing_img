import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const brands = [
  {
    id: 1,
    icon: '&#xe001;',
    title: 'branding.',
    text: 'We work with you to build a strong brand that will help you connect and develop strong relationships.',
  },
  {
    id: 2,
    icon: '&#xe02b;',
    title: 'web development.',
    text: 'A professionally designed website is essential to creating brand awareness and building your online presence.',
  },
  //
  {
    id: 3,
    icon: '&#xe027;',
    title: 'e-commerce.',
    text: 'E-commerce integration for your website will scale up sales & increase your visibility & profits. New customers are waiting for you to sell online, so let’s get started.',
  },
  {
    id: 4,
    icon: '&#xe00e;',
    title: 'website refresh.',
    text: 'Already have a website but want to update it to meet new user-friendly & mobile-friendly standards? If you want a modern, sleek & fast website refresh, you’ve come to the right place.',
  },
  {
    id: 5,
    icon: '&#xe03b;',
    title: 'social media.',
    text: 'We can work with you to develop an effective social media plan that is tailored to your needs, industry and budget.',
  },
  {
    id: 6,
    icon: '&#xe050;',
    title: 'seo.',
    text: 'Our search engine optimization services (SEO) ensure that your target demographic can easily find you online.',
  },
  {
    id: 7,
    icon: '&#xe033;',
    title: 'graphic design.',
    text: 'We’ll provide you with professional and creative graphic design services you need within a budget that works well for you.',
  },
  {
    id: 8,
    icon: '&#xe032;',
    title: 'copywriting.',
    text: 'Copy that motivates, inspires and engages your audience, we help you tell your story the right way.',
  },
  {
    id: 9,
    icon: '&#xe032;',
    title: 'collateral.',
    text: 'We take extreme pride in making sure that your presentation folder, inserts and sell sheet are always the best they can be.',
  },
];

export default function Branding() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '80%',
  });

  let delayTransition = 0;

  return (
    <>
      {brands.length > 0 && (
        <div className='row items-stretch bg-white'>
          {brands.map((brand) => {
            const { id, icon, title, text } = brand;
            delayTransition += 0.2;

            return (
              <motion.div
                ref={ref}
                className='flex w-full flex-wrap self-stretch p-[2rem] md:w-2/6'
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: delayTransition, duration: 1 }}
                key={id}
              >
                <div className='relative bg-[#f9f9f9] p-[2rem]'>
                  <h5 className='mb-8 text-center md:text-left'>
                    <span
                      className='pr-4 font-icon text-base text-primary'
                      dangerouslySetInnerHTML={{
                        __html: icon,
                      }}
                    />
                    {title}
                  </h5>
                  <p>{text}</p>
                  <br />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}
