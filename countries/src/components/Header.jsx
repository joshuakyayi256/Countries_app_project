/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Moon from '../assets/moon.png';
import { ThemeContext } from '../context/ThemeContextProvider'

const Header = () => {
    const {theme, themeToggler} = useContext(ThemeContext);
  return (
    <div className='w-full flex justify-between items-center px-3.5 py-7 md:px-20 bg-white dark:bg-bgColorGray shadow'>
      <h1 className='text-primaryGray font-bold text-base dark:text-primaryWhite '>Where in the world?</h1>
      <div className='flex items-center justify-center gap-2'>
        <span onClick={themeToggler}>  
            <img className='w-5 h-5' src={Moon} alt="moon icon" />
        </span>
        <h4 className='text-primaryGray text-sm dark:text-primaryWhite font-semibold'>DarkMode</h4>
      </div>
    </div>
  )
}

export default Header