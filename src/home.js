import React from 'react'
// import flag1 from './components/images/flag1-iceland.svg'
import { useState, useEffect } from 'react';

export function Home(props) {
  
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(5);
  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // const currentRecords = countries.slice(indexOfFirstRecord,
  //   indexOfLastRecord);
  // const nPages = Math.ceil(countries.length / recordsPerPage)


  useEffect(() => {
    fetchCountries();
  }, []);

  const filterByRegion = (event) => {
    let region = event.target.value;
    console.log(`Filter by region: ${region}`);
    
    if (region === "" || region === undefined)
      setFilteredCountries(countries);
    else{
      let result = countries.filter((country) => country.region.includes (region));
      setFilteredCountries(result);
    }
  }



  const fetchCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'GET'
    });

    const countriesData = await response.json();
    

    setCountries(countriesData);
    setFilteredCountries(countriesData);

  }
  return (
    <div className='mt-8'>
      <div className='flex flex-row justify-around'>
            <div>
                <p>View Countries</p>
                <p className='mt-4'>Page 1 of 5</p>
            </div>
            <div>
                <select className='py-4 px-2' onChange={filterByRegion}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>

                </select>
            </div>
        </div>
      <div className='flex flex-row flex-wrap space-x-8 items-center'>
        {
          filteredCountries.map((country, index) => (
            <div key={index}>
              <img src={country.flags.png} alt="" className='w-52'></img>
              <h1 className='font-bold text-2xl'>{country.name.common} </h1>
              {<p>Capital : {country.capital}</p>}
              <p>Population : {country.population}</p>
              <p>Region : {country.region}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
