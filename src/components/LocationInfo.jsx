import React from 'react'
import '../styles1.css'

const LocationInfo = ({Dimension}) => {
  return (
    <div className='Location'>
      <h1>You are in:</h1>
      <div className='Location-container__name'>
        <h2>{Dimension?.name}</h2>
        <ul>
          <li><span>Type:</span> {Dimension?.type}</li>
          <li><span>Dimension:</span> {Dimension?.dimension}</li>
          <li><span>Population:</span> {Dimension?.residents.length}</li>
        </ul>
      </div>
    </div>
  )
}

export default LocationInfo