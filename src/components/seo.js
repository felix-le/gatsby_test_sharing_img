import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ShareImage from "../images/shareImage.jpeg"

import favioIcon from "../images/favicon.ico"

const Seo = ({
  metaTitle,
  metaDescription,
  shareImg,
  isBlogPost,
  metakeywords,
}) => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  const defaultSeo = {
    metaTitle: "Element 6",
    metaDescription:
      "Element 6 is a website design, web development & social media marketing agency in Barrie. We help brands create better user experiences.",
    shareImage: ShareImage,
    metaKeywords:
      "Website, web design, web development, social media, branding, marketing, graphic design, marketing agency, blogs, blogging, SEO, ecommerce ",
  }
  const { siteName, siteDescription } = strapiGlobal

  // Merge default and page-specific SEO values
  const fullSeo = {
    metaTitle: metaTitle || defaultSeo.metaTitle,
    metaDescription:
      metaDescription || siteDescription || defaultSeo.metaDescription,
    shareImage: shareImg ? shareImg : defaultSeo.shareImage,
    metaKeywords: metakeywords || defaultSeo.metaKeywords,
  }

  // Add site name to title
  fullSeo.metaTitle = `${siteName} | ${fullSeo.metaTitle}`

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      )
    }
    if (fullSeo.metaKeywords) {
      tags.push({
        name: "keywords",
        content: fullSeo.metaKeywords,
      })
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      )
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },

        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "og:image:width",
          content: 500,
        },
        {
          name: "og:image:height",
          content: 500,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      )
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })

    return tags
  }
  const url = "https://element6.io"

  const metaTags = [
    {
      property: "og:url",
      content: url,
    },
    {
      rel: "canonical",
      content: url,
    },
    {
      property: "og:type",
      content: isBlogPost ? "article" : "website",
    },
  ].concat(getMetaTags())
  return (
    <Helmet
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: favioIcon,
          type: "image/png",
        },
      ]}
      meta={metaTags}
    />
  )
}

export default Seo
