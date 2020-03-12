import React from "react"
import { CSSTransition } from "react-transition-group"
import '../styles/pages/index.scss'
import '../styles/_animations.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
    return (
	<CSSTransition 
	in={true}
	appear={true}
	exit={true}
	timeout={500}
	classNames="fade"
	>
	<Layout>
	<SEO title="Home" />
	<div className='experiences-wrap'>
	<h1>DCCA</h1>
	<h2>/product-developer</h2>
	</div>
	</Layout>
	</CSSTransition>
    )}

export default IndexPage
