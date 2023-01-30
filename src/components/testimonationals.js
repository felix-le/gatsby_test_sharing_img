import React from 'react';
import Slider from 'react-slick';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../elements/section';

const Testimonationals = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTestimonial {
        edges {
          node {
            text
            description {
              data {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonialData = data.allStrapiTestimonial.edges.map(
    ({ node }) => node
  );

  return (
    <Section sectionAddClasses='bg-black testinmonial-section'>
      <Slider {...settings}>
        {testimonialData?.map((item, i) => {
          const { text, description } = item;
          return (
            <div key={i} className='h-min-[130px] testimonial-quote'>
              <h4 className='testinmonial-description  relative max-w-[830px] text-left text-base  text-[#c8c8c8] md:text-2xl'>
                &ldquo; {description.data.childMarkdownRemark.rawMarkdownBody}
                &rdquo;
              </h4>
              <p className='testimonial-author text-left text-[#c8c8c8]'>
                &mdash;{text}
              </p>
            </div>
          );
        })}
      </Slider>
    </Section>
  );
};

export default Testimonationals;
