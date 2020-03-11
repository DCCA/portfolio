import React, { useState, useEffect } from "react"
import { Link, useStaticQuery } from "gatsby"
import style from '../styles/pages/portfolio.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
    const data = useStaticQuery(graphql`
	query GetRepos {
	    allStrapiRepos {
		edges {
		    node {
			id
			title
			description
			featureImage {
			    publicURL
			}
		    }
		}
	    }
	}`)
    return (
    <Layout>
	<SEO title="Dev Portfolio" />
	<div className='portfolio-wrapper'>
	<h1>/portfolio</h1>
	<p>this is a list of my repos in github {data.allStrapiRepos.edges[0].node.title}</p>
	{(data && data.allStrapiRepos.edges.length > 0 && data.allStrapiRepos.edges.map( repos => {
	    const backgroundImageStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)) ,url(${repos.node.featureImage.publicURL})`,
		backgroundPosition: `top`,
		backgroundSize: `cover`
	    }
	    return (
		<div className='repo-card'>
		    <div className='header-image' style={backgroundImageStyle}>
		    </div>
		    <h2>{repos.node.title}</h2>
		    <p>{repos.node.description}</p>
		</div>
	    )
	}))}
	</div>
    </Layout>
)}

export default Portfolio
