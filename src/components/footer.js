import React from "react"
import { Link } from "gatsby"

import Cookie from "./cookie"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
// FaInstagram
// import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
// import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
// import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
// import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';

import logo from "../images/logos/footer-logo.png"
import ionGroup from "../images/logos/iongroup.svg"
import Uparrow from "../images/up-arrow.png"

import Section from "../elements/section"

const socials = [
  {
    id: 1,
    // icon: <FaInstagram />,
    link: "https://www.instagram.com/element6io/",
    name: "Instagram",
  },
  {
    id: 2,
    // icon: <FaFacebook />,
    link: "https://www.facebook.com/Element-6-2046113445602816/",
    name: "Facebook",
  },
  {
    id: 3,
    // icon: <FaTwitter />,
    link: "https://twitter.com/element6io",
    name: "Twitter",
  },
  {
    id: 4,
    // icon: <FaLinkedinIn />,
    link: "https://ca.linkedin.com/company/element6io",
    name: "LinkedIn",
  },
]

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <>
      <Cookie />
      <footer>
        <Section sectionAddClasses="overflow-hidden bg-dark">
          <motion.div
            ref={ref}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
          >
            <div className="row flex-col items-center justify-center justify-self-auto md:flex-row">
              <div className="flex w-full items-center justify-center pl-0 md:block md:w-1/2 md:pl-6">
                <div className="footer-top">
                  <img
                    src={logo}
                    alt="Element 6 logo"
                    className="max-w-[180px]"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative block">
                  <ul className="mt-8 flex justify-center md:mt-0 md:justify-end md:pr-6">
                    {socials.map(social => {
                      const {
                        id,
                        // icon,

                        link,
                        name,
                      } = social
                      return (
                        <li
                          key={id}
                          className="footer-social-item hover:bg-primary"
                        >
                          <a
                            href={link}
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {/* {icon} */}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="h-[1px] w-full bg-[hsla(0,0%,100%,.1)]"></div>
            </div>
            <div className="row">
              <div className="w-full pl-0 md:w-5/12 md:pl-6 ">
                <p className="text-xx tracking-[1px] text-[#f4f4f4]">
                  {new Date().getFullYear()} &copy; Element 6 Inc. Part of the
                  ImageOn Group of companies. All rights reserved.
                </p>
              </div>
              <div className="w-full  md:w-2/12">
                <a href="#top" data-gal="m_PageScroll2id">
                  <div
                    className="arrow-up-footer "
                    style={{ background: `url(${Uparrow})` }}
                  ></div>
                </a>
              </div>
              <div className="w-full md:w-5/12">
                <p className="mt-8 text-center text-xx tracking-[1px] text-[#f4f4f4] md:mt-0 md:pr-6 md:text-right">
                  <Link to="/privacy">Privacy</Link>
                </p>
              </div>
            </div>
            <div className="opacity-100 md:opacity-60">
              <div className="row items-center justify-center md:items-start md:justify-start">
                <a
                  href="http://iongroup.ca/"
                  target="_blank"
                  className="h-45 mt-0 w-auto md:m-[25px] md:h-[45px] md:w-[170px]"
                  rel="noreferrer"
                >
                  <img
                    src={ionGroup}
                    alt="ION Group of Companies"
                    className="max-h-[45px] w-full"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </Section>
      </footer>
    </>
  )
}
