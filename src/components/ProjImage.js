
import React from 'react'
import Carousel from 'react-grid-carousel'
import Image from './Image'
import Tilt from 'react-tilt'


const ProjImage = ({ img }) => {
	
	

	return (
		<Carousel  
			cols={3}
		    rows={2}
		    gap={10}
		    showDots 
		    loop
		    responsiveLayout={[
		    	{ breakpoint: 1000, cols: 2 },
			    { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
			    { breakpoint: 499, autoplay: 2000, loop: true },
		   		{ breakpoint: 360, autoplay: 2000, loop: true }
		   ]}
		   mobileBreakpoint={670}
   		>
   		{ img.map((Img) => (
		    <Carousel.Item key={Img.id} >
		  
			    	<div className="card-carousel">
			    		<div className="circle-carousel"><h6> { Img.proj } </h6> </div>
			    		<div className="content-carousel">
			    			<img width="100%" src={Img.img} alt="Image" />
			    			<p> {Img.descrip} </p>
			    		</div>
			    	</div>
			   		  
		    </Carousel.Item>
	    ))}

	    </Carousel >
	)
}

export default ProjImage