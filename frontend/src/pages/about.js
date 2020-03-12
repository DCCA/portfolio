import React from "react"
import { CSSTransition } from "react-transition-group"
import {useStaticQuery} from 'gatsby'
import { Markdown } from 'react-showdown'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/pages/about.scss'
import '../styles/_animations.scss'

const About = () => { 
    const data = useStaticQuery(graphql`
    query GetAbout {
	  strapiAbout {
	    id
	    description
	}
    }`)
  return (
	<CSSTransition 
	in={true}
	appear={true}
	exit={true}
	timeout={500}
	classNames="fade"
	>
      <Layout>
	<SEO title="About Me" />
	<div className='about-wrapper'>
	<h1>/about-me</h1>
	<Markdown className='content-wrapper' markup={data.strapiAbout.description}/>    
	</div>
      </Layout>
      </CSSTransition>
  )
}

export default About
