import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const outeamData = [
  {
    id: 1,
    name: 'Peter Lain',
    position: 'President',
    duty: 'Peter is a serial entrepreneur and the President of the ImageOn Group of companies as well as ION Facilities Services, a national property management company',
  },
  {
    id: 2,
    name: 'Shawn Tallon',
    position: 'Vice President',
    duty: 'Shawn has more than two decades of excellence in customer service and believes customer service and providing quality products are key to the success of any organization.',
  },
  {
    id: 3,
    name: 'Clive Moore',
    position: 'Chief Creative Officer',
    duty: 'Clive is Chief Creative Officer at Element 6 and Commander in Chief of cm3 a design collective, he brings over 20 years branding and user experience design expertise to the team.',
  },
  {
    id: 4,
    name: 'Jim Gray',
    position: 'Creative Director',
    duty: 'With 20 years’ experience in design, illustration & photography, Jim is the expert in all things design. Most recently, he served as Senior Designer for one of Northern Ontario’s largest independent publishers. When he’s not working you can find @jimg making his own paper & carving relief prints.',
  },
  {
    id: 5,
    name: 'Felix Le',
    position: 'Front-end Developer',
    duty: 'Felix is a Georgian College graduate in a Web-designer program and is a Developer with Element 6. Felix focuses on details and is very responsive to client needs. Felix is also a lifelong learner and an out-of-the-box thinker.',
  },
  {
    id: 6,
    name: 'Slawomira Hatlas Weber',
    position: 'Creative Director',
    duty: 'Slawka is a professional graphic designer with experience in all facets of design. Her specialties include the creation of innovative print materials using photos, illustration and compelling layouts. In addition to her technical skills, Slawka has the ability to develop ideas that accurately and creatively reflect a message and help to meet the objectives of a project. Clients are continually impressed by her energy, willingness to contribute to the overall success of a project and ability to meet tight deadlines.',
  },
  {
    id: 7,
    name: 'Carole Wright',
    position: 'Community Manager',
    duty: "A Western University graduate, Carole has over 20 years of experience in creative, dynamic roles such as project coordinator, adult education instructor, marketing coordinator and most recently as a lead copywriter. She's a also a grammar nerd.",
  },
  {
    id: 8,
    name: 'Dan Zaina',
    position: 'Graphic/UI Designer',
    duty: 'Dan is currently a Graphic/UI Designer at Element 6. As a former graduate of the Graphic Design & Interactive Media Web Design program at Georgian College, Dan has worked on e-commerce platforms as well various front end digital publications.',
  },
  {
    id: 9,

    name: 'Ryan Moreau',
    position: 'Developer',
    duty: 'A self-taught web development guru, Ryan Moreau specializes in developing optimized and secure web sites and applications that follow industry best practices. When not using his abilities to create magical code, Ryan can be found wowing audiences as a professional magician.',
  },
];
export default function OurTeam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '80%',
  });

  let delay = 0;
  return (
    <>
      <ul className='row'>
        {outeamData?.map((item) => {
          const { id, name, position, duty } = item;
          delay += 0.2;
          return (
            <li className='mb-[3rem] flex w-full p-5 md:w-1/3' key={id}>
              <motion.div
                ref={ref}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ delay: delay, duration: 0.5 }}
              >
                <div className='team-wrap'>
                  <h6 className='pb-[1rem] text-left font-display  '>{name}</h6>
                  <p className='pb-[2.5rem]'>
                    <strong className=' font-semibold'>{position}</strong>
                  </p>
                  <p>{duty}</p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
