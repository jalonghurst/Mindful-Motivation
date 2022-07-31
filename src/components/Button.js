import React from 'react'

const Button = ({title, activeClass, _callback}) => {
  return (
    <button className={activeClass}>{title}</button>
  )
}

export default Button