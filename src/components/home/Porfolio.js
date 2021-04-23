import React from 'react'
import Star from '../../components/Star'
import Comment from './Comment'

const Porfolio = () => {
	return(
		<>
			
				<div className="card-detail">
					<h1 className="name-title">Mark Angelo Terante</h1>
					<div className="animation-comment"><Comment /></div>
					   <h6>  I am graduating student these summer 2021 but due to the pandemic most of my remaining laboratory class 
					              won't be available and most of the regular students are required to add another semester to take the reamiing 
					              laboratory units.  I started to get interest in web development last March 2020 and the first thing i learn is 
					              PHP laungage. Gaining more experience i started to used CodeIgniter and learn the concept of MVC, mySQL XAMPP, 
					              templates, Jquery-AJAX, and Bootstrap. I fully develop my understanding about the concept of MVC and the manupilation 
					              of data from the back-end to front end side. As a insipiring web developer i hoping to be a full stack developer and to
					              achieve i started to learn the front end using the Reactjs, SASS, Bootstrap, Animation Hooks and soon Redux. 
					   	</h6>
				</div>
			
				<div className="card-detail">
				    <h4 className="post-title">
				    	Work Experience
				    	<span>Fravinz Enterprises Incorporation  July 27,2013 - May 2017</span>
				    </h4>
				    <p><i className="fa fa-circle"></i> ToolKeeper / Safety Officer / ERT - <span>2014-2017</span></p>
				    <p><i className="fa fa-circle"></i> Warehouse-man - 2013-2014 </p>
				</div>
			
				<div className="card-detail">
					<h3 className="post-title"> Education and Qualifications</h3>
				    <h5 className="Title-info">
				     Bachelor of Sciennce in Information Technology
				     <span><i className="fa fa-university"></i> Cavite State Univeristy-Carmona Campus 2017-2022</span>
				    </h5>     
				   <h5 className="Title-info">
				     Basic Elementary Education -Under Graduate
				     <span><i className="fa fa-university"></i> University of Perpetual Help-GMA 2011-2013</span>
				    </h5>
				</div>
			
				<div className="card-detail">
					<h4 className="post-title">
				     Skills
				    </h4>
				    <p>Reactjs <Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></p>
				     <p>HTML <Star /> <Star /><Star /><Star /><Star  /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></p>
				     <p>SASS /CSS <Star /> <Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></p>
				    <p>JavaScript <Star /><Star  /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></p>
				    <p>Git <Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /></p>
				    <p>PHP <Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /></p>
				    <p>CodeIgniter / MVC <Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /></p>
				    <p>mySQL XAMPP <Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /></p>
				    <p>Jquery-AJAX <Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></p>
				    <p>Bootstrap <Star /><Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></p>
				</div>
			
		</>
	)
}

export default Porfolio