import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import './Countries.css'

const API_ENDPOINT = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setCountriesData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredCountries = countriesData.filter((country) =>
    country.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='countriesContainer'>
      <div className='inputWrapper'>
        <input
          type="text"
          placeholder="Search for countries"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='countriesWrapper'>
        {filteredCountries.map((item, index) => (
          <CountryCard
            name={item.common}
            flag={item.png}
            key={`${item.common}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
