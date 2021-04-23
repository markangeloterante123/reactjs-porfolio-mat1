import React from 'react'
import Particles from '../../components/Particles'
import Nav from '../../components/Nav'
import Footer from './Footer'
import Email from '../../components/Email'

const Contact = () => {
	return(
			<div className="main-container">		
				<Nav />
			 	<div className="container ">
			 			<div className="row" >
			 				<div style={{maxHeight: '80%'}} className="email-form col-lg-11 col-md-10 mx-auto">
			 					<h1>Get in Touch</h1>
			 					<Email />
			 				</div>
			 				
						    <div className="footer col-lg-8 col-md-10 mx-auto">
					          	<Footer />
					        </div>			
						</div>
				    <div className="circle1"></div>
					<div className="circle2"></div>
					<div className="circle3"></div>
					<div className="circle4"></div>
			  	</div>
			</div>
	)
}

export default Contact