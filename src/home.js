import React from 'react'
// import flag1 from './components/images/flag1-iceland.svg'
import { useState, useEffect } from 'react';

export function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1//all", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    });

    const countriesData = await response.json();

    console.log(countriesData);

    setCountries(countriesData);

  }
  return (
    <div className='mt-8'>
      <div className='flex flex-row flex-wrap space-x-8 items-center'>
        {
          countries.map((country, index) => (
            <div key={index}>
              <img src={country.flags.png} alt="" className='w-52'></img>
              <h1 className='font-bold text-2xl'>{country.name.common} </h1>
              { <p>Capital : {country.capital}</p>}
              <p>Population : {country.population}</p>
              <p>Region : {country.region}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
