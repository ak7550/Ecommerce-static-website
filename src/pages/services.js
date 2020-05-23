import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reusable/HeroSection';
import InfoBlock from '../components/reusable/Infoblock';
import DualInfoBlock from '../components/reusable/DualInfoblock';
import TeamPhotoSectiom from '../components/About/TeamPhotoSection';


const ServicePage = ({ data }) => (
    <Layout>
        <SEO title="About" />
        <HeroSection
            img={data.img.childImageSharp.fluid}
            title="My first project on react"
            subtitle="It's services section"
            heroclass="hero-background"
        />
        <DualInfoBlock heading="We provide" imageSource="https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <InfoBlock heading="Our services" />
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "services.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ServicePage
