import React from 'react';
import Slider from 'react-slick';
import Scroll from '../images/scroll.gif';

function SlideBanner({ scrollDownGif, herobannerImage, slideImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='hero_banner_wrapper pt-[67px]' id='home'>
      <Slider
        {...settings}
        className='h-full w-full bg-cover bg-center bg-no-repeat'
        style={{ background: `url(${herobannerImage})` }}
      >
        {slideImages?.map((item) => (
          <div key={item.id}>
            <h1
              className='banner_text'
              dangerouslySetInnerHTML={{
                __html: item.title,
              }}
            />
          </div>
        ))}
      </Slider>
      {scrollDownGif && (
        <a
          className='scroll_down'
          style={{ background: `url(${Scroll})` }}
          href='#about'
        ></a>
      )}
    </div>
  );
}

export default SlideBanner;
