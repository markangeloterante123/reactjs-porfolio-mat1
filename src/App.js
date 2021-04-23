
import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Skills from './components/home/Skills'
import Project from './components/home/Project'
import Contact from './components/home/Contact'


class App extends React.Component {
	
	render() {
		return (
			<div>	
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/skills" component={Skills}/>
					<Route path="/project" component={Project}/>
					<Route path="/contact" component={Contact}/>
				</Switch>	
			</div>
		)
	}	
}

export default App