import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import SlideBanner from "./slideBanner"
import SingleBanner from "./singleBanner"

const Layout = ({
  children,
  herobannerImage,
  slideImages,
  scrollDownGif,
  singleImage,
}) => {
  return (
    <>
      <Navbar />
      {!!slideImages && (
        <SlideBanner
          scrollDownGif={scrollDownGif}
          slideImages={slideImages}
          herobannerImage={herobannerImage}
        />
      )}{" "}
      {!!singleImage && <SingleBanner singleImage={singleImage} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
