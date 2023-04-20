import React from 'react'

import './silder.css'

const Silder = (props) => {
  return (
    <div className="silder-container">
      {props.children}
      <div className="silder-container1"></div>
    </div>
  )
}

export default Silder
