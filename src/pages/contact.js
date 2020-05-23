import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reusable/HeroSection';
import InfoBlock from '../components/reusable/Infoblock';
import Contact from '../components/Contact/contact';

const ContactPage = ({ data }) => (
    <Layout>
        <SEO title="Contact Us" />
        <HeroSection
            img={data.img.childImageSharp.fluid}
            title="Contact Me"
            subtitle=""
            heroclass="about-background"
        />
        <InfoBlock heading="How can we help" />
        <Contact />
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
