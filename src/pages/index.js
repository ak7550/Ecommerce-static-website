import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reusable/HeroSection';
import InfoBlock from '../components/reusable/Infoblock';
import DualInfoBlock from '../components/reusable/DualInfoblock';
import Coursecart from '../components/Cart/Coursecart';


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="Learning react"
      heroclass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <Coursecart courses={data.courses}/>
    <DualInfoBlock heading="Our team" imageSource="https://images.pexels.com/photos/3826670/pexels-photo-3826670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
        ...GatsbyContentfulFixed_tracedSVG
            
          }
        }
      }
    }
  }
}
`



export default IndexPage
