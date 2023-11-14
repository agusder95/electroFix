import React from 'react'
import "./styles.scss"
const Title = ({text, className}) => {
  return (
    <div className={`title ${className}`}>
          <p>{text}</p>
    </div>
  )
}

export default Title