import React from 'react'
import Star from '../../components/Star'

const Profile = () => {
	return (
		<>
				
						<h3 className="Title-info"><b>Personal Details:</b></h3>
			          	<hr/>
			            <h4 className="Title-info">
			              Name:
			              <span>Mark Angelo A. Terante </span>
			            </h4>
			            <h4 className="Title-info">
			              Adress:
			              <span>Brgy.E.Malia, GMA, Cavite</span>		
			            </h4>
			            <h4 className="Title-info">
			               Phone No.:
			              <span> 09776841268</span>
			            </h4>
			             <h4 className="Title-info">
			               Email:
			              <span><a href="#" target="_blank"> Gmail</a></span>
			            </h4>
			            <h4 className="Title-info">
			               LinkedIn:
			              <span><a href="#" target="_blank"> LinkedIn</a></span>
			            </h4>
			            <h4 className="Title-info">
			               Github:
			              <span><a href="#" target="_blank"> Github</a></span>
			            </h4>
			           	<hr/>
			           	<h3 className="Title-info">Interest</h3>
			           	<h4 className="Title-info">
			                <span> Chess</span>
			                <span> Web Novel &amp; Novel</span>
			                <span> Front-End Coding</span>
			            	<span> Foods </span>
			            </h4>
			            <hr/>
			         	<h3 className="Title-info">Languages
			 				<p> Tagalog <Star /> <Star /> <Star /> <Star /> </p>
			 				<p> English <Star /> <Star /></p>
			        	</h3>	
			   	
		</>
	)

} 

export default Profile