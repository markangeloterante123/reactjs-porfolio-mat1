import React from 'react'

import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Image from '../Image'
import Logo from '../../assets/profile.jpg';
import Particles from '../../components/Particles'
import Profile from './Profile'
import Porfolio from './Porfolio'
import Tilt from 'react-tilt'
import Footer from './Footer'

/*
	*/

const Home = () => {
		const imageLogo = {
			image :{
				name: 'Profile',
				logoPic: { Logo }
			}
		}
		
		return (
		<div>
				<Nav />
				<Hero />
			<div className="main-container">		
			 	<div className="container ">
					    <div className="row">
					    <Particles type="polygon" />

						    <div className="dashboard col-lg-3 col-md-10 mx-auto ">
						        	<div className="user">
						        		<Tilt className="Tilt" options={{ max : 25 }} >		        	
							        	<div className="profile-porfolio">
							        		<Image logoPic= { Logo} alt= "Profile" />
							          	</div>
							          	</Tilt>  		
							        </div>
						        <Profile />
						    </div>
						    <div className="cards col-lg-8 col-md-10 mx-auto">
						        <div className="cards-info">
						          	<Porfolio />
						        </div>
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
		 </div>
		)
	
}


export default Home