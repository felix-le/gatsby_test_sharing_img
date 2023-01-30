import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import Article from './article';

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = useStaticQuery(graphql`
    query {
      allStrapiArticle(sort: { fields: published, order: DESC }) {
        edges {
          node {
            id
            title
            subtitle
            published(formatString: "MMMM Do YYYY")
            slug
            image {
              localFile {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const articles = data.allStrapiArticle.edges
    .map(({ node }) => node)
    .filter((article) => article.image);

  return (
    <>
      {articles.length > 0 && (
        <div className='article_wrapper'>
          <Slider {...settings}>
            {articles.map((article) => {
              const { id, title, subtitle, published, slug, image } = article;

              const bgStyle = {
                display: 'flex',
                backgroundImage: `url(${image?.localFile.childImageSharp.original.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '300px',
                height: '200px',
                marginBottom: '1.5rem',
              };

              return (
                <Article
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  published={published}
                  slug={slug}
                  bgStyle={bgStyle}
                />
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Index;
