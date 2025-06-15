import React from 'react'
import './Countries.css'

const CountryCard = ({name, flag}) => {
  return (
     <div
     className='countryCard'

    >
      <img src={flag} alt={`flag of ${name}`} className='countryFlag' loading='lazy'/>
      <h2>{name}</h2>
    </div>
  )
}

export default CountryCard