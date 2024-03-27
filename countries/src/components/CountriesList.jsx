
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 52;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
    setCurrentPage(1);
  }
  const handleRegionChange = (selectedRegion) => {
    // Handle region change filter countries based on the selected region
    // and update the filteredCountries state
    if (selectedRegion === '') {
      // If no region is selected, reset to the original list of countries
      setFilteredCountries(countries);
    } else {
      // Filter countries based on the selected region
      const filtered = countries.filter((country) => 
      country.region.toLowerCase() === selectedRegion.toLowerCase())
      setFilteredCountries(filtered);
      //Resets page when region changes
      setCurrentPage(1)
    }
  };

  // Calculate the index range of countries to display on the current page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry)


  return (
    <div>
      <SearchBar onSearch={handleSearch} onRegionChange={handleRegionChange}/>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-14 md:mx-20'>
        {currentCountries.map((country) => (
          <Link to={`/country/${country.alpha2Code}`} key={country.alpha2Code}>
             <div  className='my-4 p-0 bg-white dark:bg-bgColorGray shadow w-55 rounded h-96'>
            <span className=''>
              <img className='h-44 rounded-t-md' src={country.flags.png} alt={`Flag of ${country.name}`} />
            </span>
            <div className='p-4'>
              <h2 className='text-base font-bold text-primaryGray dark:text-primaryWhite pb-4'>{country.name}</h2>
              <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm pb-2'>
                Population: <span className='font-light'>{country.population}</span>
              </p>
              <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm pb-2'>
                Region: <span className='font-light'>{country.region}</span>
              </p>
              <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm pb-4'>
                Capital: <span className='font-light'>{country.capital}</span>
              </p>
            </div>
          </div>
          </Link>
        ))}
      {/* Pagination buttons */}
      <div className='flex justify-center items-center mt-4 space-x-4 ml-4 sm:ml-0'>
        {Array.from({ length: Math.ceil(filteredCountries.length / countriesPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 sm:mx-2 px-3 py-2 border rounded text-sm ${
              currentPage === index + 1 ? 'bgColorLight dark:text-white' : 'border-primaryGray'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CountriesList;