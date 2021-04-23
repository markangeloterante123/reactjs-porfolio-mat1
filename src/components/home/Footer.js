import React from 'react'

const Footer = () => {
	return (
		<>
					<ul className="list-inline text-center">
					    <li className="list-inline-item">
					      <a href="#" title="Get in Touch with LinkedIn">
					        <span className="fa-stack fa-lg">
					          <i className="fa fa-circle fa-stack-2x"></i>
					          <i className="fa fa-linkedin-square fa-stack-1x fa-inverse"></i>
					        </span>
					      </a>
					    </li>
					    <li className="list-inline-item">
					      <a href="#" title="Get in Touch with Facebook">
					        <span className="fa-stack fa-lg">
					          <i className="fa fa-circle fa-stack-2x"></i>
					          <i className="fa fa-facebook-f fa-stack-1x fa-inverse"></i>
					        </span>
					      </a>
					    </li>
					    <li className="list-inline-item">
					      <a href="#" title="Get in Touch with Github">
					        <span className="fa-stack fa-lg">
					          <i className="fa fa-circle fa-stack-2x"></i>
					          <i className="fa fa-github fa-stack-1x fa-inverse"></i>
					        </span>
					      </a>
					    </li>
					</ul>
		</>
	)
}

export default Footer