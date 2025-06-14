import React from 'react'
import styles from  './Countries.module.css'

const CountryCard = ({name, flag, abbr}) => {
  return (
     <div
     className={styles.countryCard}

    >
      <img src={flag} alt={`flag of ${name}`} className={styles.countryFlag} loading='lazy'/>
      <h2>{name}</h2>
    </div>
  )
}

export default CountryCard