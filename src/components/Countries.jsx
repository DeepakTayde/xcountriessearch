import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import styles from './Countries.module.css'

const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";



const Countries = ({searchQuery}) => {
      const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setCountriesData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);


  const filteredCountries = countriesData.filter((country)=>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
)

  return (
        
      <div
        className={styles.countriesContainer}
      >
        {filteredCountries.map((item, index)=>(
            <CountryCard name={item.name} flag={item.flag} abbr={item.abbr} key={`${item.abbr}-${item.name}-${index}`}/>
        ))}
      </div>
      
    
  )
}

export default Countries