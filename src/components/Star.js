import React from 'react'

const Star = ({color}) => {

	return (
		<>
			{!color ? <i className="successStar fa fa-star"></i> : <i className="fa fa-star text-secondary"></i>  }	
		</>
	)
}
export default Star