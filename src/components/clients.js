import React from 'react';
import Slider from 'react-slick';

import Section from '../elements/section';

import innisbrook from '../images/logos/innisbrook.png';
import algonquin from '../images/logos/algonquin.png';
import misterTransmission from '../images/logos/mister-transmission.png';
import hydroOne from '../images/logos/hydro-one.png';
import muskoka from '../images/logos/muskoka.png';
import cannab from '../images/logos/cannab.png';
import barriePride from '../images/logos/barrie-pride.png';

const clientsData = [
  {
    id: 1,
    src: innisbrook,
    alt: 'Innisbrook',
  },
  {
    id: 2,
    src: algonquin,
    alt: 'Algonquin',
  },
  {
    id: 3,
    src: misterTransmission,
    alt: 'Mister Transmission',
  },
  {
    id: 4,
    src: hydroOne,
    alt: 'Hydro One',
  },
  {
    id: 5,
    src: muskoka,
    alt: 'Muskoka Brewery',
  },
  {
    id: 6,
    src: cannab,
    alt: 'Cannab Agency',
  },
  {
    id: 7,
    src: barriePride,
    alt: 'Barrie Pride',
  },
];

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Section sectionAddClasses='z-10 p-0 '>
      <Slider {...settings}>
        {clientsData?.map((item) => {
          const { id, src, alt } = item;
          return <img key={id} className='max-w-[8rem]' src={src} alt={alt} />;
        })}
      </Slider>
    </Section>
  );
};

export default Clients;
