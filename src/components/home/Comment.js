

import React, { useState, useEffect } from 'react'

import { AnimateOnChange } from 'react-animation'

const Comment = () => {
  const words = [
    'I am a React Developer',
    'also PHP, MVC CodeIgniter Developer',
    'Bootstrap, Jquery-AJAX, mySQL XAMPP/LAMPP',
    'Templates, SASS, & Github',
    'Check my Porfolio, Skills and Projects.'
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 4000);
    return (() => {
      clearInterval(interval)
    })
  })
  /* 
    EFFECTECS AVALIABLE
    fadeIn
    fadeOut
    fadeInUp
    popIn
    popOut
    bounceIn
    bounceOut
    slideIn
    slideOut
  */
  return (
    <div>
      <AnimateOnChange animationOut="popOut" animationIn="popIn" durationOut="500">{words[current]}</AnimateOnChange>
    </div>
  )
}


export default Comment