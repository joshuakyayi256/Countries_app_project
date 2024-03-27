
/* eslint-disable react/prop-types */

import Header from '../components/Header'
import CountryDetails from './DetailsPage';

const DetailsPage = ({ selectedCountry }) => {
  return (
    <div className=' min-h-screen bg-bgColorLight dark:bg-bgColorDark'>
      <Header/>
      <CountryDetails countryDetails={selectedCountry}/>
    </div>
  )
}

export default DetailsPage