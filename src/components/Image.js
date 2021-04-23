import React from 'react'



function Image (props) {

	return (
		<div>
			<img
				className="Logo"
				src={props.logoPic}
				alt={props.alt}
			/>
		</div>
	)

}

export default Image