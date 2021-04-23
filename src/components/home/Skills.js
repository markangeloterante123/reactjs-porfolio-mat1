import React from 'react'

import Nav from '../../components/Nav'

import Particles from '../../components/Particles'
import Tilt from 'react-tilt'
import Footer from './Footer'

import Vertical from '../../components/Vertical'


const Skills = () => {

	return (
		<>
		<div>
			<Nav />
			<div className="main-container">		
			 	<div className="container ">
					    <div className="row">
					    <Particles type="polygon" />
					    	<div className="card-detail col-lg-8 col-md-10 col-sm-9 mx-auto" style={{display: 'flex', itemAlign:'center', justifyContent:'center'}}>
						    	<h1 className="name-title" >Skills Development Map </h1>
							</div> 
							    <Vertical />
						    
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
		 </div>
		</>
	)
}

export default Skills