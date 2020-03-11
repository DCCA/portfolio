import React from "react"
import {useStaticQuery} from 'gatsby'
import { Markdown } from 'react-showdown'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/pages/about.scss'

const About = () => { 
    const data = useStaticQuery(graphql`
    query GetAbout {
	  strapiAbout {
	    id
	    description
	}
    }`)
  return (
      <Layout>
	<SEO title="About Me" />
	<div className='about-wrapper'>
	<h1>/about-me</h1>
	<Markdown className='content-wrapper' markup={data.strapiAbout.description}/>    
	</div>
      </Layout>
  )
}

export default About
