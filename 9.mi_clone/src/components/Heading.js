import React from 'react'
import './Heading.css';

export function Heading({name}) {
  return (
    <div className="heading">
        <div className="heading1"></div>
        <div className="heading2"><h1>{name}</h1></div>
        <div className="heading3"></div>
    </div>
  )
}
