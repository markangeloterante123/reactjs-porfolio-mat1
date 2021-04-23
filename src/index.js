import React from 'react'
import ReactDom from  'react-dom'
import Container from 'react-bootstrap/Container'
import { Button, Header } from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom'
//--- importing the main scss
//--- importing animation npm i react-transition-group
//--- importing tilt npm install --save react-tilt
import App from './App'

import './assets/scss/app.scss'

import 'font-awesome/css/font-awesome.min.css';  //npm install --save font-awesome
ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root'))
