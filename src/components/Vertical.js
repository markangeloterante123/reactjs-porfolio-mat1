import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Tilt from 'react-tilt'
import Star from './Star'
import Image from './Image'

import LogoReact from '../assets/react-1.svg'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import GIT from '../assets/GIT.png'
import PHP from '../assets/php.png'
import CodeI from '../assets/code.png'
import Xampp from '../assets/xamp.png'
import AJAX from '../assets/ajax.png'
import Boots from '../assets/bootstrap4.png'

const Vertical = () => {


	return (
		<VerticalTimeline>	
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="April 2021 - present"
			    iconStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 13, 51, 1),rgba(77, 121, 255, 1))' }}
			    //icon={}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { LogoReact } /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
					<Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>
			      I started using React Js for my front-end Development and deciding to used it to be my main Framework for front-end development
			    	im still getting starting to use to it.
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2020 - present"
			    iconStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 13, 51, 1),rgba(77, 121, 255, 1))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { HTML }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star /><Star  /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>
			    	As part of my learning in web development i learn the basic of HTML.
			    </p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2008 - 2010"
			    iconStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 13, 51, 1),rgba(77, 121, 255, 1))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { CSS }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>Most of my design are templated and now 2021 i started to used CSS and SASS for designing to able used in ReactJS</p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2006 - 2008"
			    iconStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 13, 51, 1),rgba(77, 121, 255, 1))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { JS }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>
			      User Experience, Visual Design
			    </p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--education"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="April 2013"
			    iconStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 13, 51, 1),rgba(77, 121, 255, 1))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { GIT }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>
			      Strategy, Social Media
			    </p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--education"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="November 2012"
			    iconStyle={{ background:'linear-gradient( to right bottom, rgba(255, 0, 0),rgba(191, 0, 255))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { PHP }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /></h4>
			    <p>
			      Creative Direction, User Experience, Visual Design
			    </p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--education"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2002 - 2006"
			    iconStyle={{ background:'linear-gradient( to right bottom, rgba(255, 0, 0),rgba(191, 0, 255))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { CodeI }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /></h4>
			    <p>
			      Creative Direction, Visual Design
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--education"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2002 - 2006"
			    iconStyle={{ background:'linear-gradient( to right bottom, rgba(255, 0, 0),rgba(191, 0, 255))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { Xampp }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /></h4>
			    <p>
			      Creative Direction, Visual Design
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--education"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2002 - 2006"
			    iconStyle={{ background:'linear-gradient( to right bottom, rgba(255, 0, 0),rgba(191, 0, 255))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { AJAX }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star color='true' /><Star color='true' /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>
			      Creative Direction, Visual Design
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--education"
			    contentStyle={{ background: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1))', color: '#fff' }}
			    date="2002 - 2006"
			    iconStyle={{ background:'linear-gradient( to right bottom, rgba(255, 0, 0),rgba(191, 0, 255))' }}
			    //icon={<Star />}
			  >
			    <h3 className="vertical-timeline-element-title"><Image logoPic = { Boots }   /></h3>
			    <h4 className="vertical-timeline-element-subtitle"><Star /><Star /><Star /><Star /><Star /><Star color='true' /><Star color='true' />
				    <Star color='true' /><Star color='true' /><Star color='true' /></h4>
			    <p>
			      Creative Direction, Visual Design
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    iconStyle={{ background: 'linear-gradient( to right bottom, rgba(255, 0, 0),rgba(191, 0, 255))' }}
			    //icon={<Star />}
			  />
		</VerticalTimeline>
	)
}

export default Vertical