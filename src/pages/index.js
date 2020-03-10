import React from "react"
import { Link } from "gatsby"
import '../styles/pages/index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className='tagline'>/building products that work</h1>
    <div className='experiences-wrap'>
	<h2>/experience</h2>
	<ul>
	    <li>
		<h3><i class="fas fa-space-shuttle"></i> senior-product-management</h3>
		<p>5 years experience building and delivering digital products</p>
	    </li>
	    <li>
		<h3><i class="fas fa-code"></i> junior-developer</h3>
		<p>6 month hands-on coding experience</p>
	    </li>
	</ul>
    </div>
  </Layout>
)

export default IndexPage
