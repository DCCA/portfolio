import React from "react"
import { Link } from "gatsby"
import '../styles/pages/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='experiences-wrap'>
	<h1>DCCA</h1>
	<h2>/product-developer</h2>
    </div>
  </Layout>
)

export default IndexPage
