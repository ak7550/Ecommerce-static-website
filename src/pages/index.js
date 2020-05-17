import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reusable/HeroSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      title="I write code"    
      subtitle="Learning react"
      heroclass="hero-background"
    />
  </Layout>
)

export default IndexPage
