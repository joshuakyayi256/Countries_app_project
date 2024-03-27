/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CountriesList from '../components/CountriesList';
//import CountryDetails from '../components/CountryDetails';


const HomePage = () => {
  
  return (
    <div>
        <Header/>
        <CountriesList 
        /> 
    </div>
  )
}

export default HomePage