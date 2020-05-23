import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reusable/HeroSection';
import InfoBlock from '../components/reusable/Infoblock';
import DualInfoBlock from '../components/reusable/DualInfoblock';
import TeamPhotoSectiom from '../components/About/TeamPhotoSectiom';


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="My first project on react"
      subtitle="it's about section"
      heroclass="about-background"
    />
    <DualInfoBlock heading="A message from CEO" imageSource="https://images.pexels.com/photos/3826670/pexels-photo-3826670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <InfoBlock heading="About Vision" />
    <TeamPhotoSectiom />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
