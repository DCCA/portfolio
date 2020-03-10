import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import style from '../styles/pages/portfolio.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
    // Create the states
    const [loading, setLoading] = useState();
    const [items, setItems] = useState();
    // Fetch the repost from Github
    useEffect(() => {
	setLoading(true);
	const url = 'https://api.github.com/users/DCCA/repos'
	fetch(url)
	    .then(res => res.json())
	    .then(data => {
		setLoading(false);
		setItems(data);
	    })
    }, []);

    const loadingWidget = () => (
	<p>loading...</p>
    )
    
    // Data we receive from each repo
    // - Name
    // - URL
    // - Description 
    // - Language
    if(loading){
	return loadingWidget;
    }

    return (
    <Layout>
	<SEO title="Dev Portfolio" />
	<div className='portfolio-wrapper'>
	<h1>/portfolio</h1>
	<p>this is a list of my repos in github</p>
	{(items && items.length > 0) && items.map((item)=> {
	    return (
		<div className='repo-card container'>
		    <a href={item.html_url}>
			<h2>/title:<br />{item.name}</h2>
			<h3>/main-language:</h3>
			<p>{item.language}</p>
			<h3>/description:</h3>
			<p>{item.description}</p>
		    </a>
		</div>
	    )
	})}
	</div>
    </Layout>
)}

export default Portfolio
