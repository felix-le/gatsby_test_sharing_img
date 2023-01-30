import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Seo from "../components/seo"
// elements portfolio images
import BgPrallax1 from "../images/parallax-1.jpeg"
import BgPrallax3 from "../images/parallax-3.jpeg"
import HerobannerImage from "../images/herobanner_home.jpeg"

import marathonFinancial1Src from "../images/portfolio/marathon-1.jpg"
import marathonFinancial2Src from "../images/portfolio/marathon-2.jpg"
import marathonFinancial3Src from "../images/portfolio/marathon-3.jpg"

import localLeaf1 from "../images/portfolio/local-leaf-1.jpg"
import localLeaf2 from "../images/portfolio/local-leaf-2.jpg"
import localLeaf3 from "../images/portfolio/local-leaf-3.jpg"

import jjautomotive1 from "../images/portfolio/jjautomotive-1.jpg"
import jjautomotive2 from "../images/portfolio/jjautomotive-2.jpg"
import jjautomotive3 from "../images/portfolio/jjautomotive-3.jpg"

import pacePortfolioThumb1 from "../images/portfolio/pace-1Artboard-1.jpg"
import pacePortfolioThumb2 from "../images/portfolio/pace-1Artboard-2.jpg"
import pacePortfolioThumb3 from "../images/portfolio/pace-1Artboard-3.jpg"

import laforet1Artboard1 from "../images/portfolio/laforet-1Artboard-1.jpg"
import laforet1Artboard2 from "../images/portfolio/laforet-1Artboard-2.jpg"
import laforet1Artboard3 from "../images/portfolio/laforet-1Artboard-3.jpg"

import banac1Artboard1 from "../images/portfolio/banac-1Artboard-1.jpg"
import banac1Artboard2 from "../images/portfolio/banac-1Artboard-2.jpg"
import banac1Artboard3 from "../images/portfolio/banac-1Artboard-3.jpg"

// components
// import Section from "../elements/section"
// import Mapbox from "../components/Mapbox"

// import TwoCol from "../components/animation/twoCol"
// import Testimonationals from "../components/testimonationals"
// import Branding from "../components/animation/branding"
// import OurTeam from "../components/animation/ourTeam"
// import Counter from "../components/animation/counter"

// import Project from "../components/projects/project"
// import Clients from "../components/clients"
// import Seperate from "../components/seperate"
// import Articles from "../components/articles"

// SVG
// import SvgOne from "../images/SvgOne"
// import SvgTwo from "../images/SvgTwo"
// import SvgThree from "../images/SvgThree"
// import SvgFour from "../images/SvgFour"
// data
// const homeBannerData = [
//   {
//     id: 1,
//     title: `helping local brands <br/> create better experiences`,
//   },
//   {
//     id: 2,
//     title: "fuelled by strategy <br/> focused on results",
//   },
//   {
//     id: 3,
//     title: "connecting people <br/> with products they love",
//   },
// ]

// const aboutUsData = [
//   {
//     id: 1,
//     svg: <SvgOne />,
//     title: 'branding & identity',
//     desc: 'For new start-up companies or established companies we will build a strong brand that will connect you and develop strong relationships with your customer.',
//   },
//   {
//     id: 2,
//     svg: <SvgTwo />,
//     title: 'user experience',
//     desc: 'A user friendly responsive website is essential to creating a successful brand experience, we will create a website that is forward thinking and aligns with your audience.',
//   },
//   {
//     id: 3,
//     svg: <SvgThree />,
//     title: 'web design & development',
//     desc: 'A professionally designed website that is fast, secure, mobile friendly & high performing is essential to building your online presence. ',
//   },
//   {
//     id: 4,
//     svg: <SvgFour />,
//     title: 'social media strategy',
//     desc: 'Connecting socially with your audience on a variety of platforms helps promote your business while increasing leads & a loyal customer base.',
//   },
// ];

// const projectData = [
//   {
//     id: 1,
//     images: [
//       marathonFinancial1Src,
//       marathonFinancial2Src,
//       marathonFinancial3Src,
//     ],

//     typeJob: 'branding.',
//     name: 'Marathon Mortgage Corp.',
//     duties: 'creative direction, content creation, identity, react js',
//     authors:
//       'Clive Moore, Anthony Mika, Carole Wright, Dan Zaina, Matt Quinton, Ryan Moreau',
//   },
//   {
//     id: 2,
//     images: [localLeaf1, localLeaf2, localLeaf3],
//     typeJob: 'website. ',
//     name: 'My Local Leaf',
//     duties: 'creative direction, content creation, graphic design, css',
//     authors: 'clive moore, carole wright, ryan moreau',
//     isTextFirst: true,
//   },
//   {
//     id: 4,
//     images: [jjautomotive1, jjautomotive2, jjautomotive3],
//     typeJob: 'social media. ',
//     name: 'JJ Automotive Insight',
//     duties: 'creative direction, content creation, web design, react js',
//     authors: 'Clive Moore, Carole Wright, Dan Zaina, Ryan Moreau',
//     isTextFirst: true,
//   },

//   {
//     id: 6,
//     images: [pacePortfolioThumb1, pacePortfolioThumb2, pacePortfolioThumb3],
//     typeJob: 'website. ',
//     name: 'PACE Cardiology',
//     duties: 'creative direction, content creation, web design, css',
//     authors: 'clive moore, carole wright, dan zaina, felix le',
//   },
//   {
//     id: 7,
//     images: [laforet1Artboard1, laforet1Artboard2, laforet1Artboard3],
//     typeJob: 'website. ',
//     name: 'Laforet Catering',
//     duties: 'creative direction, content creation, web design, css',
//     authors: 'clive moore, carole wright, dan zaina, felix le',
//   },

//   {
//     id: 8,
//     images: [banac1Artboard1, banac1Artboard2, banac1Artboard3],
//     typeJob: 'website. ',
//     name: 'Barrie Area Native Advisory Circle.',
//     duties: 'creative direction, content creation, web design, css',
//     authors: 'clive moore, carole wright, dan zaina',
//   },
// ];

const IndexPage = ({ data }) => {
  return (
    <Layout
      herobannerImage={HerobannerImage}
      // slideImages={homeBannerData}
      scrollDownGif
    >
      <h1> hello</h1>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const siteMetaData = data.allStrapiGlobal.edges.map(({ node }) => node)

  const { siteDescription } = siteMetaData[0]
  return (
    <Seo
      metaTitle="Design, Web Development & Branding "
      metaDescription={siteDescription}
      isBlogPost
    />
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const query = graphql`
  query {
    allStrapiGlobal {
      edges {
        node {
          siteName
          siteDescription
          favicon {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
